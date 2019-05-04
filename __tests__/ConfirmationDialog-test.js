import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { TestConfirmationDialog as ConfirmationDialog } from '../src/components/ConfirmationDialog';

describe('<ConfirmationDialog />', () => {
  let wrapper;
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
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should change obscured state when hide/show button clicked', () => {
    const instance = wrapper.instance();
    expect(instance.state.obscured).toBe(true);
    wrapper.findWhere(node => node.prop('testID') === 'hide-show-button').simulate('press');
    expect(instance.state.obscured).toBe(false);
  });

  it('should reset obscured state when start over button clicked', () => {
    const instance = wrapper.instance();
    instance.state.obscured = false;
    expect(instance.state.obscured).toBe(false);
    wrapper.findWhere(node => node.prop('testID') === 'start-over-button').simulate('press');
    expect(instance.state.obscured).toBe(true);
  });

  it('should render initially with icon visibility-off', () => {
    const mockFn = jest.fn();
    const instance = renderer.create(
      <ConfirmationDialog
        visible
        closeModal={mockFn}
        t={key => key}
        generatedPassword="12345678"
        clearForm={mockFn}
        resetToggleSwitch={mockFn}
      />,
    );

    const textInstance = instance.root.findByProps({
      testID: 'hide-show-button',
    });

    expect(textInstance.props.icon).toEqual('visibility-off');
  });
});
