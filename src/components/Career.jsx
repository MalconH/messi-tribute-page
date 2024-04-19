import Club from "./Club.jsx";
import "./Career.css";

import grandoli from "../assets/clubs/Grandoli.png";
import newells from "../assets/clubs/Newells.png";
import barcelona from "../assets/clubs/barcelona.png";
import psg from "../assets/clubs/psg.png";
import interMiami from "../assets/clubs/InterMiami.png";

export function Career() {
  return (
    <ul className="career">
      <Club clubName="Grandioli" crest={grandoli} timespan="1992 - 1995" photo="" />
      <Club clubName="Newells's Old Boys" crest={newells} timespan="1995 - 2000" photo="" />
      <Club clubName="FC Barcelona" crest={barcelona} timespan="2000 - 2021" photo="" />
      <Club clubName="PSG" crest={psg} timespan="2021 - 2022" photo="" />
      <Club clubName="Inter de Miami" crest={interMiami} timespan="2022 - actualidad" photo="" />
    </ul>
  );
}
