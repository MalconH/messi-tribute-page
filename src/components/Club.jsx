import "./Club.css";

export default function Club({ clubName, crest, timespan, photo = "", children }) {
  const punctuactionMarks = /[,.¡!¿?_`´'"]/g;
  const articleId = clubName.toLowerCase().replace(punctuactionMarks, "").replaceAll(" ", "-");
  return (
    <li className="club" aria-labelledby={articleId}>
      <div className="club-info">
        <h3 className="name" id={articleId}>
          {clubName}
        </h3>
        <img className="crest" src={crest} alt={`Escudo de ${clubName}`} />
        <span className="timespan">{timespan}</span>
      </div>
      <div className="description">{children}</div>
      <div className="photo">{photo}</div>
    </li>
  );
}
