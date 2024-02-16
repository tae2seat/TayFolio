"use client";

import IntroTyping from "@/hooks/framer_motion/IntroTyping";
import Profile_text from "./section/profile/Profile_text";
import styled from "styled-components";
import TitleMotionAni from "@/hooks/framer_motion/titleMotion";

export default function About({ id }) {
  // 화면 작을 때는 flex-col 화면이 커지면 flex로 설정하기
  return (
    <AboutContainer id={id}>
      <div className="title">
        <TitleMotionAni text="About Me" />
      </div>
      <div className="content">
        <Profile_text />
        <IntroTyping />
      </div>
    </AboutContainer>
  );
}

const AboutContainer = styled.section`
  .title {
  }

  .content {
  }
`;
