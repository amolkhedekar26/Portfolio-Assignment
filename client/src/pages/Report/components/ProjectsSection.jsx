import React from "react";
import ProjectsList from "../../Projects/ProjectsList";

function ProjectsSection({ projects }) {
  let projectsContent = null;
  if (projects.length > 0) {
    projectsContent = <ProjectsList projects={projects} />;
  } else {
    projectsContent = <div>Loading ...</div>;
  }
  return (
    <>
      <h5>Projects</h5>
      <div className="report-projects-div">{projectsContent}</div>
    </>
  );
}

export default ProjectsSection;
