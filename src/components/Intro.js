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

export default function Intro({ id }) {
  const text =
    "안녕하세요 저는 김태이입니다. 여기는 타이핑 할 무언가를 쓰는 공간이다 여기에 무슨 얘기를 쓸 지 한번 고민해 보시오. 자기주도로 학습을 했다는 말을 쓰고 어떤 식으로 공부를 하였는지 쓰는 것이 좋겠군 ";

  return (
    <IntroContainer id={id}>
      <IntroText />
      <StyledImage alt="profileImg" src={profileImg} />
      <IntroTyping text={text} />
    </IntroContainer>
  );
}
