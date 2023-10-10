import React from "react";
import "../styles/header.css";

function Header() {
  return (
    <div className="navbar">
      <div>
        <a href="https://www.github.com/namannangia">Github</a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/naman-nangia">Linkedin</a>
      </div>
      <div>
        <a href="https://drive.google.com/file/d/1zbQ_bQrZ0uTjr2KyQdqSaB4cWCdxJYCr/view?usp=sharing">
          Resume
        </a>
      </div>
      <div>
        <a href="https://leetcode.com/me_naman/">LeetCode</a>
      </div>
      <div>
        <a href="mailto:nangia2002@gmail.com">Email</a>
      </div>
    </div>
  );
}
export default Header;
