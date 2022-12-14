import { GET_SKILLS, CREATE_SKILL } from "./types";
import SkillsService from "../services/skills.service";

export const getSkills = () => async (dispatch) => {
  try {
    const res = await SkillsService.getSkills();
    dispatch({
      type: GET_SKILLS,
      payload: res.data.data.skills,
    });
  } catch (err) {
    console.log(err);
  }
};

export const createSkill = (data) => async (dispatch) => {
  try {
    const res = await SkillsService.createSkill(data);
    dispatch({
      type: CREATE_SKILL,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
