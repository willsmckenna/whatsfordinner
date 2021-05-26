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

    for (let i = 1; i <= strRating[0]; i++) {
        const filledStarPath = <FontAwesomeIcon icon={faStar} key={i + 'filledStar'} />;
        stars.push(filledStarPath);
    }
    if (strRating[1]) {
        const halfStarPath = <FontAwesomeIcon icon={faStarHalf} key={'halfStar'} />;
        stars.push(halfStarPath);
        strRating = Number(strRating[0]) - 1
    }

    for (let j = 1; j <= 5 - Number(strRating[0]); j++) {
        const unfilledStarPath = <FontAwesomeIcon icon={fasStar} key={j + 'unfilledStar'} />;
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
        marginLeft: 100
    },
    text: {
        fontSize: 12,
        marginLeft: 2,
        marginRight: 10
    }
});