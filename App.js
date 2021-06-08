// Library
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { library } from '@fortawesome/fontawesome-svg-core'

// Components
import SearchPage from './src/screens/SearchPage';
import LoginPage from './src/screens/LoginPage';
import RestaurantSignUp from './src/screens/RestaurantSignUp';
import RestaurantProfile from './src/screens/RestaurantProfile';
import RestaurantDetail from './src/screens/RestaurantDetail';
import LocationPage from './src/screens/LocationPage';
import CustomNavigationBar from './src/components/CustomNavigationBar';
import { DefaultTheme, Provider } from 'react-native-paper';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'

library.add(faThumbsUp, faThumbsDown);

const Stack = createStackNavigator();

export default function App() {
  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#f7f7f7',
      accent: '#f1c40f',
    },
  };

  return (
    <Provider theme={theme}>
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
          <Stack.Screen name="DetailPage" component={RestaurantDetail} />
          <Stack.Screen name="Location" component={LocationPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

