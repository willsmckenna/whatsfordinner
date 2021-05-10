import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchPage from './src/screens/SearchPage';
import SignUpScreen from './src/screens/SignUpScreen';
import FoodSelectScreen from './src/screens/FoodSelectScreen';


const navigator = createStackNavigator(
  {
        Search: SearchPage,
        SignUp: SignUpScreen,
        FoodSelect: FoodSelectScreen
  },
  {
    initialRouteParams: 'Home',
    defaultNavigationOptions: {
      title: "Whats For Dinner?",
    },
  }
);
export default createAppContainer(navigator);



