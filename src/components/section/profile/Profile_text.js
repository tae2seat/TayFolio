import React from "react";
import { PROFILE } from "@/constants/profile";

export default function Profile_text() {
  return (
    <section>
      {PROFILE.map(({ type, content }, index) => (
        <p key={index}>
          {type} : {content}
        </p>
      ))}
    </section>
  );
}
