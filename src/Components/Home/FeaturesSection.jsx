import styled from "styled-components";
import SmoothBrowsingIcon from "../../assets/SVG/SmoothBrowsingIcon.svg";
import EasyDeliveryIcon from "../../assets/SVG/EasyDeliveryIcon.svg";
import SwiftPaymentsIcon from "../../assets/SVG/SwiftPaymentsIcon.svg";

const FeaturesSectionWrapper = styled.div`
  width: 100%;
  height: 508px;
  background: #121212;
  padding-top: 94px;
`;

const Title = styled.h2`
  color: #fff;
  text-align: center;
  font-family: Satoshi, sans-serif;
  font-size: 44px;
  font-weight: 300;
  margin-bottom: 69px;
`;

const Highlight = styled.span`
  color: #ff6428;
  font-family: Satoshi, sans-serif;
  font-size: 44px;
  font-weight: 300;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 220px;
  flex-wrap: wrap;
`;

const FeaturesLogoAndLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 230px;
  height: 189px;
`;

const FeaturesLogo = styled.img`
  width: 72px;
  height: 72px;
  margin-bottom: 40px;
`;

const FeaturesLabel = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const LabelTitle = styled.h3`
  color: #fff;
  text-align: center;
  font-family: Satoshi, sans-serif;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 1.44px;
  text-transform: uppercase;
`;

const LabelDescription = styled.p`
  color: #666;
  text-align: center;
  font-family: Satoshi, sans-serif;
  font-size: 14px;
  font-weight: 300;
  text-transform: capitalize;
`;

const features = [
  {
    icon: SmoothBrowsingIcon,
    title: "Smooth Browsing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: EasyDeliveryIcon,
    title: "Easy Delivery",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: SwiftPaymentsIcon,
    title: "Swift Payments",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const FeaturesSection = () => {
  return (
    <FeaturesSectionWrapper>
      <Title>
        Why try <Highlight>VibeStrings?</Highlight>
      </Title>
      <Wrapper>
        {features.map((feature, idx) => (
          <FeaturesLogoAndLabelContainer key={idx}>
            <FeaturesLogo src={feature.icon} alt={feature.title} />
            <FeaturesLabel>
              <LabelTitle>{feature.title}</LabelTitle>
              <LabelDescription>{feature.description}</LabelDescription>
            </FeaturesLabel>
          </FeaturesLogoAndLabelContainer>
        ))}
      </Wrapper>
    </FeaturesSectionWrapper>
  );
};

export default FeaturesSection;
