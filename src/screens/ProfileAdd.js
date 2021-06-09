import React, { useState } from 'react';
import { Text, TextInput, Button, View, StyleSheet } from 'react-native';
import { createUserPreferences } from '../graphql/mutations';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import Auth from '@aws-amplify/auth';

const ProfileAdd = ({ navigation }) => {
    const [userDetail, setUserDetail] = useState({});

    const handleSubmit = async () => {
        try {
            const { id, attributes: { email }} = await Auth.currentUserInfo();
            // also put current user's id in table- change to getting email address for look up. 
            setUserDetail({...userDetail, userId: id, username: email});
            console.log(userDetail);
            //update table in Amplify api
            await API.graphql(graphqlOperation(createUserPreferences, {input: userDetail}));
            //bring back to home/search page
            navigation.navigate('UserProfilePage');
        } catch (err) {
            console.log('error creating restaurant:', err);
        }
    }

    const parseFoodRes = (prefs) => {
        prefsList = prefs.split(',');
        setUserDetail({...userDetail, foodPreferences: prefsList})
    }
    
      return (
        <View style = {styles.container}>
            <Text style={styles.headingText}>User Preferences Information</Text>

            <Text> Enter your Food preferences (name of food/cuisine followed by comma) </Text> 
            <TextInput 
                style={styles.input}
                placeholder='e.g. Italian, Steak, Mexican'
                onChangeText={prefs => parseFoodRes(prefs)}
            />        
            <Button title="Submit" onPress={handleSubmit}/> 
        </View>   
      );
}

const styles = StyleSheet.create({
    headingText:{
        position: "relative",
        textAlign:"center",
        paddingTop: 20,
        bottom: 20,
        fontSize: 24,
        fontWeight: "bold",
        marginHorizontal: 15,
    },
    container:{
        fontSize: 16,
        marginHorizontal: 15,
        marginTop: 15,
        marginBottom: 15,
    },
    input:{
        borderWidth: 1,
        borderColor: '#0777',
        padding: 8,
        margin: 10,
        width: 200,
    }
});

export default ProfileAdd;