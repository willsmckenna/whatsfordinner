import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet,TextInput, Button } from 'react-native';
import { Authenticator } from 'aws-amplify-react-native';
import Auth from '@aws-amplify/auth';
import { listUsers } from '../graphql/queries';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import UserDetails from '../components/UserDetails';

const UserProfile = ({ navigation }) => {
    const [userDetails, setUserDetails] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        async function fetchProfileData() {
            try {
                const { id } = await Auth.currentUserInfo();
                console.log('Returned info: ', id)
                const userDetail = await API.graphql(graphqlOperation(listUsers, {
                    filter: {
                        userId: { eq: id }
                    }
                }));

                let useList = [];
                const { data } = userDetail;
                const userProfile = data.listUsers.items[0];
                if (!userProfile) {
                    navigation.navigate('FinishProfile')
                }
                else {
                    const { name, email, address, telephone, foodPreferences } = userProfile;
                    useList.push(name, email, address, telephone, foodPreferences);
                    setUserDetails(useList);
                }
            } catch (err) {
                console.log("error fetching data:" + err);
            }
        }
        fetchProfileData();
    }, []);
    return (
        <View>
            <UserDetails useProfile={userDetails} />
            {errorMsg ? <Text>{errorMsg}</Text> : null}
        </View>
    );
};
const styles = StyleSheet.create({
    headingText: {
        position: "relative",
        textAlign: "center",
        paddingTop: 20,
        bottom: 20,
        fontSize: 24,
        fontWeight: "bold",
        marginHorizontal: 15,
    },
    container: {
        fontSize: 16,
        marginHorizontal: 15,
        marginTop: 15,
        marginBottom: 15,
    },
    input: {
        borderWidth: 1,
        borderColor: '#0777',
        padding: 8,
        margin: 10,
        width: 200,
    }
});
export default UserProfile;
