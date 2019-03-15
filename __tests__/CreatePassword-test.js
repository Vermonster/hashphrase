import React from 'react';
import { shallow } from 'enzyme';
import { TestCreatePassword as CreatePassword } from '../src/navigation/screens/CreatePassword';

describe('<CreatePassword />', () => {
  const navigation = { getParam: jest.fn() };
  const wrapper = shallow(
    <CreatePassword
      navigation={navigation}
      isNewPassword={false}
      t={key => key}
    />,
  );

  it('should render the same snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update the component state when handleToggleSwitch is called', () => {
    wrapper.instance().handleToggleSwitch();
    expect(wrapper.state('isNewPassword')).toBe(true);
  });
});
