import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { SKILLS } from "@/constants/skills";

const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: calc(100vh - 4rem);

  background: ;



  @
`;

const Button = styled.button`
  flex: 1 1 auto;
  margin: px;
  padding: 12px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  text-shadow: 0px 0px 10px rgba(0,0,0,0.3);
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;

  );

  &:hover {
    background-position: right center;
  }
`;

const ButtonBox = styled.div``;

const FrontendButton = styled(Button)`
  background-image: linear-gradient(
    to right,
    #f6d365 0%,
    #fda085 51%,
    #f6d365 100%
  );
`;

const BackendButton = styled(Button)`
  background-image: linear-gradient(
    to right,
    #fbc2eb 0%,
    #a6c1ee 51%,
    #fbc2eb 100%
  );
`;

const EtcButton = styled(Button)`
  background-image: linear-gradient(
    to right,
    #84fab0 0%,
    #8fd3f4 51%,
    #84fab0 100%
  );
`;

const SkillImgBox = styled.section`
  background-color: #f1bcae;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const SkillImg = styled(Image)`
  width: 45px;
  height: 45px;
`;

const SkillInfoBox = styled.div`
  background-color: #f5ddad;
`;

const Skill = ({ id }) => {
  const [selectedCategory, setSelectedCategory] = useState("frontend");
  const [tagValue, setTagValue] = useState(1);

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
      <ButtonBox>
        <FrontendButton onClick={() => handleCategoryClick("frontend")}>
          Frontend
        </FrontendButton>
        <BackendButton onClick={() => handleCategoryClick("backend")}>
          Backend
        </BackendButton>
        <EtcButton onClick={() => handleCategoryClick("etc")}>etc</EtcButton>
      </ButtonBox>
      <SkillImgBox>
        {filteredSkills.map(({ skillId, img }, index) => (
          <SkillImg
            key={index}
            alt={img}
            src={img}
            onClick={() => setTagValue(skillId)}
          />
        ))}
      </SkillImgBox>
      <SkillInfoBox tagValue={tagValue}>
        <p>{SKILLS[tagValue - 1].name}</p>
        <p>{SKILLS[tagValue - 1].content}</p>
      </SkillInfoBox>
    </SkillContainer>
  );
};

export default Skill;
