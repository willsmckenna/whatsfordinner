import React from 'react'
import { StatusBar } from 'react-native'
import Amplify from '@aws-amplify/core'
import { withAuthenticator, Authenticator } from 'aws-amplify-react-native'
import awsconfig from '../aws-exports'
import SearchPage from './SearchPage'

Amplify.configure({
    ...awsconfig,
    Analytics: {
        disabled: true,
    },
})


const LoginPage = () => {

    
}





export default withAuthenticator(LoginPage)
               