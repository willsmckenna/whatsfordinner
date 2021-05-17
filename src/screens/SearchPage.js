import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button, Linking } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useYelpResults from '../hooks/useYelpResults';

const SearchPage = ({ navigation }) => {
    const [term, setTerm] = useState(' ')
    const [searchYelpApi, results, errorMsg] = useYelpResults();

    return (
        <View>
            <Button title="Order Now!" onPress={() => Linking.openURL('https://www.google.com/maps/search/?api=1&query=2601 W Devon Ave Chicago, IL 60659"')} />
            <Button title="Signup" onPress={() => navigation.navigate('Login')} />
            <Button title="Create Restaurant Profile" onPress={() => navigation.navigate('Restaurant')} />
            <Text style={styles.headingText}>What kind of food sounds good to you right now? </Text>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchYelpApi(term)}
            />
            <Text style={styles.resultTitle}>Results - {results.length} restaurants</Text>
            {errorMsg ? <Text>{errorMsg}</Text> : null}
            <ResultsList resultsToDisplay={results} />
        </View>
    );
}

const styles = StyleSheet.create({
    headingText: {
        position: "relative",
        textAlign: "center",
        paddingTop: 50,
        fontSize: 24,
        fontWeight: "bold",
        marginHorizontal: 15
    },
    resultTitle: {
        fontSize: 16,
        marginHorizontal: 15,
        marginTop: 15,
        marginBottom: 15
    }
});

export default SearchPage;