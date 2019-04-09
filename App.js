import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { I18nextProvider } from 'react-i18next';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import i18n from './src/navigation/i18n/i18n';
import CreatePassword from './src/navigation/screens/CreatePassword';
import TipsPage from './src/navigation/screens/TipsPage';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#E07926',
    accent: '#212A59',
    error: '#DB4437',
    text: '#444545',
    placeholder: '#949494',
    disabled: '#212A59',
  },
};

const AppStackNavigator = createStackNavigator(
  {
    PasswordScreen: {
      screen: CreatePassword,
    },
    TipsPage: { screen: TipsPage },
  },
  {
    initialRouteName: 'PasswordScreen',
    headerLayoutPreset: 'left',
  },
);

const AppContainer = createAppContainer(AppStackNavigator);

const App = () => (
  <I18nextProvider i18n={i18n}>
    <PaperProvider theme={theme}>
      <AppContainer />
    </PaperProvider>
  </I18nextProvider>
);

export default App;
