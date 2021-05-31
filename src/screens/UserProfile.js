import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import {Authenticator} from 'aws-amplify-react-native';
import Auth from '@aws-amplify/auth';
import { getUserPreferences } from '../graphql/queries';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import ListUserProfile from '../components/ListUserProfile';

const UserProfile = ( {navigation} ) => {
    const [userDetails, setUserDetails] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        async function fetchProfileData() {
            try {
                const { id } = await Auth.currentUserInfo();
                const userDetail = await API.graphql(graphqlOperation(getUserPreferences, { 
                    filter: {
                        userId: { eq: id } 
                    }
                }));
    
                let userList = [];
                const { data } = userDetail;
                const userProfile = data.listRestaurants.items[0];
                if (!userProfile){
                    setErrorMsg('No user food preferences found for your account. Click the add food preferences button to add to your account');
                }
                const { username, foodPreferences } = userProfile;
                userList.push(username, foodPreferences);
                setUserDetails(userList);
            } catch (err){
                console.log("error fetching data:" +  err);
            }
        }
      fetchProfileData();
    }, []);

    return (
        <View>
            <ListUserProfile userProfile={userDetails} />
            {errorMsg ? <Text>{errorMsg}</Text> : null}
            <Button title="Add Food Preferences" onPress={() => navigation.navigate('FoodSelectScreen')}/>
        </View>
    );
};

export default UserProfile;