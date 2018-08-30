import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import { Input } from 'native-base';
import FormInput from '../components/FormInput';

configure({ adapter: new Adapter() });

const secure = true;
const name = 'testInput';
const changeFn = jest.fn();
const placeholderText = 'test placeholder';

describe('<FormInput />', () => {
  it('should match the existing snapshot', () => {
    const tree = renderer.create(
      <FormInput
        name={name}
        secureTextEntry={secure}
        onChange={changeFn}
        placeholder={placeholderText}
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should have the props passed in', () => {
    const wrapper = shallow(
      <FormInput
        name={name}
        secureTextEntry={secure}
        onChange={changeFn}
        placeholder={placeholderText}
      />,
    );

    expect(wrapper.props().name).toEqual(name);
    expect(wrapper.props().secureTextEntry).toEqual(secure);
    expect(wrapper.props().placeholder).toEqual(placeholderText);
  });

  // this doesn't work. issue with mocking function?
  it('should call onChange prop', () => {
    const mockOnChange = jest.fn();
    const event = {
      preventDefault() {},
      target: { value: 'onchange value' },
    };
    const wrapper = shallow(
      <FormInput
        name={name}
        secureTextEntry={secure}
        onChange={mockOnChange}
        placeholder={placeholderText}
      />,
    );
    wrapper.find(Input).simulate('change', event);
    expect(mockOnChange).toBeCalledWith(event);
  });
});
