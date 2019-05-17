import React from 'react';
import { Font } from 'expo';
import { I18nextProvider } from 'react-i18next';
import { Provider as PaperProvider } from 'react-native-paper';
import Navigator from './src/navigation/Navigator';
import i18n from './src/i18n/i18n';
import THEME from './src/styles/theme';

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
          { fontLoaded ? <Navigator /> : null }
        </PaperProvider>
      </I18nextProvider>
    );
  }
}

export default App;
