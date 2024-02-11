import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const MotionTextBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 0.5rem;
`;

const MotionText = styled(motion.h1)`
  font-size: 1.2rem;
  color: #211c6a;
`;

export default function IntroText() {
  return (
    <MotionTextBox>
      <MotionText
        initial={{ x: -160, y: 20 }}
        animate={{ x: -80, opacity: [0, 1] }}
        transition={{
          duration: 1,
          delay: 0.8,
        }}
      >
        <p>안녕하세요. 김태이입니다.</p>
      </MotionText>
      <MotionText
        initial={{ x: 150 }}
        animate={{ x: 0, opacity: [0, 1] }}
        transition={{
          duration: 1,
          delay: 0.8,
        }}
      >
        <p>
          Frontend 신입 개발자로 React.js를 활용하여 베베 프로젝트룰 구축하고{" "}
          <br /> Next.js와 Typescript를 학습하며 적용하고 있습니다.
        </p>
      </MotionText>
      <MotionText
        initial={{ x: -50, y: -20 }}
        animate={{ x: 50, opacity: [0, 1] }}
        transition={{
          duration: 1,
          delay: 0.8,
        }}
      ></MotionText>
    </MotionTextBox>
  );
}
