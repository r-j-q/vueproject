import { Alert } from 'react-native';
// Alert.alert("11111",'9999');
import {
    STATR_FETCH_MAIN_PAGE_DATA,
    FETCH_MAIN_PAGE_DATA
}  from '../constants/type';


import HttpUtil from '../utils/HttpUtil';
// import store from '../store/store';
// console.log('11111',HttpUtil.fetchGetTWO());
export let fetchMainPageData = (url,params,isLoading) => {
  // console.log("8888888=",url,params,isLoading);
   // let urll ="http://ex1.dev5.net/api/v2/tickers";
   return (dispatch) =>{
// Alert.alert("2+2",dispatch.toString());

        dispatch({
            isLoading,
            type: STATR_FETCH_MAIN_PAGE_DATA
        });
        HttpUtil.fetchGetTWO(
            url,
            params,
            (data) => {
                // Alert.alert(data);
              console.log("KKKKK=",data);
                dispatch({
                    type: FETCH_MAIN_PAGE_DATA,
                    data,
                    isSuccess: true
                });
            },
            (err) => {
              console.log("rrrrrr=",err);
                dispatch({
                    type: FETCH_MAIN_PAGE_DATA,
                    err,
                    isSuccess: false
                });
            }
        )
        // Alert.alert("11111",'9999');
          // Alert.alert("11111",
          // HttpUtil.fetchGetTWO(
          //   url,params,
          //   (data) => {
          //     console.log("KKKKK=",data);
          //       dispatch({
          //           type: FETCH_MAIN_PAGE_DATA,
          //           data,
          //           isSuccess: true
          //       });
          //   }
          //   ,
          //   (err) => {
          //     console.log("rrrrrr=",err);
          //       dispatch({
          //           type: FETCH_MAIN_PAGE_DATA,
          //           err,
          //           isSuccess: false
          //       });
          //   }
          // ));
    }
}
