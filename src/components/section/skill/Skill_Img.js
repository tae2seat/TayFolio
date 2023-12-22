import React from "react";
import { SKILLS } from "@/constants/skills";
import Image from "next/image";

export default function Skill_Img() {
  return (
    <div>
      {SKILLS.map(({ name, img }, index) => (
        <div key={index}>
          <Image src={img} alt={name} width={60} height={60} />
          <p>{name}</p>
        </div>
      ))}
    </div>
  );
}
