import React from "react"
import Layout from "../components/layout/layout"
import Header from "../components/sections/header"
import Footer from "../components/sections/footer"
import TabletFrame from "../images/easystats/tablet-frame.svg"
import clsx from "clsx"
import { StaticImage } from "gatsby-plugin-image"
import {
    aboveTheFold,
    headerWrapper,
    aboveTheFoldImage,
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
    intro,
    introSummary,
    period,
    roles,
    introContent,
    projectName,
    comment,
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
                            Easy Stats* <br />
                            <span className="deemphasized">
                            tools for poker players
                            </span>
                        </h1>
                        <p>I was part of a nimble team consisting of a project manager, two full-stack developers, and a junior designer tasked with building a website to sell apps and generate and analyze poker traffic reports. The website targets professional poker players. Our assignment was to construct the website from scratch — from concept to branding to the final product. I served as the lead designer, responsible for creating the branding, design system, and UI. Additionally, I coached the junior designer and assisted with fine-tuning the front-end code.</p>
                        <div className={clsx(comment, "deemphasized")}>
                            * The proper case study is in progress.
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