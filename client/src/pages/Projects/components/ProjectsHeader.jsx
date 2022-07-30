import React from "react";
import PrimaryButtonWithIcon from "../../../components/PrimaryButtonWithIcon/PrimaryButtonWithIcon";
import PlusIcon from "../../../assets/icons/plus.svg";
import { SearchInput } from "../../../components/SearchInput";

function ProjectsHeader({ modalToggler }) {
  return (
    <header className="projects-header">
      <SearchInput
        name="inputSearch"
        value=""
        placeholder="Search for projects"
      />
      <PrimaryButtonWithIcon icon={PlusIcon} onClick={modalToggler}>
        Add Project
      </PrimaryButtonWithIcon>
    </header>
  );
}

export default ProjectsHeader;
