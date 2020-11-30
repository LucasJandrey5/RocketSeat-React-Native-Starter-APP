/* eslint-disable prettier/prettier */
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import './config/StatusBarConfig';

import Main from './pages/main';
import SecondPage from './pages/SecondPage';
import product from './pages/product';

const RootStack = createStackNavigator({
  homePage: Main,
  secondPage: SecondPage,
  product: product,
}, {
  initialRouteName: 'homePage',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
});
const AppContainer = createAppContainer(RootStack);

export default AppContainer;
