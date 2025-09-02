import { Route } from "react-router-dom";
import styled from "styled-components";
import VibeStringsLogo from "../../assets/VibeStringsLogo";

const TopWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 706px;
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 120px;
  padding-top: 63px;
  gap: 141px;
`;

const RightSide = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const TopSection = ({ topTitleAndDescription, topRightElement }) => {
  //TODO- create list of objects which will define the content of top section base on route path
  /*const location = useLocation();
if (location.pathname === "/dashboard") {*/
  return (
    <TopWrapper>
      <LeftSide>
        <VibeStringsLogo />
         {topTitleAndDescription}
      </LeftSide>
      <RightSide>{topRightElement}</RightSide>
    </TopWrapper>
  );
};

export default TopSection;
