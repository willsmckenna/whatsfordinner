// Library
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// Components
import SearchPage from './src/screens/SearchPage';
import LoginPage from './src/screens/LoginPage'
import RestaurantProfile from './src/screens/RestaurantProfile'


const navigator = createStackNavigator(
  {
    Search: SearchPage,
    Login: LoginPage,
    Restaurant: RestaurantProfile,
  },
  {
    initialRouteParams: 'Home',
    defaultNavigationOptions: {
      title: "Whats For Dinner?",
    },
  }
);
export default createAppContainer(navigator);



