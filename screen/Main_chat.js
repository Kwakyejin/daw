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
                          color: '#472816', fontSize: 23,
                          fontWeight: 'bold',
                          marginBottom: 5,
                          padding:2,
                      }}>여행팸
                          <Text style={{ color: '#A38778', padding:2 }}> 4</Text>
                      </Text>
                      <Text style={{
                          color: '#A38778',
                          fontSize: 20,
                          padding:2,
                      }}>여기 괜찮은듯!!</Text>

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
      backgroundColor: '#FFF7EE',
      alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        width: '100%',
        height: '8%',
        alignItems: 'center',
        marginTop: '10%',
        backgroundColor: '#FFF7EE',
        justifyContent: 'center',
    },

    sentence: {
        width: '80%',
        height: '2%',
    },


    body: {
        width: '100%',
        height: '67%',
        backgroundColor: '#FFF7EE',
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
        backgroundColor: '#FFE7DB',
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