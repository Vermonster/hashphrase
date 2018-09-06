import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
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
    const wrapper = shallow(
      <FormInput
        name={name}
        secureTextEntry={secure}
        onChange={changeFn}
        placeholder={placeholderText}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

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
