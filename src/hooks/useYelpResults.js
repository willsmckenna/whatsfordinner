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

    useEffect(() => {
        //At first get random restaurants
        let mounted = true;

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
                    if(mounted) {
                        const userProfile = res.data.listUserPreferencess.items[0];
                        const { username, foodPreferences } = userProfile;
                        setFoodList(foodPreferences);
                    }
                });
        });        
        let randSearchTerm = ''
     
        if (foodList.length > 0){
            randSearchTerm = foodList[Math.floor(Math.random() * foodList.length)]
            randSearchTerm = randSearchTerm.trim();
        } else {
         randSearchTerm = randSearchList[Math.floor(Math.random() * 5)]
        }
        searchYelpApi(randSearchTerm);

        return () => mounted = false;
    }, []);

    return [searchYelpApi, results, errorMsg];
};