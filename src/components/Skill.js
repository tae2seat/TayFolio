import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { SKILLS } from "@/constants/skills";

// 페이지 스타일
const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1.8rem;
  padding: 2rem 0;

  background: red;

  @media (min-width: 1024px) {
    display: flex;
    height: calc(100vh - 4rem);
  }
`;

// 스킬 카드 스타일
const SkillCardBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .card {
    width: 300px;
    padding: 0.4rem;
    display: flex;
    flex-direction: column;
    align-items: start;
    // border-style: solid;
    // border-width: 2px;
    // border-radius: 10px;
    // border-color: blue;
  }

  .content {
    width: 100%;
    height: 120px;
    background: white;
    line-height: 2rem;
    padding: 0.2rem;
  }
`;

const SkillImgBox = styled.section`
  display: flex;
  align-items: center;
  gap: 1rem;

  .name {
    font-size: 1rem;
  }
`;

const SkillImg = styled(Image)`
  width: 45px;
  height: 45px;
  margin: auto;
  padding: 0.3rem;
  background: white;
  border: 1px solid;
  border-color: grey;
  border-radius: 50%;
`;

// 버튼 스타일
const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
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
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;

  &:hover {
    background-position: right center;
  }
`;

const FrontendButton = styled(Button)`
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
      <p>이미지를 클릭하면 사용경험이 나옵니다.</p>
      <ButtonBox>
        <FrontendButton onClick={() => handleCategoryClick("frontend")}>
          Frontend
        </FrontendButton>
        <EtcButton onClick={() => handleCategoryClick("etc")}>etc</EtcButton>
      </ButtonBox>
      <SkillCardBox>
        {filteredSkills.map(({ skillId, img, name }, index) => (
          <div key={index} className="card">
            {" "}
            <SkillImgBox>
              <SkillImg
                alt={img}
                src={img}
                onClick={() => setTagValue(skillId)}
              />
              <p className="name">{name}</p>
            </SkillImgBox>
            {tagValue === skillId && (
              <p tagValue={tagValue} className="content">
                {SKILLS[tagValue - 1].content}
              </p>
            )}
          </div>
        ))}
      </SkillCardBox>
    </SkillContainer>
  );
};

export default Skill;
