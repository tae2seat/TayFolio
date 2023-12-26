import React, { useEffect, useRef, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import styled from "styled-components";
import { motion } from "framer-motion";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

export default function Navbar() {
  const navbarRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(0);

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }
  }, []);

  return (
    <NavContainer ref={navbarRef}>
      <Logo>
        <motion.svg
          width="50"
          height="50"
          viewBox="0 0 340 340"
          initial="hidden"
          animate="visible"
        >
          <motion.line
            style={{
              strokeWidth: 20,
              strokeLinecap: "round",
              fill: "transparent",
            }}
            x1="40"
            y1="10"
            x2="170"
            y2="10"
            stroke="#e5c1c5"
            variants={draw}
            custom={2}
          />
          <motion.line
            style={{
              strokeWidth: 20,
              strokeLinecap: "round",
              fill: "transparent",
            }}
            x1="40"
            y1="10"
            x2="40"
            y2="160"
            stroke="#e5c1c5"
            variants={draw}
            custom={2}
          />
          <motion.line
            style={{
              strokeWidth: 20,
              strokeLinecap: "round",
              fill: "transparent",
            }}
            x1="40"
            y1="80"
            x2="170"
            y2="80"
            stroke="#e5c1c5"
            variants={draw}
            custom={2}
          />
          <motion.line
            style={{
              strokeWidth: 20,
              strokeLinecap: "round",
              fill: "transparent",
            }}
            x1="40"
            y1="160"
            x2="170"
            y2="160"
            stroke="#e5c1c5"
            variants={draw}
            custom={2}
          />
          <motion.line />

          <motion.circle
            style={{
              strokeWidth: 20,
              strokeLinecap: "round",
              fill: "transparent",
            }}
            cx="200"
            cy="200"
            r="80"
            stroke="#c3e2dd"
            variants={draw}
            custom={1}
          />
        </motion.svg>
        <h1 className="title">TayFolio</h1>
      </Logo>
      <NavList>
        <ScrollLink
          to="intro"
          smooth={true}
          offset={-navbarHeight}
          duration={500}
        >
          Intro
        </ScrollLink>
        <ScrollLink
          to="about"
          smooth={true}
          offset={-navbarHeight}
          duration={500}
        >
          About
        </ScrollLink>
        <ScrollLink
          to="skills"
          smooth={true}
          offset={-navbarHeight}
          duration={500}
        >
          Skills
        </ScrollLink>
        <ScrollLink
          to="projects"
          smooth={true}
          offset={-navbarHeight}
          duration={500}
        >
          Projects
        </ScrollLink>
      </NavList>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  position: sticky;
  top: 0px;
  box-sizing: border-box;

  height: 4rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem;
  background: transparent;

  .title {
    color: black;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const NavList = styled.nav`
  display: flex;
  gap: 2rem;
`;
