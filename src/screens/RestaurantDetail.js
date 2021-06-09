import React, { useEffect, useState } from 'react';
import * as Linking from 'expo-linking';
import { View, Modal, Button, FlatList, ScrollView, Text, StyleSheet, Image, Touchable, TouchableOpacity, Dimensions} from 'react-native';
import yelp from '../api/yelp';

var screenWidth = Dimensions.get("window").width; // dynamic width

const RestaurantDetail = ({route: { params } }) => {

const [reviews, setReviews] = useState([]);

const renderReviews = (reviewList) => {
    return (
        <View>
            <Text style={styles.headerText}>Top three reviews: </Text>
            <View style={styles.separator} />
            <Text>{reviewList[0]}</Text>
            <View style={styles.separator} />
            <Text>{reviewList[1]}</Text>
            <View style={styles.separator} />
            <Text>{reviewList[2]}</Text>
        </View>
    );
}

useEffect(() => {
    const getReviews = async(id) => {
        let reviewList = []
        try {
            const response = await yelp.get(`/${id}/reviews`);
            reviewList = [response.data.reviews[0].text, response.data.reviews[1].text, response.data.reviews[2].text];
        } catch (err) {
            console.log(err);
        }
        setReviews(reviewList);
    }
    getReviews(params.data.id);
}, []);
// get data from route params
const info = params.data;

const menuLink = "https://www.yelp.com/menu/" + info.alias;
const reserveTable = "https://www.yelp.com/reservations/" + info.alias;
    return (
        <View>
            <ScrollView alwaysBounceVertical={true}>
            <Image style={styles.thumbnail} source={{width: screenWidth, height: 275, uri: info.image_url}}/>
            <Text style={styles.restaurantTitle}>{info.name}</Text>
            <Text style={styles.normalText}>{info.rating}</Text>
            <Text style={styles.normalText}>Category: {info.categories[0].title}</Text>
            <Text style={styles.headerText}>Menu</Text>
            <View style={styles.separator} />
            <TouchableOpacity styles={styles.fullButton}>
              <Text style={styles.normalText} onPress={()=> {Linking.openURL(`${menuLink}`)}}>View Menu</Text>
            </TouchableOpacity>
            <Text style={styles.headerText}>Reservation Services</Text>
            <View style={styles.separator} />
            <TouchableOpacity styles={styles.fullButton}>
              <Text style={styles.normalText} onPress={()=> {Linking.openURL(`${reserveTable}`)}}>Reserve a Table</Text>
            </TouchableOpacity>
            {reviews.length !== 0 && renderReviews(reviews)}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    restaurantTitle:{
        fontSize: 24,
        fontWeight: "bold",
        marginHorizontal: 15,
        paddingBottom: 15,
        paddingTop: 15,
        width: screenWidth - 30,
        textAlign: 'left'
    },
    headerText: {
        fontSize: 18,
        fontWeight: "bold",
        width: screenWidth - 30,
        marginHorizontal: 15,
        paddingBottom: 5
    },
    normalText: {
        fontSize: 14,
        width: screenWidth - 30,
        marginHorizontal: 15,
        paddingBottom: 15
    },
    smallText:{
        fontSize: 12,
        fontWeight: "normal",
        color: "#FF6347"
    },
    thumbnail:{
        flexShrink: 1
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#000000',
        width: screenWidth - 30,
        marginHorizontal: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
  },
  fullButton:{
    width: screenWidth - 30,
    height: 50,
    marginHorizontal: 15,
    backgroundColor: "#DDDDDD"
  }
});

export default RestaurantDetail;