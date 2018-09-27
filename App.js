// import { Platform } from 'react-native'; // use this to specify platform-specific settings
import React from 'react';
import { createStackNavigator } from 'react-navigation';
import CreatePasswordScreen from './src/navigation/screens/CreatePasswordScreen';
import InfoScreen from './src/navigation/screens/InfoScreen';

const RootStack = createStackNavigator({
  Home: CreatePasswordScreen,
  Info: InfoScreen,
},
{
  initialRouteName: 'Home',
});

export default class App extends React.Component {
  render() {
    return <RootStack />
  }
}