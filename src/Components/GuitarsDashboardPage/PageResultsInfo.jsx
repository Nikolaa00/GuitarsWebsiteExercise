import React from "react";
import styled from "styled-components";

const ResultsInfo = styled.div`
  color: #9292a3;
  text-align: center;
  font-family: "Circular Std", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
  display: inline-flex; /* <--- only as wide as needed */
  gap: 4px;
  justify-content: flex-start;
  

  span {
    color: #3d3d46;
    font-family: "Circular Std", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
`;

const PageResultsInfo = ({ showing, total }) => {
  return (
    <ResultsInfo>
      SHOWING <span>{showing}</span> RESULTS FROM <span>{total}</span>
    </ResultsInfo>
  );
};

export default PageResultsInfo;
