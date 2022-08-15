import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, TextInput } from 'react-native'
import React from 'react'
//import { Component } from 'react';


export default class App extends Component {
//export default function login() {

  state = {
    text: '',
    inputText: ''
  }
  
  render() {
    return (

        <View style={styles.container}>


            <View style={styles.header}>
                <ImageBackground
                    style={{
                        height: '100%', width: '100%', resizeMode: 'stretch'
                    }}
                    source={require('../assets/login-background.svg')} />
            </View>

            <View style={styles.sentence}>
                <Text style={{
                    fontWeight: 'bold',
                    color: '#FFFFFF',
                    fontSize: 22
                }}>
                    로그인</Text>

                <Text style={{
                    fontSize: 14,
                    color: '#FFFFFF',
                    paddingTop: '3%'
                }}>
                    계정 정보를 입력해주세요</Text>
            </View>

            <View style={styles.logo}>
                <Text style={{ color: 'white' }}>이메일</Text>
                <View style={styles.holder}>
                    <Icon
                        style={styles.icon}
                        name='mail-outline'
                        color='#BEC2C2'
                        size={30}
                    />
                    <TextInput
                        style={styles.content}
                        onChangeText={(text) => { this.setState({ inputText: text }) }}
                        placeholder="mymail@domain.abc"
                    />


                </View>
                <Text style={{ color: 'white' }}>비밀번호</Text>
                <View style={styles.holder}>
                    <Icon
                        style={styles.icon}
                        name="lock-closed-outline"
                        color='#BEC2C2'
                        size={30} />

                    <TextInput
                        style={styles.content}
                        onChangeText={(text) => { this.setState({ inputText: text }) }}
                        placeholder="********"
                    />
                    <Icon
                        style={styles.icon}
                        name="eye-off-outline"
                        color='#BEC2C2'
                        size={30} />
                </View>

                <Text style={{
                    color: '#FFFFFF', fontSize: 14,
                    textAlign: 'right',
                }}>비밀번호를 잊으셨나요?</Text>

            </View>


            <View style={styles.footer}>
                <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("main(daw_list)")}>
                    <Text style={styles.word}>로그인</Text>

                </TouchableOpacity>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#292929',
      alignItems: 'center',
  },
  header: {
      width: '100%',
      height: '34%',
  },

  sentence: {
      width: '80%',
      height: '13%',
      paddingTop: '7%',
  },

  holder: {
      flexDirection: 'row',
      borderRadius: 10,
      borderColor: 'white',
      borderWidth: 1,
      height: '17%',
      backgroundColor: '#FFFFFF',
      marginTop: '3%',
      marginBottom: '8%',
  },
  content: {
      flex: 1,
      justifyContent: 'center',
      color: '#BEC2C2',
  },

  logo: {
      width: '85%',
      height: '35%',
      marginTop: '6%',
  },

  icon: {
      padding: '3%',
      marginLeft: '1%',
      marginRight: '1%',
      resizeMode: 'cover',
      alignItems: 'center',
  },
  footer: {
      width: '100%',
      height: '18%',
      paddingTop: '6%',
      flexDirection: 'row',
      justifyContent: 'space-around',
  },
  button: {
      backgroundColor: '348CFA',
      paddingHorizontal: '7%',
      height: '45%',
      borderRadius: 15,
      justifyContent: 'center',
  },
  word: {
      alignContent: 'center',
      justifyContent: 'center',
      color: '#FFFFFF',
      fontSize: 18,
  }
});