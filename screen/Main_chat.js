import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { WithLocalSvg } from "react-native-svg";
import { ScrollView } from "react-native-gesture-handler";
import profile from '../assets/chat_profile.svg';

export default function Main_chat({navigation}) {
    return (
      <View style={styles.container}>
      <View style={styles.body}>
          <ScrollView style={styles.chatScrollView}>
              <TouchableOpacity style={styles.chatbox} onPress={()=>navigation.navigate("Chatting")}>
                  <WithLocalSvg
                  width={80}
                  height={80}
                  style={{margin:"2%"}}
                  asset={profile}
                  />
                  <View style={styles.chatcontent}>
                      <Text style={{
                          color: '#292929', fontSize: 26,
                          fontWeight: 'bold',
                          marginBottom: 5,
                      }}>채팅방명
                          <Text style={{ color: '#979797' }}> 인원수</Text>
                      </Text>
                      <Text style={{
                          color: '#979797',
                          fontSize: 23,
                      }}>채팅내용</Text>

                  </View>
              </TouchableOpacity>
          </ScrollView>
      </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#292929',
      alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        width: '100%',
        height: '8%',
        alignItems: 'center',
        marginTop: '10%',
        backgroundColor: '#348CFA',
        justifyContent: 'center',
    },

    sentence: {
        width: '80%',
        height: '2%',
    },


    body: {
        width: '100%',
        height: '67%',
        backgroundColor: '#292929',
        //alignItems: 'center',
    },

    icon: {
        margin: '2%',
        alignItems: 'center',
    },

    footer: {
        width: '100%',
        height: '15%',
        //marginTop: '6%',
        //justifyContent: 'flex-end',
        //paddingBottom: '6%'
        backgroundColor: '#292929',
    },

    chatScrollView: {
        width: '100%',
        alignSelf: 'center',
        //backgroundColor: 'grey',
    },

    prof: {
        margin: '5%',
        width: 80,
        height: 80,
        resizeMode: 'contain',
    },

    chatbox: {
        flexDirection: 'row',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#FFFFFF',
        height: 100,
        width: "94%",

        //height: '100',
        //width: '200',
        backgroundColor: '#FFFFFF',
        margin: 20,
        //marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'flex-start',
        alignSelf: 'center',
    },

    chatcontent: {
        height: 80,
        justifyContent: 'center',

    },

});