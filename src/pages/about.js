import React from "react"
import Layout from "../components/layout/layout"
import Header from "../components/sections/header"
import Footer from "../components/sections/footer"
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
} from "./styles/about.module.css"

function AboutPage() {
  return (
    <Layout>
      <div className={wrapper}>
        <div className={content}>
          <Header />
          <h1 className={smallerHeader}>I work at the intersection of product and visual design, <span className="deemphasized">bringing sense and aesthetics to the digital world.</span></h1>
          <StaticImage
            alt="Dima Veremchuk profile image"
            src="../images/about/profile-image.png"
            className={photo}
            objectFit="contain"
            loading="eager"
          />
          <div className={aboutContent}>
            <section className={path}>
              <h2 className={clsx(h2Header, "allCaps deemphasized")}>My path</h2>
                <div className={pathText}>
                  <p>
                    My path to design is unusual. I’ve spent first 10 years of my professional life as a finance and business consultant. Studying business theories and observing how various companies work I got a sense of what makes businesses tick and how they serve their customers.
                  </p>
                  <p>
                    I’ve always been obsessed with digital world—from school when I started to use various computer programs to play with 3D, web-design and programming, to later in life spending hours picking the best designed software and apps.
                  </p>
                  <p>
                    Finally in 2018 I decided to try helping companies not with their numbers and consulting on how to thrive, but with what I obsessed about for so much time—digital products. I quit my job and with my wife and daughter went to South-East Asia for six months to recharge and try to put my foot into the door of the product design world. There I started to take freelance design projects and found my first full-time product design job.
                  </p>
                  <p>
                    With the product design being my core competence and passion, I tinker with iOS native development, front-end development, graphic design and 3D.
                  </p>
                  <p className={clsx(emphasized, loveText)}>
                    I love what I do
                    <HeartIcon className={heartIcon} />
                  </p>
                </div>
            </section>
            <section className={experience}>
              <h2 className={clsx(h2Header, "allCaps deemphasized")}>Experience</h2>
              <div className={workPlaces}>
                <div className={workPlace}>
                  <h3 className={employer}>Sentio</h3>
                  <div className={role}>
                    Product designer
                  </div>
                  <div className={clsx(period, "deemphasized")}>
                    2021–now
                  </div>
                  <div className={description}>
                    Design simple utility apps for mobile—iPhone, iPad, Android phones and tablets.
                  </div>
                </div>
                <div className={workPlace}>
                  <h3 className={employer}>Cuddlynest</h3>
                  <div className={role}>
                    Designer
                  </div>
                  <div className={clsx(period, "deemphasized")}>
                    2019–2021
                  </div>
                  <div className={description}>
                    Designing and shaping the platform for the future of the accommodation booking.
                  </div>
                </div>
                <div className={workPlace}>
                  <h3 className={employer}>Freelance</h3>
                  <div className={role}>
                    Digital designer
                  </div>
                  <div className={clsx(period, "deemphasized")}>
                    2018–2020
                  </div>
                  <div className={description}>
                    Various web and mobile design projects
                  </div>
                </div>
              </div>
            </section>
            <section className={website}>
              <h2 className={clsx(h2Header, "allCaps deemphasized")}>This website</h2>
              <div className={websiteDescription}>
                <p>This website is built with HTML, CSS and React on top of&nbsp;
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
                  Designed and built <span className="deemphasized badStuff">with a bunch of spaghetti code </span>by me (:
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
