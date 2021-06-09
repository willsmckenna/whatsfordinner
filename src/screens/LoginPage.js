import React from 'react';
import { StatusBar, Button, StyleSheet, View } from 'react-native';
import Amplify from '@aws-amplify/core';
import { Authenticator } from 'aws-amplify-react-native';
import awsconfig from '../aws-exports';
import Auth from '@aws-amplify/auth';
Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: true,
  },
});
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FF9900',
    alignItems: 'center',
    padding: 16,
  }
});
const LoginPage = () => {
  const [signInUser, setSignInUser] = React.useState(false);
  const handleDeleteCognitoUser = async () => {
    const user = await Auth.currentAuthenticatedUser();
    user.deleteUser((error, data) => {
      if (error) {
        throw error;
      }
      Auth.signOut({ global: true });
    });
  };
  const handleAuthStateChange = state => {
    if (state === 'signedIn') {
      setSignInUser(true);
    } else {
      setSignInUser(false);
    }
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Authenticator usernameAttributes="email" onStateChange={handleAuthStateChange}>
        {signInUser ? (
          <View style={styles.button}>
            <Button title="Delete Profile" color="#fff" onPress={handleDeleteCognitoUser} />
          </View>
        ) : (
          <></>
        )}
      </Authenticator>
    </>
  );
};
export default LoginPage;