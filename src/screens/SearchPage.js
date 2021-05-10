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
            <Text style={styles.headingText}>What kind of food sounds good to you right now? </Text>
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

const styles = StyleSheet.create({
headingText:{
    position: "relative",
    textAlign:"center",
    paddingTop: 100,
    fontSize: 24
}
});

export default SearchPage;