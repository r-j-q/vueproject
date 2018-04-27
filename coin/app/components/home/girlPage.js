import React ,{Component}from 'react';
import { Alert,StyleSheet, Text, View,Image,ListView ,InteractionManager} from 'react-native';
import CommListGirlPage from '../common/commListGirlPage';
import {MEMBERS_URL} from  '../../constants/api'

import {connect} from 'react-redux';
import {fetchGirlPageData} from  '../../actions/girlPageAction';
// import {girlPageReducer} from '../../reducers'
let params={};

  class GirlPage extends  Component {
    constructor (props, context) {
        super(props, context);

        let ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(['1'])
        }
    }
    shouldComponentUpdate(nextProps,nextState){
      return nextProps.isSuccess;
    }
    componentWillReceiveProps(nextProps){
      Alert.alert("0+1",JSON.stringify(nextProps));
     // nextProps.text().then(r => Alert.alert(r))

      // this.setState({
      //   dataSource:this.state.dataSource.cloneWithRows(nextProps.data)
      // })

    }
    componentDidMount(){
      InteractionManager.runAfterInteractions(()=>{
        // setInterval(()=>{
        this.props.fetchGirlPageData(MEMBERS_URL, params, true)
        // },1000)
      })


    }
  render() {
    return (
       <View style={styles.ViewGirlPage}>
       <ListView
           style={{flex: 1}}
           enableEmptySections={true}
           dataSource={this.state.dataSource}
           renderRow={this._renderRow}
       />

        </View>

    );
  }

  _renderRow=(rowData)=>{

     // Alert.alert("1+1",JSON.stringify(rowData));
    return (
      <CommListGirlPage rowData={rowData}
      pushToChapterPage={(base_unit_name)=>{
        const  {navigate}=this.props.ONavigate;
        // navigate("ChapterPage",{base_unit_name});
      }}
       />
    )
  }
}
const styles=StyleSheet.create({
  ViewGirlPage:{
    flex:1,
    paddingTop:10,
    backgroundColor:'#333'
  }
})

export default  GirlPage=connect(
  (state)=>{
    const {data,isLoding,isSuccess,err} = state.girlPageReducer;
        return {
          data,
          isLoding,
          isSuccess,
          err
        }
      }
      , {fetchGirlPageData}
)(GirlPage);
