import * as React from "react";
import { useLocation } from "react-router-dom";
import HeaderImage from "../../images/at-logo-white.png";
import Navigation from "../Navigation/Navigation";
import "./Header.scss";

export default function Header() {
  const location = useLocation();
  const [animationKey, setAnimationKey] = React.useState(0);

  // Trigger animation when route changes
  React.useEffect(() => {
    setAnimationKey((prev) => prev + 1);
  }, [location.pathname]);

  // Function to get the appropriate title based on current route
  const getPageTitle = (): string => {
    switch (location.pathname) {
      case "/cv":
        return "Ansioluettelo";
      case "/yhteys":
        return "Yhteystiedot";
      case "/portfolio":
        return "Portfolio";
      case "/":
      default:
        return "Portfolio";
    }
  };

  return (
    <React.Fragment>
      <Navigation />
      <header key={animationKey} className="header-animated">
        <div className="container">
          <div className="header-text-area">
            <div className="flex-row">
              <div className="image-cropper">
                <img
                  className="header-image"
                  src={HeaderImage}
                  alt="Me and my dogs"
                />
              </div>
              {location.pathname === "/" ? (
                <span className="header-title-name">Anna Tiala</span>
              ) : (
                <h1 className="header-title-name">{getPageTitle()}</h1>
              )}
            </div>
            {location.pathname === "/" && (
              <h1 className="header-title">{getPageTitle()}</h1>
            )}
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}
