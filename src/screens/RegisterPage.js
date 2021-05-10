import React , {Component} from 'react';
import { Text, TextInput, Button, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class RegisterPage extends Component {
    render() {
      return (
        <View style = {styles.container}>
            <View style = {styles.registerform}>
            <TextInput style = {style.input}
              placeholder = "Username"
              returnKeyType = "next"
              onSubmitEditing = {() => this.emailInput.focus()}
            />
            <TextInput style = {styles.input}
              placeholder = "Email"
              returnKeyType = "next"
              onSubmitEditing = {() => this.passwordInput.focus()}
              keyboardType = "email-address"
              autoCapitalize = "none"
              autoCorrect = {false}
              ref = {(input) => this.emailInput = input}
            />
            <TextInput style = {style.input}
              placeholder = "Password"
              returnKeyType = "go"
              secureTextEntry
              ref ={(input) => this.passwordInput = input}       
            />
            <TouchableOpacity style = {styles.buttoncontainer} onPress = {() => this.props.navigation.navigate('Login')}>
              <Text style = {styles.buttonText}> Sign Up </Text>
            </TouchableOpacity>
            </View>
        </View>   
      );
    }
}
