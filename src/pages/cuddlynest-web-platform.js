import React from "react"
import Layout from "../components/layout/layout"
import Header from "../components/sections/header"
import Footer from "../components/sections/footer"
import clsx from "clsx"
import LogoBig from "../svg/cn-logo.svg"
import TypographyImage from "../svg/typography.svg"
import { StaticImage } from "gatsby-plugin-image"
import {
  aboveTheFold,
  aboveTheFoldImage,
  wrapper,
  content,
  intro,
  introSummary,
  period,
  roles,
  introContent,
  projectName,
  comment,
  headerWithParagraph,
  paragraph,
  imageWide,
  highlights,
  imageNarrow,
  images,
  highlight,
  unorderedList,
  image,
  headerTwo,
  leftAligned,
  rightAligned,
  internalContainer,
  externalContainer,
  headerWrapper,
  svgImage,
  svgContainer,
  imageLabel,
  imageContainer,
  typographyImage,
  laptopAboveTheFold,
} from "./styles/case.module.css"

function CuddlynestWeb() {
  return (
    <Layout>
      <div className={aboveTheFold}>
        <div className={headerWrapper}>
          <Header />
        </div>
        <StaticImage
          alt="Image of the laptop with the search field of cuddlynest website"
          src="../images/cuddlynest-web/above-the-fold.png"
          loading="eager"
          className={clsx(aboveTheFoldImage, laptopAboveTheFold)}
          objectFit="contain"
        />
      </div>
      <div className={wrapper}>
        <div className={clsx(content, externalContainer)}>
          <section className={intro}>
            <div className={clsx(introSummary, "allCaps")}>
              <div className={period}>
                2019–2021
              </div>
              <ul className={roles}>
                <li>UI/UX</li>
                <li>Product</li>
                <li>Branding</li>
              </ul>
            </div>
            <div className={introContent}>
              <h1 className={projectName}>
                Cuddlynest* <br />
                <span className="deemphasized">
                  the future of travel
                </span>
              </h1>
              <p>Online travel accommodation startup with a vision to make people's booking experience easy and effortless to focus on their travel (and not care about the accommodation).</p>
              <div className={clsx(comment, "deemphasized")}>
                Due to COVID-19 and various other reasons the product has never launched as intended
              </div>
            </div>
          </section>
          <section className={clsx(externalContainer)}>
            <div className={clsx(internalContainer)}>
              <div className={headerWithParagraph}>
                <h2 className={clsx(headerTwo)}>
                  Product background and my ideas
                </h2>
                <div className={paragraph}>
                  <p>
                    The team has been building the product since 2017. The product is not well defined, lacks intention and in the nutshell is a sum of various online travel agencies (from Airbnb to Booking.com) parts.</p>
                  <p>That was a situation when I was hired in 2019 as a first designer on the team to help with a visual design. As a sole designer in the company I was granted a permission to shape the product however I want.</p>
                  <p>Working closely with CEO I’ve started with outlining the problems the product has:
                  </p>
                  <ul className={unorderedList}>
                    <li>Lack of intention. What are the core values we live by, how do we want to help our users?</li>
                    <li>Lack of focus and uniqueness. Why would anyone picked us instead of competing online travel agencies?</li>
                    <li>Lack of design language and system. No designer prior to me ever worked on a product.</li>
                  </ul>
                </div>
              </div>
              <div className={clsx(images)}>
                <div className={clsx(imageWide, image, imageContainer)}>
                  <div className={clsx(imageLabel, "allCaps")}>
                    Before
                  </div>
                  <StaticImage
                    alt="An image of the old cuddlynest homepage"
                    src="../images/cuddlynest-web/homepage-before.png"
                    objectFit="contain"
                  />
                </div>
                <div className={clsx(imageWide, image, imageContainer)}>
                  <div className={clsx(imageLabel, "allCaps")}>
                    After
                  </div>
                  <StaticImage
                    alt="An image of the old cuddlynest homepage"
                    src="../images/cuddlynest-web/homepage-after.png"
                    objectFit="contain"
                  />
                </div>
              </div>
            </div>
            <div className={clsx(internalContainer)}>
              <div className={highlights}>
                <p className={highlight}>
                  Trip types. <span className="deemphasized">I’ve interviewed my friends and colleagues, and the revelation was that every person had various types of trip, which change the requirements for accommodation. Today she meets with business partner in Singapore, next month goes to Crete with her family for 2 weeks vacation and in three months flies to Mexico with colleagues for company meet up.</span></p>
                <p className={highlight}>
                  Every such trip type is unique and requires different approach. <span className="deemphasized">Though each trip was unique, after several interviews and reflection on my experience I recognized common patterns. Thus I grouped trips into six distinct yet wide enough trip types to accommodate all the experiences.</span>
                </p>
                </div>
              <div className={clsx(images)}>
                <StaticImage
                  alt="An image of the list of trip types"
                  src="../images/cuddlynest-web/trip-types-list.png"
                  className={clsx(imageWide, image)}
                  objectFit="contain"
                />
                <StaticImage
                  alt="An image of search results of a romantic trip in italian riviera"
                  src="../images/cuddlynest-web/romantic-trip-search-results.png"
                  className={clsx(imageNarrow, image)}
                  objectFit="contain"
                />
                <StaticImage
                  alt="An image of trip types list in search pop-up"
                  src="../images/cuddlynest-web/trip-types-search.png"
                  className={clsx(imageNarrow, image)}
                  objectFit="contain"
                />
              </div>
            </div>
            <div className={clsx(internalContainer)}>
              <div className={clsx(rightAligned)}>
                <p className={highlight}>
                  Easily reachable omnisearch with built-in natural language processing <span className="deemphasized">and no specific information required to start the search. People should be able to talk to computer in human language, it's a job of a computer to translate it.</span>
                </p>
              </div>
              <div className={clsx(images)}>
                <StaticImage
                  alt="An image of omnisearch pop-up on the homepage of cuddlynest website"
                  src="../images/cuddlynest-web/omnisearch.png"
                  className={clsx(imageWide, image)}
                  objectFit="contain"
                />
              </div>
            </div>
            <div className={clsx(internalContainer)}>
              <div className={clsx(leftAligned)}>
                <p className={highlight}>
                  Search may be as precise or as vague as traveller wants. <span className="deemphasized">Product understands and respects that people have different trip types ahead, they are on a different stage of their journey planning. At any moment traveller may add or remove details to their accommodation search.</span>
                </p>
              </div>
              <div className={clsx(images)}>
                <StaticImage
                  alt="An image of an empty search pop-up"
                  src="../images/cuddlynest-web/search-empty.png"
                  className={clsx(imageNarrow, image)}
                  objectFit="contain"
                />
                <StaticImage
                  alt="An image of search pop-up with search term in natural language"
                  src="../images/cuddlynest-web/search-natural-language.png"
                  className={clsx(imageNarrow, image)}
                  objectFit="contain"
                />
                <StaticImage
                  alt="An image of search results in South East Asia for digital nomad trip"
                  src="../images/cuddlynest-web/search-results-digital-nomad.png"
                  className={clsx(imageWide, image)}
                  objectFit="contain"
                />
              </div>
            </div>
            <div className={clsx(internalContainer)}>
              <div className={clsx(rightAligned)}>
                <p className={highlight}>
                  Everything is in it’s right place. <span className="deemphasized">Whether traveller or property owner interface is designed to show the actions that person most likely want to use at the moment.</span>
                </p>
              </div>
              <div className={clsx(images)}>
                <StaticImage
                  alt="An image of FAQ and listing details pages"
                  src="../images/cuddlynest-web/everything-faq-and-ldp.png"
                  className={clsx(imageWide, image)}
                  objectFit="contain"
                />
                <StaticImage
                  alt="An image of commute section in the process of property listing"
                  src="../images/cuddlynest-web/commute-section.png"
                  className={clsx(imageNarrow, image)}
                  objectFit="contain"
                />
                <StaticImage
                  alt="An image of dashboard widgets"
                  src="../images/cuddlynest-web/widgets.png"
                  className={clsx(imageNarrow, image)}
                  objectFit="contain"
                />
                <StaticImage
                  alt="An image of chat with an accommodation page"
                  src="../images/cuddlynest-web/chat-with-accommodation.png"
                  className={clsx(imageWide, image)}
                  objectFit="contain"
                />
                <StaticImage
                  alt="An image of location section on listing details page"
                  src="../images/cuddlynest-web/ldp-location.png"
                  className={clsx(imageWide, image)}
                  objectFit="contain"
                />
                <StaticImage
                  alt="An image of guest dashboard"
                  src="../images/cuddlynest-web/dashboard.png"
                  className={clsx(imageNarrow, image)}
                  objectFit="contain"
                />
                <StaticImage
                  alt="An image of guest's saved lists"
                  src="../images/cuddlynest-web/lists.png"
                  className={clsx(imageNarrow, image)}
                  objectFit="contain"
                />
              </div>
            </div>
            <div className={clsx(internalContainer)}>
              <div className={clsx(leftAligned)}>
                <p className={highlight}>
                  Fully responsive. <span className="deemphasized">Designed to be easy to use on whatever screen size person has—mobile, tablet, desktop.</span>
                </p>
              </div>
              <div className={clsx(images)}>
                <StaticImage
                  alt="An image of search results page on desktop, tablet and mobile devices"
                  src="../images/cuddlynest-web/responsive-three-devices.png"
                  className={clsx(imageWide, image)}
                  objectFit="contain"
                />
                <StaticImage
                  alt="An image of reservation confirmation on desktop computer"
                  src="../images/cuddlynest-web/responsive-desktop.png"
                  className={clsx(imageWide, image)}
                  objectFit="contain"
                />
                <StaticImage
                  alt="An image of availability section of property listing process on tablet device"
                  src="../images/cuddlynest-web/responsive-ipad.png"
                  className={clsx(imageNarrow, image)}
                  objectFit="contain"
                />
                <StaticImage
                  alt="An image of geopage on mobile device"
                  src="../images/cuddlynest-web/responsive-mobile.png"
                  className={clsx(imageNarrow, image)}
                  objectFit="contain"
                />
              </div>
            </div>
          </section>
          <section className={clsx(externalContainer)}>
            <div className={internalContainer}>
              <div className={headerWithParagraph}>
                <h2 className={clsx(headerTwo)}>
                  Branding*
                </h2>
                <div className={paragraph}>
                  <p>
                    It should have been a product for international audience and the high variety of users—from students, to adults, to retired people.
                  </p>
                  <p>
                    Founders had a special affection to the purple and pink colors, which I couldn't touch, other than that I had the freedom of shaping the brand however I like.
                  </p>
                  <p>
                    I wanted the product to feel approachable, down-to-earth, imputing travel, exploration and joy. I've tried to achieve that via typography, colors, imagery and copy (with the help of copywriters of course).
                  </p>
                  <p className={clsx(comment, "deemphasized")}>
                    I’m not a brand designer, but I had to be the one on this project being the only designer on the team
                  </p>
                </div>
              </div>
            </div>
            <div className={clsx(internalContainer)}>
              <div className={clsx(rightAligned)}>
                <p className={highlight}>
                  Logo. <span className="deemphasized">The logo was too complicated with many fine details that looked messy in smaller sizes. I've simplified it and changed the logo word.</span>
                </p>
              </div>
              <div className={clsx(images)}>
                <div className={clsx(imageNarrow, image, imageContainer)}>
                  <div className={clsx(imageLabel, "allCaps")}>
                    Before
                  </div>
                  <StaticImage
                    alt="An image of the old cuddlynest logotype"
                    src="../images/cuddlynest-web/cn-logo-old.png"
                    objectFit="contain"
                  />
                </div>
                <div className={clsx(imageNarrow, image, imageContainer)}>
                  <div className={clsx(imageLabel, "allCaps")}>
                    After
                  </div>
                  <div className={svgContainer}>
                    <LogoBig className={svgImage} />
                  </div>
                </div>
              </div>
            </div>
            <div className={clsx(internalContainer)}>
              <div className={clsx(leftAligned)}>
                <p className={highlight}>
                  Typography. <span className="deemphasized">I needed something approachable, friendly and modern. Besides selected type should work in both big and small sizes, in interfaces and branding. I've picked Fira Sans — versatile humanist open-source typeface created by Erik Spiekermann. The typeface looks more humane than widely used grotesques, it is free, well designed and supports many languages. Typeface works in display, text and micro sizes (with slight letter spacing adjustments).</span>
                </p>
              </div>
              <div className={clsx(images)}>
                <div className={clsx(imageWide, image)}>
                  <div className={svgContainer}>
                    <TypographyImage className={clsx(svgImage, typographyImage)} />
                  </div>
                </div>
                <StaticImage
                  alt="An image of the geopage with the short description of Perth, it's map and weather fluctuations over the year"
                  src="../images/cuddlynest-web/typography-geopage.png"
                  className={clsx(imageNarrow, image)}
                  objectFit="contain"
                />
                <StaticImage
                  alt="An image of three cards with the city names and quotes"
                  src="../images/cuddlynest-web/cities-cards.png"
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

export default CuddlynestWeb
