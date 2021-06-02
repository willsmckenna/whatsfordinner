import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { ListItem } from "react-native-elements";

const ListUserProfile = ({ userProfile }) => {
    return (
        <View>
            <Text style={styles.heading}>User Profile: {userProfile}</Text>
            <Text style={styles.smallText}>Preferred Foods:</Text>
            
        </View>
    )
};

const styles = StyleSheet.create({
  heading:{
      fontSize: 30,
      fontWeight: "bold",
      paddingBottom: 20,
    },
  container: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "#F5FCFF"
    },
  smallText:{
      fontSize: 20,
      fontWeight: "normal",
      color: "black"
  },
  info:{
     paddingRight: 15
  },
  item:{
      padding: 10,
      marginBottom: 15,
      marginHorizontal: 15,
      flex: 1,
      flexDirection: "row", // main axis
      justifyContent: "flex-start", // main axis
      alignItems: "center",
    }
  });
;

export default ListUserProfile;