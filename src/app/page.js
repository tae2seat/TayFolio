"use client";

import About from "@/components/About";
import Intro from "@/components/Intro";
import Project from "@/components/Project";
import Skill from "@/components/Skill";
import Navbar from "@/components/common/Navbar";
import styled from "styled-components";

export default function Home() {
  return (
    <MainContainer>
      <Navbar />
      <Intro id="intro" />
      <About id="about" />
      <Skill id="skills" />
      <Project id="projects" />
    </MainContainer>
  );
}

const MainContainer = styled.div``;
