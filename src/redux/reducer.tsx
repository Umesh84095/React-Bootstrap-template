import { PUSH_NOTIFICATION } from "../constants/actions";
import COMMON from "../constants/common";
import { ACCESS_TOEKN, LOADER } from "./actions";

// Reducer
import { loginSuccess } from "./actions";
import {ADD_EDUCATION,ADD_SKILL,ADD_EXPERIENCE,DELETE_EDUCATION,DELETE_EXPERIENCE,DELETE_SKILL } from "./actions";

interface ProfileState {
  user: {
    about: any;
  };
  skills: any[];
  education: any[];
  experience: any[];
}

// interface AddSkillAction {
//   type: "ADD_SKILL";
//   payload: {
//     skill: string;
//   };
// }

// interface DeleteSkillAction {
//   type: "DELETE_SKILL";
//   payload: {
//     index: number;
//   };
// }

// interface AddEducationAction {
//   type: "ADD_EDUCATION";
//   payload: {
//     education: string;
//   };
// }

// interface DeleteEducationAction {
//   type: "DELETE_EDUCATION";
//   payload: {
//     index: number;
//   };
// }

// interface UpdateAboutAction {
//   type: "UPDATE_ABOUT";
//   payload: {
//     about: string;
//   };
// }

// interface AddExperienceAction {
//   type: "ADD_EXPERIENCE";
//   payload: {
//     experience: string;
//   };
// }

// interface DeleteExperienceAction {
//   type: "DELETE_EXPERIENCE";
//   payload: {
//     index: number;
//   };
// }

type Action={
  type:
    | typeof ADD_EDUCATION
    | typeof DELETE_EDUCATION
    | typeof ADD_SKILL
    | typeof DELETE_SKILL
    | typeof ADD_EXPERIENCE
    | typeof DELETE_EXPERIENCE
    // | typeof UPDATE_ABOUT
    | typeof ACCESS_TOEKN
    | typeof PUSH_NOTIFICATION
    | typeof LOADER;
    
  payload: any;
}
// const initialState: ProfileState = {
  
// };
// interface State {
//   education:any[];
//   experience:any[];
//   skills:any[];
// }

// const profileReducer = (state: ProfileState = initialState, action: ProfileAction): ProfileState => {
//   switch (action.type) {
    
//     default:
//       return state;
//   }
// };

// export default profileReducer;


export interface NotificationProps {
  isOpen: boolean;
  type?: "error" | "info" | "success" | "warning";
  message?: string;
  handleClose?: () => void;
}
interface User {
  about: any;
}

interface State {
  experience: any;
  education: any;
  // user: User; // Use the User type here  education: any;
  skills: any;
  educationList: any[];

  experienceList: any[];

  skillList:any[];

  isLoading: boolean;

  notification: {};

  isAnonymous: boolean;

  access_token: string;

}
const initialState: State = {
  educationList: [],
  experienceList: [],
  skillList: [],
  isLoading: false,
  notification: {},
  isAnonymous: true,
  access_token: "",
  experience: [],
  education: [],
  skills: [],
  // user: {
  //   about: "", // Initialize about as an empty string
  // },
};

export const loadingActionReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADER:
      return {
        ...state,
        isLoading: action.payload,
      };

    case PUSH_NOTIFICATION:
      return { ...state, notification: action.payload };

    case COMMON.ANONYMOUS:
      return {
        ...state,
        isAnonymous: action.payload,
      };

    case ACCESS_TOEKN:
      return {
        ...state,
        access_token: action.payload
      };

      case "ADD_SKILL":
      return {
        ...state,
        skills: [...state.skills, action.payload.skill],
      };
    case "DELETE_SKILL":
      return {
        ...state,
        skills: state.skills.filter((_: any, index: any) => index !== action.payload.index),
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
    // case "UPDATE_ABOUT":
    //   return {
    //     ...state,
    //     user: {
    //       ...state.user,
    //       about: action.payload.about,
    //     },
    //   };
  //   case "UPDATE_ABOUT":
  // console.log("Updated About:", action.payload.about.toString()); // Debug statement
  // return {
  //   ...state,
  //   user: {
  //     ...state.user,
  //     about: action.payload.about.toString(), // Make sure it's a string
  //   },
  // };

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
