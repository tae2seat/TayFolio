import React, { useEffect, useRef, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import styled from "styled-components";
import LogoSvg from "../section/svg/LogoSvg.js";

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
        {/* <LogoSvg /> */}
        <h1 className="title">TayFolio</h1>
      </Logo>
      <NavList>
        <ScrollLink
          to="intro"
          smooth={true}
          offset={-navbarHeight}
          duration={500}
        >
          <span className="text">Intro</span>
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
  z-index: 5;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 4rem;

  padding: 1.3rem;
  background: #fff6e9;

  @media (min-width: 768px) {
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;

  .title {
    font-size: 1.6rem;
    color: #40a2e3;
  }
`;

const NavList = styled.nav`
  display: flex;
  gap: 1rem;

  @media (min-width: 768px) {
    gap: 2rem;
  }
`;
