import { loginSuccess } from "./Action";
import { ADD_EDUCATION } from "./Action";

interface ProfileState {
  user: {
    about: any;
  };
  skills: any[];
  education: any[];
  experience: any[];
}

interface AddSkillAction {
  type: "ADD_SKILL";
  payload: {
    skill: string;
  };
}

interface DeleteSkillAction {
  type: "DELETE_SKILL";
  payload: {
    index: number;
  };
}

interface AddEducationAction {
  type: "ADD_EDUCATION";
  payload: {
    education: string;
  };
}

interface DeleteEducationAction {
  type: "DELETE_EDUCATION";
  payload: {
    index: number;
  };
}

interface UpdateAboutAction {
  type: "UPDATE_ABOUT";
  payload: {
    about: string;
  };
}

interface AddExperienceAction {
  type: "ADD_EXPERIENCE";
  payload: {
    experience: string;
  };
}

interface DeleteExperienceAction {
  type: "DELETE_EXPERIENCE";
  payload: {
    index: number;
  };
}

type ProfileAction =
  | AddSkillAction
  | DeleteSkillAction
  | AddEducationAction
  | DeleteEducationAction
  | UpdateAboutAction
  | AddExperienceAction
  | DeleteExperienceAction;

const initialState: ProfileState = {
  user: {
    about: "",
  },
  skills: [],
  education: [],
  experience: [],
};
interface State {
  education:any[];
  experience:any[];
  skills:any[];
}

const profileReducer = (state: ProfileState = initialState, action: ProfileAction): ProfileState => {
  switch (action.type) {
    case "ADD_SKILL":
      return {
        ...state,
        skills: [...state.skills, action.payload.skill],
      };
    case "DELETE_SKILL":
      return {
        ...state,
        skills: state.skills.filter((_, index) => index !== action.payload.index),
      };
    case ADD_EDUCATION:
      return {
        ...state,
        education: [...state.education, action.payload ],
      };
    case "DELETE_EDUCATION":
      return {
        ...state,
        education: state.education.filter((_, index) => index !== action.payload.index),
      };
    case "UPDATE_ABOUT":
      return {
        ...state,
        user: {
          ...state.user,
          about: action.payload.about,
        },
      };
    case "ADD_EXPERIENCE":
      return {
        ...state,
        experience: [...state.experience, action.payload.experience],
      };
    case "DELETE_EXPERIENCE":
      return {
        ...state,
        experience: state.experience.filter((_, index) => index !== action.payload.index),
      };
    default:
      return state;
  }
};

export default profileReducer;
