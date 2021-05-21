import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import {Authenticator} from 'aws-amplify-react-native';
import Auth from '@aws-amplify/auth';
import { listRestaurants } from '../graphql/queries';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import ListResProfile from '../components/ListResProfile';

const RestaurantProfile = () => {
    const [resDetails, setResDetails] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        async function fetchProfileData() {
            try {
                const { id } = await Auth.currentUserInfo();
                const resDetail = await API.graphql(graphqlOperation(listRestaurants, { 
                    filter: {
                        userId: { eq: id } 
                    }
                }));
    
                let resList = [];
                const { data } = resDetail;
                const restaurantProfile = data.listRestaurants.items[0];
                if (!restaurantProfile){
                    setErrorMsg('No restaurant profile found for your account. Create your restaurant profile or continue browsing as a general user');
                }
                const { resName, address, telephone, hours, reservations, order } = restaurantProfile;
                resList.push(resName, address, telephone, hours, reservations, order);
                setResDetails(resList);
            } catch (err){
                console.log("error fetching data:" +  err);
            }
        }
      fetchProfileData();
    }, []);

    return (
        <View>
            <ListResProfile resProfile={resDetails} />
            {errorMsg ? <Text>{errorMsg}</Text> : null}
        </View>
    );
};

export default RestaurantProfile;