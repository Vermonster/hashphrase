import { createAppContainer, createStackNavigator } from 'react-navigation';
import CreatePasswordScreen from './src/navigation/screens/CreatePasswordScreen';
import InfoScreen from './src/navigation/screens/InfoScreen';

const RootStack = createStackNavigator({
  Home: CreatePasswordScreen,
  Info: InfoScreen,
},
{
  initialRouteName: 'Home',
});

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
