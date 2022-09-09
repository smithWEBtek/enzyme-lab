import React from 'react';
// import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
// import sinon from 'sinon';

import App from './App';

it('renders learn react link', () => {
  const wrapper = shallow(<App />);
  const root = wrapper.find('div#root')
  expect(root).toBeDefined();
});


it('simulates click events', () => {
  const wrapper = mount(<App />);
  const button = wrapper.find('button').simulate('click');
  const buttonText = button.text()
  expect(buttonText).toEqual("calls: 1");
});
