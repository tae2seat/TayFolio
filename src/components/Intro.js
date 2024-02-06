"use client";

import { motion } from "framer-motion";
import styled from "styled-components";
import Image from "next/image";
import profileImg from "../../public/khy.jpeg";
import IntroText from "@/hooks/framer_motion/IntroText";
import IntroTyping from "@/hooks/framer_motion/IntroTyping";

const IntroContainer = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 4rem);
  @media (min-width: 1024px) {
  }
`;

const StyledImage = styled(Image)`
  width: 280px;
  height: 280px;
  border-radius: 50%;
  border: 2px solid #211c6a;
`;

export default function Intro({ id }) {
  return (
    <IntroContainer id={id}>
      <IntroText />
      <StyledImage alt="profileImg" src={profileImg} />
      <IntroTyping />
    </IntroContainer>
  );
}
