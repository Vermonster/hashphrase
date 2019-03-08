import React from 'react';
import { shallow } from 'enzyme';
import PasswordGenerator from '../src/components/PasswordGenerator';

describe('<PasswordGenerator />', () => {
  it('should match the existing snapshot', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<PasswordGenerator onClipboardSave={mockFn} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render all of the components', () => {
    const wrapper = shallow(<PasswordGenerator />);
    expect(wrapper.find('FormInput')).toHaveLength(2);
    expect(wrapper.find('BaseButton')).toHaveLength(1);
  });

  it('should set label and password state on handleChange', () => {
    const mockFn = jest.fn();
    const e = { nativeEvent: { text: 'testText!' } };
    const wrapper = shallow(<PasswordGenerator onClipboardSave={mockFn} />);
    const stateValues = ['label', 'password'];

    stateValues.forEach((val) => {
      expect(wrapper.state(val)).toHaveLength(0);
      wrapper.instance().handleChange(val)(e);
      expect(wrapper.state(val)).toBe(e.nativeEvent.text);
    });
  });

  it('should fire the generatePassword function on press', () => {
    const mockEvent = jest.fn();
    const e = { preventDefault: mockEvent };
    const wrapper = shallow(<PasswordGenerator onClipboardSave={mockEvent} />);
    const spy = jest.spyOn(wrapper.instance(), 'generatePassword');
    wrapper.instance().forceUpdate();
    wrapper.find('BaseButton').simulate('press', e);
    expect(spy).toBeCalled();
  });

  it('should fire the addToClipboard function on press', () => {
    const mockEvent = jest.fn();
    const e = { preventDefault: mockEvent };
    const wrapper = shallow(<PasswordGenerator onClipboardSave={mockEvent} />);
    const spy = jest.spyOn(wrapper.instance(), 'addToClipboard');
    wrapper.instance().forceUpdate();
    wrapper.find('BaseButton').simulate('press', e);
    expect(spy).toBeCalled();
  });
});
