import React from 'react';
import { View, FlatList, Text } from 'react-native';

const ResultsList = ({ resultsToDisplay }) => {
    return (
        <View>
            <FlatList 
                keyExtractor={(result) => result.id}
                data={resultsToDisplay}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Text> {item.name} - {item.rating} stars </Text>
                        </View>
                    );
                }}
            />
        </View>
    )
}
export default ResultsList;