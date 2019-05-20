import React from 'react';
import { shallow } from 'enzyme';
import { TestFormInput as FormInput } from '../src/components/FormInput';

describe('<FormInput />', () => {
  const mockFn = jest.fn();

  it('should render the same snapshot', () => {
    const wrapper = shallow(
      <FormInput
        prompt="Test Prompt"
        handleChange={mockFn}
        componentType="password"
        t={key => key}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should generate a password input when "password" label provided', () => {
    const wrapper = shallow(
      <FormInput
        prompt="Test Prompt"
        handleChange={mockFn}
        componentType="password"
        t={key => key}
      />,
    );
    expect(wrapper.findWhere(node => node.prop('testID') === 'hideShowButton')).toHaveLength(1);
  });
});
