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

<<<<<<< HEAD
export default createAppContainer(navigator);
=======
export default createAppContainer(navigator);
>>>>>>> 4c236e257214d63d2a4d15632d748416e0ef60a4
