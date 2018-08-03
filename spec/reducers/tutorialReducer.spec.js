import * as types from '../../src/constants/ActionTypes';
import tutorialReducer from '../../src/reducers/tutorialReducer';

describe('Tutorial reducer', () => {
  const initialState = {
    showTutorialModal: false,
    tutorialSkiped: false,
    currentStep: 0
  };

  it('should return initial state', () => {
    expect(tutorialReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle APP_LOADED', () => {
    const testAction = {
      type: types.APP_LOADED
    };
    expect(tutorialReducer({}, testAction)).toEqual(initialState);
  });

  it('should handle TUTORIAL_MODAL_OPENED', () => {
    const testAction = {
      type: types.TUTORIAL_MODAL_OPENED
    };
    const expectedResult = {
      showTutorialModal: true,
      currentStep: 1
    };
    expect(tutorialReducer({}, testAction)).toEqual(expectedResult);
  });

  it('should handle TUTORIAL_MODAL_CLOSED', () => {
    const testAction = {
      type: types.TUTORIAL_MODAL_CLOSED
    };
    const expectedResult = {
      showTutorialModal: false,
      currentStep: 0,
    };
    expect(tutorialReducer({}, testAction)).toEqual(expectedResult);
  });

  it('should handle TUTORIAL_MODAL_SKIPED', () => {
    const testAction = {
      type: types.TUTORIAL_MODAL_SKIPED
    };
    const expectedResult = {
      tutorialSkiped: true,
      currentStep: 0
    };
    expect(tutorialReducer({}, testAction)).toEqual(expectedResult);
  });

  it('should handle TUTORIAL_STEPS_CHANGED', () => {
    const testAction = {
      type: types.TUTORIAL_STEPS_CHANGED,
      payload: 2
    };
    const expectedResult = {
      currentStep: 2
    };
    expect(tutorialReducer({ currentStep: 2 }, testAction)).toEqual(expectedResult);
  });
});
