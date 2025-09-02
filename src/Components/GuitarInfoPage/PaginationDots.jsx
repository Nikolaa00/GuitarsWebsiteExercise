import React from "react";
import styled from "styled-components";

const DotsWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  width: 120px;
  height: 24px;
`;

const Dot = styled.div`
  width: ${(props) => (props.active ? "24px" : "14px")};
  height: ${(props) => (props.active ? "24px" : "14px")};
  border-radius: 50%;
  background-color: #d9d9d9;
  cursor: pointer;
  transition: all 0.3s ease;
`;

const PaginationDots = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <DotsWrapper>
      {Array.from({ length: totalPages }).map((_, index) => (
        <Dot
          key={index}
          active={currentPage === index}
          onClick={() => onPageChange(index)}
        />
      ))}
    </DotsWrapper>
  );
};

export default PaginationDots;
