import { createStore } from "redux";
import { loadingActionReducer } from "./reducer";


const store = createStore(loadingActionReducer);

export default store; 
