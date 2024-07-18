import React from "react"
import Layout from "../components/layout/layout"
import Header from "../components/sections/header"
import Footer from "../components/sections/footer"
import { StaticImage } from "gatsby-plugin-image"
import clsx from "clsx"
import TripTypesVideo from "../images/cuddlynest-omnisearch/trip-types.mp4"
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
centered,
video,
imageNarrow,
aboveTheFoldImage,
laptopAboveTheFold,
} from "./styles/case.module.css"

export default function CuddlynestPropertyOwner() {
    return (
        <Layout>
            <div className={aboveTheFold}>
                <div className={headerWrapper}>
                    <Header />
                </div>
                <img
                className={clsx(aboveTheFoldImage, laptopAboveTheFold)}
                loading="eager"
                src="../../cuddlynest-omnisearch.png"
                alt="Image of the laptop with the search field of cuddlynest website"
                />
            </div>
            <div className={wrapper}>
                <div className={clsx(content, externalContainer)}>
                    <section className={intro}>
                        <div className={clsx(introSummary, "allCaps")}>
                            <div className={period}>
                                2021
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
                                   new omnisearch
                                </span>
                            </h1>
                        </div>
                    </section>
                    <section className={externalContainer}>
                        <div className={internalContainer}>
                            <div className={headerWithParagraph}>
                                <h2 className={headerTwo}>
                                Background and scope
                                </h2>
                                <div className={paragraph}>
                                    <p>
                                    The existing Cuddlynest homepage was overcrowded with various proposed destinations, accommodation types, and other elements, resulting in a high bounce rate. Users were likely overwhelmed by the abundance of options and struggled to find what they needed quickly.
                                    </p>
                                    <p>
                                    I was assigned the task of reimagining the homepage experience to create a more focused and user-friendly interface. The primary goal was to simplify the process of finding accommodation for visitors landing on our homepage, thereby reducing the bounce rate and improving overall user engagement. 
                                    </p>
                                </div>
                            </div>
                            <div className={headerWithParagraph}>
                                <h2 className={headerTwo}>
                                    Process
                                </h2>
                                <div className={paragraph}>
                                <p>
                                I began by conducting informal research, reflecting on my personal experiences with booking accommodations. To broaden my perspective, I interviewed colleagues and friends about their travel planning processes. This helped me gather diverse insights into how different people approach finding accommodations.
                                </p>
                                <p>
                                Through my research, I identified six distinct trip types that significantly influence accommodation requirements. Each trip type came with its own set of priorities and needs, which I noted to inform the design.
                                </p>
                                <p>
                                Based on these insights, I developed the concept of building the accommodation search around these trip types. The idea was to provide a framework broad enough to cover all possible scenarios yet specific enough to help travelers quickly identify their needs.
                                </p>
                                <p>
                                I created rough sketches to visualize how this concept would work in practice. These sketches helped me explore different layouts and user flows before committing to a more detailed design.
                                </p>
                                <p>Once I was satisfied with the basic concept, I moved on to creating high-fidelity designs. These designs included detailed mockups of the omnisearch interface, showing how it would look and function.</p>
                                </div>
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
                                        <source src={TripTypesVideo} type="video/mp4" />
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
                                    Design details and implementation
                                </h2>
                            </div>
                        </div>
                        <div className={internalContainer}>
                            <div className={rightAligned}>
                                <p className={highlight}>
                                Instead of a traditional, rigid search form, I proposed an omnisearch bar that could process natural language inputs. <span className="deemphasized">This approach aimed to make the search process less intimidating and more intuitive for users.</span>
                                </p>
                            </div>
                            <div className={images}>
                                <StaticImage
                                    alt="Omnisearch with natural language input"
                                    src="../images/cuddlynest-omnisearch/natural-language-input.png"
                                    className={clsx(imageWide, image)}
                                    objectFit="contain"
                                />  
                                <StaticImage
                                    alt="Destinations suggestion in omnisearch"
                                    src="../images/cuddlynest-omnisearch/natural-language-destinations.png"
                                    className={clsx(imageNarrow, image)}
                                    objectFit="contain"
                                />  
                                <StaticImage
                                    alt="Trip types in omnisearch"
                                    src="../images/cuddlynest-omnisearch/natural-language-trip-types.png"
                                    className={clsx(imageNarrow, image)}
                                    objectFit="contain"
                                />  
                            </div>
                        </div>
                        <div className={internalContainer}>
                            <div className={leftAligned}>
                                <p className={highlight}>
                                The omnisearch was designed to handle both vague and precise queries. <span className="deemphasized">For example, it could process inputs ranging from "beach vacation next month" to "5-star hotel in Paris with a pool for next weekend."</span>
                                </p>
                            </div>
                            <div className={images}>
                                <StaticImage
                                    alt="Precise search query"
                                    src="../images/cuddlynest-omnisearch/query-precise.png"
                                    className={clsx(imageWide, image)}
                                    objectFit="contain"
                                />  
                                <StaticImage
                                    alt="Vague search query"
                                    src="../images/cuddlynest-omnisearch/query-vague.png"
                                    className={clsx(imageWide, image)}
                                    objectFit="contain"
                                />  
                            </div>
                        </div>
                        <div className={internalContainer}>
                            <div className={rightAligned}>
                                <p className={highlight}>
                                The search function was designed to take into account the user's location (with permission) to provide more relevant suggestions. <span className="deemphasized">For instance, a user in New York might see different suggestions compared to a user in Tokyo.</span>
                                </p>
                            </div>
                            <div className={images}>
                                <StaticImage
                                    alt="Location based suggestions"
                                    src="../images/cuddlynest-omnisearch/location.png"
                                    className={clsx(imageWide, image)}
                                    objectFit="contain"
                                /> 
                            </div>
                        </div>
                        <div className={internalContainer}>
                            <div className={leftAligned}>
                                <p className={highlight}>
                                The interface included subtle cues and suggestions, <span className="deemphasized">helping users frame their searches more effectively.</span>
                                </p>
                            </div>
                            <div className={images}>
                                <StaticImage
                                    alt="Suggestions in empty search field"
                                    src="../images/cuddlynest-omnisearch/suggestions-empty.png"
                                    className={clsx(imageNarrow, image)}
                                    objectFit="contain"
                                />  
                                <StaticImage
                                    alt="Suggestions about activities"
                                    src="../images/cuddlynest-omnisearch/suggestions-activities.png"
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
                                    Result
                                </h2>
                                <div className={paragraph}>
                                    <p>
                                    While the team was excited about the concept, the full implementation proved to be too ambitious for immediate execution due to technological constraints. However, several key elements from the design were selected for implementation:
                                    </p>
                                    <ul className={unorderedList}>
                                        <li>A more prominent search bar was implemented, though not the full natural language processing capabilities initially envisioned.</li>
                                        <li>The concept of trip types was incorporated into the search process, albeit in a more structured form than the original omnisearch idea.</li>
                                    </ul>
                                    <p>
                                    These changes led to a noticeable decrease in bounce rate and an increase in successful searches. The project also set the stage for future improvements, with the full omnisearch concept remaining a long-term goal for the product team. 
                                    </p>
                                    <p>
                                    The experience highlighted the importance of balancing innovative design ideas with current technological capabilities and resource constraints. It also demonstrated the value of comprehensive user research in driving design decisions, even when the final implementation differs from the initial concept. 
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