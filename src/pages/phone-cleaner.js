import React from "react"
import Layout from "../components/layout/layout"
import Header from "../components/sections/header"
import Footer from "../components/sections/footer"
import clsx from "clsx"
import { StaticImage } from "gatsby-plugin-image"
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
highlights,
highlight,
unorderedList,
leftAligned,
rightAligned,
images,
image,
imageWide,
imageNarrow,
imageContainer,
imageLabel,
aboveTheFoldImage,
laptopAboveTheFold,
} from "./styles/case.module.css"

export default function PhoneCleaner() {
    return (
        <Layout>
            <div className={aboveTheFold}>
                <div className={headerWrapper}>
                    <Header />
                </div>
                <img
                className={clsx(aboveTheFoldImage, laptopAboveTheFold)}
                loading="eager"
                src="../../phone-cleaner-app-smart-clean.png"
                alt="Image of the laptop with the property owner dashboard interface"
                />
            </div>
            <div className={wrapper}>
                <div className={clsx(content, externalContainer)}>
                    <section className={intro}>
                        <div className={clsx(introSummary, "allCaps")}>
                            <div className={period}>
                                2024
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
                                Phone Cleaner <br />
                                <span className="deemphasized">
                                    app for decluttering the phone
                                </span>
                            </h1>
                            <p> Our goal was to create a user-friendly tool that would streamline the often tedious process of phone cleanup. We decided to implement a subscription-based model for the app, aiming to provide ongoing value to users while ensuring a sustainable revenue stream for continued development and support.</p>
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
                                We set out to develop an iOS-exclusive utility app designed to help users efficiently manage their iPhone storage. The app's primary functions were to identify and delete similar, duplicate, and blurry photos and videos, as well as manage screenshots and contacts.
                                </p>
                                <p>
                                This initial version was planned as a foundation, with the potential to add more advanced features in future updates based on our ideas and user feedback.
                                </p>
                                </div>
                            </div>
                            <div className={headerWithParagraph}>
                                <h2 className={headerTwo}>
                                    Process
                                </h2>
                                <div className={paragraph}>
                                    <p>
                                    My typical process involves competitor research, documentation, and feature specification for the first version. I create an interactive UX wireframe in Figma, present it to the Product Owner with specifications and competitor analysis. After approval and developer feedback, I design high-fidelity mockups. I then present to developers, explain functionality, and incorporate their feedback. While developers build the first version, I worked on onboarding animation in After Effects. I test the first build, provide feedback, create the app icon, and prepare App Store screenshots. After QA, we publish the app.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={internalContainer}>
                            <div className={leftAligned}>
                                <p className={highlight}>
                                    Wireframes. <span className="deemphasized">The prototype was relatively simple, demonstrating the app's core functionalities. </span>
                                </p>
                            </div>
                            <div className={images}>
                                <StaticImage
                                    alt="Interactive wireframe"
                                    src="../images/phone-cleaner/wireframe.png"
                                    className={clsx(imageWide, image)}
                                    objectFit="contain"
                                />
                            </div>
                        </div>
                        <div className={internalContainer}>
                            <div className={rightAligned}>
                                <p className={highlight}>
                                    High-fidelity designs. <span className="deemphasized">I aimed for a friendly and playful feel to encourage user engagement.</span>
                                </p>
                            </div>
                            <div className={images}>
                                <StaticImage
                                    alt="Phone Cleaner app onboarding screen"
                                    src="../images/phone-cleaner/design-onboarding.png"
                                    className={clsx(imageWide, image)}
                                    objectFit="contain"
                                /> 
                                <StaticImage
                                    alt="Home screen of the Phone Cleaner app"
                                    src="../images/phone-cleaner/design-homescreen.png"
                                    className={clsx(imageNarrow, image)}
                                    objectFit="contain"
                                /> 
                                <StaticImage
                                    alt="Swipe photos flow of the Phone Cleaner app"
                                    src="../images/phone-cleaner/design-swipe-photos.png"
                                    className={clsx(imageNarrow, image)}
                                    objectFit="contain"
                                /> 
                                <StaticImage
                                    alt="Duplicate photos screen of the Phone Cleaner app"
                                    src="../images/phone-cleaner/design-duplicates.png"
                                    className={clsx(imageNarrow, image)}
                                    objectFit="contain"
                                /> 
                                <StaticImage
                                    alt="Duplicate contacts screen of the Phone Cleaner app"
                                    src="../images/phone-cleaner/design-contacts.png"
                                    className={clsx(imageNarrow, image)}
                                    objectFit="contain"
                                /> 
                            </div>
                        </div>
                        <div className={internalContainer}>
                            <div className={leftAligned}>
                                <p className={highlight}>
                                To provide feedback on the first implementation, I created a Figma page comparing screenshots of the implemented app with the original designs side-by-side. <span className="deemphasized">This visual approach allowed me to leave contextual comments directly on the Figma file, streamlining the feedback process for developers.</span>
                                </p>
                            </div>
                            <div className={images}>
                                <StaticImage
                                    alt="Design feedback for the first implementation of the app"
                                    src="../images/phone-cleaner/feedback.png"
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
                                    Challenges and mistakes
                                </h2>
                                <div className={paragraph}>
                                    <p>
                                    After the first build, I found the photo swiping process redundant. Initially, users could select photos to delete from a grid view or swipe through a "photo stack".
                                    </p>
                                    <p>
                                    Initially, the Apple review team rejected our subscription model, citing that there were too few features in the app to justify a recurring payment. They instructed us to use a one-time in-app purchase instead. This setback forced us to reconsider our monetization strategy and focus on expanding the app's functionality.
                                    </p>
                                    <p>
                                    Post-release, users found the bottom panel on the photos management screen confusing.
                                    </p>
                                </div>
                            </div>
                            <div className={images}>
                                <div className={clsx(imageWide, image, imageContainer)}>
                                <div className={clsx(imageLabel, "allCaps")}>
                                    One-time purchase
                                </div>
                                <StaticImage
                                    alt="One-time purchase screen in Phone Cleaner app"
                                    src="../images/phone-cleaner/challenges-one-time-purchase.png"
                                    objectFit="contain"
                                />
                                </div>
                            </div>
                        </div>
                        <div className={internalContainer}>
                            <div className={leftAligned}>
                                <p className={highlight}>
                                I removed the "photo stack" screen<span className="deemphasized">, replacing it with a full-screen photo view when tapped.</span>
                                </p>
                            </div>
                            <div className={images}>
                                <div className={clsx(imageNarrow, image, imageContainer)}>
                                    <div className={clsx(imageLabel, "allCaps")}>
                                        Photo selection before
                                    </div>
                                    <StaticImage
                                        alt="Photo selection flow before update"
                                        src="../images/phone-cleaner/challenges-photos-selection-before.png"
                                        objectFit="contain"
                                    />
                                </div>
                                <div className={clsx(imageNarrow, image, imageContainer)}>
                                    <div className={clsx(imageLabel, "allCaps")}>
                                        Photo selection after
                                    </div>
                                    <StaticImage
                                        alt="Photo selection flow after update"
                                        src="../images/phone-cleaner/challenges-photos-selection-after.png"
                                        objectFit="contain"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={internalContainer}>
                            <div className={rightAligned}>
                                <p className={highlight}>
                                I simplified photos management screen<span className="deemphasized"> to have a "Select all" button and a "Delete" button that removes selected items, which users found clearer. </span>
                                </p>
                            </div>
                            <div className={images}>
                                <div className={clsx(imageNarrow, image, imageContainer)}>
                                    <div className={clsx(imageLabel, "allCaps")}>
                                        Bottom panel before
                                    </div>
                                    <StaticImage
                                        alt="Bottom panel before update"
                                        src="../images/phone-cleaner/challenges-bottom-panel-before.png"
                                        objectFit="contain"
                                    />
                                </div>
                                <div className={clsx(imageNarrow, image, imageContainer)}>
                                    <div className={clsx(imageLabel, "allCaps")}>
                                        Bottom panel after
                                    </div>
                                    <StaticImage
                                        alt="Bottom panel after update"
                                        src="../images/phone-cleaner/challenges-bottom-panel-after.png"
                                        objectFit="contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className={externalContainer}>
                        <div className={internalContainer}>
                            <div className={headerWithParagraph}>
                                <h2 className={headerTwo}>
                                    Next versions
                                </h2>
                                <div className={paragraph}>
                                    <p>
                                    We added more functionality over time:
                                    </p>
                                    <ul className={unorderedList}>
                                        <li>Video compression</li>
                                        <li>Smart clean feature for comprehensive phone scanning and bulk deletion</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={images}>
                                <div className={clsx(imageWide, image, imageContainer)}>
                                    <div className={clsx(imageLabel, "allCaps")}>
                                        Video compression
                                    </div>
                                    <StaticImage
                                        alt="Video compression flow"
                                        src="../images/phone-cleaner/next-video-compression.png"
                                        objectFit="contain"
                                    />
                                </div>
                                <div className={clsx(imageWide, image, imageContainer)}>
                                    <div className={clsx(imageLabel, "allCaps")}>
                                        Smart clean
                                    </div>
                                    <StaticImage
                                        alt="Smart clean flow"
                                        src="../images/phone-cleaner/next-smart-clean.png"
                                        objectFit="contain"
                                    />
                                </div>
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
                                    <p>
                                    The app's Monthly Recurring Revenue (MRR) steadily increased to a satisfactory level. After implementing UX improvements and adding new features, the day 7 retention grew from 3% to almost 7%.
                                    </p>
                                    <p>
                                    Importantly, as we continued to develop and add more functionality to the app, we were able to successfully switch to a subscription-based monetization model. This transition was approved by Apple's review team, recognizing the increased value we were providing to users. The move to a subscription model has allowed for more sustainable revenue, supporting ongoing development and improvement of the app.
                                    </p>
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