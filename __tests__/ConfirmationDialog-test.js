import React from 'react';
import { shallow } from 'enzyme';
import { Checkbox } from 'react-native-paper';
import ConfirmationDialog from '../src/components/ConfirmationDialog';

describe('<ConfirmationDialog />', () => {
  const wrapper = shallow(<ConfirmationDialog clearClipboard={false} />);

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update the state when clear checkbox is clicked', () => {
    wrapper.find(Checkbox).simulate('press');
    expect(wrapper.state('clearClipboard')).toBe(true);
  });
});
