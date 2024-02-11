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
  justify-content: center;
  height: calc(100vh - 4rem);

  background: blue;
  @media (min-width: 1024px) {
\  }
`;

const StyledImage = styled(Image)`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 2px solid #40a2e3;
`;

export default function Intro({ id }) {
  return (
    <IntroContainer id={id}>
      <StyledImage alt="profileImg" src={profileImg} />
      <IntroText />
    </IntroContainer>
  );
}
