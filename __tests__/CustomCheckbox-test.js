import React from 'react';
import { shallow } from 'enzyme';
import CustomCheckbox from '../src/components/CustomCheckbox';

describe('<CustomCheckbox />', () => {
  let wrapper;
  beforeEach(() => {
    const mockFn = jest.fn();
    wrapper = shallow(
      <CustomCheckbox
        testID="clear-clipboard"
        status={false}
        closeModal={mockFn}
      />,
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('only shows checkmark when status is true', () => {
    expect(wrapper.find('Icon')).toHaveLength(0);
    wrapper.setProps({ status: true });
    expect(wrapper.find('Icon')).toHaveLength(1);
  });
});
