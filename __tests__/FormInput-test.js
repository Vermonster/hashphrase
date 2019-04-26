import React from 'react';
import { shallow } from 'enzyme';
import FormInput from '../src/components/FormInput';

describe('<FormInput />', () => {
  const mockFn = jest.fn();

  it('should render the same snapshot', () => {
    const wrapper = shallow(
      <FormInput
        placeholderText="Test Placeholder"
        prompt="Test Prompt"
        handleChange={mockFn}
        componentType="password"
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should generate a password input when "password" label provided', () => {
    const wrapper = shallow(
      <FormInput
        placeholderText="Test Placeholder"
        prompt="Test Prompt"
        handleChange={mockFn}
        componentType="password"
      />,
    );
    expect(wrapper.findWhere(node => node.prop('testID') === 'hideShowButton')).toHaveLength(1);
  });
});
