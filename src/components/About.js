"use client";

import IntroTyping from "@/hooks/framer_motion/IntroTyping";
import Profile_text from "./section/profile/Profile_text";
import styled from "styled-components";

export default function About({ id }) {
  // 화면 작을 때는 flex-col 화면이 커지면 flex로 설정하기
  return (
    <AboutContainer id={id}>
      <Profile_text />
      <IntroTyping />
    </AboutContainer>
  );
}

const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 4rem);
  background: yellow;
`;
