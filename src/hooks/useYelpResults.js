import { useEffect, useState } from 'react';
import yelp from '../api/yelp';
import Auth from '@aws-amplify/auth';
import { listUserPreferences } from '../graphql/queries';
import Amplify, { API, graphqlOperation } from 'aws-amplify';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');
    const [foodList, setFoodList] = useState('');

    const getData = (id) => {
        return API.graphql(graphqlOperation(listUserPreferences, {
            filter: {
                userId: { eq: id }
            }
        })).then(data => data);
    }

    const randSearchList = ["food", "restaurants", "dinner", "fast food", "casual"];

    const searchYelpApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'Chicago'
                }
            });
            if (randSearchList.includes(searchTerm)){
                //pick 20 at random
                setResults(response.data.businesses.sort(() => 0.5 - Math.random()).slice(0, 20));
            } else{
                setResults(response.data.businesses.slice(0, 20));
            }
        } catch (err) {
            setErrorMsg('Something went wrong')
        }
    };

    return [searchYelpApi, results, errorMsg];
};