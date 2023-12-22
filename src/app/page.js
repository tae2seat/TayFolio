"use client";

import About from "@/components/About";
import Intro from "@/components/Intro";
import Project from "@/components/Project";
import Skill from "@/components/Skill";
import Navbar from "@/components/common/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Intro id="intro" />
      <About id="about" />
      <Skill id="skills" />
      <Project id="projects" />
    </div>
  );
}
