import React from "react";

const Skills = () => {
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
          <div className="cf ph3 ph5-ns pv5 tech-container">
            <div className="html-icon">
              <img
                alt="logos"
                src={process.env.PUBLIC_URL + "/html.svg"}
                height="150"
                className="grow"
                title="HTML"
              />
            </div>
            <div className="css-icon ">
              <img
                alt="logos"
                src={process.env.PUBLIC_URL + "/css.svg"}
                height="150"
                className="grow"
                title="CSS"
              />
            </div>
            <div className="sass-icon ">
              <img
                alt="logos"
                src={process.env.PUBLIC_URL + "/sass.svg"}
                height="150"
                className="grow"
                title="CSS"
              />
            </div>
            <div className="js-icon">
              <img
                alt="logos"
                src={process.env.PUBLIC_URL + "/js.svg"}
                height=""
                className="grow mw4 pa1 mt2"
                title="Javascript"
              />
            </div>
            <div className="react-icon">
              <img
                alt="logos"
                src={process.env.PUBLIC_URL + "/react.svg"}
                height="100"
                className="grow "
                title="ReactJS"
              />
            </div>
            <div className="github-icon">
              <img
                alt="logos"
                src={process.env.PUBLIC_URL + "/github.svg"}
                height="150"
                className="grow"
                title="GitHub"
              />
            </div>
            <div className="node-icon">
              <img
                alt="logos"
                src={process.env.PUBLIC_URL + "/nodejs.svg"}
                height="150"
                className=" grow"
                title="NodeJS"
              />
            </div>
            <div className="postgres-icon">
              <img
                alt="logos"
                src={process.env.PUBLIC_URL + "/postgresql.svg"}
                height="130"
                className=" grow"
                title="PostgreSQL"
              />
            </div>
            <div className="knex-icon">
              <img
                alt="logos"
                src={process.env.PUBLIC_URL + "/knex.svg"}
                height="130"
                className=" grow"
                title="KnexJS"
              />
            </div>
            <div className="strapi-icon">
              <img
                alt="logos"
                src={process.env.PUBLIC_URL + "/strapi.svg"}
                height="130"
                className=" grow"
                title="KnexJS"
              />
            </div>
            <div className="nextjs-icon">
              <img
                alt="logos"
                src={process.env.PUBLIC_URL + "/nextjs.svg"}
                height="130"
                className=" grow"
                title="KnexJS"
              />
            </div>
            <div className="native-icon">
              <img
                alt="logos"
                src={process.env.PUBLIC_URL + "/react-native.svg"}
                height="130"
                className=" grow"
                title="KnexJS"
              />
            </div>
            {/*           
            <div className="icon">
              <img
                alt="logos"
                src={process.env.PUBLIC_URL + "/storybook.svg"}
                height="130"
                className=" grow"
                title="KnexJS"
              />
            </div> */}
            {/*             <div className="icon">
              <img
                alt="logos"
                src={process.env.PUBLIC_URL + "/tailwind.svg"}
                height="130"
                className=" grow"
                title="KnexJS"
              />
            </div>
            <div className="icon">
              <img
                alt="logos"
                src={process.env.PUBLIC_URL + "/typescript.svg"}
                height="130"
                className=" grow"
                title="KnexJS"
              />
            </div>
            <div className="icon">
              <img
                alt="logos"
                src={process.env.PUBLIC_URL + "/redis.svg"}
                height="130"
                className=" grow"
                title="KnexJS"
              />
            </div>
            <div className="icon">
              <img
                alt="logos"
                src={process.env.PUBLIC_URL + "/jira.svg"}
                height="130"
                className=" grow"
                title="KnexJS"
              />
            </div>
            <div className="icon">
              <img
                alt="logos"
                src={process.env.PUBLIC_URL + "/adobe-xd.svg"}
                height="130"
                className=" grow"
                title="KnexJS"
              />
            </div>
            <div className="icon">
              <img
                alt="logos"
                src={process.env.PUBLIC_URL + "/photoshop.svg"}
                height="130"
                className=" grow"
                title="KnexJS"
              />
            </div>
            <div className="icon">
              <img
                alt="logos"
                src={process.env.PUBLIC_URL + "/illustrator.svg"}
                height="130"
                className=" grow"
                title="KnexJS"
              />
            </div>
            <div className="icon">
              <img
                alt="logos"
                src={process.env.PUBLIC_URL + "/figma.svg"}
                height="130"
                className=" grow"
                title="KnexJS"
              />
            </div>
            <div className="icon">
              <img
                alt="logos"
                src={process.env.PUBLIC_URL + "/androidstudio.svg"}
                height="130"
                className=" grow"
                title="KnexJS"
              />
            </div>
            <div className="icon">
              <img
                alt="logos"
                src={process.env.PUBLIC_URL + "/storybook.svg"}
                height="130"
                className=" grow"
                title="KnexJS"
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
