import * as React from "react"
import Layout from "../components/layout/layout"
import Header from "../components/sections/header"
import Footer from "../components/sections/footer"
import { SEO } from "../components/seo"
import { useMediaPredicate } from "react-media-hook"
import { Link } from "gatsby"
import clsx from "clsx"
import { StaticImage } from "gatsby-plugin-image"
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
} from "./styles/index.module.css"

function IndexPage() {
  const preferredTheme = useMediaPredicate('(prefers-color-scheme: dark)') ? 'dark' : 'light'

  return (
    <Layout>
      <div className={wrapper}>
        <div className={aboveTheFold}>
          <div className={headerWrapper}>
            <Header details="living in Porto and currently designing interfaces at Whitespectre" />
          </div>
          <div className={heroImage}>
            <StaticImage
              className={cursorImage}
              alt="Big image of mouse cursor"
              loading="lazy"
              src="../images/home/cursor.png"
            />
            <div className={gridBackground}>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
              <div className={gridCell}></div>
            </div>
          </div>
          <h1 className={motto}>Building better digital products<br /><span className="deemphasized">by bringing clarity to ideas</span></h1>
        </div>
        <div className={highlightsSection}>
          <h2 className={clsx(smallHeader, "allCaps deemphasized")}>Select works</h2>
          <div className={highlightsContent}>
            <div className={project}>
              <Link to="/sentio">
                <div className={projectImage}>
                  { preferredTheme == 'dark' ?
                    <StaticImage
                      className={imageSentio}
                      alt="Image of a phone with multiple apps and a widget on it's screen"
                      loading="lazy"
                      src="../images/home/sentio-mobile-apps-dark.png"
                      objectFit="contain"
                    /> :
                    <StaticImage
                      className={imageSentio}
                      alt="Image of a phone with multiple apps and a widget on it's screen"
                      loading="lazy"
                      src="../images/home/sentio-mobile-apps.png"
                      objectFit="contain"
                    /> 
                  }
                </div>
              </Link>
              <div className={projectInfo}>
                <Link to="/sentio" className={link}>
                  <h3 className={mediumHeader}>Sentio mobile apps
                    <span className={arrow}>
                      →
                    </span>
                  </h3>
                </Link>
                  <p className={clsx(projectDescription, "deemphasized")}>Assorted simple utility mobile apps</p>
              </div>
            </div>

            <div className={clsx(project)}>
              <Link to="/cuddlynest-web-platform">
                <div className={projectImage}>
                  <StaticImage
                    className={imageCNWeb}
                    alt="Image of a laptop with a types of trips and search button"
                    loading="lazy"
                    src="../images/home/cuddlynest-web-app.png"
                    objectFit="contain"
                  />
                </div>
              </Link>
              <div className={projectInfo}>
                <Link to="/cuddlynest-web-platform" className={link}>
                  <h3 className={mediumHeader}>Cuddlynest web platform 
                    <span className={arrow}>
                      →
                    </span>
                  </h3>
                </Link>
                <p className={clsx(projectDescription, "deemphasized")}>Travel accommodation booking platform</p>
              </div>
            </div>


            <div className={project}>
              <Link to="/cuddlynest-mobile">
                <div className={projectImage}>
                  { preferredTheme == 'dark' ?
                    <StaticImage
                      className={imageCNMobile}
                      alt="Image of an app icon and the top part of the phone with search prompt"
                      loading="lazy"
                      src="../images/home/cuddlynest-mobile-app-dark.png"
                      objectFit="contain"
                      style={{ position: 'absolute' }}
                    /> :
                    <StaticImage
                      className={imageCNMobile}
                      alt="Image of an app icon and the top part of the phone with search prompt"
                      loading="lazy"
                      src="../images/home/cuddlynest-mobile-app.png"
                      objectFit="contain"
                      style={{ position: 'absolute' }}
                    />
                  }
                </div>
              </Link>
              <div className={projectInfo}>
                <Link to="/cuddlynest-mobile" className={link}>
                  <h3 className={mediumHeader}>Cuddlynest mobile app
                    <span className={arrow}>
                      →
                    </span>
                  </h3>
                </Link>
                  <p className={clsx(projectDescription, "deemphasized")}>Cross-platform mobile accommodation booking app</p>
              </div>
            </div>

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
