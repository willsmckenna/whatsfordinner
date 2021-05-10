import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { firebase } from './config';

const TestSignUpPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [preferences, setPreferences] = useState('');

    const onRegisterPress = () => {
        const preferencesList = preferences.split(',');
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const data = {
                    id: uid,
                    email,
                    preferences: preferencesList
                }
                console.log(data);
                const usersRef = firebase.firestore().collection('users');
                usersRef
                    .doc(uid)
                    .set(data)
                    .catch((error) => {
                        alert(error)
                    });
            })
            .catch((error) => {
                alert(error)
        });
    }

    return (
        <View>
            <TextInput
                placeholder='Full Name'
                value={username}
                onChangeText={(text) => setUsername(text)}
                autoCapitalize='none'
            />
            <TextInput
                placeholder='email address'
                value={email}
                onChangeText={(text) => setEmail(text)}
                autoCapitalize='none'
            />
            <TextInput
                placeholder='Password'
                value={password}
                onChangeText={(text) => setPassword(text)}
                autoCapitalize='none'
            />
            <TextInput
                placeholder='Enter favorite food(s):'
                value={preferences}
                onChangeText={(text) => setPreferences(text)}
                autoCapitalize='none'
            />
            <TouchableOpacity
                onPress={() => onRegisterPress()}
                >
                <Text>Create user account</Text>
            </TouchableOpacity>

        </View>
    );
};

export default TestSignUpPage;