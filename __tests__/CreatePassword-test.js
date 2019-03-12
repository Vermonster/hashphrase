import React from 'react';
import { shallow } from 'enzyme';
import CreatePassword from '../src/navigation/screens/CreatePassword';

describe('CreatePassword />', () => {
  const navigation = { getParam: jest.fn() };
  const wrapper = shallow(<CreatePassword navigation={navigation} />);

  it('should render the same snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should toggle state when showNotification is called', () => {
    const instance = wrapper.instance();
    expect(wrapper.state().showCopy).toEqual(false);
    instance.showNotification();
    expect(wrapper.state().showCopy).toEqual(true);
  });
});
