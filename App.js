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

// Client ID
//Stbump_8oTuq2efEDya1Fg

//API Key
//3Yco9sGiJ4ZEXsTUpkJ6YAauUWi81QIKmPPZn7VqVjzdUDhARW0P_gH0_QM4DzE1LRTwm_pHGAeFVMwy5oN45lQZ41ft92agK03W0q2kVawGRZIqW_3XqDfX0meHYHYx
