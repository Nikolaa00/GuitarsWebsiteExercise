import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import DefaultGuitarimage from "../../assets/images/Guitars/1.png";

const GuitarCardWrapper = styled.div`
  width: 364px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 80px;
  border: 1px solid transparent;
  cursor: pointer; /* show pointer on hover */



  &:hover {
    
    border-color: #ff6428;
    border-radius: 5px;
  }
`;

const GuitarImage = styled.img`
  width: 100%; /* fill the width of the card */
  height: 200px; /* set a fixed height */
  object-fit: contain; /* scales the image to fit inside without cropping or stretching */
  margin-top: 40px;
  padding: 0 13px;
`;

const GuitarLabelContainer = styled.div``;

const GuitarName = styled.h1`
  color: #121212;
  font-family: Satoshi, sans-serif;
  font-size: 16px;
  font-weight: 500;
`;

const GuitarPrice = styled.h1`
  color: #666;
  margin-top: 9px;
  font-family: Satoshi;
  font-size: 14px;
  font-weight: 400;
`;

const GuitarCard = ({ image, name, price, link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link) {
      navigate(link); // Navigate to the provided page
    }
  };

  return (
    <GuitarCardWrapper onClick={handleClick}>
      <GuitarImage src={image || DefaultGuitarimage} alt={name} />
      <GuitarLabelContainer>
        <GuitarName>{name}</GuitarName>
        <GuitarPrice>${price}</GuitarPrice>
      </GuitarLabelContainer>
    </GuitarCardWrapper>
  );
};

export default GuitarCard;
