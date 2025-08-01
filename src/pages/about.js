import React from "react"
import Layout from "../components/layout/layout"
import Header from "../components/sections/header"
import Footer from "../components/sections/footer"
import { SEO } from "../components/seo"
import HeartIcon from "../svg/heart-icon.svg"
import { Link } from "gatsby"
import clsx from "clsx"
import { StaticImage } from "gatsby-plugin-image"
import {
  wrapper,
  content,
  aboutContent,
  path,
  experience,
  website,
  photo,
  emphasized,
  workPlaces,
  workPlace,
  role,
  period,
  description,
  smallerHeader,
  pathContent,
  h2Header,
  employer,
  pathText,
  websiteDescription,
  loveText,
  heartIcon,
  webLink,
  aboveTheFold,
  profileImage,
} from "./styles/about.module.css"

function AboutPage() {
  return (
    <Layout>
      <div className={wrapper}>
        <div className={content}>
          <Header />
          <div className={aboveTheFold}>
            <h1 className={smallerHeader}>I'm a curious digital designer<span className="deemphasized">, who enjoys drawing rectangles, bending vectors, coding, and delving into business theories.</span></h1>
            <div className={photo}>
              <img
                className={profileImage}
                src="../../profile-image.png"
                alt="Profile image of Dima Veremchuk"
              />
            </div>
            {/* <StaticImage
              alt="Dima Veremchuk profile image"
              src="../images/about/profile-image.png"
              className={photo}
              objectFit="contain"
              loading="eager"
            /> */}
          </div>
          <div className={aboutContent}>
            <section className={path}>
              <h2 className={clsx(h2Header, "allCaps deemphasized")}>My path</h2>
                <div className={pathText}>
                  <p>
                  My journey into design has been unconventional. For the first ten years of my professional life, I worked as a finance and business consultant. Immersed in studying business theories and observing various companies, I gained insight into what drives businesses and how they cater to their customers.
                  </p>
                  <p>
                  My fascination with the digital world began early, during my school years, when I first experimented with various computer programs, exploring 3D design, web design, and programming. Later in life, I would spend hours discerning the best-designed software and apps.
                  </p>
                  <p>
                  In 2018, I made a pivotal decision to shift my focus from advising companies on their financials to leveraging my long-held passion for digital products. I left my job and embarked on a six-month journey to South-East Asia to recharge and immerse myself in the world of product design. There, I began taking on freelance design projects and secured my first full-time product design role.
                  </p>
                  <p>
                  With product design as my primary expertise and passion, I also dabble in front-end development, iOS native development, graphic design, and 3D.
                  </p>
                  <p className={clsx(emphasized, loveText)}>
                    I&nbsp;love&nbsp;what&nbsp;I&nbsp;do
                    <HeartIcon className={heartIcon} />
                  </p>
                </div>
            </section>
            <section className={experience}>
              <h2 className={clsx(h2Header, "allCaps deemphasized")}>Experience</h2>
              <div className={workPlaces}>
                <div className={workPlace}>
                  <h3 className={role}>Product designer at Jitera</h3>
                  <div className={clsx(period, "deemphasized")}>
                    2024–now
                  </div>
                  <div className={clsx(description, "deemphasized")}>
                    Designing interfaces and building design system for AI documentation platform.
                  </div>
                </div>
                <div className={workPlace}>
                  <h3 className={role}>Product designer at Sentio</h3>
                  <div className={clsx(period, "deemphasized")}>
                    2021–2024
                  </div>
                  <div className={clsx(description, "deemphasized")}>
                    Designing simple utility apps for mobile—iPhone, iPad, Android phones and tablets.
                  </div>
                </div>
                <div className={workPlace}>
                  <h3 className={role}>UX/UI designer at Whitespectre</h3>
                  <div className={clsx(period, "deemphasized")}>
                    2023–2023
                  </div>
                  <div className={clsx(description, "deemphasized")}>
                    Designing interfaces for web apps.
                  </div>
                </div>
                <div className={workPlace}>
                  <h3 className={role}>Designer at Cuddlynest</h3>
                  <div className={clsx(period, "deemphasized")}>
                    2019–2021
                  </div>
                  <div className={clsx(description, "deemphasized")}>
                    Designing and shaping the platform for the future of the accommodation booking.
                  </div>
                </div>
                <div className={workPlace}>
                  <h3 className={role}>Digital designer freelancing</h3>
                  <div className={clsx(period, "deemphasized")}>
                    2018–2020
                  </div>
                  <div className={clsx(description, "deemphasized")}>
                    Various web and mobile design projects
                  </div>
                </div>
              </div>
            </section>
            <section className={website}>
              <h2 className={clsx(h2Header, "allCaps deemphasized")}>This website</h2>
              <div className={websiteDescription}>
                <p>This website is built with React on top of&nbsp;
                  <Link className={webLink} to="https://www.gatsbyjs.com/">
                    Gatsby
                  </Link>
                  .
                </p>
                <p>
                  Typeface used is Antarctica by&nbsp;
                  <Link className={webLink} to="https://newglyph.com/">
                    newglyph
                  </Link>
                  .
                </p>
                <p>
                  Hosted at&nbsp;
                  <Link className={webLink} to="https://www.linode.com/">
                    linode
                  </Link>
                  .
                </p>
                <p>
                  Designed and built <span className="deemphasized badStuff">with a bunch of spaghetti code </span>by me 🫣
                </p>
              </div>
            </section>
          </div>
          <Footer />
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage

export const Head = () => (
  <SEO title="About" />
)