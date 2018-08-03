import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import App from '../src/components/App';

describe('App', () => {
  let wrapper;
  const loadApp = jest.fn();

  it('should render de App', () => {
    wrapper = shallow(<App loadApp={ loadApp } />);
    expect(wrapper.find('.App')).toBeTruthy();
    expect(wrapper.find('.body')).toBeTruthy();
    expect(wrapper.find('.container')).toBeTruthy();
    expect(wrapper.find('.btn-tutorial')).toBeTruthy();
  });

  it('matches the snapshot', () => {
    const tree = shallow(<App loadApp={ loadApp } />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
