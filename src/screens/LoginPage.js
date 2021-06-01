import React from 'react'
import {StatusBar} from 'react-native'
import Amplify from '@aws-amplify/core'
import {Authenticator} from 'aws-amplify-react-native'
import awsconfig from '../aws-exports'

import { Auth } from 'aws-amplify';


Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: true,
  },
})

const LoginPage = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Authenticator usernameAttributes="email" />
    </>
  )
}

export default LoginPage
