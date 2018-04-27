import {
    Dimensions
} from 'react-native';

let window = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    BACCOLOR:'#333',//StackNavigator backgroundColor
    TITLECOLOR:'#fff',//StackNavigator titleColor
    FONTNUM:'14',//StackNavigator fontSize
    TABCOLOR:'#e91e63',//click TabNavigator color
    LISTGROUND:'#333',//list backgroundcolor
    LISTBACKGROUNDCOLOR:'#ea0070',//list fontcolor
    WINDOWFFF:'#fff',//color
    //app/components/common/commonListView.js
    moreText:"Loaded",
    pageNum :1,



}

export default window;
// imgStyle: {
//             resizeMode:'cover'
//         }
