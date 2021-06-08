import React, { useState } from 'react';
import { Text, TextInput, Button, View, StyleSheet, TouchableOpacity } from 'react-native';
import { createUser } from '../graphql/mutations';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import Auth from '@aws-amplify/auth';

const UserProfile = ({ navigation }) => {
    const [useDetail, setUseDetail] = useState({});

    const handleSubmit = async () => {
        try {
            const { id } = await Auth.currentUserInfo();
            console.log('Returned info: ', id)
            // also put current user's id in table- change to getting email address for look up. 
            setUseDetail({ ...useDetail, userId: id });
            //update table in Amplify api
            await API.graphql(graphqlOperation(createUser, { input: useDetail }));
            //bring back to home/search page
            navigation.navigate('FoodSelect');
        } catch (err) {
            console.log('error creating profile page:', err);
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>Your Profile page is empty.</Text>

            <Text> User Name </Text>
            <TextInput
                style={styles.input}
                placeholder='e.g. St. Paris'
                onChangeText={name => setUseDetail({ ...useDetail, name })}
            />
            <Text> Address </Text>
            <TextInput
                style={styles.input}
                placeholder='e.g. 401 N Central, Chicago, Il 60656'
                onChangeText={address => setUseDetail({ ...useDetail, address })}
            />
            <Text> Telephone </Text>
            <TextInput
                style={styles.input}
                placeholder='e.g. 703-996-7185'
                onChangeText={telephone => setUseDetail({ ...useDetail, telephone })}
            />

            <TouchableOpacity
                style={styles.submit}
                onPress={handleSubmit}>
                <Text style={styles.submitButtonText}>Next</Text>

            </TouchableOpacity>
        </View>
    );
}
    const styles = StyleSheet.create({
        headingText: {
            position: "relative",
            textAlign: "center",
            paddingTop: 20,
            bottom: 20,
            fontSize: 24,
            fontWeight: "bold",
            marginHorizontal: 15,
        },
        container: {
            fontSize: 16,
            marginHorizontal: 15,
            marginTop: 15,
            marginBottom: 15,
        },
        input: {
            borderWidth: 1,
            borderColor: '#0777',
            padding: 8,
            margin: 10,
            width: 200,
        },
        submit: {
            width: "100%",
            backgroundColor: "#fc5185",
            borderRadius: 20,
            padding: 10,
            alignItems: "center",
            marginTop: 40
        }
    });

export default UserProfile;