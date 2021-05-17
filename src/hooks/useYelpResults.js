import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');

    const randSearchList = ["food", "restaurants", "dinner", "fast food", "casual"];

    const searchYelpApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'chicago'
                }
            });
            if (randSearchList.includes(searchTerm)) {
                //pick 20 at random
                setResults(response.data.businesses.sort(() => 0.5 - Math.random()).slice(0, 20));
            } else {
                setResults(response.data.businesses.slice(0, 20));
            }
        } catch (err) {
            setErrorMsg('Something went wrong')
        }
    };

    useEffect(() => {
        //At first get random restaurants
        const randSearchTerm = randSearchList[Math.floor(Math.random() * 5)]
        searchYelpApi(randSearchTerm);
    }, []);

    console.log(results)
    return [searchYelpApi, results, errorMsg];
};