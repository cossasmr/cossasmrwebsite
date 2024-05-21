import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/ThreeColSimple.js";
import Features2 from "components/features/ThreeColSimple2.js";
import FAQ from "components/faqs/TwoColumnPrimaryBackground.js";


import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import TabGrid from "components/cards/TabCardGrid.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import DownloadApp from "components/cta/DownloadApp.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import '../../src/styles.css'
import TikTokIcon from "images/tiktok.png";
import YoutubeIcon from "images/youtube.png";
import Instagram from "images/instagram.png";
import Pricing from "components/pricing/ThreePlansWithHalfPrimaryBackground.js";
import Header from "../components/headers/light.js";

export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  return (
    <>
    <div className="header-d" style={{ paddingTop:'8px',paddingInline:'2rem', position:'sticky',width:'100%', top:'0px', zIndex:'300', backgroundColor:'white'}}>
  <Header/>
    </div>

    <AnimationRevealPage>
      <Hero
        heading={<>Hi there! <span className="wave">👋🏻</span> <HighlightedText>I'm Coss ASMR.</HighlightedText></>}
        description="An ASMR artist that will help you relax, sleep, reduce stress levels, reduce anxiety and much more..."

        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Custom Videos"
        watchVideoButtonText="Meet The Chefs"
      />
      </AnimationRevealPage>



      <div id="custom-videos" ></div>
      <AnimationRevealPage>

      <TabGrid
        heading={
          <>
            Checkout my <HighlightedText>Custom</HighlightedText> Videos
          </>
        }
      />
      </AnimationRevealPage>
      <div id="social-media"></div>

      <AnimationRevealPage>
      <Features
        heading={
          <>
            My Social <HighlightedText>Media</HighlightedText>
          </>
        }
        cards={[
          {
            imageSrc: YoutubeIcon,
            title: "Youtube",
            description: "Watch my Youtube videos. I upload a new video twice a week!",
            url: "https://youtube.com"
          },
          {
            imageSrc: TikTokIcon,
            title: "Professional Chefs",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            url: "https://timerse.com"
          },
          {
            imageSrc: Instagram,
            title: "Birthday Catering",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            url: "https://reddit.com"
          }
        ]}

        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      />

      </AnimationRevealPage>
      <div id="donations"></div>
      <AnimationRevealPage>
      <Features2

        heading={
          <>
            Donations
          </>
        }
        cards={[
          {
            imageSrc: YoutubeIcon,
            title: "Youtube",
            description: "Watch my Youtube videos. I upload a new video twice a week!",
            url: "https://youtube.com"
          },
          {
            imageSrc: TikTokIcon,
            title: "Professional Chefs",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            url: "https://timerse.com"
          },
          {
            imageSrc: Instagram,
            title: "Birthday Catering",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            url: "https://reddit.com"
          }
        ]}

        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      />
      </AnimationRevealPage>
      <MainFeature2
        subheading={<Subheading>A Reputed Brand</Subheading>}
        heading={<>Why <HighlightedText>Choose Us ?</HighlightedText></>}
        statistics={[
          {
            key: "Orders",
            value: "94000+",
          },
          {
            key: "Customers",
            value: "11000+"
          },
          {
            key: "Chefs",
            value: "1500+"
          }
        ]}
        primaryButtonText="Order Now"
        primaryButtonUrl="https://order.now.com"
        imageInsideDiv={false}
        imageSrc="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEzNzI2fQ&auto=format&fit=crop&w=768&q=80"
        imageCss={Object.assign(tw`bg-cover`, imageCss)}
        imageContainerCss={tw`md:w-1/2 h-auto`}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
        textOnLeft={true}
      />
      {/* <Testimonial
        subheading=""
        heading={<>Customers <HighlightedText>Love Us.</HighlightedText></>}
      /> */}
      <div id="faq"></div>

      <AnimationRevealPage>

      <FAQ />
</AnimationRevealPage>
      {/* <Footer /> */}
    </>
  );
}
