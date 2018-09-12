import React from 'react';
import { shallow } from 'enzyme';
import { Form } from 'native-base';
import PasswordGenerator from '../components/PasswordGenerator';

describe('<PasswordGenerator />', () => {
  it('should match the existing snapshot', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<PasswordGenerator onClipboardSave={mockFn} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render all of the components', () => {
    const wrapper = shallow(<PasswordGenerator />);
    expect(wrapper.find('FormInput')).toHaveLength(2);
    expect(wrapper.find(Form)).toHaveLength(1);
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


  it('should create a generated password, save to state', () => {
    const fakedEvent = jest.fn();
    const testLabel = 'testLabel';
    const testPassword = 'testPassword';
    const e = { preventDefault: fakedEvent };
    const wrapper = shallow(<PasswordGenerator onClipboardSave={fakedEvent} />);

    wrapper.setState({ label: 'testLabel', password: 'testPassword' });
    wrapper.instance().generatePassword(e);

    expect(wrapper.state().generatePassword).toEqual(testLabel + testPassword);
  });
});
