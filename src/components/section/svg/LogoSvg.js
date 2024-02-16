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

export default function LogoSvg() {
  return (
    <motion.svg
      width="80"
      height="80"
      viewBox="0 -15 320 320"
      initial="hidden"
      animate="visible"
    >
      <motion.line
        style={{
          strokeWidth: 20,
          strokeLinecap: "round",
          fill: "transparent",
        }}
        x1="30"
        y1="10"
        x2="160"
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
        x1="30"
        y1="10"
        x2="30"
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
        x1="30"
        y1="80"
        x2="160"
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
        x1="30"
        y1="160"
        x2="160"
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
        cx="220"
        cy="200"
        r="80"
        stroke="#c3e2dd"
        variants={draw}
        custom={1}
      />
    </motion.svg>
  );
}
