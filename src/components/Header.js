import React from "react";
import "../styles/header.css";

function Header() {
  return (
    <div className="navbar">
      <div>
        <a target="_blank" href="https://www.github.com/namannangia">
          Github
        </a>
      </div>
      <div>
        <a target="_blank" href="https://www.linkedin.com/in/naman-nangia">
          Linkedin
        </a>
      </div>
      <div>
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1zbQ_bQrZ0uTjr2KyQdqSaB4cWCdxJYCr/view?usp=sharing"
        >
          Resume
        </a>
      </div>
      <div>
        <a target="_blank" href="https://leetcode.com/me_naman/">
          LeetCode
        </a>
      </div>
      <div>
        <a target="_blank" href="mailto:nangia2002@gmail.com">
          Email
        </a>
      </div>
    </div>
  );
}
export default Header;
