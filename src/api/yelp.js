import axios from 'axios';
import { YELP_API_KEY } from '@env';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:`Bearer qJ5kSTqyE4K0dOVZsTswYjfkYlhZOClTI_ckR4sGHlEr0fB-9zCARgZBAGQ0vArk1FlBVgLgBfZ10e-FhXXAyNZIbFb_ajViISVuDLxQMmXOtJvYXH9kn1OeL9mZYHYx`
    }
});