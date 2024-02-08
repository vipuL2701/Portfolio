import React, { useState } from "react";
import "./Sidebar.css";
import { NavLink } from 'react-router-dom';

function NavLinks() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`sidebar ${isOpen ? "open" : ""}`}>
     <NavLink to="/projects" className="active">Projects</NavLink>
      <button onClick={toggleSidebar}>Toggle Sidebar</button>
    </nav>
  );
}

export default NavLinks;
