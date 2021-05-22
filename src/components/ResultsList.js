import React from 'react';
import { View, FlatList, Text, StyleSheet, Image, Touchable, TouchableOpacity, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import StarRating from './StarRating';

var screenWidth = Dimensions.get("window").width; // dynamic width

const ResultsList = ({ resultsToDisplay }) => {
    return (
        <View style={styles.resultsAreaContainer}>
            <FlatList
                keyExtractor={(result) => result.id}
                data={resultsToDisplay}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity>
                            <View style={styles.item}>
                                <Image style={styles.thumbnail} source={{ width: 75, height: 75, uri: item.image_url }} />
                                <Text style={styles.restaurantTitle}> {item.name} {"\n"} <Text style={styles.smallText}><Feather name="check-circle" /> You've been here before!</Text> </Text>
                                <View style={styles.info}>
                                    <Text>{item.rating} stars</Text>
                                    <Text><Feather name="map-pin" /> {item.location.city}, {item.location.state} </Text>
                                </View>
                            </View>
                            <View style={styles.stars}>
                                <StarRating item={item} />
                            </View>
                            <View style={styles.icons}>
                                <FontAwesomeIcon style={styles.iconUp} icon="thumbs-up" />
                                <FontAwesomeIcon style={styles.iconDown} icon="thumbs-down" />
                            </View>

                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    resultsAreaContainer: {
        flexDirection: "column", // main axis
        justifyContent: "center", // main axis
        alignItems: "center", // cross axis
        alignSelf: "stretch"
    },
    restaurantTitle: {
        fontSize: 15,
        fontWeight: "bold",
        marginHorizontal: 15,
        flexGrow: 1,
        flexShrink: 1,
        paddingLeft: 5,
        paddingBottom: 0,
        width: 100
    },
    smallText: {
        fontSize: 12,
        fontWeight: "normal",
        color: "#FF6347"
    },
    info: {
        paddingRight: 15
    },
    thumbnail: {
        flexShrink: 1
    },
    item: {
        backgroundColor: "white",
        padding: 0,
        // marginBottom: 15,
        // borderRadius: 5, // need to comment this out so the bottom border is not round, otherwise there's a chip in the middle
        marginHorizontal: 15,
        flex: 1,
        flexDirection: "row", // main axis
        justifyContent: "flex-start", // main axis
        alignItems: "center",
        flexWrap: "wrap",
        width: screenWidth - 30
    },
    stars: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white"
    },
    icons: {
        backgroundColor: "white",
        marginBottom: 15,
        marginHorizontal: 15,
        flex: 1,
        flexDirection: "row", // main axis,
        paddingBottom: 10,
    },
    iconUp: {
        marginRight: 40,
        marginLeft: 102,
        padding: 9,
    },
    iconDown: {
        marginRight: 10,
        padding: 9
    }
});
export default ResultsList;