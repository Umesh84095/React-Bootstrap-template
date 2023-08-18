export const loginSuccess = () => ({
  type: "LOGIN_SUCCESS" as const,
});

export const updateAbout = (about) => {
  return {
    type: "UPDATE_ABOUT" as const,
    payload: { about },
  };
};

export const addSkill = (skill) => {
  return {
    type: "ADD_SKILL" as const,
    payload: { skill },
  };
};

export const deleteSkill = (index) => {
  return {
    type: "DELETE_SKILL" as const,
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
    type: "DELETE_EDUCATION" as const,
    payload: { index },
  };
};

export const addExperience = (experience) => {
  return {
    type: "ADD_EXPERIENCE" as const,
    payload: { experience },
  };
};

export const deleteExperience = (index) => {
  return {
    type: "DELETE_EXPERIENCE" as const,
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
 
  export const  ADD_EDUCATION ="ADD_EDUCATION"