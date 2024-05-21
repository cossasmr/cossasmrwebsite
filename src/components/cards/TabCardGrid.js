import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import '../../../src/styles.css'
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as StarIcon } from "images/star-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";
import { ReactComponent as CheckboxIcon } from "images/checkbox-circle.svg";
const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3  sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${props => props.active && tw`bg-primary-500! text-gray-100!`}
  }
`;

const TabContent = tw(motion.div)` flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const defaultPlans = [
  {
    name: "Business",
    price: ["$15", ".99/month"],
    oldPrice: "$19.99",
    description: "Perfect for hosting blogs with lots of traffic or heavy development projects",
    features: [
      "4 Core Xeon CPU",
      "2 GB RAM",
      "100 GB SSD",
      "3 TB Transfer",
      "99.9% Uptime",
      "Free Domain & SSL",
      "Free DNS Management"
    ],
    url: "https://google.com",
    featured: "Most Popular"
  }
];


const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;
const PlanFeatures = styled.ul`
  ${tw`mt-10 flex-1 border-t lg:-mx-6 -mx-6 sm:-mx-10 py-10 px-6 sm:px-10 lg:p-6 xl:-mx-10 xl:p-10`}
  .feature {
    ${tw`flex items-start mt-6 first:mt-0`}
    .icon {
      ${tw`w-6 h-6 text-primary-500 flex-shrink-0`}
    }
    .text {
      ${tw`font-semibold text-primary-900 tracking-wide ml-3`}
    }
  }
`;

const PlanAction = tw.div`mt-4`;
const ActionButton = styled(PrimaryButtonBase)`
  ${tw`block text-center text-sm font-semibold tracking-wider w-full text-gray-100 bg-primary-500 px-6 py-4 rounded hover:bg-primary-700 focus:shadow-outline focus:outline-none transition-colors duration-300`}
`;
const PlansContainer = tw.div`mt-4 flex flex-col items-center lg:flex-row lg:items-stretch lg:justify-between text-gray-900 font-medium`;
const Plan = styled.div`
  ${tw`w-full max-w-sm bg-white rounded-lg shadow-sm py-10 px-6 sm:px-10 lg:px-6 lg:py-10 xl:p-10 mx-3 flex flex-col justify-between mt-16 first:mt-0 lg:mt-0 shadow-raised`}
`;

const PlanHeader = styled.div`
  .nameAndFeaturedContainer {
    ${tw`flex flex-wrap flex-col sm:flex-row justify-between items-center`}
  }
  .name {
    ${tw`lg:text-lg xl:text-xl font-bold uppercase tracking-wider mr-3`}
  }
  .featuredText {
    ${tw`text-xs font-bold px-3 rounded py-2 uppercase bg-green-300 text-green-900 leading-none mt-4 sm:mt-0 w-full sm:w-auto text-center`}
  }
  .pricingContainer {
    ${tw`mt-6 flex items-end justify-between`}
    .currentPrice {
      ${tw`text-lg font-bold leading-none`}
      .bigText {
        ${tw`text-3xl font-bold`}
      }
    }
    .oldPrice {
      ${tw`text-gray-500 text-lg line-through hidden sm:block`}
    }
  }
  .description {
    ${tw`mt-8 font-medium text-gray-700 lg:text-sm xl:text-base`}
  }
`;
export default ({
  heading = "Checkout the Menu",
  tabs = {
    "5 Minutes": [
      {
        name: "5 Minutes",
        price: ["$25/", "LIFETIME"],
        oldPrice: "$19.99",
        description: "Perfect for hosting blogs with lots of traffic or heavy development projects",
        features: [
          "4 Core Xeon CPU",
          "2 GB RAM",
          "100 GB SSD",
          "3 TB Transfer",
          "99.9% Uptime",
          "Free Domain & SSL",
          "Free DNS Management"
        ],
        url: "https://google.com"
      }
    ],
    "10 Minutes": [
      {
        name: "10 Minutes",
        price: ["$50/", "LIFETIME"],
        oldPrice: "$19.99",
        description: "Perfect for hosting blogs with lots of traffic or heavy development projects",
        features: [
          "4 Core Xeon CPU",
          "2 GB RAM",
          "100 GB SSD",
          "3 TB Transfer",
          "99.9% Uptime",
          "Free Domain & SSL",
          "Free DNS Management"
        ],
        url: "https://google.com"
      }
    ],
    "15 Minutes": [
      {
        name: "15 Minutes",
        price: ["$75/", "LIFETIME"],
        oldPrice: "$19.99",
        description: "Perfect for hosting blogs with lots of traffic or heavy development projects",
        features: [
          "4 Core Xeon CPU",
          "2 GB RAM",
          "100 GB SSD",
          "3 TB Transfer",
          "99.9% Uptime",
          "Free Domain & SSL",
          "Free DNS Management"
        ],
        url: "https://google.com",
        featured: "Most Popular"
      }
    ],
    "20 minutes": [
      {
        name: "20 Minutes",
        price: ["$100/", "LIFETIME"],
        oldPrice: "$19.99",
        description: "Perfect for hosting blogs with lots of traffic or heavy development projects",
        features: [
          "4 Core Xeon CPU",
          "2 GB RAM",
          "100 GB SSD",
          "3 TB Transfer",
          "99.9% Uptime",
          "Free Domain & SSL",
          "Free DNS Management"
        ],
        url: "https://google.com"
      }
    ]
  }
}) => {
  /*
   * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
   * as the key and value of the key will be its content (as an array of objects).
   * To see what attributes are configurable of each object inside this array see the example above for "Starters".
   */
  const tabsKeys = Object.keys(tabs);
  const [activeTab, setActiveTab] = useState(tabsKeys[0]);

  return (
    <Container
    >
      <ContentWithPaddingXl style={{paddingBottom:'0px', paddingTop:'4px'}}>
        <HeaderRow>
          <Header>{heading}</Header>
          <TabsControl style={{marginTop:'8px'}}>
            {Object.keys(tabs).map((tabName, index) => (
              <TabControl key={index} active={activeTab === tabName} onClick={() => setActiveTab(tabName)} >
                {tabName}
              </TabControl>
            ))}
          </TabsControl>
        </HeaderRow>

        {tabsKeys.map((tabKey, index) => (
          <TabContent

            key={index}
            variants={{
              current: {
                opacity: 1,
                scale:1,
                display: "flex",
                justifyContent: "center"
              },
              hidden: {
                opacity: 0,
                scale:0.8,
                display: "none",
              }
            }}
            transition={{ duration: 0.4 }}
            initial={activeTab === tabKey ? "current" : "hidden"}
            animate={activeTab === tabKey ? "current" : "hidden"}
          >
            {tabs[tabKey].map((info, index) => (

<PlansContainer>
{defaultPlans.map((plan, index) => (
  <Plan style={{backgroundColor:'rgb(237 242 247 / 1)'}} key={index} featured={plan.featured}>
    <PlanHeader>
      <span className="nameAndFeaturedContainer">
        <span className="name">{info.name}</span>
        {info.featured && <span className="featuredText">{plan.featured}</span>}
      </span>
      <div className="pricingContainer">
        <span className="currentPrice">
          <span className="bigText">{info.price[0]}</span>
          <span className="colorText">{info.price[1]}{" "}</span>

        </span>
        {/* {plan.oldPrice && <span className="oldPrice">{plan.oldPrice}</span>} */}
      </div>
      <p className="description">{info.description}</p>
    </PlanHeader>
    <PlanFeatures>
      {plan.features.map((feature, index) => (
        <li className="feature" key={index}>
          <CheckboxIcon className="icon" />
          <span className="text">{feature}</span>
        </li>
      ))}
    </PlanFeatures>
    <PlanAction>
      <ActionButton as="a" href={plan.url}>
        Hola
      </ActionButton>
    </PlanAction>
  </Plan>
))}
</PlansContainer>
            ))}
          </TabContent>
        ))}
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};

/* This function is only there for demo purposes. It populates placeholder cards */

