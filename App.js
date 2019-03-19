import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { I18nextProvider } from 'react-i18next';
import i18n from './src/navigation/i18n/i18n';
import CreatePassword from './src/navigation/screens/CreatePassword';
import InfoScreen from './src/navigation/screens/InfoScreen';
import FlowScreen from './src/navigation/screens/FlowScreen';

const AppStackNavigator = createStackNavigator({
  PasswordScreen: { screen: CreatePassword },
  InfoScreen: { screen: InfoScreen },
  FlowScreen: { screen: FlowScreen },
},
{
  initialRouteName: 'FlowScreen',
});

const AppContainer = createAppContainer(AppStackNavigator);

const App = () => (
  <I18nextProvider i18n={i18n}>
    <AppContainer />
  </I18nextProvider>
);

export default App;
