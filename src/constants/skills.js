import TailwindCSS from "../../public/skills/tailwind.png";
import JS from "../../public/skills/javascript.png";
import React from "../../public/skills/react.png";
import Redux from "../../public/skills/redux.png";
import Next from "../../public/skills/next.png";
import Typescript from "../../public/skills/typescript.png";
import Recoil from "../../public/skills/recoil.png";
import Node from "../../public/skills/node.png";
import Figma from "../../public/skills/figma.png";
import Styled_Components from "../../public/skills/styled_components.png";
import AWS from "../../public/skills/aws.png";
import Postman from "../../public/skills/postman.png";

export const SKILLS = [
  {
    skillId: 1,
    img: JS,
    name: "Javascript",
    content: "",
    stack: "frontend",
  },
  {
    skillId: 2,
    img: React,
    name: "React",
    content:
      "컴포넌트 기반의 아키텍처로 UI를 구성할 수 있어서 코드의 재사용성이 높아지고 유지보수가 용이한 경험을 하였습니다.",
    stack: "frontend",
  },
  {
    skillId: 3,
    img: TailwindCSS,
    name: "Tailwind CSS",
    content:
      "클래스 기반의 css 프레임워크를 사용하여 직관적이고 빠르게 스타일을 적용할 수 있었습니다.",
    stack: "frontend",
  },
  {
    skillId: 4,
    img: Next,
    name: "Next.js",
    content:
      "서버 사이드 랜더링(SSR)과 정적 사이트 생성(SSG)를 경험하였고, 간편한 라우팅으로 페이지 간 이동이나 라우팅 설정을 하였습니다.",
    stack: "frontend",
  },
  {
    skillId: 5,
    img: Styled_Components,
    name: "Styled-components",
    content:
      "컴포넌트 단위로 스타일을 적용하여 컴포넌트의 스타일을 쉽게 추적할 수 있도록 하였습니다.",
    stack: "frontend",
  },
  {
    skillId: 6,
    img: Typescript,
    name: "Typescript",
    content:
      "타입 시슽템에 발생하는 오류를 빠르게 잡을 수 있도록 타입스크립트를 사용하였고, 코드의 가독성을 높이고 유지보수를 쉽게 할 수 있는 경험을 하였습니다.",
    stack: "frontend",
  },
  {
    skillId: 7,
    img: Node,
    name: "Node.js",
    content: "",
    stack: "backend",
  },
  {
    skillId: 8,
    img: Redux,
    name: "Redux-toolkit",
    content:
      "리덕스 툴깃을 사용함으로써 상태관리를 효과적으로 하였고, 'createAsyncThunk'를 이용해서 비동기 작업을 처리하였습니다.",
    stack: "frontend",
  },
  {
    skillId: 9,
    img: Recoil,
    name: "Recoil",
    content:
      "Recoil을 사용함으로써 상태를 전역적으로 관리하는 경험을 하였습니다.",
    stack: "frontend",
  },
  {
    skillId: 10,
    img: AWS,
    name: "AWS",
    content:
      "아마존에서 개발한 클라우드 컴퓨팅 플랫폼을 사용함으로써 인프라를 구축, 관리하는 연습을 했습니다.",
    stack: "backend",
  },
  {
    skillId: 11,
    img: Postman,
    name: "Postman",
    content:
      "백엔드 개발자와 포스트맨을 활용하여 API연동 작업을 수행하고, 프론트엔드가 구현되기 전에 자유롭게 테스트를 할 수 있는 환경을 경험했습니다.",
    stack: "etc",
  },
  {
    skillId: 12,
    img: Figma,
    name: "Figma",
    content: "디자이너와 피그마를 활용하여 디자인 컨셉을 구체화 하였습니다. ",
    stack: "etc",
  },
  {
    skillId: 13,
    img: "",
    name: "Express",
    content: "",
    stack: "backend",
  },
  {
    skillId: 14,
    img: "",
    name: "framer-motion",
    content: "",
    stack: "frontend",
  },
];
