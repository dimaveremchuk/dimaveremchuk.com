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

function IndexPage() {
  const preferredTheme = useMediaPredicate('(prefers-color-scheme: dark)') ? 'dark' : 'light'

  function Project({ styleName, imageSize, path, imageDark, imageLight, imageAlt, title, subtitle }) {
    return (
      <Link to={path}>
        <div className={project}>
          <div className={clsx(projectImageContainer, styleName)}>
            { preferredTheme == 'dark' ?
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
            }
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
            <Header details="living in Porto and currently designing mobile apps at Sentio" />
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
