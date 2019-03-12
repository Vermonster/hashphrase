import { createAppContainer, createStackNavigator } from 'react-navigation';
import CreatePassword from './src/navigation/screens/CreatePassword';
import InfoScreen from './src/navigation/screens/InfoScreen';
import FlowScreen from './src/navigation/screens/FlowScreen';

const RootStack = createStackNavigator({
  PasswordScreen: { screen: CreatePassword },
  InfoScreen: { screen: InfoScreen },
  FlowScreen: { screen: FlowScreen },
},
{
  initialRouteName: 'FlowScreen',
});

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
