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
            <Text style={styles.resultTitle}>Results - {results.length} restaurants</Text>
            {errorMsg ? <Text>{errorMsg}</Text> : null}
            <ResultsList resultsToDisplay={results}/>
        </View>
    );
}

const styles = StyleSheet.create({
headingText:{
    position: "relative",
    textAlign:"center",
    paddingTop: 50,
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 15
},
resultTitle:{
fontSize: 16,
marginHorizontal: 15,
marginTop: 15,
marginBottom: 15
}
});

export default SearchPage;