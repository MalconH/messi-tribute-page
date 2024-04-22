import "./Hero.css";
import messiWorldCup from "../assets/messi-worldcup.gif";

export function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="inicio-title">
      <div className="text-wrapper">
        <h1 className="hero-title" id="hero-title">
          Lionel Messi
        </h1>
        <p className="hero-subtitle">El mejor jugador de todos los tiempos</p>
      </div>
      <img
        src={messiWorldCup}
        alt="Lionel Messi - El mejor jugador de todos los tiempos"
        className="hero-img"
      />
    </section>
  );
}
