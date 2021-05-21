import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';

const ListResProfile = ({ resProfile }) => {
    return (
      <View >
          <Text style={styles.heading}>Your Restaurant Profile</Text>
          <FlatList 
              keyExtractor={(result) => result}
              data={resProfile}
              renderItem={({ item }) => {
                  return (
                      <View style={styles.item}>
                          <Text style={styles.smallText}> {item}</Text>
                      </View>
                  );
              }}
          />
      </View>
  )
};

const styles = StyleSheet.create({
  heading:{
      fontSize: 30,
      fontWeight: "bold",
      paddingBottom: 20,
    },
  smallText:{
      fontSize: 20,
      fontWeight: "normal",
      color: "white"
  },
  info:{
     paddingRight: 15
  },
  thumbnail:{
      flexShrink: 1
  },
  item:{
      backgroundColor: "#FFA500",
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

export default ListResProfile;