import React from 'react';
import { shallow } from 'enzyme';
import { View } from 'react-native';
import { Appbar } from 'react-native-paper';
import App from '../App';
import PasswordGenerator from '../components/PasswordGenerator';

describe('<App />', () => {
  it('should render the same snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should contain all of the required components', () => {
    const wrapper = shallow(<App />);
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

  it('should toggle state when showNotification() called', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    expect(wrapper.state().showCopy).toEqual(false);
    instance.showNotification();
    expect(wrapper.state().showCopy).toEqual(true);
  });
});
