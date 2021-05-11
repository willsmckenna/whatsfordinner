import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchPage from './src/screens/SearchPage';
import LoginPage from './src/screens/LoginPage'


const navigator = createStackNavigator(
  {
    Search: SearchPage,
    Login: LoginPage
  },
  {
    initialRouteParams: 'Home',
    defaultNavigationOptions: {
      title: "Whats For Dinner?",
    },
  }
);
export default createAppContainer(navigator);



