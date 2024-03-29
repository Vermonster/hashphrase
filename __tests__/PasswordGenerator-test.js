import React from 'react';
import { shallow } from 'enzyme';
import { TestPasswordGenerator as PasswordGenerator } from '../src/components/PasswordGenerator';

describe('<PasswordGenerator />', () => {
  const mockFn = jest.fn();
  const wrapper = shallow(<PasswordGenerator onClipboardSave={mockFn} t={key => key} />);

  it('should match the existing snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should set label and password state on handleChange', () => {
    const e = { nativeEvent: { text: 'testText!' } };
    const stateValues = ['label', 'password'];

    stateValues.forEach((val) => {
      expect(wrapper.state(val)).toHaveLength(0);
      wrapper.instance().handleChange(val)(e);
      expect(wrapper.state(val)).toBe(e.nativeEvent.text);
    });
  });

  it('should fire the generatePassword function on press', () => {
    const e = { preventDefault: mockFn };
    const spy = jest.spyOn(wrapper.instance(), 'handleSubmit');
    wrapper.instance().forceUpdate();
    wrapper.findWhere(node => node.prop('testID') === 'submit-create-password').simulate('press', e);
    expect(spy).toBeCalled();
  });

  it('should fire the addToClipboard function on press', () => {
    const e = { preventDefault: mockFn };
    const spy = jest.spyOn(wrapper.instance(), 'addToClipboard');
    wrapper.instance().forceUpdate();
    wrapper.findWhere(node => node.prop('testID') === 'submit-create-password').simulate('press', e);
    expect(spy).toBeCalled();
  });
});
