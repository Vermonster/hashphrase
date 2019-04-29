import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Font } from 'expo';
import { I18nextProvider } from 'react-i18next';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import i18n from './src/navigation/i18n/i18n';
import CreatePassword from './src/navigation/screens/CreatePassword';
import TipsPage from './src/navigation/screens/TipsPage';
import PolicyPage from './src/navigation/screens/PolicyPage';
import { colors } from './src/styles/base';

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
    PasswordScreen: { screen: CreatePassword },
    TipsPage: { screen: TipsPage },
    PolicyPage: { screen: PolicyPage },
  },
  {
    initialRouteName: 'PasswordScreen',
    headerLayoutPreset: 'left',
    headerBackTitleVisible: true,
    cardShadowEnabled: false,
    defaultNavigationOptions: {
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0.8,
        borderBottomWidth: 0,
        shadowColor: colors.tipsPageBorder,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 3 },
      },
    },
  },
);

const AppContainer = createAppContainer(AppStackNavigator);

class App extends React.Component {
  componentDidMount() {
    Font.loadAsync({
      'lato-regular': require('./assets/fonts/Lato-Regular.ttf'),
      'lato-bold': require('./assets/fonts/Lato-Bold.ttf'),
    });
  }

  render() {
    return (
      <I18nextProvider i18n={i18n}>
        <PaperProvider theme={theme}>
          <AppContainer />
        </PaperProvider>
      </I18nextProvider>
    );
  }
}


export default App;
