import styled from "styled-components";
import PromoSectionLeftImage from "../../assets/images/PromoSectionLeftImage.png";
import GooglePlayStore from "../../assets/SVG/GooglePlayStore.svg";
import MobileAppStore from "../../assets/SVG/MobileAppStore.svg";

const PromoSectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 830px;
  background: #ffffff;
`;
const PromoSectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 165px;
  gap: 120px;
`;
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 60px;
  width: 484px;
  height: 318px;
`;
const LeftImage = styled.img`
  width: 568px;
`;
const Title = styled.h2`
  color: #000;

  text-align: center;
  font-family: Satoshi, sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;
const Highlight = styled.span`
  color: #ff6428;
  font-family: Satoshi, sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;
const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 25px;
`;
const Icon = styled.img`
  width: 192px;
  height: 57px;
`;

const PromoSection = () => {
  return (
    <PromoSectionWrapper>
      <PromoSectionContainer>
        <RightContainer>
          <Title>
            Browse and buy your<Highlight> favorite guitars </Highlight> with
            VibeStrings.
          </Title>
          <IconsWrapper>
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon src={GooglePlayStore} alt="Google Play Store" />
            </a>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon src={MobileAppStore} alt="Mobile App Store" />
            </a>
          </IconsWrapper>
        </RightContainer>
        <LeftImage src={PromoSectionLeftImage} alt="Phone screens" />
      </PromoSectionContainer>
    </PromoSectionWrapper>
  );
};
export default PromoSection;
