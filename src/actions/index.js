import * as types from '../constants/ActionTypes';

export const loadApp = () => ({
  type: types.APP_LOADED
});

export const openModal = () => ({
  type: types.TUTORIAL_MODAL_OPENED
});

export const closeModal = {
  type: types.TUTORIAL_MODAL_CLOSED
};

export const skipTutorial = () => {
  return function (dispatch) {
    dispatch(closeModal);
  }
};

export const changeStep = step => ({
  type: types.TUTORIAL_STEPS_CHANGED,
  currentStep: step
});
