import React from "react";
import { PROFILE } from "@/constants/profile";
import styled from "styled-components";

export default function Profile_text() {
  return (
    <ProfileTextBox>
      <div>
        {PROFILE.map(({ type, content }, index) => (
          <p key={index}>
            {type} : {content}
          </p>
        ))}
      </div>
    </ProfileTextBox>
  );
}

const ProfileTextBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  h1 {
    font-size: 1.8rem;
  }

  div {
    background: white;
    border-radius: 30px;
    margin-bottom: 50px;
  }

  p {
    width: 280px;
    background: white;
    border-radius: 30px;
    font-size: 1rem;
    padding: 0.3rem 0;
    text-align: start;
    margin-left: 1.2rem;
  }
`;
