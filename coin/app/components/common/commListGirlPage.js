import React, { Component ,PropTypes} from 'react';
import {
    Alert,StyleSheet,ListView,Image, View, Text,TouchableOpacity,TouchableHighlight
} from 'react-native';
import window from '../../constants/window'
class CommListGirlPage extends Component {
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
            //this.props.pushToChapterPage(rowData.market.base_unit_name);
          }}
        >
        <View style={styles.Content}>
          <View style={{flex:1,alignItems:'center',justifyContent:'center',}}>
            <Image
                source={require('../../images/prices.png')}
                style={{width:25,height:25}}
            />
            <Text style={{color:'#fff'}}>111111</Text>
          </View>
          <View style={{flex:2}}>
            <Text numberOfLines={1} style={{color:'#fff',fontSize:18,fontWeight:'bold'}}>432435</Text>
            <View style={{flexDirection:'row',marginTop:8}}>
            <Image
                source={require('../../images/suo.png')}
                style={{width:15,height:14}}
            />
            <Text style={{color:'#fff'}}>111111</Text>
            </View>
          </View>
          <View style={{flex:1}}>
              <Text style={{color:'#fff'}}>weeewfe</Text>
              <Text style={{marginTop:8,color:'#fff'}}>sfstssdde</Text>
          </View>
        </View>
        </TouchableHighlight>
      )
    }


}
const styles=StyleSheet.create({
  Content:{height:60,
    flexDirection:'row',alignItems:'center',justifyContent:'center',
   marginLeft:5,marginRight:5,borderWidth:1,borderColor:"#ccc"}
})
export default CommListGirlPage;
