import React from 'react';
// other Libraries
import { View, FlatList, Text, StyleSheet, Image, Touchable, TouchableOpacity, Dimensions} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import StarRating from './StarRating';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-regular-svg-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';

var screenWidth = Dimensions.get("window").width; // dynamic width

const ResultsList = ({resultsToDisplay, nav}) => {
    const sliderMenu = () => {
        return(
        <View style={styles.icons}>
            <TouchableOpacity><FontAwesomeIcon style={styles.iconUp} icon="thumbs-up" /></TouchableOpacity>
             <TouchableOpacity><FontAwesomeIcon style={styles.iconDown} icon="thumbs-down" /></TouchableOpacity>
         </View>
        );
    };
            return (
            <View style={styles.resultsAreaContainer}>
                <FlatList 
                    keyExtractor={(result) => result.id}
                    data={resultsToDisplay}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={()=>nav.navigate('DetailPage', {data: item})}>
                                <Swipeable renderRightActions={sliderMenu} onSwipeableOpen={()=> console.log("opened")}>
                            <View style={styles.item}>
                                <Image style={styles.thumbnail} source={{width: 75, height: 100, uri: item.image_url}}/>
                                    <Text style={styles.restaurantTitle}> {item.name} {"\n"} <Text style={styles.smallText}><Feather name="check-circle"/> You've been here before!</Text> </Text>
                                    <Text style={styles.locations}><Feather name="map-pin"/> {item.location.city}, {item.location.state} </Text>
                                <View style={styles.info}>
                                    <StarRating style={styles.stars} item={item} />
                                </View>
                            </View>
                            </Swipeable>
                             </TouchableOpacity>
                             
                        );
                        
                    }}
                    
                />
            </View>    
        );
}

const styles = StyleSheet.create({
    resultsAreaContainer: {
        flexDirection: "column", // main axis
        justifyContent: "center", // main axis
        alignItems: "center", // cross axis
        alignSelf: "stretch"
    },
    restaurantTitle:{
        fontSize: 15,
        fontWeight: "bold",
        marginHorizontal: 15,
        flexGrow: 1,
        flexShrink: 1,
        paddingLeft: 5,
        paddingBottom: 0,
        width: 100
    },
    smallText:{
        fontSize: 12,
        fontWeight: "normal",
        color: "#FF6347"
    },
    info:{
       paddingRight: 15
    },
    thumbnail:{
        flexShrink: 1
    },
    locations: {
        paddingRight: 15
    },
item:{
    backgroundColor: "white",
    padding: 0,
    marginBottom: 15,
    borderRadius: 5,
    marginHorizontal: 15,
    flex: 1,
    flexDirection: "row", // main axis
    justifyContent: "flex-start", // main axis
    alignItems: "center",
    flexWrap: "wrap",
    width: screenWidth - 30
},
stars: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: "white",
    marginHorizontal: 15,
},
icons: {
    backgroundColor: "white",
    marginBottom: 15,
    marginHorizontal: 15,
    flex: 1,
    flexDirection: "row", // main axis,
    paddingBottom: 10,
},
iconUp: {
    marginRight: 40,
    marginLeft: 102,
    padding: 9,
},
iconDown: {
    marginRight: 10,
    padding: 9
}
});

export default ResultsList;