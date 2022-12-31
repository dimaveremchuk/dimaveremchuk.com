import React from "react"
import Layout from "../components/layout/layout"
import Header from "../components/sections/header"
import Footer from "../components/sections/footer"
import clsx from "clsx"
import { useMediaPredicate } from "react-media-hook"
import { StaticImage } from "gatsby-plugin-image"
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
  headerWithParagraph,
  headerTwo,
  paragraph,
  images,
  imageWide,
  imageNarrow,
  image,
  rightAligned,
  highlight,
  leftAligned,
  phoneImage,
  filledIcons,
  outlinedIcons,
} from "./styles/case.module.css"

function Sentio() {
  const preferredTheme = useMediaPredicate('(prefers-color-scheme: dark)') ? 'dark' : 'light'

  return (
    <Layout>
      <div className={aboveTheFold}>
        <div className={headerWrapper}>
          <Header />
        </div>
        <div className={aboveTheFoldImage}>
          <StaticImage
            alt="Image of the phone with 7 app icons and a widget"
            src="../images/sentio/above-the-fold.png"
            loading="eager"
            objectFit="contain"
            className={phoneImage}
          />
        </div>
      </div>
      <div className={wrapper}>
        <div className={externalContainer}>
          <section className={intro}>
            <div className={clsx(introSummary, "allCaps")}>
              <div className={period}>
                2021–now
              </div>
              <ul className={roles}>
                <li>UI/UX</li>
                <li>Product</li>
                <li>Branding</li>
              </ul>
            </div>
            <div className={introContent}>
              <h1 className={projectName}>
                Sentio <br />
                <span className="deemphasized">
                  utility mobile apps
                </span>
              </h1>
              <p>
                In Sentio I’ve been designing a number of mobile apps. The goal was to quickly test the ideas. If the app strives, double down the efforts, if not, abandon and switch to another app. With such approach I have a good opportunity to practice, fail and start again often. Over time quantity started to transform into quality.
              </p>
            </div>
          </section>
          <section className={externalContainer}>
            <div className={internalContainer}>
              <div className={headerWithParagraph}>
                <h2 className={headerTwo}>
                  Fasting tracker
                </h2>
                <div className={paragraph}>
                  <p>
                    My latest design. Fasting is beneficial for people’s health. People in ancient times did it and there is lot of contemporary research confirming that.
                  </p>
                  <p>
                    I personally been regularly fasting for several years now, that is why I was happy to find out we are building the fasting tracker at Sentio. It won’t be an overexaggeration to say that it is the favorite app I designed in Sentio.
                  </p>
                  <p>
                    Though there is quite a number of fasting tracking apps, many of them are too complicated. I wanted to make our app as simple as possible, which in my opinion is gonna help to form the habit to people using the app.
                  </p>
                  <p>
                    Being lightweight, app still gives enough flexibility to experienced fasters with custom fasting plans and schedules.
                  </p>
                </div>
              </div>
              <div className={images}>
                <StaticImage
                  alt="Home screen of the app with the ongoing fasting"
                  src="../images/sentio/fasting-homescreen.png"
                  className={clsx(imageNarrow, image)}
                  objectFit="contain"
                />
                <StaticImage
                  alt="Fasting plan picker with 5 plans visible on the screen"
                  src="../images/sentio/fasting-pick-plan.png"
                  className={clsx(imageNarrow, image)}
                  objectFit="contain"
                />
                <StaticImage
                  alt="Image of three screens of fasting app: fast regularity picker, earned badge view and fast completion screen"
                  src="../images/sentio/fasting-three-screens.png"
                  className={clsx(imageWide, image)}
                  objectFit="contain"
                />
                <StaticImage
                  alt="Image of the sheet configuring the contents of the home screen"
                  src="../images/sentio/fasting-configure-homescreen.png"
                  className={clsx(imageNarrow, image)}
                  objectFit="contain"
                />
                <StaticImage
                  alt="The list of rewards"
                  src="../images/sentio/fasting-rewards.png"
                  className={clsx(imageNarrow, image)}
                  objectFit="contain"
                />
                <StaticImage
                  alt="User profile screen"
                  src="../images/sentio/fasting-profile.png"
                  className={clsx(imageWide, image)}
                  objectFit="contain"
                />
              </div>
            </div>
            <div className={clsx(internalContainer, rightAligned)}>
              <p className={highlight}>
                Widgets. <span className="deemphasized">Simple readable widgets with the most important information people on the fast want to see—fasting progress and current fasting zone.</span>
              </p>
              <div className={images}>
                <StaticImage
                  alt="The image of three states of the homescreen widget"
                  src="../images/sentio/fasting-widgets.png"
                  className={clsx(imageNarrow, image)}
                  objectFit="contain"
                />
                { preferredTheme == "dark" ?
                  <StaticImage
                    alt="Image of the iPhone lockscreen with fasting widget on it"
                    src="../images/sentio/fasting-widgets-lockscreen-dark.png"
                    className={clsx(imageNarrow, image)}
                    objectFit="contain"
                  /> :
                  <StaticImage
                    alt="Image of the iPhone lockscreen with fasting widget on it"
                    src="../images/sentio/fasting-widgets-lockscreen.png"
                    className={clsx(imageNarrow, image)}
                    objectFit="contain"
                  />
                }
              </div>
            </div>
            <div className={clsx(internalContainer, leftAligned)}>
              <p className={highlight}>
                Iconography. <span className="deemphasized">Bold filled icons and simple forms support interface the best. I aspired to ensure the best readability and quick recognition process for users.</span>
              </p>
              <div className={images}>
                { preferredTheme == "dark" ?
                  <StaticImage
                    alt="Some icons used in the app"
                    src="../images/sentio/fasting-icons-dark.png"
                    className={clsx(imageWide, image)}
                    objectFit="contain"
                  /> :
                  <StaticImage
                    alt="Some icons used in the app"
                    src="../images/sentio/fasting-icons.png"
                    className={clsx(imageWide, image)}
                    objectFit="contain"
                  />
                }
              </div>
            </div>
          </section>
          <section className={externalContainer}>
            <div className={internalContainer}>
              <div className={headerWithParagraph}>
                <h2 className={headerTwo}>
                  Messaging app
                </h2>
                <div className={paragraph}>
                  <p>
                    Simple app that allows to rent the virtual phone number to send and receive text messages.
                  </p>
                  <p>
                    Our users use the app for a variety of cases: from registering in services that are not available in their countries to using temporary number to sell items on Craigslist and avoid spam on their main phone number.
                  </p>
                  <p>
                    It was important to allow users to have multiple phone numbers and make it easy for them to distinguish between phone numbers (by giving each it’s unique alias) and let them easily see what number is being used in conversation.
                  </p>
                </div>
              </div>
              <div className={images}>
                <StaticImage
                  alt="Lockscreen of the Messaging app"
                  src="../images/sentio/messaging-lockscreen.png"
                  className={clsx(imageWide, image)}
                  objectFit="contain"
                />
                <StaticImage
                  alt="Contact screen with contact details and the picker for the default phone number to use with the contact"
                  src="../images/sentio/messaging-contact-details.png"
                  className={clsx(imageNarrow, image)}
                  objectFit="contain"
                />
                <StaticImage
                  alt="Image of the onboarding screen of the app"
                  src="../images/sentio/messaging-onboarding.png"
                  className={clsx(imageNarrow, image)}
                  objectFit="contain"
                />
                <StaticImage
                  alt="Image of three screens of the Messaging app: list of messages, settings and chat screen"
                  src="../images/sentio/messaging-three-screens.png"
                  className={clsx(imageWide, image)}
                  objectFit="contain"
                />
              </div>
            </div>
            <div className={clsx(internalContainer, rightAligned)}>
              <p className={highlight}>
                Icons. <span className="deemphasized">Simple two-tone icons should help people to easier navigate through the app. Also they are quite pleasant to look at.</span>
              </p>
              <div className={images}>
                { preferredTheme == "dark" ?
                  <StaticImage
                    alt="Some icons used in Messaging app"
                    src="../images/sentio/messaging-icons-dark.png"
                    className={clsx(imageWide, image)}
                    objectFit="contain"
                  /> :
                  <StaticImage
                    alt="Some icons used in Messaging app"
                    src="../images/sentio/messaging-icons.png"
                    className={clsx(imageWide, image)}
                    objectFit="contain"
                  />
              }
              </div>
            </div>
            <div className={clsx(internalContainer, leftAligned)}>
              <p className={highlight}>
                Android app. <span className="deemphasized">With a distinct design language and platform it was quite a challenge to design and Android app that would feel right.</span>
              </p>
              <div className={images}>
                <StaticImage
                  alt="Onboarding screen in Android app"
                  src="../images/sentio/messaging-android-onboarding.png"
                  className={clsx(imageWide, image)}
                  objectFit="contain"
                />
                <StaticImage
                  alt="Bottom sheet with phone number actions"
                  src="../images/sentio/messaging-android-bottom-sheet.png"
                  className={clsx(imageNarrow, image)}
                  objectFit="contain"
                />
                <StaticImage
                  alt="Edit contact screen"
                  src="../images/sentio/messaging-android-edit-contact.png"
                  className={clsx(imageNarrow, image)}
                  objectFit="contain"
                />
                <StaticImage
                  alt="Image of three screens of Android app: messages list, app settings and chat screen"
                  src="../images/sentio/messaging-android-three-screens.png"
                  className={clsx(imageWide, image)}
                  objectFit="contain"
                />
                <StaticImage
                  alt="Contacts screen empty state"
                  src="../images/sentio/messaging-android-empty-state.png"
                  className={clsx(imageWide, image)}
                  objectFit="contain"
                />
              </div>
            </div>
          </section>
          <section className={externalContainer}>
            <div className={internalContainer}>
              <div className={headerWithParagraph}>
                <h2 className={headerTwo}>
                  Other apps
                </h2>
                <div className={paragraph}>
                  <p>
                    I've also designed second phone number app, various PDF related apps and fax app. All of them have limited purposes that are clearly understandable through the focused interface.
                  </p>
                  <p>
                    In two apps due to time constraints I’ve used great ready-made icons from SF Symbols and Microsoft Fluent system, in all others all icons are made from scratch.
                  </p>
                </div>
              </div>
              <div className={images}>
                <StaticImage
                  alt="Three screens of the iPhone Fax app: new fax composition, sent fax status and the list of faxes"
                  src="../images/sentio/other-three-iphones.png"
                  className={clsx(imageWide, image)}
                  objectFit="contain"
                />
                <StaticImage
                  alt="Settings screen of the iPhone Fax app"
                  src="../images/sentio/other-fax-settings.png"
                  className={clsx(imageNarrow, image)}
                  objectFit="contain"
                />
                <StaticImage
                  alt="Bottom sheet with add new page actions in Android Fax app"
                  src="../images/sentio/other-fax-android-new-page.png"
                  className={clsx(imageNarrow, image)}
                  objectFit="contain"
                />
                <StaticImage
                  alt="Three screens of the Android Fax app: app settings, new fax composition and failed fax status"
                  src="../images/sentio/other-fax-three-screens.png"
                  className={clsx(imageWide, image)}
                  objectFit="contain"
                />
                { preferredTheme == "dark" ?
                  <StaticImage
                    alt="Some icons used in Fax app"
                    src="../images/sentio/other-fax-icons-dark.png"
                    className={clsx(imageWide, image)}
                    objectFit="contain"
                  /> :
                  <StaticImage
                    alt="Some icons used in Fax app"
                    src="../images/sentio/other-fax-icons.png"
                    className={clsx(imageWide, image)}
                    objectFit="contain"
                  />
                }
                <StaticImage
                  alt="Two screens of Android Second Phone app: manage plans and ongoing call"
                  src="../images/sentio/other-android-two-phones.png"
                  className={clsx(imageWide, image)}
                  objectFit="contain"
                />
                <StaticImage
                  alt="Second Phone app iPad phone screen in horizontal orientation"
                  src="../images/sentio/other-secondphone-ipad.png"
                  className={clsx(imageWide, image)}
                  objectFit="contain"
                />
                <StaticImage
                  alt="Second Phone app onboarding screen on iPad"
                  src="../images/sentio/other-secondphone-ipad-onboarding.png"
                  className={clsx(imageNarrow, image)}
                  objectFit="contain"
                />
                <StaticImage
                  alt="PDF Signer screen with files, folders and new file actions on iPad"
                  src="../images/sentio/other-signer-ipad.png"
                  className={clsx(imageNarrow, image)}
                  objectFit="contain"
                />
                <StaticImage
                  alt="PDF Signer screen with the area to scribble a signature on iPhone"
                  src="../images/sentio/other-signer-signature.png"
                  className={clsx(imageWide, image)}
                  objectFit="contain"
                />
                {preferredTheme == "dark" ?
                  <StaticImage
                    alt="Some icons used in Text Recognizer app"
                    src="../images/sentio/other-recognizer-icons-dark.png"
                    className={clsx(imageNarrow, image)}
                    objectFit="contain"
                  /> :
                  <StaticImage
                    alt="Some icons used in Text Recognizer app"
                    src="../images/sentio/other-recognizer-icons.png"
                    className={clsx(imageNarrow, image)}
                    objectFit="contain"
                  />
                }
                { preferredTheme == "dark" ?
                  <StaticImage
                    alt="Some icons used in Signer app"
                    src="../images/sentio/other-signer-icons-dark.png"
                    className={clsx(imageNarrow, image)}
                    objectFit="contain"
                  /> :
                  <StaticImage
                    alt="Some icons used in Signer app"
                    src="../images/sentio/other-signer-icons.png"
                    className={clsx(imageNarrow, image)}
                    objectFit="contain"
                  />
                }
                <StaticImage
                  alt="Text recognizer app document view with available actions"
                  src="../images/sentio/other-recognizer-document.png"
                  className={clsx(imageNarrow, image)}
                  objectFit="contain"
                />
                <StaticImage
                  alt="Signer app list of available signatures"
                  src="../images/sentio/other-signer-signatures.png"
                  className={clsx(imageNarrow, image)}
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

export default Sentio
