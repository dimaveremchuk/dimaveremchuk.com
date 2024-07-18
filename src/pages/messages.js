import React from "react"
import Layout from "../components/layout/layout"
import Header from "../components/sections/header"
import Footer from "../components/sections/footer"
import { useMediaPredicate } from "react-media-hook"
import { StaticImage } from "gatsby-plugin-image"
import clsx from "clsx"
import {
aboveTheFold,
headerWrapper,
wrapper,
content,
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
unorderedList,
highlights,
highlight,
rightAligned,
leftAligned,
images,
imageNarrow,
imageWide,
image,
aboveTheFoldImage,
laptopAboveTheFold,
} from "./styles/case.module.css"

export default function MessagesApp() {
  const preferredTheme = useMediaPredicate('(prefers-color-scheme: dark)') ? 'dark' : 'light'
    return (
        <Layout>
            <div className={aboveTheFold}>
                <div className={headerWrapper}>
                    <Header />
                </div>
                <img
                className={clsx(aboveTheFoldImage, laptopAboveTheFold)}
                loading="eager"
                src="../../messages-splash-screen.png"
                alt="Image of the laptop with the property owner dashboard interface"
                />
            </div>
            <div className={wrapper}>
                <div className={clsx(content, externalContainer)}>
                    <section className={intro}>
                        <div className={clsx(introSummary, "allCaps")}>
                            <div className={period}>
                                2022
                            </div>
                            <ul className={roles}>
                                <li>UI/UX</li>
                                <li>Product</li>
                                <li>Branding</li>
                                <li>Iconography</li>
                            </ul>
                        </div>
                        <div className={introContent}>
                            <h1 className={projectName}>
                                Messaging app <br />
                                <span className="deemphasized">
                                    with virtual phone numbers
                                </span>
                            </h1>
                        </div>
                    </section>
                    <section className={externalContainer}>
                        <div className={internalContainer}>
                            <div className={headerWithParagraph}>
                                <h2 className={headerTwo}>
                                Scope
                                </h2>
                                <div className={paragraph}>
                                    <p>
                                    We were tasked with developing a messaging app for both iOS and Android platforms. The app's primary function was to allow users to purchase virtual phone numbers from various countries for sending and receiving messages. The main use cases were:
                                    </p>
                                    <ul className={unorderedList}>
                                    <li>Registering for services unavailable in the user's country</li>
                                    <li>Providing a "virtual" number for online boards to maintain privacy</li>
                                    </ul>
                                    <p>The app needed to support multiple virtual numbers per user and offer subscription-based pricing models.</p>
                                </div>
                            </div>
                            <div className={headerWithParagraph}>
                                <h2 className={headerTwo}>
                                    Process
                                </h2>
                                <div className={paragraph}>
                                    <p>My process for developing mobile apps at Sentio follows a consistent pattern. For this app, the steps were:</p>
                                    <ul className={unorderedList}>
                                        <li>Research competitors and analyze their features, pricing model, revenue and other metrics</li>
                                        <li>Create UX wireframes to outline the app's structure and flow</li>
                                        <li>Design high-fidelity mockups and prepare visual assets</li>
                                        <li>Present designs to the development team and discuss implementation</li>
                                        <li>Wait for the initial implementation to be completed to install and test the app on my phone</li>
                                        <li>Document and report any inconsistencies or bugs to the development team</li>
                                        <li>Iterate on designs based on technical constraints or new insights</li>
                                        <li>Retest the app after developers address reported issues
                                        </li>
                                        <li>Design app icons and App Store and Google Play screenshots for both iOS and Android platforms</li>
                                        <li>Conduct a final review of the app before launch</li>
                                        <li>Assist in preparing app store descriptions and metadata</li>
                                    </ul>
                                    <p>This approach ensures a thorough development process from initial concept to final product launch, with multiple opportunities for refinement and quality assurance.</p>
                                </div>
                            </div>
                        </div>
                        <div className={internalContainer}>
                            <div className={highlights}>
                                <p className={highlight}>
                                    Wireframes. <span className="deemphasized">The messaging interface was straightforward, but I focused on designing an intuitive system for managing and swapping between multiple virtual numbers.</span>
                                </p>
                            </div>
                            <div className={images}>
                                <StaticImage
                                    alt="Search flow in the Messages app"
                                    src="../images/messages/wireframe.png"
                                    className={clsx(imageWide, image)}
                                    objectFit="contain"
                                /> 
                            </div>
                        </div>
                        <div className={internalContainer}>
                            <div className={leftAligned}>
                                <p className={highlight}>
                                     The design prioritized simplicity and ease of use<span className="deemphasized">, with a focus on messaging functionality.</span>
                                </p>
                            </div>
                            <div className={images}>
                                <StaticImage
                                    alt="Search flow in the Messages app"
                                    src="../images/messages/design-search.png"
                                    className={clsx(imageNarrow, image)}
                                    objectFit="contain"
                                />
                                <StaticImage
                                    alt="Message screen inside the app"
                                    src="../images/messages/design-message.png"
                                    className={clsx(imageNarrow, image)}
                                    objectFit="contain"
                                />
                                <StaticImage
                                    alt="Quick actions for a message in the thread"
                                    src="../images/messages/design-actions.png"
                                    className={clsx(imageWide, image)}
                                    objectFit="contain"
                                />
                            </div>
                        </div>
                        <div className={internalContainer}>
                            <div className={rightAligned}>
                                <p className={highlight}>
                                <span className="deemphasized">Complex number management features were easily accessible but not prominent. Key features included </span>setting default numbers for contacts and easy number swapping within chats.
                                </p>
                            </div>
                            <div className={images}>
                                <StaticImage
                                    alt="Settings screen inside the app"
                                    src="../images/messages/design-settings.png"
                                    className={clsx(imageNarrow, image)}
                                    objectFit="contain"
                                />
                                <StaticImage
                                    alt="Swap number flow inside the app"
                                    src="../images/messages/design-swap-numbers.png"
                                    className={clsx(imageNarrow, image)}
                                    objectFit="contain"
                                />
                                <StaticImage
                                    alt="Setting default phone number in contact details"
                                    src="../images/messages/complex-swap.png"
                                    className={clsx(imageNarrow, image)}
                                    objectFit="contain"
                                />
                                <StaticImage
                                    alt="Swapping phone number from within the chat"
                                    src="../images/messages/complex-in-chat-swap.png"
                                    className={clsx(imageNarrow, image)}
                                    objectFit="contain"
                                />
                            </div>
                        </div>
                        <div className={internalContainer}>
                            <div className={leftAligned}>
                                <p className={highlight}>
                                    <span className="deemphasized">I had a lot of fun making</span> custom icons and visual assets for the interface
                                </p>
                            </div>
                            <div className={images}>
                                <StaticImage
                                    alt="First onboarding screen of the app with some visual assets"
                                    src="../images/messages/visuals-onboarding-one.png"
                                    className={clsx(imageNarrow, image)}
                                    objectFit="contain"
                                />
                                <StaticImage
                                    alt="Contacts screen with custom icons"
                                    src="../images/messages/visuals-contacts.png"
                                    className={clsx(imageNarrow, image)}
                                    objectFit="contain"
                                />
                                <StaticImage
                                    alt="Swipe action on the message thread"
                                    src="../images/messages/visuals-swipe.png"
                                    className={clsx(imageNarrow, image)}
                                    objectFit="contain"
                                />
                                <StaticImage
                                    alt="Second onboarding screen of the app with some visual assets"
                                    src="../images/messages/visuals-onboarding-two.png"
                                    className={clsx(imageNarrow, image)}
                                    objectFit="contain"
                                />
                                { preferredTheme == "dark" ?
                                <StaticImage
                                    alt="Some icons used in Messages app"
                                    src="../images/sentio/messaging-icons-dark.png"
                                    className={clsx(imageWide, image)}
                                    objectFit="contain"
                                /> :
                                <StaticImage
                                    alt="Some icons used in Messages app"
                                    src="../images/sentio/messaging-icons.png"
                                    className={clsx(imageWide, image)}
                                    objectFit="contain"
                                />
                                }
                            </div>
                        </div>
                        <div className={internalContainer}>
                            <div className={rightAligned}>
                                <p className={highlight}>
                                    Android design. <span className="deemphasized">I implemented Material 3 design principles for the Android version, redrawing some assets to better fit the Android design language.</span>
                                </p>
                            </div>
                            <div className={images}>
                                <StaticImage
                                    alt="The onboarding screen in Android app"
                                    src="../images/messages/android-onboarding.png"
                                    className={clsx(imageWide, image)}
                                    objectFit="contain"
                                /> 
                                <StaticImage
                                    alt="Contact details screen in Android app"
                                    src="../images/messages/android-contact-details.png"
                                    className={clsx(imageNarrow, image)}
                                    objectFit="contain"
                                /> 
                                <StaticImage
                                    alt="Inside the message thread in Android app"
                                    src="../images/messages/android-inside-message.png"
                                    className={clsx(imageNarrow, image)}
                                    objectFit="contain"
                                /> 
                                <StaticImage
                                    alt="Home screen of Android app"
                                    src="../images/messages/android-homescreen.png"
                                    className={clsx(imageNarrow, image)}
                                    objectFit="contain"
                                /> 
                                <StaticImage
                                    alt="Settings screen of Android app"
                                    src="../images/messages/android-settings.png"
                                    className={clsx(imageNarrow, image)}
                                    objectFit="contain"
                                /> 
                                <StaticImage
                                    alt="State of attaching videos to the message in Android app"
                                    src="../images/messages/android-videos.png"
                                    className={clsx(imageNarrow, image)}
                                    objectFit="contain"
                                /> 
                                <StaticImage
                                    alt="Subscription screen of Android app"
                                    src="../images/messages/android-subscription.png"
                                    className={clsx(imageNarrow, image)}
                                    objectFit="contain"
                                /> 
                            </div>
                        </div>
                    </section>
                    <section className={externalContainer}>
                        <div className={internalContainer}>
                            <div className={headerWithParagraph}>
                                <h2 className={headerTwo}>
                                    Challenge
                                </h2>
                                <div className={paragraph}>
                                    <p>
                                    The main challenge stemmed from the business logic involving third-party virtual number services:
                                    </p>
                                    <ul className={unorderedList}>
                                        <li>Numbers were rented for a minimum of one month</li>
                                        <li>App offered free trials and weekly subscriptions</li>
                                        <li>Cancelled numbers remained unused until released</li>
                                    </ul>
                                    <p>Solution: We implemented a "pool" of pre-paid, unused numbers. During onboarding, new users were offered a number from this pool by default, with the option to choose a different number if desired. Analytics showed that most users accepted the default number, optimizing our number management process.</p>
                                    <p>This approach streamlined the user experience while addressing the complexities of our business model and third-party integrations.</p>
                                </div>
                            </div>
                            <div className={images}>
                                <StaticImage
                                    alt="Subscription screen with the phone number from the pool"
                                    src="../images/messages/challenge-subscription.png"
                                    className={clsx(imageWide, image)}
                                    objectFit="contain"
                                />  
                                <StaticImage
                                    alt="Menu offering two different types of a custom phone number"
                                    src="../images/messages/challenge-pick-another-number.png"
                                    className={clsx(imageNarrow, image)}
                                    objectFit="contain"
                                />  
                                <StaticImage
                                    alt="Screen with phone number country selection"
                                    src="../images/messages/challenge-country-selection.png"
                                    className={clsx(imageNarrow, image)}
                                    objectFit="contain"
                                />  
                            </div>
                        </div>
                    </section>
                    <section className={externalContainer}>
                        <div className={internalContainer}>
                            <div className={headerWithParagraph}>
                                <h2 className={headerTwo}>
                                    Results
                                </h2>
                                <div className={paragraph}>
                                    <p>The app has turned out to be a real winner for our company. It's been steadily making money since launch, which is great because it lets us play around with building other apps without worrying too much about the bottom line.</p>
                                    <p>People seem to love how easy it is to use and how it solves a real problem they have. We've built up a solid group of users who keep coming back, and that number is growing.</p>
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