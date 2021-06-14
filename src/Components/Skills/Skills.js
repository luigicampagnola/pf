import React from "react";

const Skills = () => {
  return (
    <div className="skills-bg " id="about">
      <div className="cf dt-1 w-100 bt b--black-10 pv4 bg-stack">
        <div className="cf ph3 ph5-ns pv5">
          <div className="fn fl-ns w-50-ns pr4-ns">
            <div className="f5 ttu tracked ">GIGI - ReactDev1899</div>
            <div className=''>
              <img
                alt="myPic"
                height="550"
                className="shadow-img"
                src={process.env.PUBLIC_URL + "/image.png"}
              />
            </div>
          </div>
          <div className="">Let me introduce myself</div>
          <div className="tc mt0 lh-title fl-ns w-50-ns f2">
            <div className="title-skills lh-title f2  mt2">ABOUT ME</div>
            <div className=" f3 mt5">
              Hello, I  am Luigi Campagnola. I'm a self-taught software developer
              who codes everyday. I have been coding since 2019 and started my career
              by making small projects. I have been using Javascript, React for 
              front-end engineering and Node.js, Express.js and PostgreSQL for back-end engineering.
              I recently moved to Italy and now I'm looking for a job 
              that challenges me to work on really hard things that matter and can change
              the world. I want to work with people that are way smarter than me with
              excellent communication skills and learn from them.

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
              <div className="title-skills lh-title f2 ">
                MY TECH STACK
              </div>
            </div>
            <div className="mt5 box">
              <div className="">
                <div className="">
                  <div className="flex flex-wrap">
                    <div className="stack">
                      <img
                        alt="logos"
                        src={process.env.PUBLIC_URL + "/html.svg"}
                        height="150"
                        className="grow"
                        title="HTML"
                      />
                    </div>
                    <div className="stack ">
                      <img
                        alt="logos"
                        src={process.env.PUBLIC_URL + "/css.svg"}
                        height="150"
                        className="grow"
                        title="CSS"
                      />
                    </div>
                    <div className="stack">
                      <img
                        alt="logos"
                        src={process.env.PUBLIC_URL + "/js.svg"}
                        height=""
                        className="grow mw4 pa1 mt2"
                        title="Javascript"
                      />
                    </div>
                    <div className="stack">
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
                      <div className="stack">
                        <img
                          alt="logos"
                          src={process.env.PUBLIC_URL + "/github.svg"}
                          height="150"
                          className="grow"
                          title="GitHub"
                        />
                      </div>
                    </div>
                    <div className="stack">
                      <img
                        alt="logos"
                        src={process.env.PUBLIC_URL + "/nodejs.svg"}
                        height="150"
                        className="mt4 grow"
                        title="NodeJS"
                      />
                    </div>
                    <div className="stack">
                      <img
                        alt="logos"
                        src={process.env.PUBLIC_URL + "/postgresql.svg"}
                        height="130"
                        className="mt4 grow"
                        title="PostgreSQL"
                      />
                    </div>
                    <div className="stack">
                      <img
                        alt="logos"
                        src={process.env.PUBLIC_URL + "/knex.svg"}
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
