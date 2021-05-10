import React , {Component} from 'react';
import { Text, TextInput, Button, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import RegisterPage from 'src/screens/RegisterPage.js';
import HomePage from 'src/screens/HomePage.js';

export class LoginPage extends Component {
    render() {
      return (
        <View style = {styles.container}>
          <View style = {style.textfields}>
            <TextInput style = {style.input}
              placeholder = "username"
              returnKeyType = "next"
              onSubmitEditing = {() => this.passwordInput.focus()}
              keyboardType = "email-address"
              autoCapitalize = "none"
              autoCorrect = {false}
            />
            <TextInput style = {styles.input}
              placeholder = "password"
              returnKeyType = "go"
              secureTextEntry
              ref ={(input) => this.passwordInput = input}
            />
            <TouchableOpacity style = {styles.buttoncontainer} onPress = {() => this.props.navigation.navigate('Home')}>
              <Text style = {styles.buttonText}> Login </Text>
            </TouchableOpacity>
            <Button
              title = "Register Here"
              color = "#1abc9c"
              onPress = {() => this.props.navigation.navigate('Register')}
            />
          </View>
        </View>
      )
    }
  }

  export default class App extends Component {
      render() {
          return (
              <AppStackNavigator />
          );
      }
  }

  const AppStackNavigator = createStackNavigator ({
      Login : LoginPage,
      Register : RegisterPage,
      Home : HomePage
  });