import { createAppContainer, createStackNavigator } from 'react-navigation';
import CreatePassword from './screens/CreatePassword';
import TipsPage from './screens/TipsPage';
import PolicyPage from './screens/PolicyPage';
import { colors } from '../styles/base';

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

const Navigator = createAppContainer(AppStackNavigator);
export default Navigator;