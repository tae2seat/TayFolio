import React from "react";
import { PROFILE } from "@/constants/profile";

export default function Profile_text() {
  return (
    <section>
      <ul>
        {PROFILE.map(({ type, content }, index) => (
          <li key={index}>
            {type} : {content}
          </li>
        ))}
      </ul>
    </section>
  );
}
