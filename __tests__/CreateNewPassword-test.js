import React from 'react';
import { shallow } from 'enzyme';
import { View } from 'react-native';
import { Appbar } from 'react-native-paper';
import CreateNewPassword from '../src/navigation/screens/CreateNewPassword';
import PasswordGenerator from '../components/PasswordGenerator';

describe('/CreateNewPassword />', () => {
  it('should render the same snapshot', () => {
    const wrapper = shallow(<CreateNewPassword />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should contain all of the required components', () => {
    const wrapper = shallow(<CreateNewPassword />);
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
    const wrapper = shallow(<CreateNewPassword />);
    const instance = wrapper.instance();
    expect(wrapper.state().showCopy).toEqual(false);
    instance.showNotification();
    expect(wrapper.state().showCopy).toEqual(true);
  });
});
