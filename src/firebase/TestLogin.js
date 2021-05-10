import React, { useState } from 'react';
import { TextInput, Text, View, TouchableOpacity } from 'react-native';
import { firebase } from './config';

const TestLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onRegisterPress = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .get()
                    .then(firestoreDocument =>{
                        if (!firestoreDocument.exists){
                            alert("User does not exist anymore")
                            return;
                        }
                        const user = firestoreDocument.data()
                        alert(user.username + "," + user.email + "," + user.preferences);
                        //navigation.navigate('Search', {user})
                    })
                    .catch(error => {
                        alert(error)
                    });
            })
            .catch(error => {
                alert(error)
            });
    };

    return (
        <View>
              <TextInput
                placeholder='email address'
                value={email}
                onChangeText={(text) => setEmail(text)}
                autoCapitalize='none'
            />
            <TextInput
                placeholder='password'
                value={password}
                onChangeText={(text) => setPassword(text)}
                autoCapitalize='none'
            />
            <TouchableOpacity
                onPress={() => onRegisterPress()}
                >
                <Text>Create user account</Text>
            </TouchableOpacity>
        </View>
    );
}

export default TestLogin;