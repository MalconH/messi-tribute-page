import { useState } from "react";
import "./Footer.css";
import { useEffect } from "react";

export function Footer() {
  const [year, setYear] = useState();
  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setYear(currentYear);
  }, []);

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
