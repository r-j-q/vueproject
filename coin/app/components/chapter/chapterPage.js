import React,{Component} from 'react';

import{Text,Image,Alert,StyleSheet,View,TouchableHighlight,ListView} from 'react-native';
import DropdownMenu from 'react-native-dropdown-menu';
// import Echarts from 'native-echarts';


import CommonChapterPage from '../common/commonChapterPage';
import ChangeChapterPage from './changeChapterPage';

class ChapterPage extends Component {
  constructor (props, context) {
      super(props, context);

      let ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});
      this.state = {
          dataSource: ds.cloneWithRows(['1','2','3'])
      }
  }
   static navigationOptions=({navigation})=>({
     // Alert.alert("1+1",JSON.stringify(rowData));
      // headerTitle: `${navigation.state.params.ID}details`,
       headerTitle:navigation.state.params.base_unit_name,
       tabBarVisible:false,
       headerLeft:<TouchableHighlight
      underlayColor="rgb(250,126,30)"
      onPress={()=>{
        navigation.goBack()
      }}
       >
        <Image
          source={require('../../images/back.png')}
          style={{width:25,height:25,marginLeft:10}}
        />
       </TouchableHighlight>
     });











    render(){

  // <Text style={{color:"#fff"}}>{this.props.navigation.state.params.base_unit_name}</Text>
       const {navigator}=this.props;
      return(
       <View style={styles.ViewChapter} >
       <View style={{height:50,backgroundColor:'#333',flexDirection:'row'}}>
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'#fff', numberOfLines:1,fontWeight:'bold'}}>Last Price</Text>
                <Text style={{color:'#fff',numberOfLines:1}}>0.164823</Text>
          </View>
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'#fff',numberOfLines:1,fontWeight:'bold'}}>24h Change</Text>
                <Text style={{color:'#fff',numberOfLines:1}}>0.90303</Text>

          </View>
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'#fff',numberOfLines:1,fontWeight:'bold'}}>6h highe</Text>
                <Text style={{color:'#fff',numberOfLines:1}}>0.590599</Text>
          </View>
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                  <Text style={{color:'#fff',numberOfLines:1,fontWeight:'bold'}}>4h low</Text>
                  <Text style={{color:'#fff',numberOfLines:1}}>0.034094394</Text>
          </View>

       </View>

        <ListView
            style={{flex: 1}}
            enableEmptySections={true}
            dataSource={this.state.dataSource}
            renderHeader={this._renderHeader}
            renderRow={this._renderRow}
        />
       </View>
      )
    }
    _renderHeader=()=>{
        var data = [["C", "Java", "JavaScript"], ["Python", "Ruby"], ["Swift", "Objective-C"]];

      return (<View style={{flex: 1}}>


          <View style={{flex: 1}} >
            <DropdownMenu style={{flex: 1,zIndex:99999}}
               bgColor={"#333"}                            //the background color of the head, default is grey
              tintColor={"white"}                        //the text color of the head, default is white
              selectItemColor={"red"}                    //the text color of the selected item, default is red
              data={data}
              maxHeight={410}                            // the max height of the menu
              handler={(selection, row) => {
                alert("Content:"+data[selection][row])}
              } >

              <View style={{height:300,}} >
                  <View style={{flex:1,flexDirection:'row'}}>
                   <View style={{flex:3,backgroundColor:'#ccc'}}>


                   </View>
                   <View style={{flex:1,backgroundColor:'#000'}}></View>
                   </View>
              </View>

            </DropdownMenu>
          </View>




        </View>
      )
    };
    _renderRow=(rowData)=>{

       // Alert.alert("1+1",JSON.stringify(rowData));
      return (
        <CommonChapterPage rowData={rowData}  />
      )
    };


}



const styles=StyleSheet.create({
    ViewChapter:{flex:1,backgroundColor:'#333'}
});
export default ChapterPage;
