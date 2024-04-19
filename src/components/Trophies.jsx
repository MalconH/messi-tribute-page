import ballonDOr from "../assets/trophies/BalonDeOro.png";
import championsLeague from "../assets/trophies/Champions.png";
import laLiga from "../assets/trophies/LaLiga.png";
import copaDelRey from "../assets/trophies/CopaDelRey.png";
import clubsWorldCup from "../assets/trophies/MundialDeClubes.png";
import uefaSuperCup from "../assets/trophies/SupercopaUEFA.png";
import goldenBoot from "../assets/trophies/BotaDeOroClubes.png";
import copaAmerica from "../assets/trophies/CopaAmerica.png";
import finalissima from "../assets/trophies/Finalissima.png";
import worldCup from "../assets/trophies/Mundial.png";
import "./Trophies.css";

const trophiesAndAwards = [
  {
    id: "1",
    name: "FIFA Ballon d'Or",
    club: "Barcelona",
    amount: 8,
    url: ballonDOr,
    year_won: [2009, 2010, 2011, 2012, 2015, 2019, 2021, 2023],
  },
  {
    id: "2",
    name: "UEFA Champions League",
    club: "Barcelona",
    amount: 4,
    url: championsLeague,
    year_won: ["2008-09", "2010-11", "2014-15", "2020-21"],
  },
  {
    id: "3",
    name: "La Liga",
    club: "Barcelona",
    amount: 10,
    url: laLiga,
    year_won: [
      "2004-05",
      "2005-06",
      "2008-09",
      "2009-10",
      "2010-11",
      "2012-13",
      "2014-15",
      "2015-16",
      "2017-18",
      "2018-19",
    ],
  },
  {
    id: "4",
    name: "Copa del Rey",
    club: "Barcelona",
    amount: 7,
    url: copaDelRey,
    year_won: ["2008-09", "2011-12", "2014-15", "2015-16", "2016-17", "2017-18", "2020-21"],
  },
  {
    id: "5",
    name: "Mundial de Clubes",
    club: "Barcelona",
    amount: 3,
    url: clubsWorldCup,
    year_won: [2009, 2011, 2015],
  },
  {
    id: "6",
    name: "Supercopa UEFA",
    club: "Barcelona",
    amount: 3,
    url: uefaSuperCup,
    year_won: [2009, 2011, 2015],
  },
  {
    id: "7",
    name: "Bota de Oro",
    club: "Barcelona",
    amount: 6,
    url: goldenBoot,
    year_won: ["2009-10", "2011-12", "2012-13", "2016-17", "2017-18", "2018-19"],
  },
  {
    id: "8",
    name: "Copa America",
    club: "Argentina",
    amount: 1,
    url: copaAmerica,
    year_won: [2021],
  },
  {
    id: "9",
    name: "Finalissima",
    club: "Argentina",
    amount: 1,
    url: finalissima,
    year_won: [2022],
  },
  {
    id: "10",
    name: "Mundial",
    club: "Argentina",
    amount: 1,
    url: worldCup,
    year_won: [2022],
  },
];

function Trophy({ name, amount, url }) {
  return (
    <div className="trophy">
      <img className="trophy-img" src={url} alt={`Trofeo ${name}`} />
      <span className="trophy-amount">{amount}</span>
      <span className="trophy-name">{name}</span>
    </div>
  );
}

export function Trophies() {
  return (
    <div className="trophies">
      {trophiesAndAwards.map((trophy) => {
        return (
          <Trophy name={trophy.name} amount={trophy.amount} key={trophy.id} url={trophy.url} />
        );
      })}
    </div>
  );
}
