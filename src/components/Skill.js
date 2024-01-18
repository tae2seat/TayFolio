"use client";

import styled from "styled-components";
import { SKILLS } from "@/constants/skills";
import { useState } from "react";
import Image from "next/image";

export default function Skill({ id }) {
  const [tagValue, setTagValue] = useState(1);
  return (
    <SkillContainer id={id}>
      <SkillImgBox>
        {SKILLS.map(({ skillId, img, name }, index) => (
          <SkillImg key={index}>
            <Image
              onClick={() => setTagValue(skillId)}
              alt={img}
              src={img}
              width={60}
              height={60}
            />
            <p className="name">{name}</p>
          </SkillImg>
        ))}
      </SkillImgBox>
      <SkillInfoBox tagValue={tagValue}>
        <p>{SKILLS[tagValue - 1].content}</p>
        <p>{SKILLS[tagValue - 1].stack}</p>
      </SkillInfoBox>
    </SkillContainer>
  );
}

const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1024px) {
    height: calc(100vh - 4rem);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`;

const SkillImgBox = styled.section`
  width: 100%;
  background-color: #f1bcae;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const SkillImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
`;

const SkillInfoBox = styled.div`
  width: 100%;
  height: 300px;
  background-color: #f5ddad;
`;
