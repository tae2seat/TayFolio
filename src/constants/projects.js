import diaryImage from "../../public/diary.png";
import mallImage from "../../public/mall.jpg";
import companyImage from "../../public/company.png";

export const PROJECTS = [
  {
    projectId: 1,
    title: "Bebe Company",
    img: companyImage,
    explain: "베베 브랜드와 회사 크루들의 종합적인 정보를 제공하는 웹",
    skills: "React tailwind-css",
    github: "https://github.com/tae2seat/bebe",
    web: "https://company.tae2seat.com/",
  },
  {
    projectId: 2,
    title: "Bebe Diary",
    img: diaryImage,
    explain: "아이와 엄마의 일상을 기록하는 다이어리 웹",
    skills: "React Redux-toolkit tailwind-css SWR Axios",
    github: "https://github.com/tae2seat/bebe-diary",
    web: "https://diary.tae2seat.com/",
  },
  {
    projectId: 3,
    title: "Bebe Mall",
    img: mallImage,
    explain: "아이가 중심인 쇼핑몰 웹",
    skills: "React Redux-toolkit tailwind-css Axios Typescript",
    github: "https://github.com/tae2seat/bebe-mall",
    web: "https://mall.tae2seat.com",
  },
];
