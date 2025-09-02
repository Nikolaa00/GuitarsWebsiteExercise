import styled from "styled-components";
import TopSVGElement from "../../assets/TopRightSVGElement.jsx";
import DefaultGuitarImage from "../../assets/images/Guitars/5.png";

const Container = styled.div`
  position: relative;
  width: 672px;
  height: 459px;
  background: linear-gradient(to bottom, #ff774d, #ff632e);
  border-radius: 0 0 151px 360px;
`;

const Guitar = styled.img`
  position: absolute;
  top: 52px;
  left: 149px;
  width: 477.253px;
  height: 249.116px;
  transform: rotate(-48.69deg);
  border-radius: 12px;
  object-fit: contain;
  z-index: 10;
`;

const SVGWrapper = styled.div`
  position: absolute;
  top: 419px;
  left: 348px;
  transform: translateX(-50%);
  width: 80px;
  height: 80px;
  flex-shrink: 0;
`;

const TopLeftGuitarImage = ({ imageSrc }) => {
  return (
    <Container>
      <Guitar src={imageSrc || DefaultGuitarImage} alt="Guitar" />
      <SVGWrapper>
        <TopSVGElement />
      </SVGWrapper>
    </Container>
  );
};

export default TopLeftGuitarImage;
