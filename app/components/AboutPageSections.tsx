"use client";

import MDMessage from "./MDMessage";
import About from "./About";
import Technology from "./Technology";

export default function AboutPageSections() {
  return (
    <main id="main-content" role="main">
      <div>
        <MDMessage />
      </div>

      <div>
        <About />
      </div>

      <div>
        <Technology />
      </div>
    </main>
  );
}
