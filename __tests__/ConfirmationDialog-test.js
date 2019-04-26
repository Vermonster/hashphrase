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
        generatedPassword="12345678"
        clearForm={mockFn}
      />,
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
