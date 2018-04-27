import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {Text,Image,Alert,Modal,StyleSheet,View,Navigator,TouchableHighlight,ListView,PixelRatio,TouchableOpacity} from 'react-native';
import window from '../../constants/window';
import BuyGirlPage from './buyPage/buyGirlPage';

import {BUY_URL,SELL_URL,APIRUL} from '../../constants/api'
import {mainBYUPageData} from '../../actions/mainBUYAction';
import CommListChapterGirlPage from '../common/commListChapterGirlPage'
import {connect} from 'react-redux';

let APTSIN= APIRUL+'orders.json';

  class ChapterGirlPage extends Component {
    static propTypes = {
       animationType: PropTypes.string,
       market: PropTypes.string,
       flexDirection: PropTypes.string,
       leftPress: PropTypes.func,
       props: PropTypes.object
      }

    constructor(props) {
            super(props);
            let ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});
            this.state = {
              dataSourceS: ds.cloneWithRows([]),
              animationType: 'none',
              modalVisible: false,
              transparent: true,
              paramsid:{
              id:this.props.navigation.state.params.ROWDATA.market.id,
            },
              params:{
              id:this.props.navigation.state.params.ROWDATA.market.id,
              market:this.props.navigation.state.params.ROWDATA.ticker.change
            },

            }
        }
// rowData.market.base_unit_name

  static navigationOptions=({navigation})=>({

      headerTitle:(
            <View style={{flex:1,flexDirection:"row",justifyContent:'center',alignItems:'center',}}>
              <Text  style={{fontWeight:'bold', fontSize:20,color:'white',}}>{navigation.state.params.ROWDATA.currency}</Text>
            </View>),
      tabBarVisible:false,
      headerRight:(
           <View style={{flex:1,flexDirection:"row"}}>
           <TouchableHighlight   onPress={() => {
              navigation.state.params.navigatePress()
              }}>
           <Image source={require('../../images/ma.png')}
           style={{width:22, height:22,color:'#fff',marginLeft:10,marginRight:10}} />
           </TouchableHighlight >
           <TouchableHighlight  onPress={() => {navigation.navigate('DrawerOpen')}}>
           <Image source={require('../../images/drowShow.png')}
           style={{width:22, height:22,color:'#fff',marginLeft:10,marginRight:10}} />
           </TouchableHighlight ></View>),
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



        _setModalVisible = (visible) => {
            this.setState({ modalVisible: visible });
          }

          // startShow=()=>{
          //   alert('66666666');
          // }
          // export let BUY_URL=apiurl+APIRUL+'orders.json';
          //
          // export let SELL_URL=apiurl+APIRUL+'orders.json';

          //   market side volume

          componentWillReceiveProps(nextProps){
            Alert.alert("111111+1",JSON.stringify(nextProps.data));
           // nextProps.text().then(r => Alert.alert(r))
           this.setState({
                   dataSourceS:this.state.dataSourceS.cloneWithRows(nextProps.data)
                 })



          }


    componentDidMount(){
      // market=btceur&price=2000&side=buy&tonce=1522377353989&volume=1
        // Alert.alert("BUY_BUY",JSON.stringify(this.state.params));
          // let id=  this.props.navigation.state.params.ROWDATA.market.id;
          // let price=  this.props.navigation.state.params.ROWDATA.market.price;
          // let side=  this.props.navigation.state.params.ROWDATA.market.side;
          // let volume=  this.props.navigation.state.params.ROWDATA.market.volume;
          let params={
            market:"btceur",
            limit:100,
            order_by:"desc",
            page:0,
            state:"wait"

          }

        this.props.mainBYUPageData(BUY_URL,params,APTSIN, true);

            this.props.navigation.setParams({ navigatePress:this._setModalVisible });
        }
        _pressBuy=(e)=>{
          if(e===1){
            const  {navigate}=this.props.navigation;
            let BUY_ORDERS={
                  market:this.props.navigation.state.params.ROWDATA.market.id,
                  side:'buy',
                  volume:this.props.navigation.state.params.ROWDATA.ticker.vol,
            };
             navigate("BuyGirlPage",BUY_ORDERS);
          }else {
            const  {navigate}=this.props.navigation;
            let BUY_ORDERS={
                  market:this.props.navigation.state.params.ROWDATA.market.id,
                  side:'buy',
                  volume:this.props.navigation.state.params.ROWDATA.ticker.vol,
            };
             navigate("SellGirlPage",BUY_ORDERS);
          }

          }

        _renderRow=(rowData)=>{

             // Alert.alert("1+1",JSON.stringify(rowData));
            return (
              <CommListChapterGirlPage rowData={rowData} />
            )}
    render(){
        const  {navigate}=this.props.navigation;
          // Alert.alert("999999",JSON.stringify(this.props.navigation));

            let VIEWYOUR=<View style={{display: 'flex',height:window.height/2,width:window.width,backgroundColor:'#333',justifyContent:'center', alignItems:'center',}}>
                <Text style={{fontSize:18,fontWeight:'bold',color:'#fff'}}>you have no transactions</Text>
                <Text style={{fontSize:12,fontWeight:'bold',color:'#fff'}}>buy bitcoin cash now  anc your</Text>
                <Text style={{fontSize:12,fontWeight:'bold',color:'#fff'}}>transactiond will be shown here</Text>
            </View>;



      let modalBackgroundStyle = {
           backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.5)' : 'red',
       };
       let innerContainerTransparentStyle = this.state.transparent
      ? { backgroundColor: '#fff', paddingTop: 5,paddingBottom:20 }  : null;

       // const {navigator}=this.props;  1296db
      return(
        <View style={{ alignItems: 'center', flex: 1 ,backgroundColor:'#fff',}}>
        <Modal
          animationType={this.state.animationType}
          transparent={this.state.transparent}
          visible={this.state.modalVisible}
          onRequestClose={() => { this._setModalVisible(false) } }

          >
          <View style={[styles.container, modalBackgroundStyle]}>
            <View style={[styles.innerContainer, innerContainerTransparentStyle]}>

              <View style={{flexDirection:"center",alignItems:'center',paddingBottom:10}}>
                    <Text>Bitcoin Cash Address</Text>

              </View>
              <TouchableHighlight style={{width:22, height:22,position:'absolute',right:10,}} onPress={this._setModalVisible.bind(this,false) }>
              <Image source={require('../../images/cuo.png')}
              style={{width:22, height:22,position:'absolute',right:-5,}} />
              </TouchableHighlight>

            <View style={{flexDirection:"center",alignItems:'center'}}>
                    <Image
                    source={require('../../images/sharema.png')}
                    style={{width:100, height:100}} />
            </View>
            <View style={{flexDirection:'row',borderColor:"#ccc",borderTopWidth:1/PixelRatio.get(),marginTop:10}}>
                  <View style={{flex:1,borderColor:"#ccc",borderRightWidth:1/PixelRatio.get(), backgroundcolor:'#ccc',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        <Image
                        source={require('../../images/share.png')}
                        style={{width:16, height:18,marginTop:10}} />
                        <Text
                          onPress={this._setModalVisible.bind(this,false) }
                          style={{fontSize:16,marginTop:10,color:'#1296db',marginLeft:10}}>
                          Share
                        </Text>
                  </View>
                  <View style={{flex:1,flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
                        <Image
                        source={require('../../images/copy-o.png')}
                        style={{width:20, height:20,paddingRight:10,marginTop:10}} />
                          <Text
                          onPress={this._setModalVisible.bind(this,false) }
                          style={{fontSize:16,marginTop:10,color:'#1296db'}}>
                          Copy address
                        </Text>
                  </View>

            </View>

            </View>
          </View>
        </Modal>


        <View style={{height:100,width:window.width,backgroundColor:'#333', justifyContent:'center',alignItems:'center'}}>
        <Text style={{ fontSize: 30,color:'#fff' }} >{this.props.navigation.state.params.ROWDATA.ticker.last}</Text>
        <Text style={{ fontSize: 20,color:'#fff' }} >${this.state.params.market}</Text>
        </View>

        <View style={{height:40,width:window.width,flexDirection:'row',marginTop:10,paddingRight:10,paddingLeft:10,marginBottom:10}}>
            <TouchableOpacity style={{flex:1, justifyContent:'center',backgroundColor:'#333',alignItems:'center',borderRadius:5,marginRight:5,}}
              onPress={()=>this._pressBuy(1)}>
            <View style={{flex:1, justifyContent:'center',backgroundColor:'#333',alignItems:'center',borderRadius:5,marginRight:5,}}>
                <Text style={{ fontSize: 18,color:'#fff' }} >Buy</Text>
            </View>
            </TouchableOpacity>
        <TouchableOpacity style={{flex:1, justifyContent:'center',backgroundColor:'#333',alignItems:'center',borderRadius:5,marginRight:5,}}
            onPress={()=>this._pressBuy(2)}>
            <View style={{flex:1, justifyContent:'center',backgroundColor:'#333',marginLeft:5,alignItems:'center',borderRadius:5}}>
                <Text style={{ fontSize: 18,color:'#fff' }} >Sell</Text>
            </View>
        </TouchableOpacity>
        </View>

        <View style={{height:window.height,backgroundColor:'#333', width:window.width, }}>



               <ListView
                  style={{flex: 1}}
                  enableEmptySections={true}
                  dataSource={this.state.dataSourceS}
                  renderRow={this._renderRow}
                  renderSectionHeader = {this.renderSectionHeader}
              />

        </View>



      </View>
      )
    }


    renderSectionHeader=()=>{
            return (
              <View style={{height:30,width: window.width,flexDirection:'row',backgroundColor:'#333'}}>
              <View style={{height:30,flexDirection:'row',}}>
                    <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
                      <Text numberOfLines={1} style={{color:'#fff',fontSize:18}}>prices</Text>
                    </View>
                    <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
                      <Text numberOfLines = {1} style={{color:'#fff',textAlign:'center'}}>ordType</Text>
                      </View>
                      <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
                      <Text numberOfLines = {1} style={{color:'#fff',textAlign:'center'}}>volume</Text>
                      </View>
                      <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
                      <Text numberOfLines={1} style={{color:'#fff',fontSize:18}}>market</Text>
                      </View>
                      <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
                      <Text numberOfLines = {1} style={{color:'#fff',textAlign:'center'}}>avgprice</Text>
                      </View>
                      <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
                      <Text numberOfLines = {1} style={{color:'#fff',textAlign:'center'}}>side</Text>
                      </View>

              </View>
              </View>
            );
          }

}



const styles=StyleSheet.create({
  container: {
  flex: 1,
  justifyContent: 'center',
  paddingLeft:20,
  paddingRight:20,


},
innerContainer: {
  borderRadius: 10,
  alignItems: 'center',
},
yourhave:{
  justifyContent:'center',
  alignItems:'center',

}

});
export default ChapterGirlPage=connect(
  (state)=>{
    const {data,isLoding,isSuccess,err} = state.mainPageReducer;
        return {
          data,
          isLoding,
          isSuccess,
          err
        }
      }
      , {mainBYUPageData}
)(ChapterGirlPage);
