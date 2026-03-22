import * as React from "react"
import Layout from "../components/layout/layout"
import Header from "../components/sections/header"
import Footer from "../components/sections/footer"
import { SEO } from "../components/seo"
import { useMediaPredicate } from "react-media-hook"
import { Link } from "gatsby"
import clsx from "clsx"
import { StaticImage } from "gatsby-plugin-image"
import SplineImage from "../images/home/spline.svg"
import SplineImageLight from "../images/home/spline-light.svg"
import ParticleLogo from "../components/ParticleLogo"
import {
  wrapper,
  content,
  aboveTheFold,
  motto,
  highlightsSection,
  highlightsContent,
  project,
  projectImage,
  attributes,
  projectInfo,
  period,
  projectDescription,
  projectImageContainer,
  projectRole,
  wideProject,
  smallHeader,
  mediumHeader,
  heroImage,
  gridBackground,
  gridCell,
  cursorImage,
  headerWrapper,
  footerContent,
  arrow,
  link,
  imageSentio,
  imageCNWeb,
  imageCNMobile,
  bottomAligned,
  heroPart,
  eightyPercent,
  heroImages,
  heroImageContainer,
  bottomAlignedHero,
  darkShadow,
  lightShadow,
  mobileHidden,
  fullWidth,
} from "./styles/index.module.css"

const LEFT_CHEVRON_D = "M15.5533 27.558L25.2319 17.7894C25.8883 17.1247 25.8883 16.0496 25.2319 15.3848L15.5533 5.59889C15.2999 5.33878 15.2999 4.92838 15.5533 4.66827L19.8139 0.356216C20.073 0.0961052 20.4934 0.0961052 20.7524 0.356216L35.3654 15.3848C36.0102 16.0496 36.0102 17.1073 35.3654 17.7663L20.7524 32.8007C20.4934 33.0666 20.073 33.0666 19.8139 32.8007C19.8139 32.8007 15.8066 28.7487 15.5533 28.4886C15.2999 28.2285 15.2999 27.8181 15.5533 27.558Z"
const RIGHT_CHEVRON_D = "M0.185684 27.5824L9.80097 17.8601C10.5034 17.1549 10.5034 16.0104 9.80097 15.2994L0.185684 5.58284C-0.0618948 5.33429 -0.0618948 4.92967 0.185684 4.68112L4.48089 0.340162C4.72847 0.0858315 5.13727 0.0858315 5.3906 0.340162L19.946 15.311C20.6311 16.0162 20.6311 17.1433 19.946 17.8485L5.3906 32.8193C5.14302 33.0736 4.73423 33.0736 4.48089 32.8193L0.185684 28.4841C-0.0618948 28.2356 -0.0618948 27.831 0.185684 27.5824Z"
const J_D = "M57.4883 22.6155C57.4883 26.5368 55.0412 29.877 50.6883 31.501C49.7647 31.8432 48.0647 32.2016 45.7589 32.1093C42.453 31.9735 39.1648 30.2084 37.4883 27.4656L42.8765 24.5924C43.4118 25.3637 44.3177 26.1078 45.7059 26.3739C46.2353 26.4771 47.0118 26.4608 47.4118 26.4173C48.0765 26.3467 49.2236 26.0643 50.0706 25.2333C50.7059 24.6087 51.1942 23.9135 51.153 22.6155V1.12402H57.4765L57.4883 22.6155Z"
const I_D = "M71.4883 1.12402H64.4883V32.124H71.4883V1.12402Z"
const T_D = "M85.3793 32.0807L85.3214 7.0066L77.4883 6.95785V1.12402L99.4883 1.16736V7.0066L91.6493 7.04452L91.7014 32.124L85.3793 32.0807Z"
const E_D = "M104.488 32.124V1.12402H123.488V6.96704L110.779 6.94534L110.698 13.179L121.78 13.2061V19.0491L110.698 19.022L110.779 26.2539L123.488 26.281V32.124H104.488Z"
const R_D = "M149.488 32.1186L143.155 18.4198C146.778 17.3076 149.398 13.8409 149.403 9.76106C149.409 5.68125 146.619 1.12402 140.468 1.12402H128.488V32.124H134.526L134.73 19.0491H137.095L142.968 32.124H149.488V32.1186ZM139.776 7.07012C142.192 7.07012 143.201 8.42101 143.201 10.0703C143.201 11.47 142.458 13.0705 139.601 13.0705H134.532L134.549 7.07012H139.776Z"
const A_D = "M170.428 1.12402H162.593L153.488 32.124H159.051L161.752 22.843H161.758L162.086 21.7202H170.935L171.263 22.843H171.269L173.992 32.124H179.488L170.428 1.12402ZM163.774 15.9487L166.452 7.01484L169.242 15.9487H163.774Z"

function IndexPage() {
  const preferredTheme = useMediaPredicate('(prefers-color-scheme: dark)') ? 'dark' : 'light'

  const subtleGrey = preferredTheme === 'dark' ? 'hsl(209, 6%, 48%)' : 'hsl(209, 8%, 71%)'
  const JITERA_PATH_GROUPS = [
    { paths: [RIGHT_CHEVRON_D],                       color: "hsla(236, 100%, 51%, 1.0)", weight: 2 },
    { paths: [LEFT_CHEVRON_D],                        color: "hsla(194, 80%, 49%, 1.0)",  weight: 2 },
    { paths: [J_D, I_D, T_D, E_D, R_D, A_D],         color: subtleGrey,                  weight: 6 },
  ]

  function Project({ styleName, imageSize, path, imageDark, imageLight, imageAlt, title, subtitle, customImage }) {
    return (
      <Link to={path}>
        <div className={project}>
          <div className={clsx(projectImageContainer, styleName)}>
            { customImage ? customImage : (imageDark || imageLight) && (preferredTheme == 'dark' ?
              <img
                className={clsx(projectImage, imageSize)}
                src={imageDark}
                alt={imageAlt}
                loading="lazy"
              /> :
              <img
                className={clsx(projectImage, imageSize)}
                src={imageLight}
                alt={imageAlt}
                loading="lazy"
              />
            )}
          </div>
        <div className={projectInfo}>
          <div className={link}>
            <h3 className={mediumHeader}>{title}
            </h3>
            <span className={arrow}>
              →
            </span>
          </div>
            <p className={clsx(projectDescription, "deemphasized")}>{subtitle}</p>
        </div>
      </div>
      </ Link>
    );
  }

  // const range = (start, end, step = 1) => {
  //   let output = [];

  //   if (typeof end === 'undefined') {
  //     end = start;
  //     start = 0;
  //   }

  //   for (let i = start; i < end; i += step) {
  //     output.push(i);
  //   }

  //   return output;
  // };

  // function GridBackground({ cells }) {
  //   return (
  //     <div className={gridBackground}>
  //       {Array(cells).fill().map((_, index) => (
  //         <div 
  //           className={gridCell}
  //           key={index}
  //           ></div>
  //       ))}
  //     </div>
  //   )
  // }

  return (
    <Layout>
      <div className={wrapper}>
        <div className={aboveTheFold}>
          <div className={headerWrapper}>
            <Header details="living in Porto and currently crafting pixels at Cuddlynest" />
          </div>
          {/* <div className={heroPart}> */}
            <div className={heroImages}>
              <div className={clsx(heroImageContainer, mobileHidden)}>
                { preferredTheme == 'dark' ?
                  <img
                    className={clsx(heroImage, darkShadow)}
                    src="../../web-design-dark.png"
                    alt="Mockup of a website"
                    loading="lazy"
                  /> :
                  <img
                    className={clsx(heroImage, lightShadow)}
                    src="../../web-design-light.png"
                    alt="Mockup of a website"
                    loading="lazy"
                  />
                }
              </div>
              <div className={clsx(heroImageContainer)}>
                { preferredTheme == 'dark' ?
                  <img
                    className={clsx(heroImage, bottomAlignedHero)}
                    src="../../mobile-design-dark.png"
                    alt="Mockup of a website"
                    loading="lazy"
                  /> :
                  <img
                    className={clsx(heroImage, bottomAlignedHero)}
                    src="../../mobile-design-light.png"
                    alt="Mockup of a website"
                    loading="lazy"
                  />
                }
              </div>
            </div>
            <h1 className={motto}>I design <span className="deemphasized">robust, aesthetically pleasing</span> mobile and web apps</h1>
            {/* <GridBackground cells={24*14} /> */}
            {/* <div className={heroImage}>
              {preferredTheme == 'dark' ? <SplineImage className={cursorImage} /> : <SplineImageLight className={cursorImage} />}
              <GridBackground cells={576} />
            </div>
            <h1 className={motto}>I design <span className="deemphasized">robust, aethetically pleasing</span> apps and websites</h1> */}
          </div>
        {/* </div> */}
        <div className={highlightsSection}>
          <h2 className={clsx(smallHeader, "allCaps deemphasized")}>Select works</h2>
          <div className={highlightsContent}>
            <Project
              path="/jitera"
              title="Jitera"
              subtitle="Enterprise SaaS design — AI-powered docs and test automation"
              customImage={
                <ParticleLogo
                  width="100%"
                  height="100%"
                  logoWidth={0.85}
                  showPanel={false}
                  backgroundColor="var(--subtle-grey-color)"
                  svgViewBox="0 0 180 34"
                  pathGroups={JITERA_PATH_GROUPS}
                  particleCount={1000}
                  particleSize={1}
                  speed={4.1}
                  springStiffness={0.06}
                  springDamping={0.57}
                  scatter={0.8}
                  gravity={0.002}
                  pathDensity={730}
                  movementBehavior="drift"
                  driftRange={90}
                  driftDamping={0.46}
                  driftOpacitySpeed={0.03}
                  variableOpacity={true}
                />
              }
            />
            <Project 
              path="/easystats"
              imageDark="../../easystats.png"
              imageLight="../../easystats.png"
              imageAlt="Image of a landing page of a website selling poker analytics tools"
              title="Easy Stats website"
              subtitle="Platform for selling poker converters and analytics tools"
            />
            <Project 
              imageSize={eightyPercent}
              path="/phone-cleaner"
              imageDark="../../phone-cleaner-app.png"
              imageLight="../../phone-cleaner-app.png"
              imageAlt="Image of a Home screen of a Phone Cleaner app"
              title="Phone Cleaner"
              subtitle="App for decluttering the phone"
            />
            <Project 
              // styleName={bottomAligned}
              styleName={fullWidth}
              path="/messages"
              imageDark="../../messages-app.png"
              imageLight="../../messages-app.png"
              imageAlt="Image of iPhone and Android phone with the spash screen of Messages app"
              title="Messages app"
              subtitle="Global messaging with rented phone numbers"
            />
            <Project 
              path="/cuddlynest-property-owner"
              imageDark="../../cuddlynest-property-owner.png"
              imageLight="../../cuddlynest-property-owner.png"
              imageAlt="Property owner's dashboard page"
              title="Cuddlynest"
              subtitle="Property owner interface"
            />
            <Project 
              path="/cuddlynest-omnisearch"
              imageDark="../../cuddlynest-omnisearch.png"
              imageLight="../../cuddlynest-omnisearch.png"
              imageAlt="Image of a laptop with a types of trips and search button"
              title="Cuddlynest"
              subtitle="New omnisearch concept"
            />

          </div>
        </div>
        <div className={footerContent}>
          <Footer />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => (
  <SEO />
)
