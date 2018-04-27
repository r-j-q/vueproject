// import React ,{Component}from 'react';
// import { StyleSheet, Text, View } from 'react-native';
//
//   class ChoicePage extends  Component {
//     // static navigationOptions={
//     //    title:"Alerts"
//     // }
//   render() {
//     return (
//       <View style={styles.container}>
//
//         <Text>76766776767676</Text>
//
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
// export default  ChoicePage

import React, { Component } from 'react';
import {
Image,Alert,StyleSheet,View,TouchableHighlight,ListView,TextInput,Text
} from 'react-native';


export default class BuyInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
        showValue:"",
    };
  }
  // _onChangeText=(inputData)=>{
  //        Alert.alert("11data",JSON.stringify(inputData));
  //        this.setState({showValue:inputData});
  //    }
  _onChangeText=(inputData)=> {
     
    this.props.handleView(this.props.name,inputData);
}
  render() {

    return (
      <View style={{width:window.width, height:50, flexDirection:'row',marginBottom:10, borderColor:'#fff',borderWidth:1}}>

          <View style={{flex:1,borderRightColor:'#fff',borderRightWidth:1, alignItems:'center', justifyContent:'center',}}>
               <Text style={{color:'#fff'}}>{this.props.pricesAfter}</Text>
          </View>
          <View style={{flex:3,borderRightColor:'#fff',borderRightWidth:1,alignItems:'center',justifyContent:'center'}}>
               <TextInput style={{color:'#fff',flex: 1,position:"absolute",left:0,right:0, height:50,}}
                   placeholderTextColor="#fff"
                   autoFocus="true"
                   onChangeText={this._onChangeText}
                />
          </View>
          <View style={{ flex:1, alignItems:'center',justifyContent:'center'}}>
            <Text style={{color:'#fff'}}>{this.props.pricesBuy}</Text>
          </View>
      </View>
    )
  }






}

const styles = StyleSheet.create({

});
