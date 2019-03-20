import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { I18nextProvider } from 'react-i18next';
import i18n from './src/navigation/i18n/i18n';
import CreatePassword from './src/navigation/screens/CreatePassword';
import InfoScreen from './src/navigation/screens/InfoScreen';
import TipsPage from './src/navigation/screens/TipsPage';

const AppStackNavigator = createStackNavigator({
  PasswordScreen: { screen: CreatePassword },
  InfoScreen: { screen: InfoScreen },
  TipsPage: { screen: TipsPage },
},
{
  initialRouteName: 'TipsPage',
});

const AppContainer = createAppContainer(AppStackNavigator);

const App = () => (
  <I18nextProvider i18n={i18n}>
    <AppContainer />
  </I18nextProvider>
);

// export default withTranslation()(App);
export default (App);
