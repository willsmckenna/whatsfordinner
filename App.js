// Library
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// Components
import SearchPage from './src/screens/SearchPage';
import LoginPage from './src/screens/LoginPage';
import RestaurantSignUp from './src/screens/RestaurantSignUp';
import RestaurantProfile from './src/screens/RestaurantProfile';


const navigator = createStackNavigator(
  {
    Search: SearchPage,
    Login: LoginPage,
    ResSignUp: RestaurantSignUp,
    ResProfile: RestaurantProfile
  },
  {
    initialRouteParams: 'Home',
    defaultNavigationOptions: {
      title: "Whats For Dinner?",
    },
  }
);
export default createAppContainer(navigator);



