"use client";

import IntroTyping from "@/hooks/framer_motion/IntroTyping";
import Profile_text from "./section/profile/Profile_text";
import styled from "styled-components";
import Image from "next/image";
import TitleMotionAni from "@/hooks/framer_motion/titleMotion";

const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
  }
`;

const StyledImage = styled(Image)`
  width: 280px;
  height: 280px;
  border-radius: 50%;
  border: 2px solid #40a2e3;

  @media (min-width: 1024px) {
    width: 320px;
    height: 320px;
  }
`;

export default function About({ id }) {
  return (
    <AboutContainer id={id}>
      <div>
        {" "}
        <TitleMotionAni text="About Me" />
      </div>
      <StyledImage
        alt="profileImg"
        src="/khy.jpeg"
        height={320}
        width={320}
        priority
      />
      <IntroTyping />
      <div>
        <Profile_text />
      </div>
    </AboutContainer>
  );
}
