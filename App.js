import { createAppContainer, createStackNavigator } from 'react-navigation';
import CreateOldPassword from './src/navigation/screens/CreateOldPassword';
import FlowScreen from './src/navigation/screens/FlowScreen';
import InfoScreen from './src/navigation/screens/InfoScreen';

const RootStack = createStackNavigator({
  OldPassword: { screen: CreateOldPassword },
  Info: { screen: InfoScreen },
  FlowScreen: { screen: FlowScreen },
},
{
  initialRouteName: 'FlowScreen',
});

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
