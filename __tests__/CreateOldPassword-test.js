import React from 'react';
import { shallow } from 'enzyme';
import { View } from 'react-native';
import { Appbar } from 'react-native-paper';
import CreateOldPassword from '../src/navigation/screens/CreateOldPassword';
import PasswordGenerator from '../components/PasswordGenerator';

describe('<CreateOldPassword />', () => {
  it('should render the same snapshot', () => {
    const wrapper = shallow(<CreateOldPassword />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should contain all of the required components', () => {
    const wrapper = shallow(<CreateOldPassword />);
    const requiredComponents = [
      Appbar.Header,
      Appbar.Content,
      View,
      PasswordGenerator,
    ];

    requiredComponents.forEach((component) => {
      expect(wrapper.find(component)).toHaveLength(1);
    });
  });

  it('should toggle state when showNotification is called', () => {
    const wrapper = shallow(<CreateOldPassword />);
    const instance = wrapper.instance();
    expect(wrapper.state().showCopy).toEqual(false);
    instance.showNotification();
    expect(wrapper.state().showCopy).toEqual(true);
  });
});
