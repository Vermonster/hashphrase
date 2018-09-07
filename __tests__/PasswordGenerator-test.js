import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import { Form } from 'native-base';
import PasswordGenerator from '../components/PasswordGenerator';
import FormInput from '../components/FormInput';
import BaseButton from '../components/BaseButton';

configure({ adapter: new Adapter() });

describe('<PasswordGenerator />', () => {
  it('should match the existing snapshot', () => {
    const tree = renderer.create(
      <PasswordGenerator />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render two FormInput components', () => {
    const wrapper = shallow(<PasswordGenerator />);
    expect(wrapper.find(FormInput)).toHaveLength(2);
  });

  it('should render one Form component', () => {
    const wrapper = shallow(<PasswordGenerator />);
    expect(wrapper.find(Form)).toHaveLength(1);
  });

  it('should render one BaseButton component', () => {
    const wrapper = shallow(<PasswordGenerator />);
    expect(wrapper.find(BaseButton)).toHaveLength(1);
  });

  // when generatePassword runs, it does lots of stuff
  // takes in event object, pulls in state and props, sets loplop pw in clipboard
  
  
  // it('generates expected passwords', () => {
  //   const mockFn = jest.fn();
  //   const e = { preventDefault: mockFn };
  //   const component = renderer.create(<PasswordGenerator onClipboardSave={mockFn} />).getInstance();
  //   component.setState({ label: 'testLabel', password: 'testPassword' });
  //   component.generatePassword(e);
  // });

  // it('dismisses the keyboard when run generatePassword', () => {
  //   const mockFn = jest.fn();
  //   const component = renderer.create(<PasswordGenerator onClipboardSave={mockFn} />).getInstance();
  //   component.setState({ label: 'testLabel', password: 'testPassword' });
  //   component.generatePassword();
  //  
  //   expect("keyboard to be closed");
  // });

  // it('activates the keyboard upon focus on input')
  // it('closes keyboard when GeneratePassword runs')
  // it('sets label state/password state in handleChange')

  // handleChange is called in the inputs. How to isolate this for testing?
  it('sets label state/password state on handleChange', () => {
    const mockFn = jest.fn();
    const e = { nativeEvent: { text: 'testText!' } };
    const wrapper = shallow(<PasswordGenerator onClipboardSave={mockFn} />);
    console.log(wrapper);
    wrapper.handleChange('label', e);
    expect(wrapper.state('label')).toBe(e.nativeEvent.text);
  });

  // it('generates a password on input (generatePw)')
  // it('saves password to clipboard (generatePw)')
  // it('generates expected password (generatePw)')
});
