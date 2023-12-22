import Link from "next/link";
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
        <Link href="/intro"></Link>
        <div onClick={() => handleScrollToSection("intro")}>Intro</div>
        <div onClick={() => handleScrollToSection("about")}>About</div>
        <div onClick={() => handleScrollToSection("skills")}>Skills</div>
        <div onClick={() => handleScrollToSection("projects")}>ProJects</div>
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
