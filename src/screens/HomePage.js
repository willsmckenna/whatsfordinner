import React , {Component} from 'react';
import { Text, TextInput, Button, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class HomePage extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text style = {styles.text}> This is HOMEPAGE</Text>
            </View>
        );
    }
}