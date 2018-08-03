import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from '../../src/actions';
import * as types from '../../src/constants/ActionTypes';

describe('Tutorial actions', () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);

  it('should create action loadApp', () => {
    const store = mockStore({
      showTutorialModal: false,
      tutorialSkiped: false,
      currentStep: 0
    });
    const testAction = {
      type: types.APP_LOADED
    };
    store.dispatch(actions.loadApp());
    expect(store.getActions()).toEqual([testAction]);
  });

  it('should create action tutorialModalOpened', () => {
    const testAction = {
      type: types.TUTORIAL_MODAL_OPENED
    };
    expect(actions.tutorialModalOpened).toEqual(testAction);
  });

  it('should create action tutorialModalClosed', () => {
    const testAction = {
      type: types.TUTORIAL_MODAL_CLOSED
    };
    expect(actions.tutorialModalClosed).toEqual(testAction);
  });

  it('should create action tutorialModalSkiped', () => {
    const testAction = {
      type: types.TUTORIAL_MODAL_SKIPED
    };
    expect(actions.tutorialModalSkiped).toEqual(testAction);
  });

  it('should create action changeStep', () => {
    const nextStep = 2;
    const store = mockStore({
      showTutorialModal: true,
      tutorialSkiped: false,
      currentStep: 1
    });
    const testAction = {
      type: types.TUTORIAL_STEPS_CHANGED,
      currentStep: nextStep
    };
    store.dispatch(actions.changeStep(2));
    expect(store.getActions()).toEqual([testAction]);
  });
});
