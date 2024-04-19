import "./App.css";
import { Career } from "./components/Career.jsx";
import { Header } from "./components/Header.jsx";
import { Section } from "./components/Section.jsx";
import { Top } from "./components/Top.jsx";
import { Gallery } from "./components/Gallery.jsx";
import { Trophies } from "./components/Trophies.jsx";
import { ArgentinaFlag, Ball, Trophy as TrophyIcon } from "./components/Icons.jsx";
import { Footer } from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Top /> {/*TODO: hide when scroll up to the top */}
        <Section sectionId="biografia" title="De Rosario, al mundo" icon={<ArgentinaFlag />}>
          <p>
            Lionel Andrés Messi Cuccittini, conocido en todo el mundo como simplemente "Leo", nació
            el 24 de junio de 1987 en la ciudad de Rosario, ubicada en la provincia de Santa Fe,
            Argentina. Es el tercer hijo del matrimonio conformado por Jorge Messi y Celia
            Cuccittini, compartiendo sus días con sus hermanos mayores Rodrigo y Matías, así como
            con su hermana menor, María Sol.
          </p>
          <p>
            Los primeros pasos futbolísticos de Messi los dio en el Abanderado Abanderado Grandoli,
            un modesto club ubicado en el sur de Rosario, muy cerca de su hogar en el barrio
            Grandoli. En esas calles y canchas es donde Leo comenzó a forjar su mágia y talento,
            bajo la tutela de su primer entrenador, Salvador Aparicio.
          </p>
          <p>
            En el año 1994, a la edad de 7 años, Messi ingresó a las inferiores del club rosarino
            Newell's Old Boys. Fue en este equipo argentino donde su magia comenzó a destacar,
            deslumbrando a propios y extraños con su capacidad para meter goles y gambetear
            defensores. Sin embargo, el camino del 10 estuvo lleno de obstáculos y dificultades. A
            los 8 años, se le diagnosticó una deficiencia en la hormona del crecimiento, que le
            impedia a Leo soñar con una carrera en el fútbol. El tratamiento necesario tenía un
            costo mensual de 900 dólares, un desafío financiero que no impidió que Lionel continuara
            persiguiendo su sueño. Leo siempre cuenta cómo siendo un nene se aplicaba él mismo el
            tratamiento inyectandose las piernas.
          </p>
          <p>
            El destino de Messi cambió de forma definitiva el 17 de septiembre de 2000, cuando viajó
            a la ciudad de Barcelona, España, para una prueba en las juveniles del FC Barcelona, en
            La Masía. Allí, tuvo que compartir el terreno de juego con jóvenes talentos como Cesc
            Fábregas y Gerard Piqué. Su actuación no pasó desapercibida, impresionando a todos con
            su asombroso dominio de la pelota, su velocidad, su cambio de ritmo y su destreza para
            esquivar piernas rivales. Ya con 13 años todos veían el futuro que ese chico podría
            tener, incluído Carlex Rexach, quien dijo "Tenía claro que, si no le fichábamos, nos
            arrepentiríamos". A pesar de algunas dudas de entrenadores y directivos, la
            determinación y la habilidad de Messi finalmente encontraron su hogar en el Barcelona.
            El 14 de diciembre del mismo año, Carles Rexach, secretario técnico del FC Barcelona,
            junto con Horacio Gaggioli, agente del fútbol argentino y Joseph Minguela, agente del
            fútbol español, plasmó un compromiso en una servilleta de papel, asegurando la
            contratación de Messi. Esta icónica servilleta, exhibida en el Museo del Club,
            representa el inicio de una era legendaria.
          </p>
          <p>
            El 8 de enero de 2001, se formalizó el acuerdo, incluyendo la incorporación del padre de
            Messi al cuerpo técnico del fútbol base como una estrategia para encubrir el fichaje del
            joven prodigio. La familia Messi emprendió un nuevo capítulo en sus vidas,
            estableciéndose en Barcelona, primero en un hotel y luego en un apartamento en Les
            Corts. Desde ese momento, Lionel Messi trascendió las barreras del deporte y se
            convirtió en una leyenda viviente del fútbol. Su magia en el terreno de juego, su
            inigualable capacidad para crear y meter goles, y su humildad innata lo han consagrado
            como el mejor de todos los tiempos. A lo largo de su carrera, ha cosechado innumerables
            logros, incluyendo siete Balones de Oro, siete premios FIFA al Mejor Jugador del Mundo,
            seis Botas de Oro y dos Balones de Oro de la Copa Mundial de Fútbol. Su legado perdurará
            en la historia del deporte y su inspiración seguirá guiando a futuras generaciones de
            amantes del fútbol en todo el mundo.
          </p>
          <Gallery>
            <img
              id="img-1"
              src="https://pbs.twimg.com/media/Fkdi9cjXgAAoo2X.jpg"
              alt="Leo Messi con 5 años levantando un trofeo jugando para el club Abenderado Grandoli"
            />
            <img
              id="img-2"
              src="https://assets.goal.com/images/v3/bltcd5c152837683fb4/23643923dfe806cd360cc6db5219786f7792e777.jpg?auto=webp&format=pjpg&width=640&quality=60"
              alt="Leo Messi en las inferiores de Newell's Old Boys"
            />

            <img
              id="img-3"
              src="https://www.ole.com.ar/images/2020/12/15/tYxIP5plN_860x575__1.jpg"
              alt="Servilleta donde Leo Messi firmó su primer contrato con el FC Barcelona"
            />
            <img
              id="img-4"
              src="https://img.asmedia.epimg.net/resizer/v2/3EL6TT53S5HJDEAR77QXDWX7TI.jpg?auth=c3cc7e7b9ee71eafbb1a82ddb65ce84d728b55d1238e3e77dc90999eb1248bb8&width=1472&height=1104&focal=328%2C211"
              alt="Debut mundialista de Leo Messi con Argentina"
            />
          </Gallery>
        </Section>
        <Section sectionId="trayectoria" title="Trayectoria" fullBleed="true" icon={<Ball />}>
          <Career />
        </Section>
        <Section sectionId="logros" title="Logros" icon={<TrophyIcon />}>
          <Trophies />
        </Section>
      </main>
      <Footer />
    </>
  );
}

export default App;
