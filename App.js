import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
<<<<<<< HEAD
<<<<<<< HEAD
import { I18nextProvider } from 'react-i18next';
import i18n from './src/navigation/i18n/i18n';
=======
>>>>>>> delete extra files from rebase
=======
import { I18nextProvider, withTranslation } from 'react-i18next';
import i18n from './src/navigation/i18n/i18n';
>>>>>>> wip i18n
import CreatePassword from './src/navigation/screens/CreatePassword';
import InfoScreen from './src/navigation/screens/InfoScreen';

<<<<<<< HEAD
<<<<<<< HEAD
const AppStackNavigator = createStackNavigator({
  PasswordScreen: { screen: CreatePassword },
  InfoScreen: { screen: InfoScreen },
  initialRouteName: 'PasswordScreen',
=======
const RootStack = createStackNavigator({
=======
const AppStackNavigator = createStackNavigator({
>>>>>>> wip i18n
  PasswordScreen: { screen: CreatePassword },
  InfoScreen: { screen: InfoScreen },
  FlowScreen: { screen: FlowScreen },
},
{
  initialRouteName: 'FlowScreen',
>>>>>>> delete extra files from rebase
});

const AppContainer = createAppContainer(AppStackNavigator);
<<<<<<< HEAD

const App = () => (
  <I18nextProvider i18n={i18n}>
    <AppContainer />
  </I18nextProvider>
);

export default App;
=======

const WrappedStack = ({ t }) => (<AppContainer screenProps={{ t }} />);

// const ReloadAppOnLanguageChange = withNamespaces()(WrappedStack);

const App = () => (
  // <I18nextProvider i18n={i18n}>
    <WrappedStack />
  // </I18nextProvider>
);


// export default withTranslation()(App);
export default (App);
>>>>>>> wip i18n
