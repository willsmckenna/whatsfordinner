import axios from 'axios';
import { YELP_API_KEY } from '@env';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        //Authorization:`Bearer ${YELP_API_KEY}`
        Authorization: 'Bearer Au-TEyW9ThTl0H0d23QWTFwART8jKhy0v1oA3XfGQaYMDuQuANT8gBNLMjRRB96K9xQM-Ux08C43gmIUoBgExtwiUjusyJq03GtD4X_yKFrph8jRr1CZ9kx_Lo2ZYHYx'
    }
});