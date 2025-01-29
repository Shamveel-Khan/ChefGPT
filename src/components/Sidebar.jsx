import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Hamburger Icon */}
      <div className={`hamburger${isOpen ? "open":""}`} onClick={toggleSidebar}>
        {isOpen ? "✕" : "☰"}
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;