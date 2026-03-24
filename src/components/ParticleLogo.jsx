import React, { useRef, useEffect, useState, useCallback } from "react"

// ---------------------------------------------------------------------------
// Utility: sample N points from one or more SVG path strings
// Must only be called client-side (uses document)
// ---------------------------------------------------------------------------
function sampleSvgPaths(pathDs, sampleCount, svgViewBox, canvasWidth, canvasHeight, logoWidth) {
  const ns = "http://www.w3.org/2000/svg"
  const svg = document.createElementNS(ns, "svg")
  svg.setAttribute("style", "position:absolute;visibility:hidden;pointer-events:none")
  svg.setAttribute("viewBox", svgViewBox)
  document.body.appendChild(svg)

  const [vx, vy, vw, vh] = svgViewBox.split(" ").map(Number)
  const scale = logoWidth / vw
  const logoHeight = vh * scale
  const offsetX = (canvasWidth - logoWidth) / 2
  const offsetY = (canvasHeight - logoHeight) / 2

  const paths = pathDs.map(d => {
    const path = document.createElementNS(ns, "path")
    path.setAttribute("d", d)
    svg.appendChild(path)
    return path
  })

  const lengths = paths.map(p => p.getTotalLength())
  const totalLength = lengths.reduce((a, b) => a + b, 0)
  const points = []

  for (let i = 0; i < sampleCount; i++) {
    let t = (i / sampleCount) * totalLength
    let pi = 0
    while (pi < lengths.length - 1 && t > lengths[pi]) {
      t -= lengths[pi]
      pi++
    }
    const pt = paths[pi].getPointAtLength(Math.min(t, lengths[pi]))
    points.push({
      x: (pt.x - vx) * scale + offsetX,
      y: (pt.y - vy) * scale + offsetY,
    })
  }

  document.body.removeChild(svg)
  return points
}

// ---------------------------------------------------------------------------
// Resolve logoWidth prop: fraction (< 2) → multiply by canvas width; else px
// ---------------------------------------------------------------------------
function resolveLogoWidth(logoWidthProp, canvasPixelWidth) {
  return logoWidthProp < 2 ? canvasPixelWidth * logoWidthProp : logoWidthProp
}

// ---------------------------------------------------------------------------
// Main hook: owns all animation state, runs the rAF loop
// ---------------------------------------------------------------------------
function useParticleEngine(canvasRef, config) {
  const stateRef = useRef({
    particles: [],
    mode: "float",        // "float" | "assemble" | "dissolve"
    pathPoints: null,     // single-group cache
    groupPoints: null,    // multi-group cache: Point[][]
    groupBoundaries: [],  // [end index of group 0, end index of group 1, ...]
    animId: null,
  })

  const cfg = useRef(config)
  useEffect(() => { cfg.current = config }, [config])

  const initParticles = useCallback((count, w, h) => {
    const { pathGroups, logoWidth, svgViewBox } = cfg.current
    const numGroups = pathGroups?.length || 1
    const arr = []
    const boundaries = []

    // Compute per-group particle counts using weights (default 1 each)
    const weights = pathGroups ? pathGroups.map(g => g.weight ?? 1) : [1]
    const totalWeight = weights.reduce((a, b) => a + b, 0)
    const groupCounts = []
    let assigned = 0
    for (let g = 0; g < numGroups; g++) {
      if (g === numGroups - 1) {
        groupCounts.push(count - assigned)
      } else {
        const c = Math.round(count * weights[g] / totalWeight)
        groupCounts.push(c)
        assigned += c
      }
    }

    // Build boundaries (exclusive end indices)
    let cumulative = 0
    for (let g = 0; g < numGroups; g++) {
      cumulative += groupCounts[g]
      boundaries.push(cumulative)
    }

    // Logo bounding rect for spawn positions
    const [, , vw, vh] = svgViewBox.split(" ").map(Number)
    const lh = logoWidth * (vh / vw)
    const lx = (w - logoWidth) / 2
    const ly = (h - lh) / 2

    for (let i = 0; i < count; i++) {
      let group = 0
      while (group < numGroups - 1 && i >= boundaries[group]) group++
      const angle = Math.random() * Math.PI * 2
      const spd = cfg.current.speed * (0.5 + Math.random() * 0.5)
      const px = lx + Math.random() * logoWidth
      const py = ly + Math.random() * lh
      arr.push({
        x: px,
        y: py,
        homeX: px,
        homeY: py,
        vx: Math.cos(angle) * spd,
        vy: Math.sin(angle) * spd,
        tx: 0, ty: 0,
        savedVx: 0, savedVy: 0,
        opacity: Math.random(),
        opacityDir: Math.random() < 0.5 ? 1 : -1,
        group,
      })
    }

    stateRef.current.particles = arr
    stateRef.current.groupBoundaries = boundaries
  }, [])

  const loop = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) {
      stateRef.current.animId = requestAnimationFrame(loop)
      return
    }
    const ctx = canvas.getContext("2d")
    const w = canvas.width
    const h = canvas.height
    const {
      particleCount, particleSize, speed, color, pathGroups,
      springStiffness, springDamping, scatter, gravity, logoWidth, svgViewBox,
      movementBehavior, driftRange, driftDamping, driftOpacitySpeed, variableOpacity,
    } = cfg.current
    const { particles, mode, groupBoundaries } = stateRef.current

    // Gravity field bounds — same footprint as the logo, centered on canvas
    const [, , vw, vh] = svgViewBox.split(" ").map(Number)
    const logoHeight = logoWidth * (vh / vw)
    const cx = w / 2, cy = h / 2
    const hw = logoWidth / 2, hh = logoHeight / 2

    ctx.clearRect(0, 0, w, h)

    if (pathGroups?.length) {
      // Multi-group: batch draw per group
      let gStart = 0
      for (let g = 0; g < pathGroups.length; g++) {
        const gEnd = groupBoundaries[g] ?? particles.length
        ctx.fillStyle = pathGroups[g].color

        for (let i = gStart; i < gEnd; i++) {
          const p = particles[i]
          if (!p) continue

          if (mode === "assemble") {
            const ax = (p.tx - p.x) * springStiffness
            const ay = (p.ty - p.y) * springStiffness
            p.vx = p.vx * springDamping + ax
            p.vy = p.vy * springDamping + ay
            p.x += p.vx
            p.y += p.vy
            if (variableOpacity) {
              p.opacity += p.opacityDir * driftOpacitySpeed
              if (p.opacity >= 1) { p.opacity = 1; p.opacityDir = -1 }
              else if (p.opacity <= 0) { p.opacity = 0; p.opacityDir = 1 }
            } else if (movementBehavior === "drift") {
              p.opacity = Math.min(1, p.opacity + driftOpacitySpeed * 2)
            }
          } else if (movementBehavior === "drift") {
            const spd = speed
            p.vx += (Math.random() - 0.5) * 0.04 * spd
            p.vy += (Math.random() - 0.5) * 0.04 * spd
            const dx = p.homeX - p.x
            const dy = p.homeY - p.y
            const dist = Math.sqrt(dx * dx + dy * dy)
            p.vx += dx * 0.006
            p.vy += dy * 0.006
            if (dist > driftRange) {
              const excess = dist - driftRange
              p.vx += (dx / dist) * excess * 0.15
              p.vy += (dy / dist) * excess * 0.15
            }
            p.vx *= driftDamping
            p.vy *= driftDamping
            p.x += p.vx
            p.y += p.vy
            p.opacity += p.opacityDir * driftOpacitySpeed
            if (p.opacity >= 1) { p.opacity = 1; p.opacityDir = -1 }
            else if (p.opacity <= 0) { p.opacity = 0; p.opacityDir = 1 }
          } else {
            const spd = speed
            p.vx += (Math.random() - 0.5) * 0.04 * spd
            p.vy += (Math.random() - 0.5) * 0.04 * spd
            if (p.x < cx - hw || p.x > cx + hw) p.vx += (cx - p.x) * gravity
            if (p.y < cy - hh || p.y > cy + hh) p.vy += (cy - p.y) * gravity
            const maxV = spd * 2.5
            p.vx = Math.max(-maxV, Math.min(maxV, p.vx))
            p.vy = Math.max(-maxV, Math.min(maxV, p.vy))
            p.x += p.vx
            p.y += p.vy
          }

          if (movementBehavior === "drift" || variableOpacity) ctx.globalAlpha = p.opacity
          ctx.fillRect(p.x - particleSize, p.y - particleSize, particleSize * 2, particleSize * 2)
        }
        if (movementBehavior === "drift" || variableOpacity) ctx.globalAlpha = 1

        gStart = gEnd
      }
    } else {
      // Single-group legacy path
      ctx.fillStyle = color

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        if (mode === "assemble") {
          const ax = (p.tx - p.x) * springStiffness
          const ay = (p.ty - p.y) * springStiffness
          p.vx = p.vx * springDamping + ax
          p.vy = p.vy * springDamping + ay
          p.x += p.vx
          p.y += p.vy
          if (movementBehavior === "drift") {
            p.opacity = Math.min(1, p.opacity + driftOpacitySpeed * 2)
          }
        } else if (movementBehavior === "drift") {
          const spd = speed
          p.vx += (Math.random() - 0.5) * 0.04 * spd
          p.vy += (Math.random() - 0.5) * 0.04 * spd
          const dx = p.homeX - p.x
          const dy = p.homeY - p.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          p.vx += dx * 0.006
          p.vy += dy * 0.006
          if (dist > driftRange) {
            const excess = dist - driftRange
            p.vx += (dx / dist) * excess * 0.15
            p.vy += (dy / dist) * excess * 0.15
          }
          p.vx *= driftDamping
          p.vy *= driftDamping
          p.x += p.vx
          p.y += p.vy
          p.opacity += p.opacityDir * driftOpacitySpeed
          if (p.opacity >= 1) { p.opacity = 1; p.opacityDir = -1 }
          else if (p.opacity <= 0) { p.opacity = 0; p.opacityDir = 1 }
        } else {
          const spd = speed
          p.vx += (Math.random() - 0.5) * 0.04 * spd
          p.vy += (Math.random() - 0.5) * 0.04 * spd
          const maxV = spd * 2.5
          p.vx = Math.max(-maxV, Math.min(maxV, p.vx))
          p.vy = Math.max(-maxV, Math.min(maxV, p.vy))
          p.x += p.vx
          p.y += p.vy
          // Bounce off edges
          if (p.x < particleSize)     { p.x = particleSize;     p.vx =  Math.abs(p.vx) }
          if (p.x > w - particleSize) { p.x = w - particleSize; p.vx = -Math.abs(p.vx) }
          if (p.y < particleSize)     { p.y = particleSize;      p.vy =  Math.abs(p.vy) }
          if (p.y > h - particleSize) { p.y = h - particleSize; p.vy = -Math.abs(p.vy) }
        }

        if (movementBehavior === "drift" || variableOpacity) ctx.globalAlpha = p.opacity
        ctx.beginPath()
        ctx.arc(p.x, p.y, particleSize, 0, Math.PI * 2)
        ctx.fill()
      }
      if (movementBehavior === "drift" || variableOpacity) ctx.globalAlpha = 1
    }

    stateRef.current.animId = requestAnimationFrame(loop)
  }, [canvasRef])

  const onEnter = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const s = stateRef.current
    const { pathGroups, svgPath, svgViewBox, pathDensity, logoWidth } = cfg.current

    if (pathGroups?.length) {
      // Multi-group: sample each group's paths once and cache
      if (!s.groupPoints) {
        s.groupPoints = pathGroups.map(g =>
          sampleSvgPaths(g.paths, pathDensity, svgViewBox, canvas.width, canvas.height, logoWidth)
        )
      }

      // Pre-shuffle per group, then assign round-robin within each group
      const shuffled = s.groupPoints.map(pts => [...pts].sort(() => Math.random() - 0.5))
      const idx = new Array(pathGroups.length).fill(0)

      for (let i = 0; i < s.particles.length; i++) {
        const p = s.particles[i]
        const g = p.group
        const pts = shuffled[g]
        const t = pts[idx[g] % pts.length]
        idx[g]++
        p.tx = t.x
        p.ty = t.y
        p.savedVx = p.vx
        p.savedVy = p.vy
      }
    } else {
      // Single-group legacy
      if (!s.pathPoints) {
        s.pathPoints = sampleSvgPaths([svgPath], pathDensity, svgViewBox, canvas.width, canvas.height, logoWidth)
      }
      const shuffled = [...s.pathPoints].sort(() => Math.random() - 0.5)
      for (let i = 0; i < s.particles.length; i++) {
        const p = s.particles[i]
        const t = shuffled[i % shuffled.length]
        p.tx = t.x
        p.ty = t.y
        p.savedVx = p.vx
        p.savedVy = p.vy
      }
    }

    s.mode = "assemble"
  }, [canvasRef])

  const onLeave = useCallback(() => {
    const s = stateRef.current
    s.mode = "dissolve"
    const { scatter, movementBehavior } = cfg.current
    for (let i = 0; i < s.particles.length; i++) {
      const p = s.particles[i]
      p.vx = p.savedVx + (Math.random() - 0.5) * scatter
      p.vy = p.savedVy + (Math.random() - 0.5) * scatter
      if (movementBehavior === "drift") {
        p.opacity = Math.random()
        p.opacityDir = Math.random() < 0.5 ? 1 : -1
      }
    }
    setTimeout(() => { s.mode = "float" }, 50)
  }, [])

  // Bootstrap: start the rAF loop only (particle init happens in canvas-size effect)
  useEffect(() => {
    stateRef.current.animId = requestAnimationFrame(loop)
    return () => {
      if (stateRef.current.animId) cancelAnimationFrame(stateRef.current.animId)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // Re-initialize particles when canvas pixel dimensions change
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !canvas.width || !canvas.height) return
    stateRef.current.pathPoints = null
    stateRef.current.groupPoints = null
    stateRef.current.mode = "float"
    const count = Math.min(cfg.current.particleCount, 1000)
    initParticles(count, canvas.width, canvas.height)
  }, [config._canvasW, config._canvasH, canvasRef, initParticles])

  // Rebuild particles when count changes
  const prevCount = useRef(config.particleCount)
  useEffect(() => {
    if (config.particleCount === prevCount.current) return
    prevCount.current = config.particleCount
    const canvas = canvasRef.current
    if (!canvas) return
    const count = Math.min(config.particleCount, 1000)
    stateRef.current.pathPoints = null
    stateRef.current.groupPoints = null
    stateRef.current.mode = "float"
    initParticles(count, canvas.width, canvas.height)
  }, [config.particleCount, canvasRef, initParticles])

  // Invalidate path cache when density, paths, logo size, or canvas size change
  useEffect(() => {
    stateRef.current.pathPoints = null
    stateRef.current.groupPoints = null
  }, [config.pathDensity, config.svgPath, config.pathGroups, config.logoWidth, config._canvasW, config._canvasH])

  // Re-initialize particles when movementBehavior changes (new home positions)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !canvas.width || !canvas.height) return
    stateRef.current.pathPoints = null
    stateRef.current.groupPoints = null
    stateRef.current.mode = "float"
    initParticles(Math.min(cfg.current.particleCount, 1000), canvas.width, canvas.height)
  }, [config.movementBehavior, canvasRef, initParticles])

  // Auto-assemble: when canvas is ready and autoAssemble=true, schedule assembly
  useEffect(() => {
    if (!config.autoAssemble || !config._canvasW || !config._canvasH) return
    const timer = setTimeout(() => { onEnter() }, 400)
    return () => clearTimeout(timer)
  }, [config._canvasW, config._canvasH, config.autoAssemble, onEnter])

  return { onEnter, onLeave }
}

// ---------------------------------------------------------------------------
// Control Panel
// ---------------------------------------------------------------------------
function ControlPanel({ params, onChange }) {
  const [, forceRender] = useState(0)
  const hasGroups = params.pathGroups?.length > 0
  const isDrift = params.movementBehavior === "drift"

  const slider = (label, key, min, max, step) => {
    const val = params[key]
    return (
      <label key={key} style={styles.row}>
        <span style={styles.label}>{label}</span>
        <input
          type="range"
          min={min} max={max} step={step}
          value={val}
          onChange={e => {
            onChange(key, step % 1 === 0 ? parseInt(e.target.value) : parseFloat(e.target.value))
            forceRender(n => n + 1)
          }}
          style={styles.slider}
        />
        <span style={styles.value}>{typeof val === "number" && val % 1 !== 0 ? val.toFixed(step < 0.01 ? 3 : 2) : val}</span>
      </label>
    )
  }

  return (
    <div style={styles.panel}>
      <div style={styles.panelTitle}>Particle Config</div>

      <div style={styles.row}>
        <span style={styles.label}>Mode</span>
        <div style={styles.segmented}>
          {["free", "drift"].map(m => (
            <button
              key={m}
              style={{ ...styles.segBtn, ...(params.movementBehavior === m ? styles.segBtnActive : {}) }}
              onClick={() => { onChange("movementBehavior", m); forceRender(n => n + 1) }}
            >{m}</button>
          ))}
        </div>
      </div>

      {slider("Count",       "particleCount",   10,   1000, 1)}
      {slider("Size",        "particleSize",    0.5,  10,  0.5)}
      {slider("Speed",       "speed",           0.1,  5,   0.1)}
      {slider("Stiffness",   "springStiffness", 0.01, 0.3, 0.005)}
      {slider("Damping",     "springDamping",   0.5,  0.99,0.01)}
      {slider("Scatter",     "scatter",         0,    5,   0.1)}
      {slider("Gravity",     "gravity",         0,    0.02, 0.001)}
      {slider("Path density","pathDensity",     20,   1000, 10)}

      {isDrift && (
        <>
          <div style={styles.divider} />
          {slider("Drift range",   "driftRange",        5,    200,  5)}
          {slider("Drift damping", "driftDamping",      0.80, 0.99, 0.01)}
          {slider("Opacity speed", "driftOpacitySpeed", 0.001,0.05, 0.001)}
        </>
      )}

      <label style={styles.row}>
        <span style={styles.label}>Var. opacity</span>
        <input
          type="checkbox"
          checked={params.variableOpacity}
          onChange={e => { onChange("variableOpacity", e.target.checked); forceRender(n => n + 1) }}
          style={{ accentColor: "#7c7cff", cursor: "pointer" }}
        />
      </label>
      {!hasGroups && (
        <label style={styles.row}>
          <span style={styles.label}>Color</span>
          <input
            type="color"
            value={params.color}
            onChange={e => { onChange("color", e.target.value); forceRender(n => n + 1) }}
            style={{ ...styles.slider, height: 28, padding: 0, cursor: "pointer" }}
          />
        </label>
      )}
    </div>
  )
}

const styles = {
  panel: {
    position: "absolute",
    bottom: 12,
    right: 12,
    background: "rgba(10,10,10,0.82)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 8,
    padding: "10px 14px",
    minWidth: 240,
    fontFamily: "monospace",
    fontSize: 11,
    color: "#ccc",
    userSelect: "none",
    backdropFilter: "blur(4px)",
    zIndex: 10,
  },
  panelTitle: {
    fontWeight: "bold",
    marginBottom: 8,
    fontSize: 12,
    color: "#fff",
    letterSpacing: "0.05em",
  },
  row: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    marginBottom: 5,
    width: "100%",
  },
  label: {
    width: 88,
    flexShrink: 0,
    color: "#aaa",
  },
  slider: {
    flex: 1,
    accentColor: "#7c7cff",
    cursor: "pointer",
  },
  value: {
    width: 38,
    textAlign: "right",
    color: "#eee",
  },
  segmented: {
    display: "flex",
    flex: 1,
    gap: 3,
  },
  segBtn: {
    flex: 1,
    padding: "2px 0",
    border: "1px solid rgba(255,255,255,0.2)",
    borderRadius: 4,
    background: "transparent",
    color: "#aaa",
    cursor: "pointer",
    fontSize: 10,
  },
  segBtnActive: {
    background: "rgba(124,124,255,0.35)",
    color: "#fff",
    borderColor: "#7c7cff",
  },
  divider: {
    borderTop: "1px solid rgba(255,255,255,0.08)",
    margin: "6px 0",
  },
}

// ---------------------------------------------------------------------------
// ParticleLogo — main export
// ---------------------------------------------------------------------------
export default function ParticleLogo({
  svgPath = "M 50 10 L 90 90 L 10 90 Z",
  svgViewBox = "0 0 100 100",
  pathGroups = null,
  width = 400,
  height = 300,
  logoWidth = 300,
  particleCount = 120,
  particleSize = 3,
  speed = 1,
  color = "#ffffff",
  springStiffness = 0.08,
  springDamping = 0.75,
  pathDensity = 200,
  scatter = 1.5,
  gravity = 0.002,
  showPanel = true,
  backgroundColor = "var(--subtle-grey-color)",
  autoAssemble = false,
  movementBehavior = "free",
  driftRange = 40,
  driftDamping = 0.92,
  driftOpacitySpeed = 0.006,
  variableOpacity = false,
}) {
  const canvasRef = useRef(null)
  const outerDivRef = useRef(null)
  const [canvasSize, setCanvasSize] = useState({ w: 0, h: 0 })

  // Measure the outer div and keep canvas dimensions in sync
  useEffect(() => {
    const el = outerDivRef.current
    if (!el) return
    const ro = new ResizeObserver(entries => {
      const { width: w, height: h } = entries[0].contentRect
      setCanvasSize({ w: Math.round(w), h: Math.round(h) })
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const [params, setParams] = useState({
    svgPath,
    svgViewBox,
    pathGroups,
    logoWidth,
    particleCount,
    particleSize,
    speed,
    color,
    springStiffness,
    springDamping,
    pathDensity,
    scatter,
    gravity,
    movementBehavior,
    driftRange,
    driftDamping,
    driftOpacitySpeed,
    variableOpacity,
  })

  const handleChange = useCallback((key, val) => {
    setParams(prev => ({ ...prev, [key]: val }))
  }, [])

  const resolvedLogoWidth = resolveLogoWidth(logoWidth, canvasSize.w)
  const engineConfig = {
    ...params,
    logoWidth: resolvedLogoWidth,
    _canvasW: canvasSize.w,
    _canvasH: canvasSize.h,
    autoAssemble,
  }

  const { onEnter, onLeave } = useParticleEngine(canvasRef, engineConfig)

  const isClient = typeof window !== "undefined"

  // Compute logo bounding rectangle (same math as sampleSvgPaths)
  const logoRect = canvasSize.w > 0 ? (() => {
    const [, , vw, vh] = svgViewBox.split(" ").map(Number)
    const scale = resolvedLogoWidth / vw
    const logoH = vh * scale
    return {
      x: (canvasSize.w - resolvedLogoWidth) / 2,
      y: (canvasSize.h - logoH) / 2,
      w: resolvedLogoWidth,
      h: logoH,
    }
  })() : null

  const isOverLogoRef = useRef(false)

  const handleMouseMove = useCallback((e) => {
    if (!logoRect) return
    const rect = outerDivRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const isOver = x >= logoRect.x && x <= logoRect.x + logoRect.w
                && y >= logoRect.y && y <= logoRect.y + logoRect.h
    if (isOver && !isOverLogoRef.current) {
      onEnter()
      isOverLogoRef.current = true
    } else if (!isOver && isOverLogoRef.current) {
      onLeave()
      isOverLogoRef.current = false
    }
  }, [logoRect, onEnter, onLeave])

  const handleMouseLeave = useCallback(() => {
    if (isOverLogoRef.current) {
      onLeave()
      isOverLogoRef.current = false
    }
  }, [onLeave])

  return (
    <div
      ref={outerDivRef}
      style={{ position: "relative", width, height, background: backgroundColor, borderRadius: 8, overflow: "hidden" }}
      onMouseMove={!autoAssemble && isClient ? handleMouseMove : undefined}
      onMouseLeave={!autoAssemble && isClient ? handleMouseLeave : undefined}
    >
      {isClient && canvasSize.w > 0 && (
        <canvas
          ref={canvasRef}
          width={canvasSize.w}
          height={canvasSize.h}
          style={{ display: "block", width: "100%", height: "100%" }}
        />
      )}
      {showPanel && isClient && (
        <ControlPanel params={params} onChange={handleChange} />
      )}
    </div>
  )
}
