import React from 'react';
import { shallow } from 'enzyme';
import ConfirmationDialog from '../src/components/ConfirmationDialog';

describe('<ConfirmationDialog />', () => {
  const wrapper = shallow(<ConfirmationDialog />);

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
