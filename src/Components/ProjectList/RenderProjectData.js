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
      />
    );
  });
  return (
    <div className="fn ph3 ph4-m ph5-l mt5 project">
      <div className="mt5 tc f1">Projects</div>
      {projectArray}
    </div>
  );
};

export default RenderProject;