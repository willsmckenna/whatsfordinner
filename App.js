import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchPage from './src/screens/SearchPage';
import TestSignUpPage from './src/firebase/TestSignUpPage';

const navigator = createStackNavigator(
  {
    Search: SearchPage,
    SignUp: TestSignUpPage,
  },
  {
    initialRouteParams: 'SignUp',
    defaultNavigationOptions: {
      title: "Whats For Dinner?",
    },
  }
);
export default createAppContainer(navigator);



