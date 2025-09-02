import React, { useState, useMemo } from "react";
import styled from "styled-components";

import PageResultsInfo from "./PageResultsInfo";
import PageNavigator from "./PageNavigator";
import FilterAndSearchComponent from "./FilterAndSearchComponent";
import GuitarCard from "../Card/GuitarCard";
import guitarsData from "../../assets/Data/guitarsData";
import brandsData from "../../assets/Data/brandsData";

// Styled Components
const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const PageInnerWrapper = styled.div`
  width: 1300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 44px;
  font-family: Satoshi, sans-serif;
  font-weight: 700;
  text-align: center;
  color: #121212;

  span {
    color: #ff6428;
  }
`;

const GuitarsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 54px 116px;
  justify-items: center;
  align-items: start;
  margin-bottom: 92px;
`;

const FilterAndSearchComponentWrapper = styled.div`
  margin-bottom: 158px;
  width: 100%;
  display: flex;
  justify-content: end;
  margin-top: 56px;
`;

const PageInfoAndNavigatorWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// DashboardSection Component
const DashboardSection = () => {
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

  // Filter + Search
  const filteredData = useMemo(() => {
    return guitarsData.filter((guitar) => {
      const matchesFilter = filter ? guitar.type === filter : true;
      const matchesSearch = guitar.name.toLowerCase().includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [filter, search]);

  // Pagination
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <PageWrapper>
      <PageInnerWrapper>
        <Title>
          Check out the <span>Selection</span>
        </Title>

        <FilterAndSearchComponentWrapper>
          <FilterAndSearchComponent
            onFilterChange={(val) => {
              setFilter(val);
              setCurrentPage(1);
            }}
            onSearchChange={(val) => {
              setSearch(val);
              setCurrentPage(1);
            }}
          />
        </FilterAndSearchComponentWrapper>

        <GuitarsGrid>
          {paginatedData.map((guitar) => (
            <GuitarCard
              key={guitar.id}
              image={guitar.image}
              name={guitar.name}
              price={guitar.price}
              link={`/brands/${guitar.brand.toLowerCase()}/${guitar.id}`} 
            />
          ))}
        </GuitarsGrid>

        <PageInfoAndNavigatorWrapper>
          <PageResultsInfo
            showing={paginatedData.length}
            total={filteredData.length}
          />
          <PageNavigator
            totalPages={Math.ceil(filteredData.length / itemsPerPage)}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </PageInfoAndNavigatorWrapper>
      </PageInnerWrapper>
    </PageWrapper>
  );
};

export default DashboardSection;
