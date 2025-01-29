import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  function openGithub() {
    window.open('https://github.com/shamveelkhan?tab=overview&from=2025-01-01&to=2025-01-07', '_blank');
  }
  function openInsta() {
    window.open('https://www.instagram.com/shamveel.khan.982/', '_blank');
  }
  function openLinkedin() {
    window.open('https://www.linkedin.com/in/shamveel-khilji-78a74a345?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', '_blank');
  }

  return (
    <div>
      <div className={`hamburger${isOpen ? "open":""}`} onClick={toggleSidebar}>
        {isOpen ? "✕" : "☰"}
      </div>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul>
          <li>About The Developer</li>
        </ul>
        <br />
        <div id="mypicHolder">
          <img id="mypic" src="myPic.jpg" alt="hello" />
        </div>
        <p id="about">
        Hi, I'm Shamveel Khan, a freshman at FAST Karachi, passionate about coding and problem-solving. I'm currently learning React.js and experimenting with Tailwind CSS to build modern web applications. Always eager to improve my skills, I love turning ideas into functional projects.

Feel free to connect with me through the links below! 
        </p>
        <div id="iconHolder">
          <img
            onClick={openGithub}
            id="github" className="iconsS" src="github.svg" alt="github-icon" /> 
          <img 
            onClick={openInsta}
            id="insta" className="icons" src="instagram.svg" alt="github-icon" /> 
          <img
            onClick={openLinkedin} 
            id="linkedin" className="icons" src="linkedin.svg" alt="github-icon" />           
        </div>
      </div>
    </div>
  );
};

export default Sidebar;