import React from "react";
import Image from "../Images/image.png";
import postgres from "../Images/postgres.png";

const Skills = () => {
  return (
    <div className="skills-bg" id="about">
      <div className="cf dt-1 w-100 bt b--black-10 pv4">
        <div className="cf ph3 ph5-ns pv5">
          <div className="fn fl-ns w-50-ns pr4-ns">
            <div className="f5 ttu tracked white">Luigi Campagnola</div>
            <div>
              <img
                alt="myPic"
                height="550"
                className="shadow-img"
                src={Image}
              />
            </div>
          </div>
          <div className="tc mt0 lh-title fl-ns w-50-ns f2">
            <div className="title-skills lh-title f2 white">MY TECH STACK</div>
          </div>
          <div className="fn fl-ns w-50-ns mt5 polygon">
            <div className="">
              <div className="scrollers">
                <div className="flex flex-wrap">
                  <div className="stack">
                    <img
                      alt="logos"
                      src={process.env.PUBLIC_URL + "/html.svg"}
                      height="150"
                      className='grow'
                      title='HTML'
                    />
                  </div>
                  <div className="stack ">
                    <img
                      alt="logos"
                      src={process.env.PUBLIC_URL + "/css.svg"}
                      height="150"
                      className="grow"
                      title='CSS'
                    />
                  </div>
                  <div className="stack">
                    <img
                      alt="logos"
                      src={process.env.PUBLIC_URL + "/js.svg"}
                      height=""
                      className="grow mw4 pa1 mt2"
                      title='Javascript'
                    />
                  </div>
                  <div className="stack">
                    <img
                      alt="logos"
                      src={process.env.PUBLIC_URL + "/react.svg"}
                      height="100"
                      className="grow mt4"
                      title='ReactJS'
                    />
                  </div>
                </div>
                <div className="flex flex-wrap">
                  <div className="mt4">
                    <div className="stack">
                      <img
                        alt="logos"
                        src={process.env.PUBLIC_URL + "/github.svg"}
                        height="150"
                        className='grow'
                        title='GitHub'
                      />
                    </div>
                  </div>
                  <div className="stack">
                    <img
                      alt="logos"
                      src={process.env.PUBLIC_URL + "/nodejs.svg"}
                      height=""
                      className="mt4 grow"
                      title='NodeJS'
                    />
                  </div>
                  <div className="stack">
                    <img
                      alt="logos"
                      src={postgres}
                      height="130"
                      className="mt4 grow"
                      title='PostgreSQL'
                    />
                  </div>
                  <div className="stack">
                    <img
                      alt="logos"
                      src={process.env.PUBLIC_URL + "/knex.svg"}
                      height="130"
                      className="mt4 grow"
                      title='KnexJS'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
