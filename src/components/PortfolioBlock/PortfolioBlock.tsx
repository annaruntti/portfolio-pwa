import * as React from "react";
import PortfolioImage from "../../images/art.png";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./PortfolioBlock.scss";

export default function PortfolioBlock() {
  const { ref: imageRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div className="portfolio-block">
      <div className="container">
        <div className="flex-row">
          <div className="flex-left">
            <h3 className="h2 cv-title">Portfolioni</h3>
            <p className="large-text">
              Käy selaamassa töitäni portfoliostani. Portfolioon on listattu mm.
              tekemiäni nettisivuprojekteja, web-designia, graafista designia,
              ottamiani valokuvia ja tekemiäni piirustuksia ja maalauksia.
            </p>
            <Link to={"/portfolio"} className="portfolio-btn">
              Portfolioon
            </Link>
          </div>
          <div className="flex-right">
            <div className="image-area">
              <img
                ref={imageRef as React.RefObject<HTMLImageElement>}
                className={`portfolio-image ${isVisible ? "animate-in" : ""}`}
                src={PortfolioImage}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
