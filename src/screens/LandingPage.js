import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import ResultsList from '../components/ResultsList';

const LandingPage = () => {
    const [term, setTerm ] = useState(' ')
    const [results, setResults] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');

    const searchYelpApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    category: searchTerm,
                    location: 'chicago'
                }
            });
        setResults(response.data.businesses);
        } catch (err) {
            setErrorMsg('Something went wrong')
        }
    };

    useEffect(() => {
        //At first get random restaurants
        searchYelpApi("");
    }, []);

    return (
        <View>
            <Text>What's For Dinner Landing Page!</Text>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchYelpApi(term)}
            />
            <Text>we have found {results.length} restaurants</Text>
            {errorMsg ? <Text>{errorMsg}</Text> : null}
            <ResultsList resultsToDisplay={results}/>
        </View>
    );
}

const styles = StyleSheet.create({});

export default LandingPage;