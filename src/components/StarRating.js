import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-regular-svg-icons';

export default StarRating = ({ item }) => {
    let stars = [];
    let strRating = String(item.rating).split('.');
    const filledStarPath = <FontAwesomeIcon style={styles.image} icon={faStar} />;
    const unfilledStarPath = <FontAwesomeIcon style={styles.image} icon={fasStar} />;
    const halfStarPath = <FontAwesomeIcon style={styles.image} icon={faStarHalf} />;

    for (let i = 1; i <= strRating[0]; i++) {
        stars.push(filledStarPath);
    }
    if (strRating[1]) {
        stars.push(halfStarPath);
        strRating = Number(strRating[0]) - 1
    }

    for (let j = 1; j <= 5 - Number(strRating[0]); j++) {
        stars.push(unfilledStarPath);
    }

    return (
        <View style={styles.container}>
            {stars}
            <Text style={styles.text}>({item.review_count})</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 10,
        marginLeft: -30,
        marginTop: 5
    },
    text: {
        fontSize: 12,
        marginLeft: 2,
        marginRight: 10
    }
});