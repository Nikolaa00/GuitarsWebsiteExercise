import styled from "styled-components";
import LeftArrowSVG from "../../assets/SVG/left.svg";

const BackToHomeButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  gap: 9px;
  background: none;
  border: none;
  cursor: pointer;
`;

const BackToHomeButtonText = styled.h1`
  width: 150px;
  color: var(--Text-Main, #3d3d46);
  text-align: center;
  font-family: "Circular Std",sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: capitalize;
`;

const LeftArrowImage = styled.img`
  width: 14px;
  height: 14px;
  flex-shrink: 0;
`;

const BackToHomeButton = () => {
  return (
    <BackToHomeButtonWrapper>
      <LeftArrowImage src={LeftArrowSVG} alt="Back" />
      <BackToHomeButtonText>Back to Home</BackToHomeButtonText>
    </BackToHomeButtonWrapper>
  );
};

export default BackToHomeButton;
