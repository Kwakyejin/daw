import React, { Component,useState } from 'react';
import { TextInput, StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { WithLocalSvg } from "react-native-svg";
import background from "../assets/login-background.svg"
import Icon from 'react-native-vector-icons/Ionicons';

export default function Login({navigation}) {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

  return (
    <View style={styles.container}>
                <View style={styles.header}>
                <WithLocalSvg
                width={380}
                height={275}
                asset={background}
                />
                </View>

                <View style={styles.sentence}>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 22,
                        color:"#DADADA"
                    }}>
                        로그인</Text>

                    <Text style={{
                        fontSize: 14,
                        color: '#DADADA',
                        paddingTop: '3%'
                    }}>
                        계정 정보를 입력해주세요</Text>
                </View>

                <View style={styles.logo}>
                    <Text style={{ color:"#DADADA" }}>이메일</Text>
                    <View style={styles.holder}>
                        <Icon
                            style={styles.icon}
                            name='mail-outline'
                            color='#6C7F90'
                            size={30}
                        />
                        <TextInput
                            style={styles.content}
                            value={email}
                            onChangeText={setemail}
                            placeholder="mymail@domain.abc"
                        />

                    </View>
                    <Text style={{ color:"#DADADA" }}>비밀번호</Text>
                    <View style={styles.holder}>
                        <Icon
                            style={styles.icon}
                            name="lock-closed-outline"
                            color='#6C7F90'
                            size={30} />

                        <TextInput
                            style={styles.content}
                            value={password}
                            onChangeText={setpassword}
                            placeholder="********"
                        />
                    </View>
                </View>
                
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.word}>로그인</Text>
                    </TouchableOpacity>
                </View>
            </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor:"#292929",
        width:"100%",
        height:"100%"
    },
    header: {
        width: '100%',
        height: '38%',
 
    },

    sentence: {
        width: '80%',
        height: '13%',
        paddingTop: '14%',
        
    },

    holder: {
        flexDirection: 'row',
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 1,
        height: '20%',
        width:"100%",
        backgroundColor: '#F2F6FF',
        borderColor: 'white',
        marginTop: '3%',
        marginBottom: '3%',
        alignItems:"center"
    },
    content: {
        justifyContent: 'center',
        color: '#6C7F90',
        alignItems:"center",
        width:"100%"
    },
    logo: {
        width: '85%',
        height: '30%',
        marginTop: '10%',
        paddingLeft:"3%"
    },

    icon: {
        padding:"1%",
        marginLeft: '1%',
        marginRight: '1%',
        alignItems: 'center',

    },
    footer: {
        width: '100%',
        height: '18%',
        paddingTop: '4%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button: {
        backgroundColor: '#348CFA',
        paddingHorizontal: '7%',
        height:50,
        width:315,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems:"center"
    },
    word: {
        alignContent: 'center',
        justifyContent: 'center',
        color: '#FFFFFF',
        fontSize: 18,

    }
});

