import React, { useState } from 'react';
import { Text, TextInput, Button, View, StyleSheet } from 'react-native';

const RestaurantProfile = ({ navigation }) => {
      return (
        <View style = {styles.container}>
            <Text style={styles.headingText}>Restaurant Information</Text>

            <Text> Restaurant Name </Text> 
            <TextInput 
                style={styles.input}
                placeholder='e.g. St. Paris'
            />    
            <Text> Address </Text> 
            <TextInput 
                style={styles.input}
                placeholder='e.g. 401 N Central, Chicago, Il 60656'
            />     
            <Text> Telephone </Text> 
            <TextInput 
                style={styles.input}
                placeholder='e.g. 703-996-7185'
            />
            <Text> Hours </Text> 
            <TextInput 
                style={styles.input}
                placeholder='e.g. Everyday 10 a.m. to 9 p.m.'
            />
            <Text> Reservations </Text> 
            <TextInput 
                style={styles.input}
                placeholder='e.g. opentable.com'
            />
            <Text> Order </Text> 
            <TextInput 
                style={styles.input}
                placeholder='e.g. ubereats.com, doordash.com, etc.'
            />
            <Button title="Submit" onPress={() => navigation.navigate('Search')}/> 
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