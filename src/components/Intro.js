"use client";

import { motion } from "framer-motion";
import styled from "styled-components";
import Image from "next/image";
import profileImg from "../../public/khy.jpeg";
import IntroText from "@/hooks/framer_motion/IntroText";

const IntroContainer = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    height: calc(100vh - 4rem);
  }
`;

const StyledImage = styled(Image)`
  width: 280px;
  height: 280px;
  border-radius: 50%;
  border: 2px solid #211c6a;
`;

const TypingAnimation = styled(motion.h1)`
  font-size: 0.8rem;
  color: #2e3a87;
`;

export default function Intro({ id }) {
  return (
    <IntroContainer id={id}>
      <IntroText />
      <StyledImage alt="profileImg" src={profileImg} />
      <TypingAnimation
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {" "}
        Framer Motion 텍스트 애니메이션
      </TypingAnimation>
    </IntroContainer>
  );
}
