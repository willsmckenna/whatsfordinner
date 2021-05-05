import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useYelpResults from '../hooks/useYelpResults';

const SearchPage = () => {
    const [term, setTerm ] = useState(' ')
    const [searchYelpApi, results, errorMsg] = useYelpResults();
    
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

export default SearchPage;