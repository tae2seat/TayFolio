"use client";

import Profile_text from "./section/profile/Profile_text";
import Profile_Img from "./section/profile/Profile_Img";
import styled from "styled-components";

export default function About({ id }) {
  // 화면 작을 때는 flex-col 화면이 커지면 flex로 설정하기
  return (
    <AboutContainer id={id}>
      <Profile_text />
      <Profile_Img />
    </AboutContainer>
  );
}

const AboutContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
