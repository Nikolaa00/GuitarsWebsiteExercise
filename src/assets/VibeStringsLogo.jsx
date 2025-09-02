import styled from "styled-components";
import Butterfly from "./Butterfly";

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: ${({ $gap }) => $gap || "24px"};

  h1 {
    color: #121212;
    text-align: center;
    font-family: Satoshi;
    font-size: ${({ $fontSize }) => $fontSize || "40px"};
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const VibeStringsLogo = ({
  gap = "24px",
  fontSize = "40px",
  iconWidth = "40px",
  iconHeight = "40px",
}) => {
  return (
    <LogoContainer $gap={gap} $fontSize={fontSize}>
      <Butterfly width={iconWidth} height={iconHeight} />
      <h1>VibeStrings</h1>
    </LogoContainer>
  );
};

export default VibeStringsLogo;
