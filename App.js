// Library
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// Components
import SearchPage from './src/screens/SearchPage';
import LoginPage from './src/screens/LoginPage';
import RestaurantProfile from './src/screens/RestaurantProfile';
import ResultsList from './src/screens/ResultsList';
import RestaurantDetail from './src/screens/RestaurantDetail';

const navigator = createStackNavigator(
  {
    Search: SearchPage,
    Login: LoginPage,
    Restaurant: RestaurantProfile,
    DetailPage: RestaurantDetail,
    Results: ResultsList
  },
  {
    initialRouteParams: 'Home',
    defaultNavigationOptions: {
      title: "Whats For Dinner?",
    },
  }
);

export default createAppContainer(navigator);



