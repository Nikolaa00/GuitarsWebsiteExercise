import smsIcon from "../../assets/SVG/sms.svg";
import locationIcon from "../../assets/SVG/location.svg";
import facebookIcon from "../../assets/SVG/Facebook.svg";
import instagramIcon from "../../assets/SVG/Instagram.svg";
import twitterIcon from "../../assets/SVG/Twitter.svg";
import styled from "styled-components";
import VibeStringsLogo from "../../assets/VibeStringsLogo";
import { Link } from "react-router-dom";

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;

  justify-content: center;
  align-items: center;
  background-color: #eee;
  padding: 0px 160px;
  padding-top: 80px;

  h1 {
    color: #121212;
    text-align: center;
    font-family: Satoshi;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;

  gap: 193px;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 22px;
`;

const LogoContainer = styled.div``;

const EmailAndLocation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    color: rgba(18, 18, 18, 0.6);
    text-align: center;
    font-family: Satoshi;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    white-space: nowrap;
  }

  h1 {
    color: #666;
    text-align: center;
    font-family: Satoshi;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
  }
`;

const StyledLink = styled(Link)`
  color: rgba(18, 18, 18, 0.6);
  text-align: center;
  font-family: Satoshi;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  white-space: nowrap;
`;

const FooterNavSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  h1 {
    color: #121212;
    text-align: center;
    font-family: Satoshi;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
  }
  a {
    color: rgba(18, 18, 18, 0.6);
    text-align: center;
    font-family: Satoshi;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    white-space: nowrap;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 18px;
    margin-top: 22px;
  }
`;

const FooterSocials = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  h1 {
    white-space: nowrap;
    margin-bottom: 15px;
  }
  div.social-icons {
    display: flex;
    gap: 32px;
  }
`;

const Copyright = styled.div`
  color: rgba(18, 18, 18, 0.6);

  text-align: center;
  font-family: Satoshi;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  margin-top: 82px;
  margin-bottom: 43px;
`;

export function FooterSection() {
  return (
    <FooterWrapper>
      <FooterLinks>
        <ContactInfo>
          <LogoContainer>
            <VibeStringsLogo
              fontSize="40px"
              gap="24px"
              iconWidth="40px"
              iconHeight="40px"
            />
          </LogoContainer>
          <EmailAndLocation>
            <a href="mailto:enquiry@vibestrings.com">
              <img src={smsIcon} alt="SMS Icon" />
              <h1>Enquiry@VibeStrings.com</h1>
            </a>
            <a href="https://maps.app.goo.gl/Y1zd54BHrXz3RtqR9" target="_blank">
              <img src={locationIcon} alt="Location Icon" />
              <h1>San Francisco</h1>
            </a>
          </EmailAndLocation>
        </ContactInfo>

        <FooterNavSection>
          <h1>PAGES</h1>
          <div>
            <StyledLink to="">Store</StyledLink>
            <StyledLink to="">Collection</StyledLink>
            <StyledLink to="">Support</StyledLink>
          </div>
        </FooterNavSection>

        <FooterNavSection>
          <h1>PRODUCT</h1>
          <div>
            <StyledLink to="">Terms</StyledLink>
            <StyledLink to="">Privacy Policy</StyledLink>
            <StyledLink to="">Copyright</StyledLink>
          </div>
        </FooterNavSection>

        <FooterSocials>
          <h1>FOLLOW US</h1>
          <div className="social-icons">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={facebookIcon}
                alt="Facebook Icon"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={twitterIcon}
                alt="Twitter Icon"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagramIcon}
                alt="Instagram Icon"
                width={24}
                height={24}
              />
            </a>
          </div>
        </FooterSocials>
      </FooterLinks>

      <Copyright>&copy; 2025 VibeStrings. All rights reserved.</Copyright>
    </FooterWrapper>
  );
}
