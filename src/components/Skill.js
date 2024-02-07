"use client";

import styled from "styled-components";
import { SKILLS } from "@/constants/skills";
import { useState } from "react";
import Image from "next/image";

export default function Skill({ id }) {
  const [selectedCategory, setSelectedCategory] = useState("frontend");
  const [tagValue, setTagValue] = useState(1);
  // 해당 카테고리에 해당하는 스킬 필터링

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    const firstSkillIndex = SKILLS.findIndex(
      (skill) => skill.stack === category
    );
    setTagValue(firstSkillIndex !== -1 ? SKILLS[firstSkillIndex].skillId : 1);
  };

  const filteredSkills = SKILLS.filter(
    (skill) => skill.stack === selectedCategory
  );

  return (
    <SkillContainer id={id}>
      <CategoryBox>
        <button onClick={() => handleCategoryClick("frontend")}>
          Frontend
        </button>
        <button onClick={() => handleCategoryClick("backend")}>Backend</button>
        <button onClick={() => handleCategoryClick("etc")}>etc</button>
      </CategoryBox>
      <SkillImgBox>
        {filteredSkills.map(({ skillId, img }, index) => (
          <SkillImg
            key={index}
            alt={img}
            src={img}
            onClick={() => setTagValue(skillId)}
          />
        ))}
        <SkillInfoBox tagValue={tagValue}>
          <p>{SKILLS[tagValue - 1].name}</p>
          <p>{SKILLS[tagValue - 1].content}</p>
        </SkillInfoBox>
      </SkillImgBox>
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
  }
`;

const CategoryBox = styled.nav`
  display: flex;
  justify-content: center;
  gap: 3rem;

  width: 100%;
  height: 2rem;
  margin: 16px;

  button {
    background: white;
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

const SkillImg = styled(Image)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  width: 45px;
  height: 45px;
`;

const SkillInfoBox = styled.div`
  width: 100%;
  height: 300px;
  background-color: #f5ddad;
`;
