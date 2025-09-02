import styled from "styled-components";

const Svg = styled.svg`
  width: ${({ width }) => width || "40px"};
  height: ${({ height }) => height || "40px"};
  flex-shrink: 0;
`;

const Butterfly = ({ width = "40px", height = "40px" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
    fill="none"
    width={width}
    height={height}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.2139 21.0374C19.6652 31.5241 10.8456 39.878 0 40V0C10.8456 0.122093 19.6652 8.47586 20.2139 18.9626C20.7553 8.6141 29.3512 0.342718 40 0.00914923V39.991C29.3512 39.6574 20.7553 31.386 20.2139 21.0374Z"
      fill="#FF6428"
    />
  </svg>
);

export default Butterfly;
