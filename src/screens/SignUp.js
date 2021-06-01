import { Auth } from 'aws-amplify';

async function signUp() {
    try {
        const { user } = await Auth.signUp({
            username,
            password,
            attributes: {
                email,         
                phone_number,
                // other custom attributes 
               ' custom: food_preferences: '
            }
        });
        console.log(user);
    } catch (error) {
        console.log('error signing up:', error);
    }
}



async function confirmSignUp() {
    try {
        await Auth.confirmSignUp(username, code);
    } catch (error) {
        console.log('error confirming sign up', error);
    }
}