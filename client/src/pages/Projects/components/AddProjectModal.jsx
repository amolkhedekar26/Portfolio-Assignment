import Multiselect from "multiselect-react-dropdown";
import React from "react";
import { Modal } from "../../../components/Modal";
import { PrimaryButton } from "../../../components/PrimaryButton";
import { TextInputRef } from "../../../components/TextInputRef";

function AddProjectModal({
  isOpen,
  setOpen,
  inputRef,
  skills,
  stateModalForm,
  skillSelected,
  skillRemoved,
  handleSave,
}) {
  return (
    <div className="">
      {isOpen && (
        <>
          <div className="modal-container">
            <Modal heading={"Add Project"} isOpen={isOpen} setOpen={setOpen}>
              <form action="">
                <TextInputRef
                  type="text"
                  label="Project Name"
                  name="inputProjectName"
                  value={""}
                  placeholder="Enter your project name here"
                  ref={inputRef}
                />
                <TextInputRef
                  type="text"
                  label="Project Description"
                  name="inputProjectDescription"
                  value={""}
                  placeholder="Enter your project description here"
                  ref={inputRef}
                />
                <Multiselect
                  options={skills.map((item) => item.name)} // Options to display in the dropdown
                  selectedValues={stateModalForm.inputProjectSkills} // Preselected value to persist in dropdown
                  onSelect={skillSelected} // Function will trigger on select event
                  onRemove={skillRemoved} // Function will trigger on remove event
                  isObject={false}
                  placeholder="Select your project skills"
                />

                {/* {stateModalForm.inputProjectName.length > 0 &&
              stateModalForm.inputProjectDescription.length > 0 && (
                <PrimaryButton onClick={handleSave}>Save</PrimaryButton>
              )} */}
                <PrimaryButton onClick={handleSave}>Save</PrimaryButton>
              </form>
            </Modal>
          </div>
        </>
      )}
    </div>
  );
}

export default AddProjectModal;
