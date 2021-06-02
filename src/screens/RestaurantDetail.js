import React from 'react';
import * as Linking from 'expo-linking';
import { View, CheckBox, Modal, Button, FlatList, ScrollView, Text, StyleSheet, Image, Touchable, TouchableOpacity, Dimensions} from 'react-native';
import { createUserRating } from '../graphql/mutations';

var screenWidth = Dimensions.get("window").width; // dynamic width

const RestaurantDetail = ({route: { params } }) => {
    
const [isSelected, setSelection] = useState(false);
const [text, setText] = useState(false);
const [ratings, setRatings] = useState({});
// get data from route params
const info = params.data;
const menuLink = "https://www.yelp.com/menu/" + info.alias;
const reserveTable = "https://www.yelp.com/reservations/" + info.alias;

const showRatingComponent = () => {
    return (
        <View>
            <TextInput
                    style={{height: 40}}
                    placeholder="Give rating (1-5)"
                    onChangeText={text => setText(text)}
                    defaultValue={text}
            /> 
            <Button
                    onPress={handleSubmit}
                    title="Submit Rating"
                    color="#841584"
            />
        </View>
    );
}

const handleSubmit = async () => {
    try {
        const { id, attributes: { email } } = await Auth.currentUserInfo();
        // also put current user's id in table- change to getting email address for look up. 
        setRatings({...ratings, username: email, resname: info.name, attended: true, rating: text });
        //update table in Amplify api
        await API.graphql(graphqlOperation(createUserRating, {input: ratings}));
    } catch (err) {
        console.log('error creating rating:', err);
    }
}
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
            </ScrollView>
            <View style={styles.container}>
                <View style={styles.checkboxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                />
                <Text style={styles.label}>Did you eat here?</Text>
                </View>
                {isSelected ? showRatingComponent() : null}
            </View>
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
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});

export default RestaurantDetail;