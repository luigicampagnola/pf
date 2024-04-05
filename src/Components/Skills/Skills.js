import React from "react";

const Skills = () => {
  return (
    <div className="skills-bg " id="about">
      <div className="cf dt-1 w-100 bt b--black-10 pv4 bg-stack">
        <div className="cf ph3 ph5-ns pv5">
          <div className="fn fl-ns w-50-ns pr4-ns">
            <div className="f5 ttu tracked ">GIGI - ReactDev1899</div>
            <div className="">
              <img
                alt="myPic"
                height="550"
                className="shadow-img"
                src={process.env.PUBLIC_URL + "/me.png"}
              />
            </div>
          </div>
          <div className="">Let me introduce myself</div>
          <div className="tc mt0 lh-title fl-ns w-50-ns f2">
            <div className="title-skills lh-title f2  mt2">ABOUT ME</div>
            <div className=" f3 mt5">
            Experienced Software Engineer with 5 years in the field, specializing in front-end development with expertise in both modern and legacy technologies. Proficient in diverse programming languages and tools, with significant experience in continuous integration, Agile methodologies, and a proven track record in both back-end development and mobile app creation. Skilled in working under pressure and adept at meeting tight deadlines.
            </div>
          </div>
          <div className="fn fl-ns w-50-ns mt5 polygon">
            <div className=""></div>
          </div>
        </div>
      </div>
      <div className="bg-stack">
        <div className="">
          <div className="cf ph3 ph5-ns pv5 ">
            <div className="">
              <div className="title-skills lh-title f2 ">MY TECH STACK</div>
            </div>
            <div className="mt5 box">
              <div className="">
                <div className="skill-stack">
                  <div className="flex flex-wrap">
                    <div className="icon">
                      <img
                        alt="logos"
                        src={process.env.PUBLIC_URL + "/html.svg"}
                        height="150"
                        className="grow"
                        title="HTML"
                      />
                    </div>
                    <div className="icon ">
                      <img
                        alt="logos"
                        src={process.env.PUBLIC_URL + "/css.svg"}
                        height="150"
                        className="grow"
                        title="CSS"
                      />
                    </div>
                    <div className="icon ">
                      <img
                        alt="logos"
                        src={process.env.PUBLIC_URL + "/sass.svg"}
                        height="150"
                        className="grow"
                        title="CSS"
                      />
                    </div>
                    <div className="icon">
                      <img
                        alt="logos"
                        src={process.env.PUBLIC_URL + "/js.svg"}
                        height=""
                        className="grow mw4 pa1 mt2"
                        title="Javascript"
                      />
                    </div>
                    <div className="icon">
                      <img
                        alt="logos"
                        src={process.env.PUBLIC_URL + "/react.svg"}
                        height="100"
                        className="grow mt4"
                        title="ReactJS"
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap">
                    <div className="mt4">
                      <div className="icon">
                        <img
                          alt="logos"
                          src={process.env.PUBLIC_URL + "/github.svg"}
                          height="150"
                          className="grow"
                          title="GitHub"
                        />
                      </div>
                    </div>
                    <div className="icon">
                      <img
                        alt="logos"
                        src={process.env.PUBLIC_URL + "/nodejs.svg"}
                        height="150"
                        className="mt4 grow"
                        title="NodeJS"
                      />
                    </div>
                    <div className="icon">
                      <img
                        alt="logos"
                        src={process.env.PUBLIC_URL + "/postgresql.svg"}
                        height="130"
                        className="mt4 grow"
                        title="PostgreSQL"
                      />
                    </div>
                    <div className="icon">
                      <img
                        alt="logos"
                        src={process.env.PUBLIC_URL + "/knex.svg"}
                        height="130"
                        className="mt4 grow"
                        title="KnexJS"
                      />
                    </div>
                    <div className="icon">
                      <img
                        alt="logos"
                        src={process.env.PUBLIC_URL + "/strapi.svg"}
                        height="130"
                        className="mt4 grow"
                        title="KnexJS"
                      />
                    </div>
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