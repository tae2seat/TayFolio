"use client";

import styled from "styled-components";
import Skill_Img from "./section/skill/Skill_Img";
import Skill_Info from "./section/skill/Skill_Info";
import { SKILLS } from "@/constants/skills";
import { useState } from "react";

export default function Skill({ id }) {
  const [tagValue, setTagValue] = useState(1);
  return (
    <SkillContainer id={id}>
      {SKILLS.map(({ skillId, img, name }, index) => (
        <div key={index}>
          <div onClick={() => setTagValue(skillId)}>
            <Skill_Img img={img} name={name} />
          </div>
        </div>
      ))}
      <Skill_Info
        content={SKILLS[tagValue - 1].content}
        stack={SKILLS[tagValue - 1].stack}
        tagValue={tagValue}
      />
    </SkillContainer>
  );
}

const SkillContainer = styled.section`
  display: flex;
  justify-content: center;
  background-color: #f2eee5;
`;
