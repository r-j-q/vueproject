import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
} from 'react-native';


import Picker from 'react-native-wheel-picker'
var PickerItem = Picker.Item;

export default class ChangeChapterPage extends Component<{}> {

    constructor(props) {
        super(props);
        this.state = {
            selectedItem : 2,
            itemList: ['1', '2', '3', '4', '5', '6', '7', '8']
        };
    }

    onPickerSelect (index) {
        this.setState({
            selectedItem: index,
        })
    }

    onAddItem = () => {
        var name = '777'
        if (this.state.itemList.indexOf(name) == -1) {
            this.state.itemList.push(name)
        }
        this.setState({
            selectedItem: this.state.itemList.indexOf(name),
        })
    }

    render () {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                     min
                </Text>
                <Picker style={{width: 150, height: 180}}
                    selectedValue={this.state.selectedItem}
                    itemStyle={{color:"white", fontSize:26}}
                    onValueChange={(index) => this.onPickerSelect(index)}>
                        {this.state.itemList.map((value, i) => (
                            <PickerItem label={value} value={i} key={value}/>
                        ))}
                </Picker>
                <Text style={{margin: 20, color: 'red'}}>
                     {this.state.itemList[this.state.selectedItem]}
                </Text>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1962dd',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
