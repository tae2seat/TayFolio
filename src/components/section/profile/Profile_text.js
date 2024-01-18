import React from "react";
import { PROFILE } from "@/constants/profile";
import styled from "styled-components";

export default function Profile_text() {
  return (
    <ProfileTextBox style={{ backgroundColor: "green" }}>
      {PROFILE.map(({ type, content }, index) => (
        <p key={index}>
          {type} : {content}
        </p>
      ))}
    </ProfileTextBox>
  );
}

const ProfileTextBox = styled.section`
  width: 100%;
  height: 50%;
  background: green;
`;
