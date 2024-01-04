"use client";

import styled from "styled-components";
import { SKILLS } from "@/constants/skills";
import { useState } from "react";
import Image from "next/image";

export default function Skill({ id }) {
  const [tagValue, setTagValue] = useState(1);
  return (
    <SkillContainer id={id}>
      <SkillImgSection>
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
      </SkillImgSection>
      <SkillInfo tagValue={tagValue}>
        <p>{SKILLS[tagValue - 1].content}</p>
        <p>{SKILLS[tagValue - 1].stack}</p>
      </SkillInfo>
    </SkillContainer>
  );
}

const SkillContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #fce9da;
  width: 100%;
  padding: 6% 0;
`;

const SkillImgSection = styled.section`
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
`;

const SkillInfo = styled.div`
  background-color: #f5ddad;
`;
