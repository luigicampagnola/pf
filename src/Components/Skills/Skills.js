import React from "react";

const Skills = () => {
  const icons = [
    { name: "html", title: "HTML", height: "150" },
    { name: "css", title: "CSS", height: "150" },
    { name: "sass", title: "SASS", height: "150" },
    { name: "js", title: "Javascript", height: "150" },
    { name: "react", title: "ReactJS", height: "100" },
    { name: "github", title: "GitHub", height: "150" },
    { name: "nodejs", title: "NodeJS", height: "150" },
    { name: "postgresql", title: "PostgreSQL", height: "130" },
    { name: "knex", title: "KnexJS", height: "130" },
    { name: "strapi", title: "Strapi", height: "130" },
    { name: "nextjs", title: "NextJS", height: "130" },
    { name: "react-native", title: "React Native", height: "130" },
  ];

  return (
    <div className="skills-bg " id="about">
      <div className="cf dt-1 w-100 bt b--black-10 pv4 bg-stack">
        <div className="cf ph3 ph5-ns pv5 about-me-container fn fl-ns pr4-ns">
          <div className="picture-container">
            <div className="f5 ttu tracked ">GIGI - ReactDev1899</div>
            <img
              alt="myPic"
              height="550"
              className="shadow-img"
              src={process.env.PUBLIC_URL + "/me.png"}
            />
          </div>
          <div className="intro-container">
            <div className="intro-text">
              <h3>Let me introduce myself</h3>
            </div>
            <div className="tc mt0 lh-title fl-nsf2">
              <div className="title-skills lh-title f2  mt2">ABOUT ME</div>
              <div className=" f3 mt5">
                Experienced Software Engineer with 5 years in the field,
                specializing in front-end development with expertise in both
                modern and legacy technologies. Proficient in diverse
                programming languages and tools, with significant experience in
                continuous integration, Agile methodologies, and a proven track
                record in both back-end development and mobile app creation.
                Skilled in working under pressure and adept at meeting tight
                deadlines.
              </div>
            </div>
          </div>
        </div>
        <div className="fn fl-ns w-50-ns mt5 polygon">
          <div className=""></div>
        </div>
      </div>
      <div className="bg-stack">
        <div className="">
          <div className="">
            <div className="title-skills lh-title f2 ">MY TECH STACK</div>
          </div>
          <div className="cf ph3 ph5-ns pv5">
            <div className="tech-container">
              {icons.map((icon) => (
                <div className={`${icon.name}-icon`} key={icon.name}>
                  <img
                    alt="logos"
                    src={process.env.PUBLIC_URL + `/${icon.name}.svg`}
                    height={icon.height}
                    className="grow"
                    title={icon.title}
                  />
                </div>
              ))}
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
