import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

export default function Navbar() {
  const navbarRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(0);

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "auto" });
    }
  };

  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }
  }, []);

  return (
    <StyledNavbox ref={navbarRef}>
      <Title>TayFolio</Title>
      <NavBox>
        <Button onClick={() => handleScrollToSection("intro")}>Intro</Button>
        <Button onClick={() => handleScrollToSection("about")}>About</Button>
        <Button onClick={() => handleScrollToSection("skills")}>Skills</Button>
        <Button onClick={() => handleScrollToSection("projects")}>
          ProJects
        </Button>
      </NavBox>
    </StyledNavbox>
  );
}

const StyledNavbox = styled.nav`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  background-color: #3498db;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  color: white;
`;

const Title = styled.h1``;

const NavBox = styled.nav``;

const Button = styled.button``;
