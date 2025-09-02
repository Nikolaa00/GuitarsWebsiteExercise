import React, { useState } from "react";
import styled from "styled-components";
import Pagination from "react-bootstrap/Pagination";

const StyledPagination = styled(Pagination)`
  width: 423px;
  display: inline-flex;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 8px;

  .page-item {
    .page-link {
      border-radius: 4px;
      border: 1px solid #e8e8e8;
      color: #6c6c6c;
      font-size: 18px;
      padding: 8px 14px;
      box-shadow: none;
      text-align: center;
      font-family: "Circular Std", sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 450;
      line-height: 22px;
      transition: all 0.2s ease;
      font-weight: bold;
      background-color: #ffffff;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

      &:hover {
        background-color: #cfcfcfff;
      }
    }

    &.active .page-link {
      border: 1px solid #ff5a1f;
      color: #ff6428;
    }

    &.disabled .page-link {
      border: none;
      background-color: transparent;
      box-shadow: none;
      color: #cfcfcfff;
    }
  }
`;

const PageNavigator = ({ totalPages = 50, currentPage, setCurrentPage }) => {
  const handleClick = (page) => {
    setCurrentPage(page); // updates the parent state
  };

  const getPageNumbers = () => {
    let pages = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);

      if (currentPage > 4) pages.push("...");

      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) pages.push(i);

      if (currentPage < totalPages - 3) pages.push("...");

      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <StyledPagination>
      <Pagination.Prev
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      />
      {getPageNumbers().map((page, index) =>
        page === "..." ? (
          <Pagination.Ellipsis key={index} disabled />
        ) : (
          <Pagination.Item
            key={index}
            active={page === currentPage}
            onClick={() => handleClick(page)}
          >
            {page}
          </Pagination.Item>
        )
      )}
      <Pagination.Next
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
      />
    </StyledPagination>
  );
};

export default PageNavigator;
