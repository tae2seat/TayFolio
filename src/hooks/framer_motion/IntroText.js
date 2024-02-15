"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import TextTypingAni from "./typingWords";

const MotionTextBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 340px;
  height: 220px;
  gap: 1rem;

  .typing {
    padding: 0 1.5rem;
    height: 100px;
  }
`;

const MotionText = styled(motion.div)`
  width: 340px;
  margin-top: 0.5rem;
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
        animate={{ x: 20, opacity: [0, 1] }}
        transition={{
          duration: 1,
          delay: 0.8,
        }}
      >
        <span className="hello">Hello! Welcome to</span>
      </MotionText>
      <MotionText
        initial={{ x: 250 }}
        animate={{ x: 120, opacity: [0, 1] }}
        transition={{
          duration: 1,
          delay: 0.8,
        }}
      >
        {" "}
        <span className="hello">태이 Portfolio!</span>
      </MotionText>
      <div className="typing">
        <TextTypingAni
          text={
            "안녕하세요. 스펀지처럼 흡수하는 프론트엔드 개발자 김태이입니다."
          }
        />{" "}
      </div>
    </MotionTextBox>
  );
}
