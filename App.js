import { createAppContainer, createStackNavigator } from 'react-navigation';
<<<<<<< HEAD
import CreatePassword from './src/navigation/screens/CreatePassword';
=======
import CreateOldPassword from './src/navigation/screens/CreateOldPassword';
import FlowScreen from './src/navigation/screens/FlowScreen';
>>>>>>> delete createNewPassword components because navigation will provide different states, not different components
import InfoScreen from './src/navigation/screens/InfoScreen';
import FlowScreen from './src/navigation/screens/FlowScreen';

const RootStack = createStackNavigator({
<<<<<<< HEAD
  PasswordScreen: { screen: CreatePassword },
  InfoScreen: { screen: InfoScreen },
=======
  OldPassword: { screen: CreateOldPassword },
  NewPassword: { screen: CreateOldPassword },
  Info: { screen: InfoScreen },
>>>>>>> delete createNewPassword components because navigation will provide different states, not different components
  FlowScreen: { screen: FlowScreen },
},
{
  initialRouteName: 'FlowScreen',
});

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
