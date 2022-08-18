import WebView from 'react-native-webview'
import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class Main_board extends Component {
  onWebviewMessage = (e) =>{
    console.log(e.nativeEvent.data)

  }
  
  render() {
    return (
        <WebView source ={{uri: "http://172.30.1.21:3000/" }}
        onMessage={this.onWebviewMessage}
        javaScriptEnabled={true}/>

        /*const x = encodeURI(latlng.getLng())
  const y = encodeURI(latlng.getLat())
        const API_URL = "http://10.125.218.14:8011/make_pin/?daw_name=%ec%a0%9c%ec%a3%bc%eb%8f%84+%ec%97%ac%ed%96%89%ed%8c%b8&title=%ec%95%88%eb%85%95+%eb%aa%a8%eb%91%90%eb%93%a4"+"&x="+x+"&y="+y
        axios.get(API_URL).then(function(response) {
                  console.log(response);
                }*/
    )
  }
}

const styles = StyleSheet.create({})