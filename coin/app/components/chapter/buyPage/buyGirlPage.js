import React,{Component} from 'react';

import{Image,Alert,StyleSheet,View,TouchableHighlight,ListView,TextInput,Text,TouchableOpacity} from 'react-native';
// import DropdownMenu from 'react-native-dropdown-menu';
import window from '../../../constants/window';
import {fetchBuyPageData} from  '../../../actions/buyPageAction';
import {BUY_URL,SELL_URL,APIRUL} from '../../../constants/api';
import {connect} from 'react-redux';
import BuyInput from './buyInput/buyInput';

let APTSIN= APIRUL+'orders.json';

// import CommonChapterPage from '../common/commonChapterPage';
// import ChangeChapterPage from './changeChapterPage';

class BuyGirlPage extends Component {
  constructor (props, context) {
      super(props, context);
      this.state = {
        paramsa:'',
        paramsb:'',
        paramsc:'',
        paramsd:'',
        pricesAfter:'prices',
        pricesBuy:'EUR',
        pricesAmount:'Amount',
        pricesBtc:'BTC',
        pricesTotal:'Total',
        pricesEur:'EUR',
        pricesFee:'Fee',
        pricesEur:'EUR'
      }
  }

  componentWillReceiveProps(nextProps){
    Alert.alert("KKKKK",JSON.stringify(nextProps));
   // nextProps.text().then(r => Alert.alert(r))

    // this.setState({
    //   dataSourceS:this.state.dataSourceS.cloneWithRows(nextProps.data.accounts)
    // })

  }

  componentDidMount(){
      // Alert.alert("params333",JSON.stringify(this.props.navigation.state.params));

      //   let id=  this.props.navigation.state.params.id;
      //   let params={
      //     market:id
      //   }
      // <Text style={{color:"#fff"}}>{this.props.navigation.state.params.base_unit_name}</Text>
      this.props.fetchBuyPageData(BUY_URL,this.props.navigation.state.params,APTSIN, true)


      // this.setState({
      //       params.market:this.props.navigation.state.params.ROWDATA.currency
      // });

          this.props.navigation.setParams({ navigatePress:this._setModalVisible })
      }




      handleView=(type,val)=>{
           // Alert.alert("valhandleEmail",JSON.stringify(type));
           // Alert.alert("88data",JSON.stringify(inputData));
          // var val = this.refs.paramsa.value;
          // Alert.alert("88data",JSON.stringify(inputData));
          // val = val.replace(/[^0-9|a-z|\@|\.]/ig,"");
           if(type=="paramsa"){
             this.setState({paramsa: val});
           }else if (type=="paramsb") {
              this.setState({paramsb: val});
           }else if (type=="paramsc") {
              this.setState({paramsc: val});
           }else if (type=="paramsd") {
              this.setState({paramsd: val});
           }

     }
   render(){
     let  paramsa={ pricesAfter:this.state.pricesAfter,pricesBuy:this.state.pricesBuy, };
     let  paramsb={ pricesAfter:this.state.pricesAmount,pricesBuy:this.state.pricesBtc, };
     let  paramsc={ pricesAfter:this.state.pricesTotal,pricesBuy:this.state.pricesEur, };
     let  paramsd={ pricesAfter:this.state.pricesFee,pricesBuy:this.state.pricesEur, };


       const {navigator}=this.props;
      return(
       <View style={styles.ViewChapter} >
          <BuyInput
          name ="paramsa"
          handleView={this.handleView}
            {...paramsa}
          />
          <BuyInput
          name="paramsb"
          handleView={this.handleView}
            {...paramsb}
          />
          <BuyInput
          name="paramsc"
          handleView={this.handleView}
            {...paramsc}
          />
          <BuyInput
          name="paramsd"
          handleView={this.handleView}
            {...paramsd}
          />
          <TouchableOpacity
            onPress={this.submitebuy}
          >
          <View style={styles.buy}>
            <Text style={styles.buyText}>Buy</Text>
          </View>
          </TouchableOpacity>

       </View>
      )
    }

submitebuy=()=>{
     Alert.alert("val",JSON.stringify(
       this.state.paramsa+"999"+this.state.paramsb+"000"+
       this.state.paramsc+"999"+this.state.paramsd
     ));
// this._onChangeText()
}


}



const styles=StyleSheet.create({
    ViewChapter:{flex:1,backgroundColor:'#333',},
    buy:{

      height:40,
      backgroundColor:"#ccc",
      alignItems:'center',
      justifyContent:'center',

      marginLeft:10,
      marginRight:10,
      borderRadius:5
    },
    buyText:{
      fontSize:20,
      color:'#ea0070',
      fontWeight:'bold',
    }
});

export default  BuyGirlPage=connect(
  (state)=>{
    const {data,isLoding,isSuccess,err} = state.buyPageReducer;
        return {
          data,
          isLoding,
          isSuccess,
          err
        }
      }
      , {fetchBuyPageData}
)(BuyGirlPage);
