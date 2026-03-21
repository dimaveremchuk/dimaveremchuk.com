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
    const { pathGroups } = cfg.current
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

    for (let i = 0; i < count; i++) {
      let group = 0
      while (group < numGroups - 1 && i >= boundaries[group]) group++
      const angle = Math.random() * Math.PI * 2
      const spd = cfg.current.speed * (0.5 + Math.random() * 0.5)
      arr.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: Math.cos(angle) * spd,
        vy: Math.sin(angle) * spd,
        tx: 0, ty: 0,
        savedVx: 0, savedVy: 0,
        group,
      })
    }

    stateRef.current.particles = arr
    stateRef.current.groupBoundaries = boundaries
  }, [])

  const loop = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    const w = canvas.width
    const h = canvas.height
    const {
      particleCount, particleSize, speed, color, pathGroups,
      springStiffness, springDamping, scatter, gravity, logoWidth, svgViewBox,
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

          ctx.fillRect(p.x - particleSize, p.y - particleSize, particleSize * 2, particleSize * 2)
        }

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

        ctx.beginPath()
        ctx.arc(p.x, p.y, particleSize, 0, Math.PI * 2)
        ctx.fill()
      }
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
    const { scatter } = cfg.current
    for (let i = 0; i < s.particles.length; i++) {
      const p = s.particles[i]
      p.vx = p.savedVx + (Math.random() - 0.5) * scatter
      p.vy = p.savedVy + (Math.random() - 0.5) * scatter
    }
    setTimeout(() => { s.mode = "float" }, 50)
  }, [])

  // Bootstrap
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const isMobile = typeof window !== "undefined" && window.innerWidth < 768
    const count = Math.min(cfg.current.particleCount, isMobile ? 60 : 1000)
    initParticles(count, canvas.width, canvas.height)
    stateRef.current.animId = requestAnimationFrame(loop)

    return () => {
      if (stateRef.current.animId) cancelAnimationFrame(stateRef.current.animId)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // Rebuild particles when count changes
  const prevCount = useRef(config.particleCount)
  useEffect(() => {
    if (config.particleCount === prevCount.current) return
    prevCount.current = config.particleCount
    const canvas = canvasRef.current
    if (!canvas) return
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768
    const count = Math.min(config.particleCount, isMobile ? 60 : 1000)
    stateRef.current.pathPoints = null
    stateRef.current.groupPoints = null
    stateRef.current.mode = "float"
    initParticles(count, canvas.width, canvas.height)
  }, [config.particleCount, canvasRef, initParticles])

  // Invalidate path cache when density, paths, or logo size change
  useEffect(() => {
    stateRef.current.pathPoints = null
    stateRef.current.groupPoints = null
  }, [config.pathDensity, config.svgPath, config.pathGroups, config.logoWidth])

  return { onEnter, onLeave }
}

// ---------------------------------------------------------------------------
// Control Panel
// ---------------------------------------------------------------------------
function ControlPanel({ params, onChange }) {
  const [, forceRender] = useState(0)
  const hasGroups = params.pathGroups?.length > 0

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
      {slider("Count",       "particleCount",   10,   1000, 1)}
      {slider("Size",        "particleSize",    0.5,  10,  0.5)}
      {slider("Speed",       "speed",           0.1,  5,   0.1)}
      {slider("Stiffness",   "springStiffness", 0.01, 0.3, 0.005)}
      {slider("Damping",     "springDamping",   0.5,  0.99,0.01)}
      {slider("Scatter",     "scatter",         0,    5,   0.1)}
      {slider("Gravity",     "gravity",         0,    0.02, 0.001)}
      {slider("Path density","pathDensity",     20,   1000, 10)}
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
}) {
  const canvasRef = useRef(null)

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
  })

  const handleChange = useCallback((key, val) => {
    setParams(prev => ({ ...prev, [key]: val }))
  }, [])

  const { onEnter, onLeave } = useParticleEngine(canvasRef, params)

  const isClient = typeof window !== "undefined"

  return (
    <div
      style={{ position: "relative", width, height, background: backgroundColor, borderRadius: 8, overflow: "hidden" }}
      onMouseEnter={isClient ? onEnter : undefined}
      onMouseLeave={isClient ? onLeave : undefined}
    >
      {isClient && (
        <canvas
          ref={canvasRef}
          width={width}
          height={height}
          style={{ display: "block" }}
        />
      )}
      {showPanel && isClient && (
        <ControlPanel params={params} onChange={handleChange} />
      )}
    </div>
  )
}
