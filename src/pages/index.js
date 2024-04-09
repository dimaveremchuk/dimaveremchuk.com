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

  function GridBackground({ cells }) {
    return (
      <div className={gridBackground}>
        {Array(cells).fill().map((_, index) => (
          <div 
            className={gridCell}
            key={index}
            ></div>
        ))}
      </div>
    )
  }

  return (
    <Layout>
      <div className={wrapper}>
        <div className={aboveTheFold}>
          <div className={headerWrapper}>
            <Header details="living in Porto and currently designing mobile apps at Sentio" />
          </div>
          <div className={heroPart}>
            <h1 className={motto}>I design <span className="deemphasized">robust, aethetically pleasing</span> apps and websites</h1>
            {/* <GridBackground cells={24*14} /> */}
            {/* <div className={heroImage}>
              {preferredTheme == 'dark' ? <SplineImage className={cursorImage} /> : <SplineImageLight className={cursorImage} />}
              <GridBackground cells={576} />
            </div>
            <h1 className={motto}>I design <span className="deemphasized">robust, aethetically pleasing</span> apps and websites</h1> */}
          </div>
        </div>
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
              path="/sentio"
              imageDark="../../sentio-mobile-apps-dark.png"
              imageLight="../../sentio-mobile-apps.png"
              imageAlt="Image of a phone with multiple apps and a widget on it's screen"
              title="Sentio mobile apps"
              subtitle="Various simple iOS and Android apps"
            />
            <Project 
              path="/cuddlynest-web-platform"
              imageDark="../../cuddlynest-web-app-dark.png"
              imageLight="../../cuddlynest-web-app.png"
              imageAlt="Image of a laptop with a types of trips and search button"
              title="Cuddlynest web platform"
              subtitle="Travel accommodation booking platform"
            />
            <Project 
              styleName={bottomAligned}
              path="/cuddlynest-mobile"
              imageDark="../../cuddlynest-mobile-app-dark.png"
              imageLight="../../cuddlynest-mobile-app.png"
              imageAlt="Image of an app icon and the top part of the phone with search prompt"
              title="Cuddlynest mobile app"
              subtitle="Cross-platform mobile accommodation booking app"
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
