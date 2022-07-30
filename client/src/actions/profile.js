import { GET_PROFILE, CREATE_PROFILE } from "./types";
import ProfileService from "../services/profile.service";

export const getProfile = () => async (dispatch) => {
    try {
        const res = await ProfileService.getProfile();
        dispatch({
          type: GET_PROFILE,
          payload: res.data.data,
        });
      } catch (err) {
        console.log(err);
      }
    
};

export const createProfile = (data) => async (dispatch) => {
    try {
        const res = await ProfileService.createProfile(data);
        dispatch({
            type: CREATE_PROFILE,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};
