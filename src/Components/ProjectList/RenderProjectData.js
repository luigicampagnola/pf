import React from "react";
import ProjectComponent from "./ProjectComponent";

const RenderProject = ({ ProjectData }) => {
  const projectArray = ProjectData.map((element, i) => {
    return (
      <ProjectComponent
        key={i}
        id={ProjectData[i].id}
        name={ProjectData[i].name}
        description={ProjectData[i].description}
        link={ProjectData[i].link}
      />
    );
  });
  return (
    <div className="fn ph3 ph4-m ph5-l mt2 project">
      <div className="mt5 tc f1">Projects</div>
      {projectArray}
    </div>
  );
};

export default RenderProject;
