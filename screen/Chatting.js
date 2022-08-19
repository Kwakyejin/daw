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
            
            <View style={styles.body}>
                <ScrollView style={styles.chatScrollView}>
                    <View style={styles.chatbox1}>
                        <Text style={styles.word}>
                            여기 인싸들만 가는 곳이래~</Text>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        alignSelf: 'center',
                        marginBottom: '5%',
                        justifyContent: 'center',
                        alignSelf: 'center',
                    }}>
                        <WithLocalSvg
                        width={70}
                        height={70}
                        asset={profile}
                        />

                        <View style={styles.chatbox2}>
                            <Text style={styles.word}>나이먹고 그러고 싶니 친구야,,</Text>
                        </View>
                    </View>

                    <View style={styles.chatbox1}>
                        <Text style={styles.word}>
                            내맴 ^^</Text>
                    </View>


                </ScrollView>

                <View style={styles.chatControl}>
                    <View style={styles.holder}>
                        <TextInput style={styles.chatInput}
                            value={message}
                            onChangeText={setmessage}
                            placeholder='Send a message' />
                    </View>

                    <TouchableOpacity>
                        <Icon
                            style={{marginTop:6,
                                padding:5,
                                justifyContent:"center",
                                alignItems:"center"
                            }}
                            name="paper-plane-outline"
                            color='#472816'
                            size={31} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon
                            style={{marginTop:3,
                                padding:5,
                                alignItems: 'center',
                                justifyContent:"center",
                            
                            }}
                            name="camera-outline"
                            color='#472816'
                            size={36} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        height:"100%",
        width:"100%",
        backgroundColor: '#fff',
        alignItems: 'center',
    },

    body: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFE7DB',

    },

    footer: {
        width: '85%',
        height: '10%',
        justifyContent: 'flex-end',

    },

    word: {
        alignContent: 'center',
        justifyContent: 'center',
        color: '#000000',
        fontSize: 18,
        margin: '5%',
    },

    chatScrollView: {
        height: '90%',
        width: '100%',
        backgroundColor: '#FFF7EE',
        paddingTop: '5%',
    },

    prof: {
        margin: '3%',
        width: 60,
        height: 60,

    },

    chatbox1: {
        borderRadius: 15,
        backgroundColor: '#FFE7DB',
        width: '60%',
        height: 65,
        marginLeft: '30%',
        marginBottom: '5%',

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
        justifyContent: 'center',
        alignSelf: 'center',
    },

    chatControl: {
        height:"10%",
        width:"70%",
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: '#FFE7DB',
    },
    holder: {
        borderRadius: 25,
        borderWidth: 1,
        width:"100%",
        borderColor: '#472816',
        margin: '3%',
        alignItems: 'flex-start',
    },

    chatInput: {
        width:"80%",
        margin: '5%',
        justifyContent: 'center',
        color: '#472816',
    },
    chat: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#4A4A4A',
        margin: 2,
    },


});