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
      </div>
    </div>
  );
};

export default Sidebar;