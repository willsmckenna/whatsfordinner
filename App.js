import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LandingPage from './src/screens/LandingPage';


const navigator = createStackNavigator(
  {
    Landing: LandingPage,
  },
  {
    initialRouteParams: 'Home',
    defaultNavigationOptions: {
      title: "Whats For Dinner?",
    },
  }
);
export default createAppContainer(navigator);



