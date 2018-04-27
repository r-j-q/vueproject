import React, { Component ,PropTypes} from 'react';
import {
    Alert,StyleSheet,ListView,Image, View, Text,TouchableOpacity,TouchableHighlight
} from 'react-native';
import window from '../../constants/window'
class CommonListViewPage extends Component {
      static get getDefaultProps(){
        return {
          rowData:{},
          pushToChapterPage:()=>{}
        }
      }



    render(){
       // Alert.alert("1+1",JSON.stringify(this.props));
      const {rowData} =this.props;

      return (
        <TouchableHighlight
          underlayColor="white"

          onPress={()=>{
            this.props.pushToChapterPage(rowData.market.base_unit_name);
          }}
        >
        <View style={{width: window.width,height: 60,flexDirection:'row',
        borderBottomWidth: .5,
        borderColor: '#ccc'}}>
           <View style={styles.commonView}>
              <Text numberOfLines={1} style={{color:'#999'}}><Text style={{fontWeight:'bold',color:'#fff'}}>{rowData.market.base_unit_name} </Text></Text>
              <Text numberOfLines={1} style={{color:'#999'}}>{rowData.market.base_unit} {rowData.market.name}</Text>
           </View>
           <View style={[{flex:2},styles.commonCenterView]}>
              <Text numberOfLines={1} style={{color:'#fff',fontWeight:'bold'}}>{rowData.ticker.last}</Text>
              <Text style={{color:'#999'}}>$ {rowData.ticker.change}</Text>
           </View>
           <View style={styles.commonLastView}>
            <TouchableOpacity style={[styles.borderRadiusBtn ,{
              backgroundColor:rowData.ticker.percent>=0?'#e91e63':'74A700'
            }]}>
              <Text numberOfLines = {1} style={{color:'#fff',textAlign:'center'}}>{rowData.ticker.percent}%</Text>
            </TouchableOpacity>
           </View>
        </View>
        </TouchableHighlight>
      )
    }


}
const styles=StyleSheet.create({
  commonView:{
    flex:1,alignItems:'center',justifyContent:'center'
  },
  commonCenterView:{
     alignItems:'center',justifyContent:'center'
  },
  commonLastView:{
     flex:1,alignItems:'center',justifyContent:'center'
  },
  borderRadiusBtn:{
    borderRadius:3,
    width:60,
    paddingTop :10, paddingBottom :10,
    paddingLeft :10,paddingRight :10,

  }
})
export default CommonListViewPage;
