import styled from "styled-components";

export default function Project({ id }) {
  return (
    <ProjectContainer id={id}>
      <ProjectMainBox>
        <p>프로젝트 이미지</p>
        <p>프로젝트 제목</p>
        <p>프로젝트 스킬</p>
        <p>프로젝트 웹 주소</p>
        <p>프로젝트 깃헙 주소</p>
      </ProjectMainBox>
      <ProjectDetailBox>
        <p>디테일 설명</p>
      </ProjectDetailBox>
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

  background: blue;
`;

const ProjectMainBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 400px;
  background: pink;
`;

const ProjectDetailBox = styled.div`
  background: white;
  width: 350px;
  height: 200px;
`;
//ProjectMainBox를 클릭하면 디테일 페이지가 나오는 걸로 설정하기
