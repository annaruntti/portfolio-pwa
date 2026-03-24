import * as React from "react";
import "./IntroductionBlock.scss";

const calculateAge = (birthDate: Date): number => {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  
  return age;
};

const IntroductionBlock: React.FC = () => {
  const age = calculateAge(new Date(1990, 3, 6)); // Month is 0-indexed, so April is 3

  return (
    <div className="introduction-block">
      <h2 className="h1">"Minä oon Anna ja mää tykkään koodata."</h2>
      <div className="ingress">
        <p>
          Olen {age}-vuotias, oppimaan innokas koodari Anna, eikä tässä vielä
          kaikki.
        </p>

        <p>
          Vuosien aikana olen kerryttänyt kokemusta laajasti eri osa-alueista
          ohjelmistokehityksen parissa. Kuvailenkin usein itseäni sanomalla,
          että on laajasti kiinnostunut eri asioista.
        </p>
      </div>
      <p>
        Tämä porfolio on edelleen hyvin keskeneräinen, mutta kehitän sitä
        eteenpäin aina kun ehdin. Tarkoitukseni on koota tänne esille eri
        projektejani, joita olen vapaa-ajallani tehnyt, sekä kertoa niiden
        taustoista. Olen tehnyt vapaa-ajalla koodausprojektieni lisäksi
        runsaasti mm. graafisia töitä ja halusin tehdä niille kootun
        julkaisupaikan.
      </p>
      <p>English version of my portfolio coming soon!</p>
    </div>
  );
};

export default IntroductionBlock;
