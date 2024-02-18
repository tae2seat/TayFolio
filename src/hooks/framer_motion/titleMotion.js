import styled from "styled-components";

const { useInView } = require("framer-motion");
const { useRef } = require("react");

const StyledTitle = styled.h1`
  width: 200px;
  text-align: center;
  font-size: 2rem;
`;

const TitleMotionAni = ({ text }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <StyledTitle
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      {text}
    </StyledTitle>
  );
};

export default TitleMotionAni;
