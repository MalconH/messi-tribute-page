import { useState } from "react";
import "./Navbar.css";

function Navlink({ children, link }) {
  return (
    <li className="nav-link">
      <a href={`#${link}`} className="menu-link">
        {children}
      </a>
    </li>
  );
}

function ExpandButton({ onMenuExpand }) {
  return (
    <button
      type="button"
      className="expand-button"
      onClick={onMenuExpand}
      aria-label="Expandir Menu">
      |||
    </button>
  );
}

export function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const classList = isExpanded ? "navbar-menu expanded" : "navbar-menu";
  return (
    <nav className="navbar">
      <ul className={classList}>
        <Navlink link="inicio">Inicio</Navlink>
        <Navlink link="biografia">Biografía</Navlink>
        <Navlink link="trayectoria">Trayectoria</Navlink>
        <Navlink link="logros">Logros</Navlink>
      </ul>
      <ExpandButton
        onMenuExpand={() => {
          setIsExpanded(!isExpanded);
        }}
      />
    </nav>
  );
}
