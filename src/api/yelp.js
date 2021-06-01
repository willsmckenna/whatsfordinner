import axios from 'axios';
import { YELP_API_KEY } from '@env';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:`9jj_4ARsBFCZyaP7gV5G30l3jYCziZ7Sc_opzuI0CBgdwXY4tCJUBsbdAt6r9geKskns7MKemOnW91oMtVYBg4rlYWHtlJHhaup47TtgNokhmpGHS0Uod0RVz_mZYHYx`
    }
});