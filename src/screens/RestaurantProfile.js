import React, { useState } from 'react';
import { Text, TextInput, Button, View, StyleSheet } from 'react-native';
import { createRestaurant } from './graphql/mutations';

const RestaurantProfile = ({ navigation }) => {
    const [resDetail, setResDetail] = useState({});

    const handleSubmit = () => {
        try {
            await API.graphql(graphqlOperation(createRestaurant, {input: resDetail}));
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
                onChangeText={e => setResDetail({ ...resDetail, title: e.target.value })}
            />    
            <Text> Address </Text> 
            <TextInput 
                style={styles.input}
                placeholder='e.g. 401 N Central, Chicago, Il 60656'
                onChangeText={e => setResDetail({ ...resDetail, address: e.target.value })}
            />     
            <Text> Telephone </Text> 
            <TextInput 
                style={styles.input}
                placeholder='e.g. 703-996-7185'
                onChangeText={e => setResDetail({ ...resDetail, telephone: e.target.value })}
            />
            <Text> Hours </Text> 
            <TextInput 
                style={styles.input}
                placeholder='e.g. Everyday 10 a.m. to 9 p.m.'
                onChangeText={e => setResDetail({ ...resDetail, hours: e.target.value })}
            />
            <Text> Reservations </Text> 
            <TextInput 
                style={styles.input}
                placeholder='e.g. opentable.com'
                onChangeText={e => setResDetail({ ...resDetail, reservation: e.target.value })}
            />
            <Text> Order </Text> 
            <TextInput 
                style={styles.input}
                placeholder='e.g. ubereats.com, doordash.com, etc.'
                onChangeText={e => setResDetail({ ...resDetail, order: e.target.value })}
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