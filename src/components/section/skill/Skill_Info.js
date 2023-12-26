import React from "react";
import styled from "styled-components";

export default function Skill_Info({ content, stack, tagValue }) {
  console.log(tagValue);
  return (
    <InfoSection>
      <p>{content}</p>
      <p>{stack}</p>
    </InfoSection>
  );
}

const InfoSection = styled.div`
  background-color: #c3e3dd;
`;
