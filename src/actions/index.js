import * as types from '../constants/ActionTypes';

export const loadApp = () => ({
  type: types.APP_LOADED
});

export const tutorialModalOpened = {
  type: types.TUTORIAL_MODAL_OPENED
};

export const tutorialModalClosed = {
  type: types.TUTORIAL_MODAL_CLOSED
};

export const tutorialModalSkiped = {
  type: types.TUTORIAL_MODAL_SKIPED
};

export const changeStep = step => ({
  type: types.TUTORIAL_STEPS_CHANGED,
  currentStep: step
});
