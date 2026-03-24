import React, { useState } from "react"
import Layout from "../components/layout/layout"
import Header from "../components/sections/header"
import Footer from "../components/sections/footer"
import ParticleLogo from "../components/ParticleLogo"
import { useMediaPredicate } from "react-media-hook"
import clsx from "clsx"
import {
    aboveTheFold,
    aboveTheFoldImage,
    headerWrapper,
    wrapper,
    content,
    externalContainer,
    internalContainer,
    intro,
    introSummary,
    period,
    roles,
    introContent,
    projectName,
    headerWithParagraph,
    headerTwo,
    paragraph,
    highlights,
    highlight,
    leftAligned,
    rightAligned,
    images,
    imageWide,
    image,
    reloadButton,
    prototypeContainer,
    prototypeDesktopOnly,
    mobileOnly,
    prototypeDesktopMessage,
    prototypeDesktopMessageIcon,
} from "./styles/case.module.css"

// Path data extracted from src/svg/jitera-logo.svg
const LEFT_CHEVRON_D = "M15.5533 27.558L25.2319 17.7894C25.8883 17.1247 25.8883 16.0496 25.2319 15.3848L15.5533 5.59889C15.2999 5.33878 15.2999 4.92838 15.5533 4.66827L19.8139 0.356216C20.073 0.0961052 20.4934 0.0961052 20.7524 0.356216L35.3654 15.3848C36.0102 16.0496 36.0102 17.1073 35.3654 17.7663L20.7524 32.8007C20.4934 33.0666 20.073 33.0666 19.8139 32.8007C19.8139 32.8007 15.8066 28.7487 15.5533 28.4886C15.2999 28.2285 15.2999 27.8181 15.5533 27.558Z"
const RIGHT_CHEVRON_D = "M0.185684 27.5824L9.80097 17.8601C10.5034 17.1549 10.5034 16.0104 9.80097 15.2994L0.185684 5.58284C-0.0618948 5.33429 -0.0618948 4.92967 0.185684 4.68112L4.48089 0.340162C4.72847 0.0858315 5.13727 0.0858315 5.3906 0.340162L19.946 15.311C20.6311 16.0162 20.6311 17.1433 19.946 17.8485L5.3906 32.8193C5.14302 33.0736 4.73423 33.0736 4.48089 32.8193L0.185684 28.4841C-0.0618948 28.2356 -0.0618948 27.831 0.185684 27.5824Z"
const J_D = "M57.4883 22.6155C57.4883 26.5368 55.0412 29.877 50.6883 31.501C49.7647 31.8432 48.0647 32.2016 45.7589 32.1093C42.453 31.9735 39.1648 30.2084 37.4883 27.4656L42.8765 24.5924C43.4118 25.3637 44.3177 26.1078 45.7059 26.3739C46.2353 26.4771 47.0118 26.4608 47.4118 26.4173C48.0765 26.3467 49.2236 26.0643 50.0706 25.2333C50.7059 24.6087 51.1942 23.9135 51.153 22.6155V1.12402H57.4765L57.4883 22.6155Z"
const I_D = "M71.4883 1.12402H64.4883V32.124H71.4883V1.12402Z"
const T_D = "M85.3793 32.0807L85.3214 7.0066L77.4883 6.95785V1.12402L99.4883 1.16736V7.0066L91.6493 7.04452L91.7014 32.124L85.3793 32.0807Z"
const E_D = "M104.488 32.124V1.12402H123.488V6.96704L110.779 6.94534L110.698 13.179L121.78 13.2061V19.0491L110.698 19.022L110.779 26.2539L123.488 26.281V32.124H104.488Z"
const R_D = "M149.488 32.1186L143.155 18.4198C146.778 17.3076 149.398 13.8409 149.403 9.76106C149.409 5.68125 146.619 1.12402 140.468 1.12402H128.488V32.124H134.526L134.73 19.0491H137.095L142.968 32.124H149.488V32.1186ZM139.776 7.07012C142.192 7.07012 143.201 8.42101 143.201 10.0703C143.201 11.47 142.458 13.0705 139.601 13.0705H134.532L134.549 7.07012H139.776Z"
const A_D = "M170.428 1.12402H162.593L153.488 32.124H159.051L161.752 22.843H161.758L162.086 21.7202H170.935L171.263 22.843H171.269L173.992 32.124H179.488L170.428 1.12402ZM163.774 15.9487L166.452 7.01484L169.242 15.9487H163.774Z"

const DesktopOnlyMessage = () => (
    <div className={clsx(mobileOnly, prototypeDesktopMessage)}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className={prototypeDesktopMessageIcon}>
            <path d="M30 22H21V30H11V22H2V2H30V22ZM14 27H18V22H14V27ZM5 19H27V5H5V19Z" fill="currentColor"/>
        </svg>
        <p>This prototype is designed for desktop — it won't display well on smaller screens.</p>
    </div>
)

const ReloadIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" style={{display: 'block'}}>
        <path d="M2.75 6.25636C3.57367 3.92597 5.79615 2.25636 8.40859 2.25636C11.7223 2.25636 14.4086 4.94265 14.4086 8.25636C14.4086 11.5701 11.7223 14.2564 8.40859 14.2564C6.63159 14.2564 5.03502 13.4839 3.93638 12.2564C3.74473 12.0422 3.56824 11.8143 3.40859 11.5742M2.75 6.25636H8.40859M2.75 6.25636V0.257812" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
)

export default function Jitera() {
    const [protoKeys, setProtoKeys] = useState([0, 0, 0])
    const reload = (i) => setProtoKeys(k => k.map((v, idx) => idx === i ? v + 1 : v))

    const preferredTheme = useMediaPredicate('(prefers-color-scheme: dark)') ? 'dark' : 'light'
    const isDesktop = useMediaPredicate('(min-width: 600px)')
    const subtleGrey = preferredTheme === 'dark' ? 'hsl(209, 6%, 48%)' : 'hsl(209, 8%, 71%)'
    const JITERA_PATH_GROUPS = [
        { paths: [RIGHT_CHEVRON_D],                       color: "hsla(236, 100%, 51%, 1.0)", weight: 2 },
        { paths: [LEFT_CHEVRON_D],                        color: "hsla(194, 80%, 49%, 1.0)",  weight: 2 },
        { paths: [J_D, I_D, T_D, E_D, R_D, A_D],         color: subtleGrey,                  weight: 6 },
    ]

    return (
        <Layout>
            <div className={aboveTheFold}>
                <div className={headerWrapper}>
                    <Header />
                </div>
                <ParticleLogo
                    className={aboveTheFoldImage}
                    width="100%"
                    height="100%"
                    logoWidth={isDesktop ? 0.45 : 0.9}
                    showPanel={false}
                    backgroundColor="var(--subtle-grey-color)"
                    svgViewBox="0 0 180 34"
                    pathGroups={JITERA_PATH_GROUPS}
                    particleCount={1_000}
                    particleSize={1}
                    speed={2.4}
                    springStiffness={0.04}
                    springDamping={0.56}
                    pathDensity={730}
                    autoAssemble={true}
                    variableOpacity={true}
                />
            </div>
            <div className={wrapper}>
                <div className={clsx(content, externalContainer)}>
                    <section className={intro}>
                        <div className={clsx(introSummary, "allCaps")}>
                            <div className={period}>
                                2024–2025
                            </div>
                            <ul className={roles}>
                                <li>UI/UX</li>
                                <li>Product</li>
                                <li>Design Systems</li>
                                <li>Prototyping</li>
                            </ul>
                        </div>
                        <div className={introContent}>
                            <h1 className={projectName}>
                                Jitera <br />
                                <span className="deemphasized">
                                    enterprise SaaS design
                                </span>
                            </h1>
                            <p>Jitera is an AI-powered documentation and test automation platform for enterprise teams. I joined as the sole designer, working with 3 product owners, an engineering manager, and 15+ engineers.</p>
                            <p>Due to NDA, I can't share screenshots of the shipped product. Instead, I'll show the React prototypes I built to communicate design intent to the team — which is where the interesting work happened anyway.</p>
                        </div>
                    </section>
                    <section className={externalContainer}>
                        <div className={internalContainer}>
                            <div className={headerWithParagraph}>
                                <h2 className={headerTwo}>
                                    Design system
                                </h2>
                                <div className={paragraph}>
                                    <p>No design system existed when I arrived. I built one from scratch.</p>
                                    <p>Dark theme first. I extracted tokens for color, typography, spacing, and built out components—buttons, forms, dropdowns, tables, and everything in between. The system lived in Figma, but I didn't stop there. Engineers implemented most components as a React package embedded in the product's front-end. I added some components from scratch, and reviewed and tweaked nearly everything else at the code level to make sure the implementation matched the design. Not just redlines and comments, but actual PRs.</p>
                                    <p>
                                        When the team needed to move faster during a critical PMF push, we decided to replace the proprietary system with shadcn. I made the call alongside engineering. We weren't going to maintain a custom system when speed mattered more. I then augmented shadcn with product-specific components that weren't covered out of the box.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className={externalContainer}>
                        <div className={internalContainer}>
                            <div className={headerWithParagraph}>
                                <h2 className={headerTwo}>
                                    Prototypes
                                </h2>
                                <div className={paragraph}>
                                    <p>Static Figma files couldn't communicate the interactions I cared about. I built functional React prototypes for the engineering team — not to hand off, but to make the intended feel undeniable.</p>
                                </div>
                            </div>
                        </div>
                        <div className={internalContainer}>
                            <div className={leftAligned}>
                                <p className={highlight}>
                                    AI test generation. <span className="deemphasized">The problem: how do you show an AI agent generating tests in real time without the interface feeling broken? Users needed to understand the process was working, not frozen. I designed the interaction around a prompt-to-output flow with streaming feedback — so users could watch tests appear as the agent worked, step by step.</span>
                                </p>
                            </div>
                            <div className={prototypeContainer}>
                                <DesktopOnlyMessage />
                                <div className={clsx(images, prototypeDesktopOnly)}>
                                    <div
                                        className={clsx(imageWide, image)}
                                        style={{ aspectRatio: "16/9", minHeight: "360px", overflow: "hidden" }}
                                    >
                                        <iframe
                                            key={protoKeys[0]}
                                            src="https://ai-chat-prototype.vercel.app/"
                                            title="AI test generation prototype"
                                            style={{ width: "100%", height: "100%", border: "none", display: "block" }}
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                                <button className={clsx(reloadButton, prototypeDesktopOnly)} onClick={() => reload(0)} aria-label="Reload prototype">
                                    <ReloadIcon />
                                    Reload prototype
                                </button>
                                <div className={clsx(paragraph, prototypeDesktopOnly)}>
                                    <div>
                                        Try it: <span className="deemphasized">Click the sparkles icon in the top right corner to open the agent panel. Type anything into the prompt — the content doesn't matter. The prototype shows how the interface keeps users informed throughout generation: what's being worked on, what's already done, and that something is always happening.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={internalContainer}>
                            <div className={rightAligned}>
                                <p className={highlight}>
                                    Manual test management. <span className="deemphasized">Complex test suites need power-user interactions: reordering steps, creating new cases quickly, navigating with keyboard shortcuts. None of this is possible to spec in static screens. The prototype shows drag-to-reorder, keyboard shortcuts, and the transitions between states. It was built specifically so developers could feel the intended rhythm before implementing it.</span>
                                </p>
                            </div>
                            <div className={prototypeContainer}>
                                <DesktopOnlyMessage />
                                <div className={clsx(images, prototypeDesktopOnly)}>
                                    <div
                                        className={clsx(imageWide, image)}
                                        style={{ aspectRatio: "16/9", minHeight: "360px", overflow: "hidden" }}
                                    >
                                        <iframe
                                            key={protoKeys[1]}
                                            src="https://tests-prototype.vercel.app/"
                                            title="Manual test management prototype"
                                            style={{ width: "100%", height: "100%", border: "none", display: "block" }}
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                                <button className={clsx(reloadButton, prototypeDesktopOnly)} onClick={() => reload(1)} aria-label="Reload prototype">
                                    <ReloadIcon />
                                    Reload prototype
                                </button>
                                <div className={clsx(paragraph, prototypeDesktopOnly)}>
                                    <div>
                                        Try it: <span className="deemphasized">Almost everything has a keyboard shortcut — hover over any button to see it. When creating steps, you can save and move to the next one without touching the mouse. Once you have multiple steps in a test case, grab the drag handle on the left to reorder them. The goal was to make building a large test suite feel fast, not tedious.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={internalContainer}>
                            <div className={leftAligned}>
                                <p className={highlight}>
                                    Database generation. <span className="deemphasized">Background processes are easy to get wrong. Show nothing and users assume something broke. Show too much and it becomes noise. This prototype focuses on progress feedback and micro-animations — each completed step gets a small moment of acknowledgment, then the UI moves on.</span>
                                </p>
                            </div>
                            <div className={prototypeContainer}>
                                <DesktopOnlyMessage />
                                <div className={clsx(images, prototypeDesktopOnly)}>
                                    <div
                                        className={clsx(imageWide, image)}
                                        style={{ aspectRatio: "16/9", minHeight: "360px", overflow: "hidden" }}
                                    >
                                        <iframe
                                            key={protoKeys[2]}
                                            src="https://generation-progress-prototype.vercel.app/"
                                            title="Database generation prototype"
                                            style={{ width: "100%", height: "100%", border: "none", display: "block" }}
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                                <button className={clsx(reloadButton, prototypeDesktopOnly)} onClick={() => reload(2)} aria-label="Reload prototype">
                                    <ReloadIcon />
                                    Reload prototype
                                </button>
                            </div>
                        </div>
                    </section>
                    <section className={externalContainer}>
                        <div className={internalContainer}>
                            <div className={headerWithParagraph}>
                                <h2 className={headerTwo}>
                                    Beyond the prototypes
                                </h2>
                                <div className={paragraph}>
                                    <p>The product was more complex than what's shown here. I designed settings interfaces for multiple user roles — super admins, admins, and regular users — each with different permissions and views of the same underlying data. Getting that hierarchy right without making the interface feel different for each role was one of the more interesting challenges.</p>
                                    <p>Documentation management was another core area. The main challenge was making editing feel lightweight in a product that was otherwise dense and technical. I also designed import and export flows covering multiple file formats — the kind of unglamorous but frequently used feature that's easy to get wrong.</p>
                                    <p>Agent and generation flows appeared throughout the product, not just in test cases. Similar to the prototype above — designing for AI processes that take time, keeping users informed without making them anxious about whether something is working.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div className={wrapper}>
                <Footer />
            </div>
        </Layout>
    )
}
