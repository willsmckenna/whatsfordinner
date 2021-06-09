import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { ListItem } from "react-native-elements";

const ProfileDetails = ({ userName, foodList }) => {
    return (
        <View>
            <Text style={styles.heading}>Profile for: {userName}</Text>
            <Text style={styles.smallText}>Food Preferences</Text>
            {
                foodList.map((l, i) => (
                    <ListItem key={i} bottomDivider>
                        <ListItem.Content>
                            <ListItem.Title>{l}</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                ))
            }
        </View>
    )
};

const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        fontWeight: "bold",
        paddingBottom: 20,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#F5FCFF"
    },
    smallText: {
        fontSize: 20,
        fontWeight: "normal",
        color: "black"
    },
    info: {
        paddingRight: 15
    },
    thumbnail: {
        flexShrink: 1
    },
    item: {
        padding: 10,
        marginBottom: 15,
        marginHorizontal: 15,
        flex: 1,
        flexDirection: "row", // main axis
        justifyContent: "flex-start", // main axis
        alignItems: "center",
    }
});


export default ProfileDetails;