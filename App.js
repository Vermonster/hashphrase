import { createAppContainer, createStackNavigator } from 'react-navigation';
import CreateOldPassword from './src/navigation/screens/CreateOldPassword';
import CreateNewPassword from './src/navigation/screens/CreateNewPassword';
import FlowScreen from './src/navigation/screens/FlowScreen';
import InfoScreen from './src/navigation/screens/InfoScreen';

const RootStack = createStackNavigator({
  OldPassword: { screen: CreateOldPassword },
  NewPassword: { screen: CreateNewPassword },
  Info: { screen: InfoScreen },
  FlowScreen: { screen: FlowScreen },
},
{
  initialRouteName: 'FlowScreen',
});

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
