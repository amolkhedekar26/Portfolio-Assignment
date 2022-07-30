import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSkills, createSkill } from "../../actions/skills";

import SkillsHeader from "./components/SkillsHeader";
import SkillsContent from "./components/SkillsContent";
import SkillsListHoler from "./components/SkillsListHoler";
import AddSkillModal from "./components/AddSkillModal";
import SkillsContainer from "./components/SkillsContainer";

import "./Skills.css";

function Skills(props) {
  const initialStateModalForm = {
    inputSkillLevel: 0,
  };

  let navigate = useNavigate();

  const { user: currentUser } = useSelector((state) => state.auth);

  const [stateModalForm, setStateModalForm] = useState(initialStateModalForm);
  const [isOpen, setOpen] = useState(false);

  const skills = useSelector((state) => state.skills);
  const dispatch = useDispatch();

  const inputRef = useRef({});

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser]);

  useEffect(() => {
    dispatch(getSkills());
  }, []);

  const levelChanged = (newLevel) => {
    setStateModalForm({
      ...stateModalForm,
      inputSkillLevel: newLevel,
    });
  };

  function handleSave(e) {
    e.preventDefault();
    dispatch(
      createSkill({
        skill: {
          name: inputRef.current.inputSkillName.value,
          level: stateModalForm.inputSkillLevel,
        },
      })
    );
    setStateModalForm({
      inputSkillLevel: 0,
    });
    setTimeout(() => {
      dispatch(getSkills());
    }, 1000);
    setOpen(false);
  }

  return (
    <SkillsContainer>
      <SkillsHeader modalToggler={() => setOpen(!isOpen)} />
      <SkillsContent>
        {skills && <SkillsListHoler skills={skills} />}
        <AddSkillModal
          isOpen={isOpen}
          setOpen={setOpen}
          inputRef={inputRef}
          levelChanged={levelChanged}
          handleSave={handleSave}
        />
      </SkillsContent>
    </SkillsContainer>
  );
}

export default Skills;
