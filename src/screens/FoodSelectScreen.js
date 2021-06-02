import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Content, Container, CheckBox, Image } from 'react-native';
//import CheckBox from '@react-native-community/checkbox';
import { createUserPreferences } from '../graphql/mutations';

const FoodData = require('../static/favfoods.json');

const FoodSelectScreen = () => {
    const [foodData, setFoodData] = useState(FoodData);
    const [userProfileData, setUserProfileData] = useState([]);

    const onchecked = (id) => {
        const data = foodData;
        const index = data.findIndex(x => x.id === id)
        data[index].checked = !data[index].checked
        setFoodData(foodData);
    }

    const renderFoods = () => {
        return foodData.map((item, key) => {
            return (
                <TouchableOpacity style={ styles.checkboxContainer} key={key} onPress={() => { onchecked(item.id) }}>
                    <CheckBox style={styles.checkbox} value={item.checked} onValueChange={() => { onchecked(item.id) }} />
                    <Text>{item.key}</Text>
                </TouchableOpacity>
                );
        });
    }

    const submitSelectedFood = async () => {
        const keys = foodData.map((t) => t.key)
        const checks = foodData.map((t) => t.checked)
        let selected = []
        for (let i = 0; i < checks.length; i++) {
            if (checks[i] == true) {
                selected.push(keys[i])
            }
        }

        try {
            const { id, attributes: { email } } = await Auth.currentUserInfo();
            // also put current user's id in table- change to getting email address for look up. 
            setUserProfileData(...userProfileData, id, email, selected );
            //update table in Amplify api
            await API.graphql(graphqlOperation(createUserPreferences, {input: userProfileData }));
        } catch (err) {
            console.log('error creating restaurant:', err);
        }
    }
    
    
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
            <Text style={styles.header}> What are your favorite foods?</Text>
            {renderFoods()}

            <TouchableOpacity style={styles.submit} onPress={() => {
                submitSelectedFood()
            }} >
                <Text style={{ color: "white" }}>SUBMIT</Text>
                
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f6f6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollView: {
        backgroundColor: 'white',
        marginHorizontal: 20,
    },
    checkbox: {
        alignSelf: "center",
      },
    header: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#364f6b",
        marginBottom: 40
    },
    thumbnail:{
        flexShrink: 1,
        width: 75, 
        height: 75
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    item: {
        width: "80%",
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 10,
        marginBottom: 10,
        flexDirection: "row",
    },
    checkBoxTxt: {
        marginLeft: 20
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

export default FoodSelectScreen;