import { createStore} from 'redux';
import profileReducer from './Reducer'; 

const store = createStore(profileReducer);

export default store;