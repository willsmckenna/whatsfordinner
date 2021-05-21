import React, { useState } from 'react';
import { Text, TextInput, Button, View, StyleSheet } from 'react-native';
import { createRestaurant } from '../graphql/mutations';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import Auth from '@aws-amplify/auth';

const RestaurantProfile = ({ navigation }) => {
    const [resDetail, setResDetail] = useState({});

    const handleSubmit = async () => {
        try {
            const { id } = await Auth.currentUserInfo();
            // also put current user's id in table- change to getting email address for look up. 
            setResDetail({...resDetail, userId: id});
            //update table in Amplify api
            await API.graphql(graphqlOperation(createRestaurant, {input: resDetail}));
            //bring back to home/search page
            navigation.navigate('Search');
        } catch (err) {
            console.log('error creating restaurant:', err);
        }
    }
      return (
        <View style = {styles.container}>
            <Text style={styles.headingText}>Restaurant Information</Text>

            <Text> Restaurant Name </Text> 
            <TextInput 
                style={styles.input}
                placeholder='e.g. St. Paris'
                onChangeText={resName => setResDetail({ ...resDetail, resName })}
            />        
            <Text> Address </Text> 
            <TextInput 
                style={styles.input}
                placeholder='e.g. 401 N Central, Chicago, Il 60656'
                onChangeText={address => setResDetail({ ...resDetail, address })}
            />     
            <Text> Telephone </Text> 
            <TextInput 
                style={styles.input}
                placeholder='e.g. 703-996-7185'
                onChangeText={telephone => setResDetail({ ...resDetail, telephone })}
            />
            <Text> Hours </Text> 
            <TextInput 
                style={styles.input}
                placeholder='e.g. Everyday 10 a.m. to 9 p.m.'
                onChangeText={hours => setResDetail({ ...resDetail, hours})}
            />
            <Text> Reservations </Text> 
            <TextInput 
                style={styles.input}
                placeholder='e.g. opentable.com'
                onChangeText={reservations => setResDetail({ ...resDetail, reservations })}
            />
            <Text> Order </Text> 
            <TextInput 
                style={styles.input}
                placeholder='e.g. ubereats.com, doordash.com, etc.'
                onChangeText={order => setResDetail({ ...resDetail, order })}
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

export default RestaurantProfile;