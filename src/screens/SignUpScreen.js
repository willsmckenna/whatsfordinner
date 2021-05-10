import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native'
import CheckBox from '@react-native-community/checkbox';

class Inputs extends Component {
    state = {
        name: '',
        lastName: " ",
        email: '',
        password: ''
    }
    handleName = (text) => {
        this.setState({name: text})
    }
    handleLastName = (text) => {
        this.setState({ lastName: text })
    }
    handleEmail = (text) => {
        this.setState({ email: text })
    }
    handlePassword = (text) => {
        this.setState({ password: text })
    }
    login = (name, lastName, email, pass) => {
        alert(`name: ` + name + ` ` + lastName, `email: ` + email, ` password: ` + pass)
    }


    render() {
        return (

            <View style={styles.container}>
                <Text style={styles.Header} > Please fill out this form to start your account</Text>
                <ScrollView style={styles.scrollView}>
                   
                
                <View>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ flex: 1 }}>
                            <TextInput style={styles.input}
                                underlineColorAndroid="transparent"
                                placeholder="First Name"
                                placeholderTextColor="#9a73ef"
                                autoCapitalize="none"
                                onChangeText={this.handleName}
                                />
                            {/*<TextInput placeholder="Test" style={{ justifyContent: 'flex-start', }}/>*/}
                        </View>
                        <View style={{ flex: 1 }}>
                            <TextInput style={styles.input}
                                underlineColorAndroid="transparent"
                                placeholder="Last Name"
                                placeholderTextColor="#9a73ef"
                                autoCapitalize="none"
                                onChangeText={this.handleLastName}
                            />

                            {/* <TextInput placeholder="Test" style={{ justifyContent: 'flex-end', }} />*/}
                        </View>
                    </View>
                </View>

                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Email"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handleEmail} />

                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Password"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handlePassword} />

                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Confirm Password"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handlePassword} />

                <TouchableOpacity
                        /* style={styles.submitButton}
                    onPress={
                        () => this.login(this.state.name, this.state.lastName, this.state.email, this.state.password)
                    }>
                    <Text style={styles.submitButtonText}> Submit </Text>*/
                        style={styles.submitButton}
                        onPress={() => this.props.navigation.navigate('FoodSelect')}>
                        <Text style={styles.submitButtonText}>Next</Text>
                        
                    </TouchableOpacity>
                </ScrollView>

                </View>
           
        )
    }
}
export default Inputs

const styles = StyleSheet.create({
    container: {
        paddingTop: 23
    },
    Header: {
        alignItems: "center",
        color: "#fc5185",
        margin: 20,
        height: 20,
    },
    scrollView: {
        backgroundColor: 'white',
        marginHorizontal: 20,
    },
    nameInput: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    submitButton: {
        width: "100%",
        backgroundColor: "#fc5185",
        borderRadius: 20,
        padding: 10,
        alignItems: "center",
        marginTop: 40
    },
    submitButtonText: {
        color: 'white'
    }
})