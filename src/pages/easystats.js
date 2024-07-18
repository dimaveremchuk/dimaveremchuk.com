import React from "react"
import Layout from "../components/layout/layout"
import Header from "../components/sections/header"
import Footer from "../components/sections/footer"
import HomepageVideo from "../images/easystats/homepage-video.mp4"
import ChallengeVideo from "../images/easystats/challenge-video.mp4"
import TabletFrame from "../images/easystats/tablet-frame.svg"
import clsx from "clsx"
import { StaticImage } from "gatsby-plugin-image"
import {
    aboveTheFold,
    headerWrapper,
    reelImage,
    first,
    second,
    third,
    fourth,
    fifth,
    sixth,
    seventh,
    eighth,
    ninth,
    aboveTheFoldReel,
    wrapper,
    content,
    externalContainer,
    internalContainer,
    headerWithParagraph,
    headerTwo,
    paragraph,
    intro,
    introSummary,
    period,
    roles,
    introContent,
    projectName,
    comment,
    images,
    imageWide,
    image,
    imageContainer,
    imageLabel,
    highlights,
    highlight,
    rightAligned,
    leftAligned,
    imageNarrow,
    video,
    centered,
} from "./styles/case.module.css"

function Easystats() {
    return (
        <Layout>
            <div className={aboveTheFold}>
                <div className={headerWrapper}>
                    <Header />
                </div>
                <div className={aboveTheFoldReel}>
                    <img 
                    alt="Reel of various screens of Easy Stats web app"
                    src="../../homepage-atf.png"
                    className={clsx(reelImage, first)}
                    />
                    <img 
                    alt="Reel of various screens of Easy Stats web app"
                    src="../../homepage-1.png"
                    className={clsx(reelImage, second)}
                    />
                    <img 
                    alt="Reel of various screens of Easy Stats web app"
                    src="../../log-in.png"
                    className={clsx(reelImage, third)}
                    />
                    <img 
                    alt="Reel of various screens of Easy Stats web app"
                    src="../../datamining.png"
                    className={clsx(reelImage, fourth)}
                    />
                    <img 
                    alt="Reel of various screens of Easy Stats web app"
                    src="../../cart.png"
                    className={clsx(reelImage, fifth)}
                    />
                    <img 
                    alt="Reel of various screens of Easy Stats web app"
                    src="../../downloads.png"
                    className={clsx(reelImage, sixth)}
                    />
                    <img 
                    alt="Reel of various screens of Easy Stats web app"
                    src="../../converters.png"
                    className={clsx(reelImage, seventh)}
                    />
                    <img 
                    alt="Reel of various screens of Easy Stats web app"
                    src="../../traffic-reports.png"
                    className={clsx(reelImage, eighth)}
                    />
                    <img 
                    alt="Reel of various screens of Easy Stats web app"
                    src="../../payment-success.png"
                    className={clsx(reelImage, ninth)}
                    />
                    {/* <StaticImage
                    alt="Reel of various screens of Easy Stats web app"
                    src="../images/easystats/Homepage-atf.png"
                    loading="eager"
                    quality="100"
                    className={clsx(reelImage, first)}
                    objectFit="contain"
                    /> */}
                    {/* <StaticImage
                    alt="Reel of various screens of Easy Stats web app"
                    src="../images/easystats/Homepage-1.png"
                    loading="eager"
                    quality="100"
                    className={clsx(reelImage, second)}
                    objectFit="contain"
                    />
                    <StaticImage
                    alt="Reel of various screens of Easy Stats web app"
                    src="../images/easystats/Log in.png"
                    loading="eager"
                    quality="100"
                    className={clsx(reelImage, third)}
                    objectFit="contain"
                    />
                    <StaticImage
                    alt="Reel of various screens of Easy Stats web app"
                    src="../images/easystats/Datamining.png"
                    loading="eager"
                    quality="100"
                    className={clsx(reelImage, fourth)}
                    objectFit="contain"
                    />
                    <StaticImage
                    alt="Reel of various screens of Easy Stats web app"
                    src="../images/easystats/Cart.png"
                    loading="eager"
                    quality="100"
                    className={clsx(reelImage, fifth)}
                    objectFit="contain"
                    />
                    <StaticImage
                    alt="Reel of various screens of Easy Stats web app"
                    src="../images/easystats/Downloads.png"
                    loading="eager"
                    quality="100"
                    className={clsx(reelImage, sixth)}
                    objectFit="contain"
                    />
                    <StaticImage
                    alt="Reel of various screens of Easy Stats web app"
                    src="../images/easystats/Converters.png"
                    loading="eager"
                    quality="100"
                    className={clsx(reelImage, seventh)}
                    objectFit="contain"
                    />
                    <StaticImage
                    alt="Reel of various screens of Easy Stats web app"
                    src="../images/easystats/Traffic-reports.png"
                    loading="eager"
                    quality="100"
                    className={clsx(reelImage, eighth)}
                    objectFit="contain"
                    />
                    <StaticImage
                    alt="Reel of various screens of Easy Stats web app"
                    src="../images/easystats/Payment-success.png"
                    loading="eager"
                    quality="100"
                    className={clsx(reelImage, ninth)}
                    objectFit="contain"
                    /> */}
                </div>
                {/* <TabletFrame className={clsx(laptopAboveTheFold, aboveTheFoldImage)} /> */}
                {/* <StaticImage
                    alt="Images of the poker analytics tools website"
                    src="../images/easystats/landing-atf.png"
                    loading="eager"
                    className={clsx(aboveTheFoldImage, laptopAboveTheFold)}
                    objectFit="contain"
                /> */}
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
                            <li>Branding</li>
                            <li>Front-end polish</li>
                        </ul>
                        </div>
                        <div className={introContent}>
                        <h1 className={projectName}>
                            Easy Stats <br />
                            <span className="deemphasized">
                            tools for poker players
                            </span>
                        </h1>
                        <p>I was part of a nimble team consisting of a project manager, two full-stack developers, and a junior designer tasked with building a website to sell apps and generate and analyze poker traffic reports. The website targets professional poker players. Our assignment was to construct the website from scratch — from concept to branding to the final product. I served as the lead designer, responsible for creating the branding, design system, and UI. Additionally, I coached the junior designer and assisted with fine-tuning the front-end code.</p>
                        </div>
                    </section>
                    <section className={externalContainer}>
                        <div className={clsx(internalContainer)}>
                            <div className={headerWithParagraph}>
                                <h2 className={clsx(headerTwo)}>
                                Background and scope
                                </h2>
                                <div className={paragraph}>
                                <p>
                                Our team was tasked with creating an e-commerce website for professional poker players. The client specializes in Windows apps and analytics for poker games. The team consisted of a product manager, front-end and backend developers, a junior designer, and myself as the lead product designer, responsible for the product design.</p>
                                <p>We were to build a functional e-commerce solution allowing poker players to purchase and download apps and analytics reports. The project also included developing a logo and branding for the site. Our timeline was three months to conceptualize, gain client approval, and build a responsive website with a landing page and full e-commerce functionality, including user profiles and access to purchased items.</p>
                                </div>
                            </div>
                            <div className={headerWithParagraph}>
                                <h2 className={headerTwo}>
                                    Process
                                </h2>
                                <div className={paragraph}>
                                    <p>
                                    I began by collaborating with the product manager to gather information about the target audience through client Q&A sessions. This resulted in a comprehensive set of notes to guide our work.
                                    </p>
                                    <p>
                                    The initial step involved creating quick wireframes and high-fidelity screens in various styles for client approval of the branding. Once approved, I designed the necessary flows for the app while simultaneously developing a small design system to ensure design coherence and assist front-end developers.
                                    </p>
                                    <p>
                                    As designs for each flow were completed and approved, they were passed to developers for review and implementation. With the core functionality underway, I focused on crafting the landing page, which required the most revisions and time to perfect.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={internalContainer}>
                            <div className={highlights}>
                                <p className={highlight}>
                                    Wireframes. <span className="deemphasized">Given tight timeline, I sketched wireframes on my iPad. The product manager and I then worked on improving these sketches, discussing them with the team to check if everything was doable. We kept adjusting the wireframes until we all agreed they showed the main parts of the website clearly.</span>
                                </p>
                            </div>
                            <div className={images}>
                                <StaticImage
                                    alt="Apps grid wireframe"
                                    src="../images/easystats/wireframe-apps-grid.png"
                                    className={clsx(imageNarrow, image)}
                                    objectFit="contain"
                                />
                                <StaticImage
                                    alt="App info wireframe"
                                    src="../images/easystats/wireframe-app-info.png"
                                    className={clsx(imageNarrow, image)}
                                    objectFit="contain"
                                />
                            </div>
                        </div>
                        <div className={internalContainer}>
                            <div className={rightAligned}>
                                <p className={highlight}>
                                    Branding exploration. The client initially requested a darker tone for the app, but also wanted to see light versions. <span className="deemphasized">I created several design variations, experimenting with different typefaces and graphic elements for both dark and light themes. We presented a range of options, from minimalist to more elaborate styles. Ultimately, the client preferred a tech-oriented dark version, which aligned well with the product's professional nature.</span>
                                </p>
                            </div>
                            <div className={images}>
                                <div className={clsx(imageWide, image, imageContainer)}>
                                    <div className={clsx(imageLabel, "allCaps")}>Exploration</div>
                                    <StaticImage
                                        alt="An image of several screenshots with various branding of the apps grid and app info screens"
                                        src="../images/easystats/branding-options.png"
                                        objectFit="contain"
                                    />
                                </div>
                                <div className={clsx(imageWide, image, imageContainer)}>
                                    <div className={clsx(imageLabel, "allCaps")}>
                                        Final result
                                    </div>
                                    <StaticImage
                                        alt="Apps grid and app info screens in dark colors"
                                        src="../images/easystats/branding-final.png"
                                        objectFit="contain"
                                    />
                                </div>
                                <StaticImage
                                    alt="Image of a sign up page"
                                    src="../images/easystats/branding-sign-up.png"
                                    className={clsx(imageNarrow, image)}
                                    objectFit="contain"
                                />
                                <StaticImage
                                    alt="Image of a handhistory datamining page"
                                    src="../images/easystats/branding-datamining.png"
                                    className={clsx(imageNarrow, image)}
                                    objectFit="contain"
                                />
                                <StaticImage
                                    alt="Image of the page of an app that is not yet available for sale"
                                    src="../images/easystats/branding-app-not-ready.png"
                                    className={clsx(imageNarrow, image)}
                                    objectFit="contain"
                                />
                                <StaticImage
                                    alt="Image of a poker room traffic reports"
                                    src="../images/easystats/branding-traffic-reports.png"
                                    className={clsx(imageNarrow, image)}
                                    objectFit="contain"
                                />
                            </div>
                        </div>
                        <div className={internalContainer}>
                            <div className={leftAligned}>
                                <p className={highlight}>
                                To address responsiveness, we agreed on creating desktop (1440px), tablet (834px), and mobile (375px) versions for each page. <span className="deemphasized">I typically started with the desktop version, then adapted for tablet and mobile, retaining only essential elements for each medium.</span>
                                </p>
                            </div>
                            <div className={images}>
                                <StaticImage
                                    alt="Screenshot of multiple artboards of screens of different sizes"
                                    src="../images/easystats/responsive-figma.png"
                                    className={clsx(imageWide, image)}
                                    objectFit="contain"
                                /> 
                                <StaticImage
                                    alt="Screenshot of the website page on the screen of a laptop"
                                    src="../images/easystats/responsive-desktop.png"
                                    className={clsx(imageNarrow, image)}
                                    objectFit="contain"
                                /> 
                                <StaticImage
                                    alt="Screenshot of the website page on the screens of a tablet and a phone"
                                    src="../images/easystats/responsive-mobile.png"
                                    className={clsx(imageNarrow, image)}
                                    objectFit="contain"
                                /> 
                            </div>
                        </div>
                        <div className={internalContainer}>
                            <div className={rightAligned}>
                                <p className={highlight}>
                                The design system evolved alongside the screen designs. <span className="deemphasized">I extracted reusable elements and tokenized them, aiming for design coherence, easier implementation for developers, and future extensibility for the client. The system included typography, colors, and key UI elements.</span>
                                </p>
                            </div>
                            <div className={images}>
                                <StaticImage
                                    alt="Colors, typography and icons—parts of a design system"
                                    src="../images/easystats/design-system-colors.png"
                                    className={clsx(imageWide, image)}
                                    objectFit="contain"
                                /> 
                                <StaticImage
                                    alt="UI elements—parts of a design system"
                                    src="../images/easystats/design-system-elements.png"
                                    className={clsx(imageWide, image)}
                                    objectFit="contain"
                                /> 
                            </div>
                        </div>
                        <div className={internalContainer}>
                            <div className={leftAligned}>
                                <p className={highlight}>
                                For the landing page, I opted for a bold, contemporary tech aesthetic <span className="deemphasized">to capture the essence of the product.</span>
                                </p>
                            </div>
                            <div className={images}>
                                <StaticImage
                                    alt="Above the fold part of the homepage"
                                    src="../images/easystats/homepage-above-the-fold.png"
                                    className={clsx(imageNarrow, image)}
                                    objectFit="contain"
                                /> 
                                <StaticImage
                                    alt="Bottom part of the homepage"
                                    src="../images/easystats/homepage-bottom.png"
                                    className={clsx(imageNarrow, image)}
                                    objectFit="contain"
                                /> 
                                <div className={clsx(image, imageWide, centered)}>
                                    <video 
                                        className={video} 
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                    >
                                        <source src={HomepageVideo} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
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
                                    Our goal was to declutter the visual noise common in competitor sites while maintaining a wide range of options. The most complex aspect was the hand history datamining feature, which required numerous options and configurations. I proposed a solution that gradually revealed only relevant options to users. 
                                    </p>
                                </div>
                            </div>
                            <div className={images}>
                                <div className={clsx(imageWide, image, imageContainer)}>
                                    <div className={clsx(imageLabel, "allCaps")}>Initial state</div>
                                    <StaticImage
                                        alt="Initial state of hand history datamining flow"
                                        src="../images/easystats/challenge-initial-state.png"
                                        objectFit="contain"
                                    />
                                </div>
                                <div className={clsx(imageWide, image, imageContainer)}>
                                    <div className={clsx(imageLabel, "allCaps")}>Final state</div>
                                    <StaticImage
                                        alt="Final state of hand history datamining flow"
                                        src="../images/easystats/challenge-final-state.png"
                                        objectFit="contain"
                                    />
                                </div>
                                <div className={clsx(image, imageWide, centered)}>
                                    <video 
                                        className={video} 
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                    >
                                        <source src={ChallengeVideo} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
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
                                    We successfully delivered the e-commerce solution to the client within the agreed timeframe, meeting their satisfaction and project requirements.
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

export default Easystats