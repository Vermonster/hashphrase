import React from 'react';
import { shallow } from 'enzyme';
import { TestConfirmationDialog as ConfirmationDialog } from '../src/components/ConfirmationDialog';

describe('<ConfirmationDialog />', () => {
  let wrapper;
  let instance;

  beforeEach(() => {
    const mockFn = jest.fn();
    wrapper = shallow(
      <ConfirmationDialog
        visible
        closeModal={mockFn}
        t={key => key}
        generatedPassword="12345678"
        clearForm={mockFn}
        resetToggleSwitch={mockFn}
      />,
    );

    instance = wrapper.instance();
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should change obscured state when hide/show button clicked', () => {
    expect(instance.state.obscured).toBe(true);
    wrapper.findWhere(node => node.prop('testID') === 'hide-show-button').simulate('press');
    expect(instance.state.obscured).toBe(false);
  });

  it('should reset obscured state when start over button clicked', () => {
    instance.state.obscured = false;
    expect(instance.state.obscured).toBe(false);
    wrapper.findWhere(node => node.prop('testID') === 'start-over-button').simulate('press');
    expect(instance.state.obscured).toBe(true);
  });

  it('should render initially with icon visibility-off', () => {
    const button = wrapper.findWhere(node => node.prop('testID') === 'hide-show-button');
    expect(button.props('icon').icon).toEqual('visibility-off');
  });
});
