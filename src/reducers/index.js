import { combineReducers } from 'redux';
import tutorialReducer from './tutorialReducer';

export default combineReducers({ tutorial: tutorialReducer});
