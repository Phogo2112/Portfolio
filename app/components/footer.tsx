"use client";

import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <a href="https://github.com/Phogo2112" className="bg-black">
            <FaGithub /> mon Github
          </a>
        </li>
      </ul>
    </footer>
  );
}
