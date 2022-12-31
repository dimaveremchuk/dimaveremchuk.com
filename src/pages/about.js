import React from "react"
import Layout from "../components/layout/layout"
import Header from "../components/sections/header"
import Footer from "../components/sections/footer"
import HeartIcon from "../svg/heart-icon.svg"
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
                    My path to design is unusual. I’ve spent first 10 years of my professional life as a finance and business consultant. Studying business theories and observing how various companies work I got a strong sense of obsession with
                  </p>
                  <p>
                    I’ve always been obsessed with digital world—from school when I started to use various computer programs to play with 3D, web-design and programming.
                  </p>
                  <p>
                    Finally in 2018 I decided to try helping companies not with their numbers and advices, but with what I loved the most—digital products. I quit my job and with my wife and daughter went to South-East Asia for six months. There I started to take freelance design projects and found my first full-time product design job.
                  </p>
                  <p>
                    With the product design being my core activity and passion, I tinker with iOS native development, 3D design, front-end development and graphic design.
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
                    Help building tiny utility apps for mobile. iPhone, iPad, Android phones and tablets.
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
                    Building the platform for the future accommodation booking. Travel is for everyone.
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
                <p>This website is built with HTML, CSS and React on top of gatsby.js.</p>
                <p>
                  Typeface used is Antarctica by newglyph.
                </p>
                <p>
                  Hosted at linode.
                </p>
                <p>
                  Designed and built by me (:
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
