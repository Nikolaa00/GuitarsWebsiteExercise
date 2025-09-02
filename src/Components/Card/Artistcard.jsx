import React from "react";
import styled from "styled-components";
import defaultArtistImage from "../../assets/images/Artists/1.png";

const CardWrapper = styled.div`
  display: flex;
  width: 492px;
  padding: 24px;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  border-radius: 4px;
  border: 1px solid #ebecef;
  background: #ffefe8;
`;

const Image = styled.img`
  align-self: stretch;
  height: 444px;
  aspect-ratio: 1 / 1;
`;

const Label = styled.p`
  align-self: stretch;
  color: #666;
  text-align: center;
  font-family: Satoshi, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Artistcard = ({ name = "Jimi Hendrix", image = defaultArtistImage }) => {
  return (
    <CardWrapper>
      <Image src={image} alt={name} />
      <Label>{name}</Label>
    </CardWrapper>
  );
};

export default Artistcard;
