import React from 'react';
import { shallow } from 'enzyme';
import { Checkbox, Button } from 'react-native-paper';
import { TestConfirmationDialog as ConfirmationDialog } from '../src/components/ConfirmationDialog';

describe('<ConfirmationDialog />', () => {
  let wrapper;
  beforeEach(() => {
    const mockFn = jest.fn();
    wrapper = shallow(
      <ConfirmationDialog
        clearClipboard={false}
        closeModal={mockFn}
      />,
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update the state when clear checkbox is clicked', () => {
    wrapper.find(Checkbox).simulate('press');
    expect(wrapper.state('clearClipboard')).toBe(true);
  });

  it('should clear clipboard when the clear clipboard checkbox is clicked', () => {
    wrapper.setState({ clearClipboard: true });
    const spy = jest.spyOn(wrapper.instance(), 'handleClearClipboard');
    wrapper.find(Button).simulate('press');
    expect(spy).toBeCalled();
  });
});
