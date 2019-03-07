import { createAppContainer, createStackNavigator } from 'react-navigation';
import CreatePassword from './src/navigation/screens/CreatePassword';
import InfoScreen from './src/navigation/screens/InfoScreen';

const RootStack = createStackNavigator({
  CreatePassword: { screen: CreatePassword },
  Info: { screen: InfoScreen }
},
{
  initialRouteName: 'CreatePassword',
});

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
