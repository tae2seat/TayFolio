import { useEffect, useState } from "react";
import styled from "styled-components";
import { PROJECTS } from "@/constants/projects";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Project({ id }) {
  const [scrollYProgress, setScrollYProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.clientHeight - window.innerHeight;
      const progress = scrollY / maxScroll;
      setScrollYProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scale = scrollYProgress * 1.0;

  return (
    <ProjectContainer id={id}>
      {PROJECTS.map(
        ({ projectId, title, img, explain, skills, github, web }) => (
          <ProjectMainBox
            key={projectId}
            style={{ transform: `scale(${scale})` }}
          >
            <Image
              alt={img}
              src={img}
              width={320}
              style={{ borderRadius: "6px" }}
            />
            <ProjectDetailBox>
              <p>{title}</p>
              <p>{explain}</p>
              <p>{skills}</p>
              <p>{github}</p>
              <p>{web}</p>
            </ProjectDetailBox>
          </ProjectMainBox>
        )
      )}
    </ProjectContainer>
  );
}

const ProjectContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  gap: 50px;

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 80px;
  }
`;

const ProjectMainBox = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding: 14px 10px;
  background: pink;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
`;

const ProjectDetailBox = styled.div`
  background: white;
  width: 320px;
  margin-top: 14px;
`;
