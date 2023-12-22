import styled from "styled-components";
import Skill_Img from "./section/skill/Skill_Img";
import Skill_Info from "./section/skill/Skill_Info";

export default function Skill({ id }) {
  return (
    <SkillContainer id={id}>
      <Skill_Img />
      <Skill_Info />
    </SkillContainer>
  );
}

const SkillContainer = styled.section`
  display: flex;
  justify-content: center;
`;
