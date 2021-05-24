import React from 'react';
// other Libraries
import { View, FlatList, Text, StyleSheet, Image, Touchable, TouchableOpacity, Dimensions} from 'react-native';
import { Feather } from '@expo/vector-icons';

var screenWidth = Dimensions.get("window").width; // dynamic width

const ResultsList = ({resultsToDisplay, nav}) => {

    console.log(nav); 
        return (
            <View style={styles.resultsAreaContainer}>
                <FlatList 
                    keyExtractor={(result) => result.id}
                    data={resultsToDisplay}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={()=>nav.navigate('DetailPage')}>
                            <View style={styles.item}>
                                <Image style={styles.thumbnail} source={{width: 75, height: 75, uri: item.image_url}}/>
                                <Text style={styles.restaurantTitle}> {item.name} {"\n"} <Text style={styles.smallText}><Feather name="check-circle"/> You've been here before!</Text> </Text>
                                <View style={styles.info}>
                                <Text>{item.rating} stars</Text>
                                <Text><Feather name="map-pin"/> {item.location.city}, {item.location.state} </Text>
                                </View>
                            </View>
                            </TouchableOpacity>
                        );
                    }}
                />
            </View>
        );
}

const styles = StyleSheet.create({
    resultsAreaContainer: {
        flexDirection: "column", // main axis
        justifyContent: "center", // main axis
        alignItems: "center", // cross axis
        alignSelf: "stretch"
    },
    restaurantTitle:{
        fontSize: 15,
        fontWeight: "bold",
        marginHorizontal: 15,
        flexGrow: 1,
        flexShrink: 1,
        paddingLeft: 5,
        paddingBottom: 0,
        width: 100
    },
    smallText:{
        fontSize: 12,
        fontWeight: "normal",
        color: "#FF6347"
    },
    info:{
       paddingRight: 15
    },
    thumbnail:{
        flexShrink: 1
    },
item:{
    backgroundColor: "white",
    padding: 0,
    marginBottom: 15,
    borderRadius: 5,
    marginHorizontal: 15,
    flex: 1,
    flexDirection: "row", // main axis
    justifyContent: "flex-start", // main axis
    alignItems: "center",
    flexWrap: "wrap",
    width: screenWidth - 30
}
});

export default ResultsList;