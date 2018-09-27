import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Card, Text } from 'react-native-paper';

const InfoScreen = () => (
  <View>
    <Card>
      <Text>Test card and text</Text>
    </Card>
  </View>
);

export default createStackNavigator({
  Info: InfoScreen,
});
