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
});
