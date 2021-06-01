import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Authenticator } from 'aws-amplify-react-native';
import Auth from '@aws-amplify/auth';
import { listUsers } from '../graphql/queries';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import ProfileDetails from '../components/ProfileDetails';

const UserProfile = () => {
    const [userDetails, setUserDetails] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        async function fetchProfileData() {
            try {
                const { id } = await Auth.currentUserInfo();
                const userDetail = await API.graphql(graphqlOperation(listUsers, {
                    filter: {
                        userId: { eq: id }
                    }
                }));

                let useList = [];
                const { data } = userDetail;
                const userProfile = data.listUsers.items[0];
                if (!userProfile) {
                    setErrorMsg('You have not created a profile yet. Please create one.');
                }
                const { name, email,telephone,preferences,orders, reservations} = userProfile;
                useList.push(name, email, telephone, preferences, orders, reservations );
                setUserDetails(useList);
            } catch (err) {
                console.log("error fetching data:" + err);
            }
        }
        fetchProfileData();
    }, []);
    return (
        <View>
            <ProfileDetails useProfile={userDetails} />
            {errorMsg ? <Text>{errorMsg}</Text> : null}
        </View>
    );
};

export default Authenticator(UserProfile);