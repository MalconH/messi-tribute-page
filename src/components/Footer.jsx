import { useState } from "react";
import "./Footer.css";

export function Footer() {
  const [year, setYear] = useState(() => new Date().getFullYear());

  return (
    <footer className="footer">
      <div className="content">
        <p>
          Creado por
          <strong> Malcon </strong>
        </p>
        <span>&copy; {year}</span>
      </div>
    </footer>
  );
}
