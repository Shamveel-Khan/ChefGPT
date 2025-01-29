import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

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
          <img className="icons" src="github.svg" alt="github-icon" /> 
          <img className="iconsS" src="instagram.svg" alt="github-icon" /> 
          <img className="icons" src="linkedin.svg" alt="github-icon" />           
        </div>
      </div>
    </div>
  );
};

export default Sidebar;