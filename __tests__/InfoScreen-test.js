import React from 'react';
import { shallow } from 'enzyme';
import { View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import InfoScreen from '../src/navigation/screens/InfoScreen';

// currently a placeholder component for future expert tips/info screen
describe('<InfoScreen />', () => {
  it('should render the same snapshot', () => {
    const wrapper = shallow(<InfoScreen />);
    expect(wrapper.dive()).toMatchSnapshot();
  });

  it('should render the the correct components', () => {
    const requiredComponents = [View, Text, Card];
    const wrapper = shallow(<InfoScreen />);
    requiredComponents.forEach((component) => {
      expect(wrapper.find(component)).toHaveLength(1);
    });
  });
});
