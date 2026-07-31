import React from "react";
import { ExpandableContent } from "../ExpandableContent/ExpandableContent";
import "./CvArea.scss";

import ProfileImage from "../../images/profile.jpg";
import Skills from "../Skills/Skills";
import CvContentWork from "../CvContentWork/CvContentWork";
import CvContentEducation from "../CvContentEducation/CvContentEducation";
import CvContentResponsibilities from "../CvContentResponsibilities/CvContentResponsibilities";
import CvContentHobbies from "../CvContentHobbies/CvContentHobbies";

interface BlockProps {
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
}

const CvAreaBlock: React.FC<BlockProps> = ({
  title,
  children,
  defaultExpanded = false,
}) => {
  return (
    <ExpandableContent title={title} defaultExpanded={defaultExpanded}>
      {children}
    </ExpandableContent>
  );
};

interface Props {
  class?: string;
}

const CvArea: React.FC<Props> = () => {
  return (
    <div className="cv-area">
      <div className="container">
        <div className="flex-row">
          <div className="flex-item-left">
            <div className="image-cropper">
              <img className="header-image" src={ProfileImage} alt="Me" />
            </div>
            <h2 className="h1 profile-title">Anna Tiala</h2>
            <h3>CV 31.07.2026</h3>
            <hr />
            <ul className="contact-list">
              <li>
                <a
                  className="link"
                  href="https://www.linkedin.com/in/annaruntti/"
                >
                  Linkedin
                </a>
              </li>

              <li>
                <a className="link" href="https://github.com/annaruntti">
                  Github
                </a>
              </li>
              <li>
                <a className="link" href="mailto:anruntti@gmail.com">
                  Sähköposti
                </a>
              </li>
              <li>
                <b>Oulu, Suomi</b>
              </li>
            </ul>
            <Skills />
          </div>
          <div className="flex-item-right">
            <CvAreaBlock title="Työkokemus" defaultExpanded={true}>
              <CvContentWork />
            </CvAreaBlock>
            <CvAreaBlock title="Koulutus">
              <CvContentEducation />
            </CvAreaBlock>
            <CvAreaBlock title="Vastuutehtävät">
              <CvContentResponsibilities />
            </CvAreaBlock>
            <CvAreaBlock title="Harrastukset">
              <CvContentHobbies />
            </CvAreaBlock>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CvArea;
