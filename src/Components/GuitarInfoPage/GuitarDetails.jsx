import React, { useState } from "react";
import styled from "styled-components";
import ArtistCard from "../Card/Artistcard";
import PaginationDots from "./PaginationDots";
import SpecificationComponent from "./SpecificationComponent";
import ToggleTabs from "./ToggleTabs";

// === IMPORT IMAGES ===
import Artist1 from "../../assets/images/Artists/1.png";
import Artist2 from "../../assets/images/Artists/2.png";
import Artist3 from "../../assets/images/Artists/3.png";
import Artist4 from "../../assets/images/Artists/4.png";

// === STYLES ===
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const TabsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start; 
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-top: 76px;
`;

const ArtistsWrapper = styled.div`
  display: flex;
  gap: 40px;
`;

const PaginationWrapper = styled.div`
  margin-top: 54px;
  margin-bottom: 54px;
`;

const SpecificationComponentWrapper = styled.div`
  margin-top: 108px;
  margin-bottom: 205px;
`;

export default function GuitarDetails() {
  const [activeTab, setActiveTab] = useState("spec");
  const [currentPage, setCurrentPage] = useState(0);

  // Artists data
  const artists = [
    { name: "Jimi Hendrix", image: Artist1 },
    { name: "David Gilmour", image: Artist2 },
    { name: "John Frusciante", image: Artist3 },
    { name: "Joe Satriani", image: Artist4 },
    { name: "Jimi Hendrix", image: Artist1 },
    { name: "David Gilmour", image: Artist2 },
    { name: "John Frusciante", image: Artist3 },
    { name: "Joe Satriani", image: Artist4 },
    { name: "Jimi Hendrix", image: Artist1 },
    { name: "David Gilmour", image: Artist2 },
  ];

  return (
    <Wrapper>
      {/* Tabs aligned to start */}
      <TabsWrapper>
        <ToggleTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </TabsWrapper>

      {/* Conditional content */}
      {activeTab === "spec" ? (
        <SpecificationComponentWrapper>
          <SpecificationComponent />
        </SpecificationComponentWrapper>
      ) : (
        <>
          <Content>
            <ArtistsWrapper>
              <ArtistCard {...artists[currentPage * 2]} />
              {artists[currentPage * 2 + 1] && (
                <ArtistCard {...artists[currentPage * 2 + 1]} />
              )}
            </ArtistsWrapper>
          </Content>
          <PaginationWrapper>
            <PaginationDots
              totalPages={Math.ceil(artists.length / 2)}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          </PaginationWrapper>
        </>
      )}
    </Wrapper>
  );
}
