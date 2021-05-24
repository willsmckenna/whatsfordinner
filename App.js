// Library
import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Components
import SearchPage from './src/screens/SearchPage';
import LoginPage from './src/screens/LoginPage';
import RestaurantSignUp from './src/screens/RestaurantSignUp';
import RestaurantProfile from './src/screens/RestaurantProfile';
import CustomNavigationBar from './src/components/CustomNavigationBar';
import { Provider } from 'react-native-paper';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Home"
          screenOptions={{
              header: (props) => <CustomNavigationBar {...props} />
          }}
        >
          <Stack.Screen name="Home" component={SearchPage} />
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="ResSignUp" component={RestaurantSignUp} />
          <Stack.Screen name="ResProfile" component={RestaurantProfile} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
/*
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
      header: (props) => (
        <CustomNavigationBar {...props}/>
      )
    },
  }
);
export default createAppContainer(navigator);

*/

