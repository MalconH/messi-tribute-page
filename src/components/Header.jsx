import "./Header.css";
import { Navbar } from "./Navbar.jsx";

export function Header() {
  return (
    <header className="header">
      <a className="header-title" href="#">
        LEO
      </a>
      <Navbar />
    </header>
  );
}
