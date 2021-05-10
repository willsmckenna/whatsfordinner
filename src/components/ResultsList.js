import React from 'react';
import { View, FlatList, Text, StyleSheet, Image } from 'react-native';

const ResultsList = ({ resultsToDisplay }) => {
    return (
        <View>
            <FlatList 
                keyExtractor={(result) => result.id}
                data={resultsToDisplay}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.item}>
                            <Image source={{width: 50, height: 50, uri: item.image_url}}/>
                            <Text> {item.name} - {item.rating} stars </Text>
                        </View>
                    );
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
item:{
    backgroundColor: "white",
    padding: 15,
    marginBottom: 10
}
});
export default ResultsList;