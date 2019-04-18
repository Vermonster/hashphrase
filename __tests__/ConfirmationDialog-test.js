import React from 'react';
import { shallow } from 'enzyme';
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
        showSnackbar={mockFn}
        generatedPassword="12345678"
        clearForm={mockFn}
      />,
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should clear clipboard when the clear clipboard action button is clicked', () => {
    const spy = jest.spyOn(wrapper.instance(), 'handleClearClipboard');
    wrapper.findWhere(node => node.prop('testID') === 'submit-form').simulate('press');
    expect(spy).toBeCalled();
  });
});
