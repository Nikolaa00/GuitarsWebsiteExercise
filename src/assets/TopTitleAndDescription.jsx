import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  width: 536px;
  text-align: center;
  font-family: "Satoshi",sans-serif;
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: #121212;
  margin-bottom: ${({ $marginBottom }) =>
    typeof $marginBottom === "number" ? `${$marginBottom}px` : ""};
`;

const Highlight = styled.span`
  color: #ff6428;
`;

const Description = styled.p`
  width: ${({ $width }) => $width || ""};
  text-align: center;
  font-family: "Satoshi",sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: #666;
  padding: ${({ $padding }) => ($padding ? "0 20px" : "")};
`;

const TopTitleAndDescription = ({
  startTitle,
  endTitle,
  highlight,
  description,
  descriptionWidth,
  marginBottom="0" ,
  padding ,
}) => {
  return (
    <Container>
      <Title $marginBottom={marginBottom}>
        {startTitle} <Highlight>{highlight}</Highlight>
        {endTitle}
      </Title>
      {description && (
        <Description $width={descriptionWidth} $padding={padding}>
          {description}
        </Description>
      )}
    </Container>
  );
};

export default TopTitleAndDescription;
