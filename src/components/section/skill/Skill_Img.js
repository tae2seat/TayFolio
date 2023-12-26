import React from "react";
import Image from "next/image";
import styled from "styled-components";

export default function Skill_Img({ img, name }) {
  return (
    <ImgSection>
      <Image alt={img} src={img} width={60} height={60} />
      <p>{name}</p>
    </ImgSection>
  );
}

const ImgSection = styled.div`
  background-color: #e5c1c5;
`;
