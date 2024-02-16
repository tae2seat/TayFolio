"use client";

import { motion } from "framer-motion";
import styled from "styled-components";
import Image from "next/image";
import IntroText from "@/hooks/framer_motion/IntroText";
import LogoSvg from "./section/svg/LogoSvg";

const IntroContainer = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  height: calc(100vh - 4rem);
`;

export default function Intro({ id }) {
  return (
    <IntroContainer id={id}>
      {/* <div>
        <LogoSvg />
      </div> */}
      <IntroText />
    </IntroContainer>
  );
}
