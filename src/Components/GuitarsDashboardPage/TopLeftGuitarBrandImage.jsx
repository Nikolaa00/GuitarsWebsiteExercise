import styled from "styled-components";
import TopSVGElement from "../../assets/TopRightSVGElement.jsx";
import DefaultBrandLogo from "../../assets/images/GuitarBrands/Brand8.png";

const Container = styled.div`
  position: relative;
  width: 672px;
  height: 459px;
  background: linear-gradient(to bottom, #ff774d, #ff632e);
  border-radius: 0 0 151px 360px;
`;

const BrandBackground = styled.div`
  position: absolute;
  top: 60px;
  left: 149px;
  width: 451px;
  height: 280px;
  border-radius: 12px;
  overflow: hidden;
  z-index: 10;
`;

const BrandImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  opacity: 0.4;
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

const TopLeftGuitarBrandImage = ({ imageSrc }) => {
  const srcToUse = imageSrc || DefaultBrandLogo;

  return (
    <Container>
      <BrandBackground>
        <BrandImage src={srcToUse} alt="Guitar Brand" />
      </BrandBackground>
      <SVGWrapper>
        <TopSVGElement />
      </SVGWrapper>
    </Container>
  );
};

export default TopLeftGuitarBrandImage;
