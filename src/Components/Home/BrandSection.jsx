import styled from "styled-components";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import brandsData from "../../assets/Data/brandsData";

const BrandSectionWrapper = styled.div`
  padding: 60px 20px;
  text-align: center;
  background-color: #fff;
  height: 706px;
`;

const Title = styled.h2`
  color: #000;
  text-align: center;
  font-family: Satoshi;
  font-size: 44px;
  font-weight: 700;
`;

const Highlight = styled.span`
  color: #ff6428;
  font-family: Satoshi;
  font-size: 44px;
  font-weight: 700;
`;

const Description = styled.p`
  width: 473px;
  color: #666;
  text-align: center;
  font-family: Satoshi;
  font-size: 16px;
  font-weight: 500;
  margin: 9px auto 38px auto;
`;

const BrandsLogosWrapper = styled.div`
  display: flex;
  gap: 200px;
  justify-content: center;
`;

const BrandsLogoContainer = styled.div`
  width: 178px;
  height: 100px;
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

const BrandLogo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  opacity: 0.4;
  transition: opacity 0.3s ease;
  cursor: pointer;
  
  &:hover {
    opacity: 1;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const BrandSection = () => {
  return (
    <BrandSectionWrapper>
      <Title>
        Featuring the <Highlight>Best Brands</Highlight>
      </Title>
      <Description>Trusted by top guitar companies worldwide</Description>

      <BrandsLogosWrapper>
        {/* Group brands into pairs */}
        {brandsData.reduce((rows, brand, index) => {
          if (index % 2 === 0) rows.push([brand]);
          else rows[rows.length - 1].push(brand);
          return rows;
        }, []).map((pair, idx) => (
          <BrandsLogoContainer key={idx}>
            {pair.map((b, i) => (
              <StyledLink to={`/brands/${b.name.toLowerCase()}`} key={i}>
                <BrandLogo src={b.src} alt={b.alt} />
              </StyledLink>
            ))}
          </BrandsLogoContainer>
        ))}
      </BrandsLogosWrapper>
    </BrandSectionWrapper>
  );
};

export default BrandSection;