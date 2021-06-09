// Library
import * as Sentry from 'sentry-expo';
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
import CustomNavigationBar from './src/components/CustomNavigationBar';
import UserProfile from './src/screens/UserProfile';
import ProfileAdd from './src/screens/ProfileAdd';
import { DefaultTheme, Provider } from 'react-native-paper';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import { withAuthenticator } from 'aws-amplify-react-native'

library.add(faThumbsUp, faThumbsDown);

const Stack = createStackNavigator();

Sentry.init({
  dsn: 'https://50ec0a5c9651406483c890a20a738a49@o741886.ingest.sentry.io/5786764',
  enableInExpoDevelopment: true,
  debug: true, // Sentry will try to print out useful debugging information if something goes wrong with sending an event. Set this to `false` in production.
});

function App() {
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
          <Stack.Screen name="UserProfilePage" component={UserProfile}/>
          <Stack.Screen name="ProfileAdd" component={ProfileAdd}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default withAuthenticator(App)