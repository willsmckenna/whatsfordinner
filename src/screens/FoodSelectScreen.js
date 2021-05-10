import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Content, Container } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const FoodData = require('../../FavFoods.json')
export default class FoodSelectScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: FoodData,
            SelectedFood:[]
        };
    }

    onchecked(id) {
        const data = this.state.data
        const index = data.findIndex(x => x.id === id);
        data[index].checked = !data[index].checked
        this.setState(data)
    }

    renderFoods() {
        return this.state.data.map((item, key) => {
            return (
                <TouchableOpacity style={ styles.item} key={key} onPress={() => { this.onchecked(item.id) }}>
                    <CheckBox value={item.checked} onValueChange={() => { this.onchecked(item.id) }} />
                    <Text>{item.key}</Text>
                </TouchableOpacity>
                )
        })
    }

    getSelectedFood() {
        var keys = this.state.data.map((t) => t.key)
        var checks = this.state.data.map((t) => t.checked)
        let selected = []
        for (let i = 0; i < checks.length; i++) {
            if (checks[i] == true) {
                selected.push(keys[i])
            }
        }
        alert(selected)
    
    }
    
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollView}>
                <Text style={styles.header}> What are your favorite foods?</Text>
                {this.renderFoods()}

                <TouchableOpacity style={styles.submit} onPress={() => {
                    this.getSelectedFood()
                }} >
                    <Text style={{ color: "white" }}>SUBMIT</Text>
                    
                    </TouchableOpacity>
                </ScrollView>
             </View>
        );
    }

}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f6f6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollView: {
        backgroundColor: 'white',
        marginHorizontal: 20,
    },
    header: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#364f6b",
        marginBottom: 40
    },
    item: {
        width: "80%",
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 10,
        marginBottom: 10,
        flexDirection: "row",
    },
    checkBoxTxt: {
        marginLeft: 20
    },
    submit: {
        width: "100%",
        backgroundColor: "#fc5185",
        borderRadius: 20,
        padding: 10,
        alignItems: "center",
        marginTop: 40
    }
});