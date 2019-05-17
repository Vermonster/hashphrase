import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Font } from 'expo';
import { I18nextProvider } from 'react-i18next';
import { Provider as PaperProvider } from 'react-native-paper';
import i18n from './src/navigation/i18n/i18n';
import CreatePassword from './src/navigation/screens/CreatePassword';
import TipsPage from './src/navigation/screens/TipsPage';
import PolicyPage from './src/navigation/screens/PolicyPage';
import { colors } from './src/styles/base';
import THEME from './src/styles/theme';

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
  state = {
    fontLoaded: false,
  }

  async componentDidMount() {
    await Font.loadAsync({
      /* eslint-disable */
      'lato-regular': require('./assets/fonts/Lato-Regular.ttf'),
      'lato-bold': require('./assets/fonts/Lato-Bold.ttf'),
      /* eslint-enable */
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    const { fontLoaded } = this.state;
    return (
      <I18nextProvider i18n={i18n}>
        <PaperProvider theme={THEME}>
          { fontLoaded ? <AppContainer /> : null }
        </PaperProvider>
      </I18nextProvider>
    );
  }
}


export default App;
