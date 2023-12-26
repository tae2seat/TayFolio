import styled from "styled-components";
import Profile_Img from "./section/profile/Profile_Img";
import Project_Detail from "./section/project/Project_Detail";
import Project_Info from "./section/project/Project_Info";
import Project_Img from "./section/project/Project_Img";

export default function Project({ id }) {
  return (
    <ProjectContainer id={id}>
      <ProjectMainBox>
        <Project_Img />
        <Project_Info />
      </ProjectMainBox>
      <ProjectAddressBox>프로젝트 주소</ProjectAddressBox>
      <Project_Detail />
    </ProjectContainer>
  );
}

const ProjectContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 70px);
  margin-top: 70px;
`;

const ProjectMainBox = styled.div`
  display: flex;
`;

const ProjectAddressBox = styled.div``;
