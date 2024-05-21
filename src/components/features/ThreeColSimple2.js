import React from "react";
import styled from "styled-components";
import '../../../src/styles.css'
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { ReactComponent as ArrowRightIcon } from "images/arrow-right-icon.svg";
import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomizeIconImage from "images/customize-icon.svg";
import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";
import CashApp from "images/cashapp.png";
import Amazon from "images/amazon2.png";
import Venmo from "images/venmo.png";
const Heading = tw(SectionHeading)``;
const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Description = tw(SectionDescription)`text-center mx-auto`;
const ThreeColumnContainer = styled.div`
  ${tw`mt-3 flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap lg:justify-center max-w-screen-lg mx-auto`}
`;
const Column = styled.div`
  ${tw`lg:w-1/3 max-w-xs`}
`;
const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-1 transform -skew-x-12 inline-block`;

const Card = styled.a`
  ${tw`flex flex-col items-center text-center h-full mx-4 px-4 py-4 rounded transition-transform duration-300 hover:cursor-pointer transform hover:scale-105 `}
  .imageContainer {
    ${tw`text-center rounded-full p-4 bg-gray-100`}
    img {
      ${tw`w-8 h-8`}
    }
  }

  .title {
    ${tw`mt-1 font-bold text-xl leading-none`}
  }

  .description {
    ${tw`mt-2 text-sm font-medium text-secondary-300`}
  }

  .link {
    ${tw`mt-auto inline-flex items-center pt-2 text-sm font-bold text-primary-300 leading-none hocus:text-primary-900 transition duration-300`}
    .icon {
      ${tw`ml-2 w-4`}
    }
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-40`}
`;

export default ({
  cards = [
    {
      imageSrc: ShieldIconImage,
      title: "Secure",
      description: "We strictly only deal with vendors that provide top notch security.",
      url: "https://timerse.com"
    },
    {
      imageSrc: SupportIconImage,
      title: "24/7 Support",
      description: "Lorem ipsum donor amet siti ceali placeholder text",
      url: "https://google.com"
    },
    {
      imageSrc: CustomizeIconImage,
      title: "Customizable",
      description: "Lorem ipsum donor amet siti ceali placeholder text",
      url: "https://reddit.com"
    }
  ],
  linkText = "Go Watch",
  heading = "",
  subheading = "",
  description = "",
  imageContainerCss = null,
  imageCss = null
}) => {
  /*
   * This componets accepts a prop - `cards` which is an array of object denoting the cards. Each object in the cards array can have the following keys (Change it according to your need, you can also add more objects to have more cards in this feature component):
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  4) url - the url that the card should goto on click
   */
  return (
    <Container
    >
      <ContentWithPaddingXl style={{paddingBottom:'26px', paddingTop:'0'}}>
        {subheading && <Subheading>{subheading}</Subheading>}
        {heading && <Heading>{heading}</Heading>}
        {description && <Description>{description}</Description>}
        <ThreeColumnContainer>
        <Column className="cardita" style={{backgroundColor:'rgb(237 242 247 / 1)', borderRadius:'5%', marginBottom:'9px'}}>
            <Card href={"www.youtube.com"}>
              <span className="imageContainer" css={imageContainerCss}>
                <img src={CashApp} alt="" css={imageCss} />
              </span>
              <span className="title">CashApp</span>
              <p className="description">Watch my Youtube videos. I upload a new video <HighlightedText>twice a week!</HighlightedText></p>
              {linkText && (
                <span className="link">
                  <span>CashApp Me</span>
                  <ArrowRightIcon className="icon" />
                </span>
              )}
            </Card>
          </Column>
          <Column className="cardita" style={{backgroundColor:'rgb(237 242 247 / 1)', borderRadius:'5%', marginBottom:'9px'}}>
            <Card href={"www.tiktok.com"}>
              <span className="imageContainer" css={imageContainerCss}>
                <img src={Amazon} alt="" css={imageCss} />
              </span>
              <span className="title">Amazon Wishlist</span>
              <p className="description">Daily videos, <HighlightedText>daily</HighlightedText> lives, come hang out with us!</p>
              {linkText && (
                <span className="link">
                  <span>Go</span>
                  <ArrowRightIcon className="icon" />
                </span>
              )}
            </Card>
          </Column>
          <Column className="cardita" style={{backgroundColor:'rgb(237 242 247 / 1)', borderRadius:'5%', marginBottom:'9px'}} >
            <Card href={"www.instagram.com"}>
              <span className="imageContainer" css={imageContainerCss}>
                <img src={Venmo} alt="" css={imageCss} />
              </span>
              <span className="title">Venmo</span>
              <p className="description">Wanna see more about my <HighlightedText>personal</HighlightedText> life? Give me a Follow on IG!</p>
              {linkText && (
                <span className="link">
                  <span>Venmo Me</span>
                  <ArrowRightIcon className="icon" />
                </span>
              )}
            </Card>
          </Column>
        </ThreeColumnContainer>
      </ContentWithPaddingXl>
      <DecoratorBlob />
    </Container>
  );
};
