"use client";

import { motion } from "framer-motion";
import styled from "styled-components";
import Image from "next/image";
// import profileImg from "../../public/khy.jpeg";
import IntroText from "@/hooks/framer_motion/IntroText";

const IntroContainer = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  height: calc(100vh - 4rem);

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row-reverse;
    gap: 5rem;
  }
`;

const StyledImage = styled(Image)`
  border-radius: 50%;
  border: 2px solid #40a2e3;

  @media (min-width: 1024px) {
    margin-top: 0;
  }
`;

export default function Intro({ id }) {
  return (
    <IntroContainer id={id}>
      <StyledImage
        alt="profileImg"
        src="/khy.jpeg"
        height={300}
        width={300}
        priority
      />
      <IntroText />
    </IntroContainer>
  );
}
