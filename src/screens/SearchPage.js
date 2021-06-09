import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useYelpResults from '../hooks/useYelpResults';
import Auth from '@aws-amplify/auth';
import { listUserPreferences } from '../graphql/queries';
import Amplify, { API, graphqlOperation } from 'aws-amplify';


const SearchPage = ({ navigation }) => {
    const [term, setTerm ] = useState(' ')
    const [searchYelpApi, results, errorMsg] = useYelpResults();
    const [foodList, setFoodList] = useState([]);

    const randSearchList = ["food", "restaurants", "dinner", "fast food", "casual"];

    const getData = (id) => {
        return API.graphql(graphqlOperation(listUserPreferences, {
            filter: {
                userId: { eq: id }
            }
        })).then(data => data);
    }

    const renderPreferredList = () => {
        getPreferredList();

        let randSearchTerm = ''
     
        if (foodList.length > 0){
            randSearchTerm = foodList[Math.floor(Math.random() * foodList.length)]
            randSearchTerm = randSearchTerm.trim();
        }
        
        let i = 1;
        while (i > 0){
            searchYelpApi(randSearchTerm);
            i--;
        }
        
    }

    const getPreferredList = () => {
        //At first get random restaurants

        Auth.currentUserInfo().then(res => {
            if (res == null){
                setErrorMsg('Current user not found')
            }
            const { id } = res;
            getData(id)
                .then(res => {
                    if (res == null){
                        setErrorMsg('User profile not found')
                    }
                   
                        const userProfile = res.data.listUserPreferencess.items[0];
                        const { username, foodPreferences } = userProfile;
                        setFoodList(foodPreferences);
                    
                });
        });        

    };

    useEffect(() => {
        //At first get random restaurants
        let randSearchTerm = '';

        randSearchTerm = randSearchList[Math.floor(Math.random() * 5)]
        
        searchYelpApi(randSearchTerm);

    }, []);

    return (
        <View>
            <Text style={styles.headingText}>What kind of food sounds good to you right now? </Text>
            <Button title="Get A List from Your Preferred Foods" onPress={renderPreferredList}/>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchYelpApi(term)}
            />
            <Text style={styles.resultTitle}>Results - {results.length} restaurants</Text>
            {errorMsg ? <Text>{errorMsg}</Text> : null}
            <ResultsList resultsToDisplay={results} nav={navigation}/>
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