import { PUSH_NOTIFICATION } from '../constants/actions';
export const  ADD_EDUCATION = "ADD_EDUCATION";
export const ADD_SKILL="ADD_SKILL";
export const ADD_EXPERIENCE="ADD_EXPERIENCE";
export const ADD_PROJECT="ADD_PROJECT";
export const DELETE_SKILL="DELETE_SKILL";
export const DELETE_EXPERIENCE="DELETE_EXPERIENCE";
export const DELETE_EDUCATION="DELETE_EDUCATION";
export const UPDATE_ABOUT="UPDATE_ABOUT";

// Action Type
export const LOADER = 'LOADER';
export const ACCESS_TOEKN = 'ACCESS_TOEKN';

// Action
export const setLoader = (loading) => {
    return {
        type: LOADER,
        payload: loading,
    };
};

export const setAnonymousUser = (data) => {
    return {
        type: LOADER,
        payload: data,
    };
};

export const pushNotification = (data) => {
    return { type: PUSH_NOTIFICATION, payload: data };
};

export const setAccessToken = (token) => {
    return {
        type: ACCESS_TOEKN,
        payload: token
    }
}

export const loginSuccess = () => ({
    type: "LOGIN_SUCCESS" ,
  });
  
  export const updateAbout = (about) => {
    return {
      type: "UPDATE_ABOUT" ,
      payload: { about },
    };
  };
  
  export const addSkill = (skill) => {
    return {
      type: "ADD_SKILL" ,
      payload: { skill },
    };
  };
  
  export const deleteSkill = (index) => {
    return {
      type: "DELETE_SKILL" ,
      payload: { index },
    };
  };
  
  export const addEducation = (data) => {
    return {
      type: ADD_EDUCATION, 
      payload: data ,
    };
  };
  
  export const deleteEducation = (index) => {
    return {
      type: "DELETE_EDUCATION" ,
      payload: { index },
    };
  };
  
  export const addExperience = (experience) => {
    return {
      type: "ADD_EXPERIENCE" ,
      payload: { experience },
    };
  };
  
  export const deleteExperience = (index) => {
    return {
      type: "DELETE_EXPERIENCE" ,
      payload: { index },
    };
  };
  
  export type ProfileAction =
    | ReturnType<typeof loginSuccess>
    | ReturnType<typeof updateAbout>
    | ReturnType<typeof addSkill>
    | ReturnType<typeof deleteSkill>
    | ReturnType<typeof addEducation>
    | ReturnType<typeof deleteEducation>
    | ReturnType<typeof addExperience>
    | ReturnType<typeof deleteExperience>;
   
   
