import React from 'react';
import { shallow } from 'enzyme';
import { View } from 'react-native';
import { Appbar } from 'react-native-paper';
import CreatePasswordScreen from '../src/navigation/screens/CreatePasswordScreen';
import PasswordGenerator from '../components/PasswordGenerator';

describe('<CreatePasswordScreen />', () => {
  it('should render the same snapshot', () => {
    const wrapper = shallow(<CreatePasswordScreen />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should contain all of the required components', () => {
    const wrapper = shallow(<CreatePasswordScreen />);
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
    const wrapper = shallow(<CreatePasswordScreen />);
    const instance = wrapper.instance();
    expect(wrapper.state().showCopy).toEqual(false);
    instance.showNotification();
    expect(wrapper.state().showCopy).toEqual(true);
  });
});
