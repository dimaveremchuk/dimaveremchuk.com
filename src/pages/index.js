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
} from "./styles/index.module.css"

function IndexPage() {
  const preferredTheme = useMediaPredicate('(prefers-color-scheme: dark)') ? 'dark' : 'light'

  return (
    <Layout>
      <div className={wrapper}>
        <div className={aboveTheFold}>
          <div className={headerWrapper}>
            <Header details="living in Porto and currently designing mobile apps in Sentio" />
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
            <div className={clsx(project, wideProject)}>
              <Link to="/cuddlynest-web-platform">
                <StaticImage
                  className={projectImage}
                  alt="Image of a laptop with a types of trips and search button"
                  loading="lazy"
                  src="../images/home/cuddlynest-web-app.png"
                />
              </Link>
              <Link to="/cuddlynest-web-platform" className={projectInfo}>
                <h3 className={mediumHeader}>Cuddlynest<br /><span className="deemphasized">web platform</span></h3>
                <p className={projectDescription}>The future of travel accommodation booking. More humane way to find and book the accommodation for your travel.</p>
                  <p className={clsx(projectRole, "deemphasized")}>
                    Product UI/UX<br />
                    Branding
                  </p>
                <p className={clsx("deemphasized", period)}>2019–2021</p>
              </Link>
            </div>

            <div className={project}>
              <Link to="/sentio">
                { preferredTheme == 'dark' ?
                  <StaticImage
                    className={projectImage}
                    alt="Image of a phone with multiple apps and a widget on it's screen"
                    loading="lazy"
                    src="../images/home/sentio-mobile-apps-dark.png"
                  /> :
                  <StaticImage
                    className={projectImage}
                    alt="Image of a phone with multiple apps and a widget on it's screen"
                    loading="lazy"
                    src="../images/home/sentio-mobile-apps.png"
                  /> 
                }
              </Link>
              <Link to="/sentio" className={projectInfo}>
                <h3 className={mediumHeader}>Sentio<br /><span className="deemphasized">utility mobile apps</span></h3>
                <p className={projectDescription}>Assorted simple utility mobile apps.</p>
                <p className={clsx("deemphasized", projectRole)}>
                  Product UI/UX<br />
                  Iconography
                </p>
                <p className={clsx("deemphasized", period)}>2021–now</p>
              </Link>
            </div>

            <div className={project}>
              <Link to="/cuddlynest-mobile">
                { preferredTheme == 'dark' ?
                  <StaticImage
                    className={projectImage}
                    alt="Image of an app icon and the top part of the phone with search prompt"
                    loading="lazy"
                    src="../images/home/cuddlynest-mobile-app-dark.png"
                  /> :
                  <StaticImage
                    className={projectImage}
                    alt="Image of an app icon and the top part of the phone with search prompt"
                    loading="lazy"
                    src="../images/home/cuddlynest-mobile-app.png"
                  />
              }
              </Link>
              <Link to="/cuddlynest-mobile" className={projectInfo}>
                <h3 className={mediumHeader}>Cuddlynest<br /><span className="deemphasized">native mobile experience</span></h3>
                <p className={projectDescription}>Cross-platform mobile application for cuddlynest service</p>
                <p className={clsx("deemphasized", projectRole)}>Product UI/UX</p>
                <p className={clsx("deemphasized", period)}>2021</p>
              </Link>
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
