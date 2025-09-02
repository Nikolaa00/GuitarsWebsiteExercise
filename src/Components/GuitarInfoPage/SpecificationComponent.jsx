import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  color: #000;
  font-family: Satoshi, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  width: 1237px;
  height: 444px;
  display: flex;
  gap: 60px;
  flex-direction:column;
  justify-content:space-between;
`;

const TopSpec = styled.p`
  
`;

const LowerSpec = styled.ul`

`;

const SpecificationComponent = () => {
  return (
    <Wrapper>
      <TopSpec>
        The Active Precision Bass® PH V guitar is a modern take on the classic
        Precision Bass design, featuring a sleek body shape and a comfortable
        neck profile for easy playability. It is equipped with dual active
        pickups that deliver a powerful and versatile tone, perfect for any
        genre from rock to funk. The onboard EQ allows players to shape their
        sound with precision, while the high-quality hardware ensures
        reliability on stage. With its striking finish options and attention
        to detail, the Active Precision Bass® PH V is designed for both
        performance and style.
      </TopSpec>
      <LowerSpec>
        <li>Body Wood: "Alder",</li>
        <li>Neck Wood: "Maple",</li>
        <li>Fingerboard: "Rosewood",</li>
        <li>Pickups: "3x Single-Coil Strat",</li>
        <li>Tuners: "Vintage-Style",</li>
        <li>Scale Length: "25.5 inches",</li>
        <li>Bridge: "6-Saddle Synchronized Tremolo"</li>
      </LowerSpec>
    </Wrapper>
  );
};

export default SpecificationComponent;
