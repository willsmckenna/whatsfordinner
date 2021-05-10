import React from 'react';
import { View, FlatList, Text, StyleSheet, Image, Touchable, TouchableOpacity} from 'react-native';
import { Feather } from '@expo/vector-icons';

const ResultsList = ({ resultsToDisplay }) => {
    return (
        <View>
            <FlatList 
                keyExtractor={(result) => result.id}
                data={resultsToDisplay}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity>
                        <View style={styles.item}>
                            <Image source={{width: 75, height: 75, uri: item.image_url}}/>
                            <Text style={styles.restaurantTitle}> {item.name} - {item.rating} stars </Text>
                            <Text><Feather name="map-pin"/> {item.location.city}, {item.location.state} </Text>
                        </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    restaurantTitle:{
        fontSize: 16,
        fontWeight: "bold"
    },
item:{
    backgroundColor: "white",
    padding: 15,
    marginBottom: 15,
    borderRadius: 5,
        marginHorizontal: 15
}
});
export default ResultsList;