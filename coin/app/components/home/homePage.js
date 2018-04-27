import React ,{Component}from 'react';
import { StyleSheet, Text, View,Button,Image,Platform ,TouchableHighlight} from 'react-native';


// import ScrollableTabView from 'react-native-scrollable-tab-view';
import ScrollableTabView, {DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view';
import window from '../../constants/window'
import BeautifulPage from './beautifulPage';
import GirlPage from './girlPage';
import HOMEPAGE from './homePage';


// import ChapterPage from '../chapter/chapterPage';


  class HomePage extends  Component {
       static navigationOptions=({navigation})=>({
      headerTitleStyle:{ alignSelf:'center'},
      headerLeft: (
            <View style={{flex:1,flexDirection:"row"}}>
              <Text    style={{fontWeight:'bold', fontSize:20,color:'yellow',marginLeft:10}}>AppleBit</Text>
            </View>),
      headerRight:(
           <View style={{flex:1,flexDirection:"row"}}>
           <Text onPress={()=>{navigation.navigate('RegisterPage')}} style={{ fontSize:18,color:'#fff'}}>Register</Text>
           <Text style={{paddingTop:3, paddingLeft:10,paddingRight:10,color:'#fff'}}>|</Text>
           <Text  onPress={()=>{navigation.navigate('LoginPage')}} style={{ fontSize:18,color:'#fff'}}>Login</Text>
           <TouchableHighlight  onPress={() => {navigation.navigate('DrawerOpen')}}>
           <Image source={require('../../images/drowShow.png')}
           style={{width:22,  height:22,color:'#fff',marginLeft:10,marginRight:10}} />
           </TouchableHighlight ></View>)
         })


  render() {
    return (
      <View style={styles.container}>
      <ScrollableTabView
        initialPage={0}
        renderTabBar={()=><DefaultTabBar/>}
        style={{width:window.width}}
        tabBarBackgroundColor="#333"
        tabBarUnderlineStyle={{backgroundColor:"yellow",height:2}}
        tabBarActiveTextColor="yellow"
        tabBarInactiveTextColor="#fff"
      >
            <BeautifulPage    ONavigate ={this.props.navigation} tabLabel="Prices" />
            <GirlPage   ONavigate ={this.props.navigation} tabLabel="Inter" />

      </ScrollableTabView>

      </View>
    );
  }
}

export default  HomePage;
const styles = StyleSheet.create({
     container: {
         flex: 1,
         width:window.width,
         backgroundColor:"#333",
       }

 });
