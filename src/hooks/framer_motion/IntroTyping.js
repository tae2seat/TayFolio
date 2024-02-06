import { motion } from "framer-motion";
import styled from "styled-components";
import { TypeAnimation } from "react-type-animation";

export default function IntroTyping() {
  return (
    <TypingAnimation>
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "김태이는 어떤 사람일까? 책임감 있는 사람",
          1500, // wait 1s before replacing "Mice" with "Hamsters"
          "김태이는 어떤 사람일까? 알면 알수록 재밌는 사람",
          1500,
          "김태이는 어떤 사람일까? 성실하고 노력하는 사람",
          1500,
          "김태이는 어떤 사람일까? 인정할 수 있는 평화주의자",
          1500,
          "김태이는 어떤 사람일까? 화가 많이 없지만 화나면 무서운 사람",
          1500,
        ]}
        wrapper="span"
        speed={20}
        repeat={Infinity}
      />
    </TypingAnimation>
  );
}

const TypingAnimation = styled(motion.h1)`
  display: inline-block;
  margin-top: 3.6rem;
  font-size: 0.8rem;
  color: #2e3a87;
`;
