import WebView from 'react-native-webview'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import axios from "axios"
import Icon from 'react-native-vector-icons/Ionicons';

export default class Map extends Component {
  onWebviewMessage = (e) =>{
    console.log(e.nativeEvent.data)
    const API_URL = "http://10.125.218.14:8011/make_pin/?daw_name=%ec%a0%9c%ec%a3%bc%eb%8f%84+%ec%97%ac%ed%96%89%ed%8c%b8&title=%ec%95%88%eb%85%95+%eb%aa%a8%eb%91%90%eb%93%a4&xy="
    axios.get(API_URL+encodeURI(e.nativeEvent.data)).then(function(response) {
      console.log("ss");
    }).catch(function (error) {
      console.log(error)})
  }
  
  
  render() {
    return (
      <>
        <WebView source ={{uri: "http://localhost:3000" }}
        javaScriptEnabled={true}
        style={{flex: 1 }}
        allowFileAccess={true}
        scalesPageToFit={true}
        originWhitelist={['*']}/>

        <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
        <Text style={{fontSize:16}}>이 위치를 저장하고 싶으면 버튼을 눌러주세요 :)</Text>
        <TouchableOpacity onPress={this.onWebviewMessage}>
          <Icon
          style={styles.icon}
          name='checkmark-circle'
          color='#6C7F90'
          size={30}/>
        </TouchableOpacity>
        </View>
      </>
    )
  }
}

const styles = StyleSheet.create({
  icon: {
    padding:10,
}
})