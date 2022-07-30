import React from "react";
import PrimaryButtonWithIcon from "../../../components/PrimaryButtonWithIcon/PrimaryButtonWithIcon";
import { SearchInput } from "../../../components/SearchInput";
import PlusIcon from "../../../assets/icons/plus.svg";
import AutoCompleteSearchInput from "../../../components/AutoCompleteSearchInput/AutoCompleteSearchInput";

function SkillsHeader({ modalToggler }) {
  return (
    <header className="skills-header">
      {/* <SearchInput name="inputSearch" placeholder="Search for skills" /> */}
      <AutoCompleteSearchInput
        suggestions={["HTML", "CSS", "JavaScript", "React", "NodeJS"]}
      />
      <PrimaryButtonWithIcon icon={PlusIcon} onClick={modalToggler}>
        Add Skill
      </PrimaryButtonWithIcon>
      
    </header>
  );
}

export default SkillsHeader;
