import CvImage from "../../images/work.png";
import { Link } from "react-router-dom";
import IntroductionBlock from "../IntroductionBlock/IntroductionBlock";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./CvBlock.scss";

export default function CvBlock() {
  const { ref: imageRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div className="cv-block">
      <div className="container">
        <IntroductionBlock />
        <div className="flex-row">
          <div className="flex-left">
            <h3 className="h2 cv-title">Ansioluetteloni</h3>
            <p className="large-text">
              Käy lukemassa ansioluetteloni!
              <br />
              Ansioluettelossani on listattu työkokemukseni, koulutukseni,
              taitoni ja harrastukseni.
            </p>
            <Link to={"/cv"} className="cv-btn">
              Ansioluetteloon
            </Link>
          </div>
          <div className="flex-right">
            <div className="image-area">
              <img
                ref={imageRef as React.RefObject<HTMLImageElement>}
                className={`cv-image ${isVisible ? "animate-in" : ""}`}
                src={CvImage}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
