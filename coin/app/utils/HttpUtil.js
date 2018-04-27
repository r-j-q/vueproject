//shujuqignqiu  新增加了内
//url  successCallback failCallback

var  key = "UaZnKe1JAotWiL7yI2zhvlW3KnTihwc1xVwzt2TZ";
var access = "ny7MGZ6kjXhKH80okBB3GCXxPXELNBA8kXCcU2nV";

import {
    Alert,
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    TouchableHighlight
} from 'react-native';

  let HttpUtil={
  //get
  fetchGet:(url,params,APTSIN,successCallback,failCallback)=>{
    var Gkey=key;
    var  GSecret = access;
    let  nonce = require('nonce')();
    let tonces=parseInt(nonce()/100);
     params.tonce = tonces;



    var  paramString = Object.keys(params).sort().map(function(param){
      return encodeURIComponent(param) + '=' + encodeURIComponent(params[param]);
       }).join('&');
      var crypto = require("crypto-js");
          // GET|/api/v2/members/me.json|access_key=UaZnKe1JAotWiL7yI2zhvlW3KnTihwc1xVwzt2TZ&tonce=1520911488466


        var payload='GET|/'+APTSIN+'|access_key='+key+''+'&tonce='+tonces;
        var signature = crypto.HmacSHA256(payload,GSecret).toString();


      // Alert.alert("payload= ", JSON.stringify(signature));

    params.signature=signature
    var  paramStrings = paramString +"&"+encodeURIComponent('signature') + "=" + encodeURIComponent(signature)

    if(params){
      // var paramString=Object.keys(params)
      //     .reduce((a,k)=>{
      //       a.push(k+"="+encodeURIComponent(params[k]));
      //       return a;
      //     },[])
      //     .join('&');
        url +="?access_key="+key+""+"&"+paramStrings;
          Alert.alert("responseURL= ",JSON.stringify(url));
    }
    fetch(url)
          .then((response)=>{
                Alert.alert("responseSSSSS ",JSON.stringify(response));

            return response.json();
          })
          .then((responseObj	
            Alert.alert("responseSccuees ",JSON.stringify(responseObj));
            return successCallback.json();
          })
          .catch((error)=>{
              Alert.alert("responseError ",JSON.stringify(error));

            failCallback(error);
          }).done();
  },
  fetchGetTWO: (url, params, successCallback, failCallback) => {

         if (params) {
            var paramsBody = Object.keys(params)
                .reduce((a, k) => {
                    a.push(k + "=" + encodeURIComponent(params[k]));
                    return a;
                }, [])
                .join('&');
            url += "" + paramsBody;
        }
        // Alert.alert("1+1",url);
        fetch(url)
            .then((response) => {
              // Alert.alert("response ",response.json());
              // response.text().then(r => Alert.alert(r))

              return response.json();
            })
            .then((responseObj) => {
              // Alert.alert("response json",JSON.stringify(response));
              // responseObj.text().then(r => Alert.alert(r))
              successCallback(responseObj)
            })
            .catch((error) => {
              console.log(error);
              Alert.alert("error ",error);
              // failCallback(error)
            }).done();
    },
//post
fetchPost: (url, params, successCallback, failCallback) => {


        var paramsBody = Object.keys(params)
            .reduce((a, k) => {
                a.push(k + "=" + encodeURIComponent(obj[k]));
                return a;
            }, [])
            .join('&');
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: paramsBody + "&key=664b9884a4c2199b15ccfcfbdd7dbf5c"
        })
            .then((response) => response.json())
            .then((responseObj) => successCallback(responseObj))
            .catch((error) => failCallback(error)).done();
    }
}
export default HttpUtil;
