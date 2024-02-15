import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { PROJECTS } from "@/constants/projects";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";

export default function Project({ id }) {
  const [scrollYProgress, setScrollYProgress] = useState(0);
  const [selectedId, setSelectedId] = useState(null);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
      <h1
        className="title"
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        Projects
      </h1>
      <div className="grid" ref={ref} style={{ backgroundColor: "blue" }}>
        {PROJECTS.map(({ projectId, title, img, explain }) => (
          <ProjectMainBox
            key={projectId}
            style={{ transform: `scale(${scale})` }}
            onClick={() =>
              setSelectedId(selectedId === projectId ? null : projectId)
            }
          >
            <Image
              alt={img}
              src={img}
              width={320}
              style={{ borderRadius: "6px" }}
            />
            <p className="project-title">{title}</p>
            <p className="explain">{explain}</p>
          </ProjectMainBox>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <SelectedProject
            layoutId={selectedId}
            onClick={() => setSelectedId(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ProjectDetailBox>
              <p>{PROJECTS[selectedId - 1].title}</p>
              <p>{PROJECTS[selectedId - 1].explain}</p>
              <p>{PROJECTS[selectedId - 1].skills}</p>
              <p>{PROJECTS[selectedId - 1].github}</p>
              <p>{PROJECTS[selectedId - 1].web}</p>
            </ProjectDetailBox>
            <CloseButton>Close</CloseButton>
          </SelectedProject>
        )}
      </AnimatePresence>
    </ProjectContainer>
  );
}

const ProjectContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    font-size: 2.8rem;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2.8rem 3.8rem;
    padding: 1rem;
  }

  @media screen and (min-width: 1024px) {
    height: calc(100vh - 4rem);
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

const ProjectMainBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: pink;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
  padding: 0.6rem;
  cursor: pointer;

  .project-title {
    font-size: 1.2rem;
  }

  .explain {
    font-size: 0.8rem;
  }
`;

const ProjectDetailBox = styled.div`
  background: white;
  width: 320px;
  margin-top: 14px;
`;

const SelectedProject = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
`;
