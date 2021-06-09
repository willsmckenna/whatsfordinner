import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Authenticator } from 'aws-amplify-react-native';
import Auth from '@aws-amplify/auth';
import { listUserPreferences } from '../graphql/queries';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import ProfileDetails from '../components/ProfileDetails';

const UserProfile = () => {
    const [userName, setUserName] = useState("");
    const [foodList, setFoodList] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');

    const getData = (id) => {
        return API.graphql(graphqlOperation(listUserPreferences, {
            filter: {
                userId: { eq: id }
            }
        })).then(data => data);
    }

    useEffect(() => {
        let mounted = true;
       
        let useList = []
        
        Auth.currentUserInfo().then(res => {
            if (res == null){
                setErrorMsg('Current user not found')
            }
            const { id } = res;
            getData(id)
                .then(res => {
                    if (res == null){
                        setErrorMsg('User profile not found, please add to your account')
                    }
                    if(mounted) {
                        const userProfile = res.data.listUserPreferencess.items[0];
                        const { username, foodPreferences } = userProfile;
                        setUserName(username);
                        setFoodList(foodPreferences);
                    }
                });
        });        
            return () => mounted = false;
    }, []);
    
    return (
        <View>
            {userName !== "" && foodList.length !== 0 && <ProfileDetails userName={userName} foodList={foodList} />}     
        </View>
    );
};

export default UserProfile;