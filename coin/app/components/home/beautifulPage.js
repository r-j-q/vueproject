
import React ,{Component}from 'react';
import {Alert, StyleSheet, Text, View,Button,ListView,
InteractionManager
 } from 'react-native';
// import {configRoute,addToRouteStack,configRoute} from 'react-navigation-easy-helper';
import CommonListViewPage from '../common/commonListPage';

import {TICKERS_URL} from '../../constants/api'
import {fetchMainPageData} from '../../actions/mainPageAction';
import {connect} from 'react-redux';
//qignqiushixuyaodecanshu  params
let params={};
class BeautifulPage extends  Component {
  constructor (props, context) {
      super(props, context);

      let ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});
      this.state = {
          dataSource: ds.cloneWithRows([])
      }
  }

  shouldComponentUpdate(nextProps,nextState){
    return nextProps.isSuccess;
  }
  componentWillReceiveProps(nextProps){
    // Alert.alert("0+1",JSON.stringify(nextProps.data.markets));
   // nextProps.text().then(r => Alert.alert(r))

    this.setState({
      dataSource:this.state.dataSource.cloneWithRows(nextProps.data.markets)
    })

  }
  componentDidMount(){
    InteractionManager.runAfterInteractions(()=>{
      setInterval(()=>{
      this.props.fetchMainPageData(TICKERS_URL, params, true)
      },1000)
    })


  }

  render(){
      return(
          <ListView
              style={{flex: 1}}
              enableEmptySections={true}
              dataSource={this.state.dataSource}
              renderRow={this._renderRow}
          />
      );
  }
  _renderRow=(rowData)=>{

     // Alert.alert("1+1",JSON.stringify(rowData));
    return (
      <CommonListViewPage rowData={rowData}
      pushToChapterPage={(base_unit_name)=>{
        const  {navigate}=this.props.ONavigate;
        navigate("ChapterPage",{base_unit_name});
      }}
       />
    )
  }

}


export default BeautifulPage=connect(
  (state)=>{
    const {data,isLoding,isSuccess,err} = state.homePageReducer;

 console.log('fetchMainPageData',data);
        return {
          data,
          isLoding,
          isSuccess,
          err
        }
      }
      , {fetchMainPageData}
)(BeautifulPage);
