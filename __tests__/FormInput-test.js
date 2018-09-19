import React from 'react';
import { shallow } from 'enzyme';
import FormInput from '../components/FormInput';

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
        autoCapitalize="none"
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should call onChanged prop', () => {
    const mockOnChange = jest.fn(() => 'mock called!');
    const e = {
      nativeEvent: {
        preventDefault: mockOnChange,
        target: { value: 'test text!' },
      },
    };

    const wrapper = shallow(
      <FormInput
        name={name}
        secureTextEntry={secure}
        onChanged={mockOnChange}
        placeholder={placeholderText}
      />,
    );

    wrapper.simulate('change', e);
    expect(mockOnChange).toHaveBeenCalled();
  });
});
