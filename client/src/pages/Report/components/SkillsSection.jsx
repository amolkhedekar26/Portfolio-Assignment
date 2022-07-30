import React from "react";
import SkillsList from "../../Skills/SkillsList";

export default function SkillsSection({ skills }) {
  let skillsContent = null;
  if (skills.length > 0) {
    skillsContent = <SkillsList skills={skills} />;
  } else {
    skillsContent = <div>Loading ...</div>;
  }
  return (
    <>
      <h5>Skills</h5>
      <div className="report-skills-div">{skillsContent}</div>
    </>
  );
}
