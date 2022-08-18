import React, { Component, useState } from 'react';
import { TextInput, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import profile from '../assets/chat_profile.svg';
import { WithLocalSvg } from "react-native-svg";
import { ScrollView } from "react-native-gesture-handler";

export default function Chatting({navigation}) {

    const [message, setmessage] = useState("");

    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Icon
                        style={styles.icon}
                        name="chevron-back-outline"
                        color='#FFFFFF'
                        size={35} />
                </TouchableOpacity>
                <Text style={{
                    fontWeight: 'normal',
                    fontSize: 25,
                    alignContent: 'center',
                    color: '#FFFFFF'
                }}>
                    여행팸</Text>

                <TouchableOpacity style={{ marginLeft: '57%'}}>
                    <Icon
                        style={styles.icon}
                        name="menu-outline"
                        color='#FFFFFF'
                        size={35} />
                </TouchableOpacity>

            </View>
            <View style={styles.body}>
                <ScrollView style={styles.chatScrollView}>
                    <View style={styles.chatbox1}>
                        <Text style={styles.word}>
                            내 채팅</Text>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        alignSelf: 'center',
                        marginBottom: '5%',
                        justifyContent: 'center',
                        alignSelf: 'center',
                    }}>

                    
                        <WithLocalSvg
                        width={80}
                        height={80}
                        asset={profile}
                        />
                        <View style={styles.chatbox2}>
                            <Text style={styles.word}>상대방 채팅
                                말ㅇ릉ㅁㄴㅇㄻㄴㄹㅇㅁㄴㅇ랑ㄴ러밍러ㅣㅁ아ㅓ림얼</Text>
                        </View>
                    </View>

                    <View style={styles.chatbox1}>
                        <Text style={styles.word}>
                            내 채팅</Text>
                    </View>


                </ScrollView>

                <View style={styles.chatControl}>
                    <View style={styles.holder}>
                        <TextInput style={styles.chatInput}
                            value={message}
                            onChangeText={setmessage}
                            placeholder='Send a message' />
                    </View>

                    <TouchableOpacity style={{ marginLeft: '1%' }}>
                        <Icon
                            style={styles.icon}
                            name="paper-plane-outline"
                            color='#FFFFFF'
                            size={31} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginLeft: '3%'}}>
                        <Icon
                            style={styles.icon}
                            name="camera-outline"
                            color='#FFFFFF'
                            size={36} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        width: '100%',
        height: '10%',
        alignItems: 'center',
        paddingTop: '6%',
        backgroundColor: '#348CFA',
        justifyContent: 'center',
    },

    body: {
        width: '100%',
        height: '87.5%',
        backgroundColor: '#292929',
        //alignItems: 'center',
    },

    icon: {
        margin: '2%',
        alignItems: 'center',
    },

    footer: {
        width: '85%',
        height: '5%',
        justifyContent: 'flex-end',

    },

    word: {
        alignContent: 'center',
        justifyContent: 'center',
        color: '#000000',
        fontSize: 22.5,
        margin: '5%',
    },

    chatScrollView: {
        height: '120%',
        width: '100%',
        backgroundColor: '#292929',
        paddingTop: '5%',
    },

    prof: {
        margin: '3%',
        width: 60,
        height: 60,
        //resizeMode: 'contain',
    },

    chatbox1: {
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#FFCD36',
        backgroundColor: '#FFCD36',
        width: '60%',
        height: 65,
        marginLeft: '30%',
        marginBottom: '5%',
        //alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },

    chatbox2: {
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#FFFFFF',
        backgroundColor: '#FFFFFF',
        width: '60%',
        height: 65,
        marginRight: '19%',
        //marginBottom: '5%',
        //alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },

    chatControl: {
        flex:1,
        height:"20%",
        width:"20%",
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: '#348CFA',
    },
    holder: {
        borderRadius: 25,
        borderWidth: 1,
        height: '65%',
        width: '60%',
        borderColor: '#FFFFFF',
        margin: '3%',
        alignItems: 'flex-start',
    },

    chatInput: {
        //flex: 1,
        height: '100%',
        width: '90%',
        margin: '5%',
        justifyContent: 'center',
        //borderColor: '#00ff0000',
        color: '#FFFFFF',
    },
    chat: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#4A4A4A',
        margin: 2,
    },
    settingView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginRight: '1%',
    }

});