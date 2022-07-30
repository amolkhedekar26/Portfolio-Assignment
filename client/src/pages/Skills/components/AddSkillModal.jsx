import React from "react";
import { Modal } from "../../../components/Modal";
import { PrimaryButton } from "../../../components/PrimaryButton";
import { TextInputRef } from "../../../components/TextInputRef";
import ReactStars from "react-rating-stars-component";
import EmptyStarIcon from "../../../assets/icons/star_outline.svg";
import FullStarIcon from "../../../assets/icons/star_filled.svg";

function AddSkillModal({
  isOpen,
  setOpen,
  inputRef,
  levelChanged,
  handleSave,
}) {
  return (
    <div className="">
      {isOpen && (
        <>
          <div className="modal-container">
            <Modal heading={"Add Skill"} isOpen={isOpen} setOpen={setOpen}>
              <form action="">
                <TextInputRef
                  type="text"
                  label="Skill Name"
                  name="inputSkillName"
                  value={""}
                  placeholder="Enter your skill here"
                  ref={inputRef}
                />
                <label htmlFor="" className="skill-level-label">
                  Skill Level
                </label>
                <ReactStars
                  count={5}
                  onChange={levelChanged}
                  size={36}
                  emptyIcon={<img src={EmptyStarIcon} alt="" />}
                  filledIcon={<img src={FullStarIcon} alt="" />}
                  activeColor="#D83A52"
                />
                {/* {stateModalForm.inputSkillLevel > 0 &&
              stateModalForm.inputSkillName.length > 0 && (
                <PrimaryButton onClick={handleSave}> Save </PrimaryButton>
              )} */}
                <PrimaryButton onClick={handleSave}> Save </PrimaryButton>
              </form>
            </Modal>
          </div>
        </>
      )}
    </div>
  );
}

export default AddSkillModal;
