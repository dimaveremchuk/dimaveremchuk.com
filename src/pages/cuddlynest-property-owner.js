import React from "react"
import Layout from "../components/layout/layout"
import Header from "../components/sections/header"
import Footer from "../components/sections/footer"
import clsx from "clsx"
import { StaticImage } from "gatsby-plugin-image"
import { useMediaPredicate } from "react-media-hook"
import DashboardVideo from "../images/cuddlynest-property-owners/actionable-dashboard.mp4"
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
leftAligned,
rightAligned,
images,
image,
imageWide,
imageNarrow,
video,
centered,
aboveTheFoldImage,
laptopAboveTheFold,
} from "./styles/case.module.css"

export default function CuddlynestPropertyOwner() {
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
                src="../../cuddlynest-property-owner.png"
                alt="Image of the laptop with the property owner dashboard interface"
                />
            </div>
            <div className={wrapper}>
                <div className={clsx(content, externalContainer)}>
                    <section className={intro}>
                        <div className={clsx(introSummary, "allCaps")}>
                            <div className={period}>
                                2020
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
                                    property owner interface
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
                                    Cuddlynest, an online travel agency, needed a new interface for property owners to list and manage their properties. The existing interface was developer-built and overly complex. The project involved:
                                    </p>
                                    <ul className={unorderedList}>
                                        <li>Redesigning the property listing flow</li>
                                        <li>Creating a manageable dashboard for property owners</li>
                                        <li>Developing responsive designs for desktop (1440px), tablet (768px), and mobile (375px)</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={headerWithParagraph}>
                                <h2 className={headerTwo}>
                                    Process
                                </h2>
                                <div className={paragraph}>
                                    <ul className={unorderedList}>
                                        <li>Interviewed Product Owner to understand different types of property owners</li>
                                        <li>Developed a concept of progressive disclosure and step-by-step saving</li>
                                        <li>Discussed and got approval from Product Owner</li>
                                        <li>Designed the interface, constantly communicating with backend developers for feasibility</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={internalContainer}>
                            <div className={leftAligned}>
                                <p className={highlight}>
                                <span className="deemphasized">I conducted in-depth discussions with the Product Owner to understand the diverse range of property owners using our platform. This helped me create </span>user personas, from individual apartment owners to large hotel chains.
                                </p>
                            </div>
                            <div className={images}>
                                { preferredTheme == 'dark' ? 
                                    <StaticImage
                                        alt="Property owner types"
                                        src="../images/cuddlynest-property-owners/property-owner-types-dark.png"
                                        className={clsx(imageWide, image)}
                                        objectFit="contain"
                                    /> :
                                    <StaticImage
                                        alt="Property owner types"
                                        src="../images/cuddlynest-property-owners/property-owner-types-light.png"
                                        className={clsx(imageWide, image)}
                                        objectFit="contain"
                                    /> 
                                }
                            </div>
                        </div>
                        <div className={internalContainer}>
                            <div className={rightAligned}>
                                <p className={highlight}>
                                I created a concept that gradually revealed information and options to users as they progressed through the listing process. <span className="deemphasized">This approach aimed to reduce overwhelming users with too much information at once.</span>
                                </p>
                            </div>
                            <div className={images}>
                                <StaticImage
                                    alt="List new property flow progressive disclosure wireframe"
                                    src="../images/cuddlynest-property-owners/wireframe-list-new-property.png"
                                    className={clsx(imageNarrow, image)}
                                    objectFit="contain"
                                />  
                                <StaticImage
                                    alt="Dashboard wireframe"
                                    src="../images/cuddlynest-property-owners/wireframe-dashboard.png"
                                    className={clsx(imageNarrow, image)}
                                    objectFit="contain"
                                />  
                            </div>
                        </div>
                        <div className={internalContainer}>
                            <div className={leftAligned}>
                                <p className={highlight}>
                                I created wireframes and high-fidelity mockups for each step of the listing process and the dashboard. <span className="deemphasized">Throughout the design phase, I maintained constant communication with backend developers to ensure technical feasibility.</span>
                                </p>
                            </div>
                            <div className={images}>
                                <StaticImage
                                    alt="First step of listing new property"
                                    src="../images/cuddlynest-property-owners/design-list-new-property.png"
                                    className={clsx(imageWide, image)}
                                    objectFit="contain"
                                />  
                                <StaticImage
                                    alt="Message view"
                                    src="../images/cuddlynest-property-owners/design-message.png"
                                    className={clsx(imageNarrow, image)}
                                    objectFit="contain"
                                />  
                                <StaticImage
                                    alt="Settings page"
                                    src="../images/cuddlynest-property-owners/design-settings.png"
                                    className={clsx(imageNarrow, image)}
                                    objectFit="contain"
                                />  
                                <StaticImage
                                    alt="Rules page in the new property listing flow"
                                    src="../images/cuddlynest-property-owners/design-rules.png"
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
                                    Challenges
                                </h2>
                                <div className={paragraph}>
                                    <p>
                                    The biggest challenge was creating an interface that would work for a diverse range of property owners. We needed to cater to small-scale owners renting out a single apartment during their vacation, as well as large hotel chains listing hundreds of accommodations across multiple online travel agencies.
                                    </p>
                                    <p>
                                    Our backend system allowed integration with APIs of major hotel management software used by our larger clients. This enabled automatic import and synchronization of their listings with all the necessary details. My task was to design an interface that could display this imported data effectively while still allowing for manual edits when needed.
                                    </p>
                                    <p>
                                    Another significant challenge was striking a balance between a clean, focused interface and providing power users with easy access to advanced features. We wanted to avoid cluttering the interface while still allowing for detailed customization of listings.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={internalContainer}>
                            <div className={highlights}>
                                <p className={highlight}>
                                In the new property listing flow, I addressed these challenges by implementing a step-by-step process. <span className="deemphasized">This approach only asked for necessary information at each stage, preventing user overwhelm. Additionally, we allowed users to save their progress at any point and return later, providing flexibility for both casual and power users.</span>
                                </p>
                            </div>
                            <div className={images}>
                                <StaticImage
                                    alt="First step of listing new property"
                                    src="../images/cuddlynest-property-owners/new-listing-first.png"
                                    className={clsx(imageWide, image)}
                                    objectFit="contain"
                                />  
                                <StaticImage
                                    alt="Setting up facilities in the property in the listing flow"
                                    src="../images/cuddlynest-property-owners/new-listing-second.png"
                                    className={clsx(imageWide, image)}
                                    objectFit="contain"
                                />  
                                <StaticImage
                                    alt="Setting up pricing in the property in the listing flow"
                                    src="../images/cuddlynest-property-owners/new-listing-third.png"
                                    className={clsx(imageNarrow, image)}
                                    objectFit="contain"
                                />  
                                <StaticImage
                                    alt="Setting up availability in the property in the listing flow"
                                    src="../images/cuddlynest-property-owners/new-listing-fourth.png"
                                    className={clsx(imageNarrow, image)}
                                    objectFit="contain"
                                />  
                            </div>
                        </div>
                        <div className={internalContainer}>
                            <div className={highlights}>
                                <p className={highlight}>
                                In the property management dashboard, I implemented a two-tiered navigation system to manage complexity. <span className="deemphasized">The main navigation at the top allowed switching between major sections, while a context-sensitive local navigation on the left provided quick access to specific details. This structure organized large amounts of data effectively, benefiting users managing multiple properties by allowing easy access to information without losing context.</span>
                                </p>
                            </div>
                            <div className={images}>
                                <StaticImage
                                    alt="Property listing dashboard"
                                    src="../images/cuddlynest-property-owners/navigation.png"
                                    className={clsx(imageWide, image)}
                                    objectFit="contain"
                                />   
                                <StaticImage
                                    alt="Profile settings"
                                    src="../images/cuddlynest-property-owners/navigation-profile.png"
                                    className={clsx(imageWide, image)}
                                    objectFit="contain"
                                />   
                            </div>
                        </div>
                        <div className={internalContainer}>
                            <div className={rightAligned}>
                                <p className={highlight}>
                                Clear information architecture<span className="deemphasized"> with single-point focus for users</span>
                                </p>
                            </div>
                            <div className={images}>
                                <StaticImage
                                    alt="Listings dashboard"
                                    src="../images/cuddlynest-property-owners/focus-listings-dashboard.png"
                                    className={clsx(imageNarrow, image)}
                                    objectFit="contain"
                                />  
                                <StaticImage
                                    alt="Get paid page"
                                    src="../images/cuddlynest-property-owners/focus-get-paid.png"
                                    className={clsx(imageNarrow, image)}
                                    objectFit="contain"
                                />  
                            </div>
                        </div>
                        <div className={internalContainer}>
                            <div className={leftAligned}>
                                <p className={highlight}>
                                <span className="deemphasized">Dashboard with only </span>actionable elements
                                </p>
                            </div>
                            <div className={images}>
                                <div className={clsx(image, imageWide, centered)}>
                                    <video 
                                        className={video} 
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                    >
                                        <source src={DashboardVideo} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                                <StaticImage
                                    alt="New listing options"
                                    src="../images/cuddlynest-property-owners/actionable-new-options.png"
                                    className={clsx(imageNarrow, image)}
                                    objectFit="contain"
                                />  
                                <StaticImage
                                    alt="Listing details management page"
                                    src="../images/cuddlynest-property-owners/actionable-listing-details.png"
                                    className={clsx(imageNarrow, image)}
                                    objectFit="contain"
                                />  
                            </div>
                        </div>
                        <div className={internalContainer}>
                            <div className={rightAligned}>
                                <p className={highlight}>
                                Responsive design <span className="deemphasized">prioritizing crucial actions</span>
                                </p>
                            </div>
                            <div className={images}>
                                <StaticImage
                                    alt="Listing location desktop page"
                                    src="../images/cuddlynest-property-owners/responsive-desktop.png"
                                    className={clsx(imageWide, image)}
                                    objectFit="contain"
                                />   
                                <StaticImage
                                    alt="Listing location tablet page"
                                    src="../images/cuddlynest-property-owners/responsive-tablet.png"
                                    className={clsx(imageNarrow, image)}
                                    objectFit="contain"
                                />   
                                <StaticImage
                                    alt="Listing location mobile page"
                                    src="../images/cuddlynest-property-owners/responsive-mobile.png"
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
                                    <p>
                                    This redesign significantly improved the user experience for property owners, making the listing process more intuitive and manageable across different user types and device sizes. 
                                    </p>
                                    <ul className={unorderedList}>
                                        <li>Bounce rate for property owners creating listings decreased by more than&#xa0;50%</li>
                                        <li>Received positive feedback from property owners</li>
                                    </ul>
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