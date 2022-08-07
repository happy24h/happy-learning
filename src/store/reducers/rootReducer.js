import { combineReducers } from 'redux';
import manageReducer from './manageReducer';

const allReducer = combineReducers({
    dataUsers: manageReducer,
});

export default allReducer;
