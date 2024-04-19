import "./Top.css";
import { ArrowUp } from "./Icons";

function handleClick() {
  window.scroll(0, 0);
}

export function Top() {
  return (
    <a href="#" className="top" aria-label="Back to Top" onClick={handleClick}>
      <ArrowUp />
    </a>
  );
}
