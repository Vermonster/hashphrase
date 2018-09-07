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

  it('generates expected passwords', () => {
    const mockFn = jest.fn();
    const component = renderer.create(<PasswordGenerator onClipboardSave={mockFn} />).getInstance();
    component.setState({ label: 'testLabel', password: 'testPassword' });

  });

  // it('dismisses the keyboard when run generatePassword', () => {
  //   const mockFn = jest.fn();
  //   const component = renderer.create(<PasswordGenerator onClipboardSave={mockFn} />).getInstance();
  //   component.setState({ label: 'testLabel', password: 'testPassword' });
  //   component.generatePassword();
  //   // check
  //   expect("keyboard to be closed");
  // });

  // it('sets label state/password state in handleChange')
  // it('generates a password on input (generatePw)')
  // it('saves password to clipboard (generatePw)')
  // it('generates expected password (generatePw)')
});
