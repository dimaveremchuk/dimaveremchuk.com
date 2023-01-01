import React from "react"
import Layout from "../components/layout/layout"
import Header from "../components/sections/header"
import Footer from "../components/sections/footer"
import clsx from "clsx"
import { useMediaPredicate } from "react-media-hook"
import { StaticImage } from 'gatsby-plugin-image'
import CuddlynestAppIcon from "../svg/cuddlynest-app-icon.svg"
import PhoneTopPart from "../svg/cuddlynest-iphone-above-the-fold.svg"
import {
  aboveTheFold,
  headerWrapper,
  aboveTheFoldImage,
  wrapper,
  externalContainer,
  intro,
  introSummary,
  period,
  roles,
  introContent,
  projectName,
  internalContainer,
  highlight,
  images,
  image,
  imageNarrow,
  rightAligned,
  imageWide,
  leftAligned,
  appIcon,
  aboveTheFoldPhone,
} from "./styles/case.module.css"


function CuddlynestMobile() {
  const preferredTheme = useMediaPredicate('(prefers-color-scheme: dark)') ? 'dark' : 'light'

  return (
    <Layout>
      <div className={aboveTheFold}>
        <div className={headerWrapper}>
          <Header />
        </div>
        <div className={aboveTheFoldImage}>
          <CuddlynestAppIcon className={appIcon} />
          <PhoneTopPart className={aboveTheFoldPhone} />
        </div>
      </div>
      <div className={wrapper}>
        <div className={clsx(externalContainer)}>
          <section className={intro}>
            <div className={clsx(introSummary, "allCaps")}>
              <div className={period}>
                2021
              </div>
              <ul className={roles}>
                <li>UI/UX</li>
                <li>Product</li>
              </ul>
            </div>
            <div className={introContent}>
              <h1 className={projectName}>
                Cuddlynest <br />
                <span className="deemphasized">
                  mobile app
                </span>
              </h1>
              <p>
                Universal mobile app for online travel accommodation startup with a vision to make people’s booking experience easy and effortless.
              </p>
            </div>
          </section>
          <section className={clsx(externalContainer)}>
            <div className={internalContainer}>
              <p className={highlight}>
                Mobile app should be more convenient way for travelers to find and manage their accommodation. <span className="deemphasized">The app would be downloaded by people who are already familiar with cuddlynest brand and most probably they've already booked an accommodation with cuddlynest at least once.</span>
              </p>
              <div className={images}>
                <StaticImage
                  alt="Image of three app screens—map, homescreen and search results"
                  src="../images/cuddlynest-mobile/Mobile-app-one.png"
                  className={clsx(imageWide, image)}
                  objectFit="contain"
                />
                <StaticImage
                  alt="Image of the search section in the app"
                  src="../images/cuddlynest-mobile/Mobile-app-two.png"
                  className={clsx(imageNarrow, image)}
                  objectFit="contain"
                />
                <StaticImage
                  alt="Image of the prompt to delete the list from the user's lists"
                  src="../images/cuddlynest-mobile/Mobile-app-three.png"
                  className={clsx(imageNarrow, image)}
                  objectFit="contain"
                />
              </div>
            </div>
            <div className={clsx(internalContainer, rightAligned)}>
              <p className={highlight}>
                More convenient while traveling. <span className="deemphasized">All conversations, current and upcoming listing information and contact details are available offline.</span>
              </p>
              <div className={images}>
                <StaticImage
                  alt="Image of three app screens in airplane mode: booking details, upcoming bookings and chat with accommodation"
                  src="../images/cuddlynest-mobile/more-convenient-one.png"
                  className={clsx(imageWide, image)}
                  objectFit="contain"
                />
              </div>
            </div>
            <div className={clsx(internalContainer, leftAligned)}>
              <p className={highlight}>
                Everything is within reach. <span className="deemphasized">All the most important actions are located such that they can be tapped with one hand even on a bigger phone sizes.</span>
              </p>
              <div className={images}>
                <StaticImage
                  alt="Image of iPhone in the hand with the review and book screen"
                  src="../images/cuddlynest-mobile/within-reach-one.png"
                  className={clsx(imageWide, image)}
                  objectFit="contain"
                />
                <StaticImage
                  alt="Image of iPhone in the hand with the review and book screen"
                  src="../images/cuddlynest-mobile/within-reach-two.png"
                  className={clsx(imageNarrow, image)}
                  objectFit="contain"
                />
                <StaticImage
                  alt="Image of iPhone in the hand with the review and book screen"
                  src="../images/cuddlynest-mobile/within-reach-three.png"
                  className={clsx(imageNarrow, image)}
                  objectFit="contain"
                />
              </div>
            </div>
            <div className={clsx(internalContainer, rightAligned)}>
              <p className={highlight}>
                Dark mode. <span className="deemphasized">With people often looking for an accommodation in the evening or in the low-light conditions, it was important to make that experience comfortable. Dark mode can be activated manually, based on surrounding lighting conditions or automatically according to system settings.</span>
              </p>
              <div className={images}>
                <StaticImage
                  alt="Three images of the app in the dark mode: contact host screen, splash screen with logo and select room screen"
                  src="../images/cuddlynest-mobile/dark-mode-one.png"
                  className={clsx(imageWide, image)}
                  objectFit="contain"
                />
                <StaticImage
                  alt="Image of the Settings screen in dark mode"
                  src="../images/cuddlynest-mobile/dark-mode-two.png"
                  className={clsx(imageNarrow, image)}
                  objectFit="contain"
                />
                <StaticImage
                  alt="Image of listing details screen in dark mode"
                  src="../images/cuddlynest-mobile/dark-mode-three.png"
                  className={clsx(imageNarrow, image)}
                  objectFit="contain"
                />
              </div>
            </div>
            <div className={clsx(internalContainer, leftAligned)}>
              <p className={highlight}>
                The same visual language as in the web app. <span className="deemphasized">Colors, typography, layout—the app is distinctly cuddlynest brand.</span>
              </p>
              <div className={images}>
                <StaticImage
                  alt="Image of listing details screen in dark mode"
                  src="../images/cuddlynest-mobile/visual-language-one.png"
                  className={clsx(imageNarrow, image)}
                  objectFit="contain"
                />
                <StaticImage
                  alt="Image of listing details screen in dark mode"
                  src="../images/cuddlynest-mobile/visual-language-two.png"
                  className={clsx(imageNarrow, image)}
                  objectFit="contain"
                />
                <StaticImage
                  alt="Image of listing details screen in dark mode"
                  src="../images/cuddlynest-mobile/visual-language-three.png"
                  className={clsx(imageWide, image)}
                  objectFit="contain"
                />
                <StaticImage
                  alt="Image of listing details screen in dark mode"
                  src="../images/cuddlynest-mobile/visual-language-four.png"
                  className={clsx(imageWide, image)}
                  objectFit="contain"
                />
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </Layout>
  )
}

export default CuddlynestMobile
