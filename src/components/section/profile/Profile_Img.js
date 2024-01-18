import React from "react";
import styled from "styled-components";

export default function Profile_Img() {
  return (
    <ProfileImgBox>
      <div>장점</div>
      <div>단점</div>
    </ProfileImgBox>
  );
}

const ProfileImgBox = styled.section`
  width: 100%;
  height: 50%;
  background: yellow;
`;
