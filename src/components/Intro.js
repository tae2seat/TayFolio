"use client";

import IntroText from "@/hooks/framer_motion/IntroText";
import { motion } from "framer-motion";
import styled from "styled-components";

export default function Intro({ id }) {
  return (
    <IntroContainer id={id}>
      <IntroText />
    </IntroContainer>
  );
}

const IntroContainer = styled(motion.section)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 4rem);
`;
