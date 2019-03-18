import React from 'react';
import { shallow } from 'enzyme';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { Checkbox, Button } from 'react-native-paper';
<<<<<<< HEAD
import ConfirmationDialog from '../src/components/ConfirmationDialog';
>>>>>>> switch imports to unconnected i18n components
=======
>>>>>>> namespace translations by component
=======
>>>>>>> use testIDs instead of classnames and update snapshots
import { TestConfirmationDialog as ConfirmationDialog } from '../src/components/ConfirmationDialog';

describe('<ConfirmationDialog />', () => {
  let wrapper;
  beforeEach(() => {
    const mockFn = jest.fn();
    wrapper = shallow(
      <ConfirmationDialog
        clearClipboard={false}
        visible
        closeModal={mockFn}
        t={key => key}
      />,
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update the state when clear checkbox is clicked', () => {
<<<<<<< HEAD
<<<<<<< HEAD
    wrapper.findWhere(node => node.prop('testID') === 'new-password').simulate('press');
=======
    wrapper.find('.new-password').simulate('press');
>>>>>>> wip i18n
=======
    wrapper.findWhere(node => node.prop('testID') === 'new-password').simulate('press');
>>>>>>> use testIDs instead of classnames and update snapshots
    expect(wrapper.state('clearClipboard')).toBe(true);
  });

  it('should clear clipboard when the clear clipboard checkbox is clicked', () => {
    wrapper.setState({ clearClipboard: true });
    const spy = jest.spyOn(wrapper.instance(), 'handleClearClipboard');
<<<<<<< HEAD
<<<<<<< HEAD
    wrapper.findWhere(node => node.prop('testID') === 'submit-form').simulate('press');
=======
    wrapper.find('.submit-form').simulate('press');
>>>>>>> wip i18n
=======
    wrapper.findWhere(node => node.prop('testID') === 'submit-form').simulate('press');
>>>>>>> use testIDs instead of classnames and update snapshots
    expect(spy).toBeCalled();
  });
});
