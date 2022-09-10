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

it('presents a dropdown select of boxers', () => {
  const wrapper = mount(<App />);
  const mockHandleClick = jest.fn()
  wrapper.setProps({ onChange: mockHandleClick })

  const select = wrapper.find('select#boxer-select')
  select.simulate('change', '', { value: ['ali'] })

  expect(select).toBeDefined();
  expect(select.text()).toEqual('Muhammed Ali')
})

// it.skip('renders selection from dropdown', () => {
//   const mockHandleClick = jest.fn()
//   const wrapper = mount(<App />);
//   wrapper.setProps({ onChange: mockHandleClick })
//   const select = wrapper.find('select#boxer-select')
//   select.simulate('change', '', { value: ['ali'] })
//   // wrapper.find('select#boxer-select').simulate('change', { value: ['ali'] })

//   console.log('select: ', select);
//   expect(select.value).toEqual('Muhammed Ali')
// })
