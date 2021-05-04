import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:'Bearer 3Yco9sGiJ4ZEXsTUpkJ6YAauUWi81QIKmPPZn7VqVjzdUDhARW0P_gH0_QM4DzE1LRTwm_pHGAeFVMwy5oN45lQZ41ft92agK03W0q2kVawGRZIqW_3XqDfX0meHYHYx'
    }
});