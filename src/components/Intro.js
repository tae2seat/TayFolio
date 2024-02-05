"use client";

import { motion } from "framer-motion";
import styled from "styled-components";
import Image from "next/image";
import profileImg from "../../public/khy.jpeg";

const IntroContainer = styled(motion.section)`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  @media (min-width: 1024px) {
    height: calc(100vh - 4rem);
  }
`;

const MotionTextBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const MotionText = styled(motion.h1)`
  font-size: 1.2rem;
  color: #211c6a;
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
      <StyledImage alt={profileImg} src={profileImg} />
      <MotionTextBox>
        <MotionText
          initial={{ x: -160, y: 20 }}
          animate={{ x: -80, opacity: [0, 1] }}
          transition={{
            duration: 1,
            delay: 0.8,
          }}
        >
          안녕하세요.
        </MotionText>
        <MotionText
          initial={{ x: 150 }}
          animate={{ x: 0, opacity: [0, 1] }}
          transition={{
            duration: 1,
            delay: 0.8,
          }}
        >
          스펀지처럼 흡수하는 프론트엔드 개발자
        </MotionText>
        <MotionText
          initial={{ x: -50, y: -20 }}
          animate={{ x: 50, opacity: [0, 1] }}
          transition={{
            duration: 1,
            delay: 0.8,
          }}
        >
          김태이입니다.
        </MotionText>
      </MotionTextBox>
    </IntroContainer>
  );
}
