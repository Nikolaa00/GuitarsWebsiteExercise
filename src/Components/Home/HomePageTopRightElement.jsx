import TopRightSVGElement from "../../assets/TopRightSVGElement";
import styled from "styled-components";
import home_page_top_right_image from "../../assets/images/HomePageTopRightImage.jpg";

const HomePageTopRightWrapper = styled.div`
  position: relative;
  width: 672px;
  height: 586px;
`;

const HomePageTopRightImage = styled.div`
  border-radius: 0 0 151px 360px;
  width: 100%;
  height: 100%;

  background-image: url(${home_page_top_right_image});
  background-size: 100% 172.014%;
  background-position: 0px -398.995px;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
  backdrop-filter: blur(20px);

`;

const HomePageTopRightIcon = styled.div`
  position: absolute;
  top: 546px;
  left: 348px;
  transform: translateX(-50%);
  width: 80px;
  height: 80px;
  flex-shrink: 0;
`;

const HomePageTopRightElement = () => {
  return (
    <HomePageTopRightWrapper>
      <HomePageTopRightImage />
      <HomePageTopRightIcon>
        <TopRightSVGElement />
      </HomePageTopRightIcon>
    </HomePageTopRightWrapper>
  );
};

export default HomePageTopRightElement;
