import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

export default function IntroText() {
  return (
    <div>
      <TextContainer
        initial={{ x: -100 }}
        animate={{ x: 25, opacity: [0, 1] }}
        transition={{
          duration: 1,
          delay: 1,
        }}
      >
        Hello!
      </TextContainer>
      <TextContainer
        initial={{ x: 150 }}
        animate={{ x: 0, opacity: [0, 1] }}
        transition={{
          duration: 1,
          delay: 1,
        }}
      >
        Frontend Developer
      </TextContainer>
      <TextContainer
        initial={{ x: -50 }}
        animate={{ x: 95, opacity: [0, 1] }}
        transition={{
          duration: 1,
          delay: 1,
        }}
      >
        김태이입니다.
      </TextContainer>
    </div>
  );
}

const TextContainer = styled(motion.h1)``;
