import React, { useEffect, useRef, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import styled from "styled-components";
import LogoSvg from "../section/svg/LogoSvg.js";

export default function Navbar() {
  const navbarRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [isVisibleNav, setIsVisibleNav] = useState(false);

  const handleToggleNav = () => {
    setIsVisibleNav(!isVisibleNav);
  };

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
      <h1>TayFolio</h1>
      <NavToggle>
        <h2 onClick={handleToggleNav}>Menu</h2>
        {isVisibleNav && (
          <NavList>
            <StyledLink
              to="intro"
              smooth={true}
              offset={-navbarHeight}
              duration={500}
            >
              <span>Intro</span>
            </StyledLink>
            <StyledLink
              to="about"
              smooth={true}
              offset={-navbarHeight}
              duration={500}
            >
              <span>About</span>
            </StyledLink>
            <StyledLink
              to="skills"
              smooth={true}
              offset={-navbarHeight}
              duration={500}
            >
              <span>Skills</span>
            </StyledLink>
            <StyledLink
              to="projects"
              smooth={true}
              offset={-navbarHeight}
              duration={500}
            >
              <span>Projects</span>
            </StyledLink>
          </NavList>
        )}
      </NavToggle>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  position: sticky;
  top: 0px;
  box-sizing: border-box;
  z-index: 5;
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff6e9;

  h1 {
    margin-left: 0.8rem;
    font-size: 1.8rem;
  }
`;

const NavToggle = styled.div`
  position: relative;
  background: red;
  width: 65px;
  height: 100%;
  cursor: pointer;

  h2 {
    font-size: 1.3rem;
    text-align: center;
    padding-top: 0.1rem;

    color: white;
    transition: color 0.3s ease;

    &:hover {
      color: green;
    }
  }
`;

const NavList = styled.nav`
  position: absolute;
  top: 4rem;
  right: 0;
  width: 140px;

  display: flex;
  flex-direction: column;

  text-align: center;
  font-size: 1.2rem;
  gap: 0.8rem;
  padding: 0.8rem;

  background: green;
`;

const StyledLink = styled(ScrollLink)`
  color: white;
  transition: color 0.3s ease; /* 색상 변화에 대한 전환 효과 */

  &:hover {
    color: red; 
`;
