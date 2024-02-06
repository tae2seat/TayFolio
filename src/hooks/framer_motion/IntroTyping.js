import { motion } from "framer-motion";
import styled from "styled-components";

export default function IntroTyping({ text }) {
  return (
    <TypingAnimation
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {text}
    </TypingAnimation>
  );
}

const TypingAnimation = styled(motion.h1)`
  font-size: 0.8rem;
  color: #2e3a87;
`;
