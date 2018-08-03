import {
  APP_LOADED,
  TUTORIAL_MODAL_OPENED, 
  TUTORIAL_MODAL_CLOSED,
  TUTORIAL_MODAL_SKIPED,
  TUTORIAL_STEPS_CHANGED } from '../constants/ActionTypes';

  const initialState = {
    showTutorialModal: false,
    tutorialSkiped: false,
    currentStep: 0
  };

  export default function(state = initialState, action) {
    switch (action.type) {
      case APP_LOADED:
        return state;
        
      case TUTORIAL_MODAL_OPENED:
        return Object.assign({}, state, {
          showTutorialModal: true,
          currentStep: 1
        });

      case TUTORIAL_MODAL_CLOSED:
        return Object.assign({}, state, {
          showTutorialModal: false,
          currentStep: 0,
        });

      case TUTORIAL_MODAL_SKIPED:
        return Object.assign({}, state, {
          tutorialSkiped: true,
          currentStep: 0
        });
        
      case TUTORIAL_STEPS_CHANGED:
        return Object.assign({}, state, {
          currentStep: action.payload,
        });

      default:
        return state
    }
  }
