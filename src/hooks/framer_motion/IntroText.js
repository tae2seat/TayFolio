import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const MotionTextBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.4rem;
  width: 380px;

  @media (min-width: 768px) {
    width: 540px;
  }

  @media (min-width: 1024px) {
    width: 600px;
  }
`;

const MotionText = styled(motion.div)`
  .hello {
    font-size: 2rem;
  }

  .info {
    font-size: 1.2rem;
    color: #211c6a;
    padding: 0 0.8rem;
    background: white;
  }
`;

export default function IntroText() {
  return (
    <MotionTextBox>
      <MotionText
        initial={{ x: -120, y: 20 }}
        animate={{ x: 0, opacity: [0, 1] }}
        transition={{
          duration: 1,
          delay: 0.8,
        }}
      >
        <span className="hello">안녕하세요. 김태이입니다.</span>
      </MotionText>
      <MotionText
        initial={{ x: 150 }}
        animate={{ x: 0, opacity: [0, 1] }}
        transition={{
          duration: 1,
          delay: 0.8,
        }}
      >
        <p className="info">
          Frontend 신입 개발자로 React.js를 활용하여 베베 프로젝트룰 구축하고,{" "}
          <br /> Next.js와 Typescript를 학습하며 적용하고 있습니다.
          <br />
        </p>
      </MotionText>
    </MotionTextBox>
  );
}
