"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Intro({ id }) {
  const [blogTitle, setBlogTitle] = useState("");
  const [count, setCount] = useState(0);
  const completionWord = "Hello! Frontend Developer 김태이";

  // useEffect(() => {
  //   const typingInterval = setInterval(() => {
  //     setBlogTitle((prevTitleValue) => {
  //       let result = prevTitleValue
  //         ? prevTitleValue + completionWord[count]
  //         : completionWord[0];
  //       setCount(count + 1);

  //       if (count >= completionWord.length) {
  //         setCount(0);
  //         setBlogTitle("");
  //       }

  //       return result;
  //     });
  //   }, 200);

  //   return () => {
  //     clearInterval(typingInterval);
  //   };
  // });

  return (
    <IntroContainer id={id}>
      <IntroText>
        Hello!
        <br />
        Frontend Developer
        <br />
        김태이입니다.
      </IntroText>
    </IntroContainer>
  );
}

const IntroContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 4rem);
  margin-top: 70px;
`;

const IntroText = styled.p`
  color: black;
`;
