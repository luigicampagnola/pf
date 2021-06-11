import React from "react";
import Image from "../Images/image.png";
import ScrollAnimation from "react-animate-on-scroll";
import logo512 from "../Images/logo512.png";
import nodejslogo from "../Images/nodejslogo.png";
import postgres from "../Images/postgres.png";
import githublogo from "../Images/github-mark.png";

const Skills = () => {
  return (
    <div className="skills-bg" id="about">
      <div className="cf dt-1 w-100 bt b--black-10 pv4">
        <div className="cf ph3 ph5-ns pv5">
          <div className="fn fl-ns w-50-ns pr4-ns">
            <div className="f5 ttu tracked white">Luigi Campagnola</div>
            <div>
              <ScrollAnimation animateIn="fadeIn">
                <img
                  alt="myPic"
                  height="550"
                  className="shadow-img"
                  src={Image}
                />
              </ScrollAnimation>
            </div>
          </div>
          <div className="tc mt0 lh-title fl-ns w-50-ns f2">
            <div className="title-skills lh-title f2 white">My Skills</div>
          </div>
          <div className="fn fl-ns w-50-ns mt5 polygon">
            <div className="scrollers">
              <ScrollAnimation animateIn="fadeIn">
                <img
                  alt="logos"
                  src={process.env.PUBLIC_URL + "/javascript.png"}
                  height="150"
                />
                <img
                  alt="logos"
                  src={githublogo}
                  height="90"
                  className="mb3 ml4 github-logo"
                />
                <img
                  alt="logos"
                  src={process.env.PUBLIC_URL + "/boostrap.png"}
                  height="90"
                  className="mb3"
                />
              </ScrollAnimation>
              <div className="mt4">
                <ScrollAnimation animateIn="fadeIn">
                  <img alt="logos" src={logo512} height="100" className="mb3" />
                  <img
                    alt="logos"
                    src={nodejslogo}
                    height="100"
                    className="mb3 ml3"
                  />
                  <img
                    alt="logos"
                    src={postgres}
                    height="130"
                    className="mb3 ml2"
                  />
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
