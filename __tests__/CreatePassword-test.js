import React from 'react';
import { shallow } from 'enzyme';
import CreatePassword from '../src/navigation/screens/CreatePassword';

describe('<CreatePassword />', () => {
  const navigation = { getParam: jest.fn() };
  const wrapper = shallow(<CreatePassword navigation={navigation} isNewPassword={false} />);

  it('should render the same snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update the component state when handleToggleSwitch is called', () => {
    wrapper.instance().handleToggleSwitch();
    expect(wrapper.state('isNewPassword')).toBe(true);
  });
});
