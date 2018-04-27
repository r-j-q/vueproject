import React,{Component}from 'react';
import { StyleSheet, Text,StatusBar, View,Image,Platform,TouchableHighlight,TouchableOpacity } from 'react-native';

// import Ionicons from 'react-native-vector-icons/Ionicons';
import window from '../constants/window';
import HomePage from './home/homePage';
import DiscoverPage from './discover/discoverPage';
import ChoicePage from './choice/choicePage';
import MePage from './me/mePage';

import ChapterPage from './chapter/chapterPage';

import LoginPage from './login/loginPage';
import RegisterPage from './register/registerPage';
import { StackNavigator,TabNavigator,DrawerNavigator } from 'react-navigation';


import { Provider } from 'react-redux';
import store from '../store/store';


//Prices
let homeNav=StackNavigator({
    HomePage:{screen:HomePage},
    LoginPage:{screen:LoginPage},
    RegisterPage:{screen:RegisterPage},
    ChapterPage:{screen:ChapterPage}
},{
  navigationOptions:({ navigation }) => ({
    tabBarLabel:"Prices",
    tabBarIcon: ({ tintColor }) => (
        <Image
        source={require('../images/prices.png')}
        style={[{tintColor: tintColor},styles.icon]}
        />
      ),
    drawerIcon: ({ tintColor }) => (
        <Image
        source={require('../images/prices.png')}
        style={[{tintColor: tintColor},styles.icon]}
        />
      ),
    headerStyle: { backgroundColor: window.BACCOLOR},
    headerTitleStyle:{color:window.TITLECOLOR,fontSize:window.FONTNUM}
  })
});

//Accounts TouchableHighlight
let discoverNav=StackNavigator({
    DiscoverPage:{screen:DiscoverPage},
    LoginPage:{screen:LoginPage},
    RegisterPage:{screen:RegisterPage},
    ChapterPage:{screen:ChapterPage}
},{
  navigationOptions :({navigation})=>({
    tabBarLabel:"Accounts",
    tabBarIcon: ({ tintColor }) => (
        <Image
        source={require('../images/accounts.png')}
        style={[{tintColor: tintColor},styles.icon]}
        />
      ),
      drawerIcon: ({ tintColor }) => (
          <Image
          source={require('../images/accounts.png')}
          style={[{tintColor: tintColor},styles.icon]}
          />
        ),
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
           <Image source={require('../images/drowShow.png')}
           style={{width:22, height:22,color:'#fff',marginLeft:10,marginRight:10}} />
           </TouchableHighlight ></View>),
      headerStyle: { backgroundColor: window.BACCOLOR},
      headerTitleStyle:{color:window.TITLECOLOR,fontSize:window.FONTNUM}

  })
  });
//Alerts
let choiceNav=StackNavigator({
    ChoicePage:{
      screen:ChoicePage
    },
    LoginPage:{screen:LoginPage},
    RegisterPage:{screen:RegisterPage},
    ChapterPage:{screen:ChapterPage}
},{
  navigationOptions:({navigation})=>({
      tabBarLabel:"Alerts",
      tabBarIcon: ({ tintColor }) => (
          <Image
          source={require('../images/alerts.png')}
          style={[{tintColor: tintColor},styles.icon]}
          />
        ),
        drawerIcon: ({ tintColor }) => (
            <Image
            source={require('../images/alerts.png')}
            style={[{tintColor: tintColor},styles.icon]}
            />
          ),
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
             <Image source={require('../images/drowShow.png')}
             style={{width:22,  height:22,color:'#fff',marginLeft:10,marginRight:10}} />
             </TouchableHighlight ></View>),
      headerStyle: { backgroundColor: window.BACCOLOR},
      headerTitleStyle:{color:window.TITLECOLOR,fontSize:window.FONTNUM}
  })
  });
//Settings
let meNav=StackNavigator({
    MePage:{
      screen:MePage
    },
    LoginPage:{screen:LoginPage},
    RegisterPage:{screen:RegisterPage},
    ChapterPage:{screen:ChapterPage}
},{
  navigationOptions:({navigation})=>({
    tabBarLabel:"Settings",
    tabBarIcon: ({ tintColor }) => (
        <Image
        source={require('../images/shezhi.png')}
        style={[{tintColor: tintColor},styles.icon]}
        />
      ),
      drawerIcon: ({ tintColor }) => (
          <Image
          source={require('../images/shezhi.png')}
          style={[{tintColor: tintColor},styles.icon]}
          />
        ),
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
         <Image source={require('../images/drowShow.png')}
         style={{width:22,  height:22,color:'#fff',marginLeft:10,marginRight:10}} />
         </TouchableHighlight ></View>),
    headerStyle: { backgroundColor: window.BACCOLOR},
    headerTitleStyle:{color:window.TITLECOLOR,fontSize:window.FONTNUM}
  })
  });


//TabBar
const TabBar=TabNavigator ({
    Prices:{screen:homeNav},
    Accounts:{screen:discoverNav},
    Alerts:{screen:choiceNav},
    Settings:{screen:meNav}
},{
    tabBarPosition: 'bottom',
    // animationEnabled: true,
    // swipeEnabled:false,
    // backBehavior:'none',
    tabBarOptions: {

        activeTintColor: window.TABCOLOR,
      //  inactiveTintColor:'#999',
        showIcon:true,//jianrong android
        tabStyle: {
            height:50,
        },
        indicatorStyle: {
            // backgroundColor:"red",
            height: 0 ,
        },
        labelStyle: {
            fontSize: 14,
          },
        iconStyle: {
                marginTop: 0
            },
    }
});

let Drawer=DrawerNavigator({
    Prices:{screen:homeNav},
    Accounts:{screen:discoverNav},
    Alerts:{screen:choiceNav},
    Settings:{screen:meNav}
}, {
  drawerWidth:200,
  drawerPosition:"right",
  activeTintColor: window.TABCOLOR,
  // activeBackgroundColor:'#fff',
  // inactiveTintColor:'#666', //weixuanzhognwenzhiyanshe
  // inactiveBackgroundColor:'#fff'//weixuanzhongbeijingyanshe
 });


class Root extends  Component {
  render() {

    // let RootView=Platform.OS==='ios'?TabBar:Drawer;
    let RootView=Platform.OS==='ios'?Drawer:Drawer;
    return (
      <Provider store={store}>
        <View style={styles.container}>
         <StatusBar barStyle="light-content"
          networkActivityIndicatorVisible={true}
         />
            <RootView/>
          </View>

      </Provider>
         );
  }
}
export default Root;
const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  icon: {
       width: 26,
       height: 26,
   }
});
