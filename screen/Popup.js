import React, {useEffect, useLayoutEffect, useState}from 'react';
import { StyleSheet, Text, View,SafeAreaView, Button, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Popup() {

  const [txt, setTxt] = useState('')
  useEffect(() => {  
    loadData(); 
  }, []);

  const saveData = async (value) => {
    try {
      await AsyncStorage.setItem('popup', value)
      console.log('저장');
    } catch (e) {
    }
  }

  const loadData = async () => {
    try {
      const value = await AsyncStorage.getItem('popup')
      console.log('불러오기');

      if(value !== null) {

        setTxt(value);
      }
    } catch(e) {
    }
  }



  return (
    <View style={{ height:"90%", width:"100%", backgroundColor:'#FCF0BC', marginBottom:10}}>
      <SafeAreaView>
        <View>
        <View style={{padding:10, flexDirection:'row', 
                      alignItems:'center', justifyContent:'center'}}>
          <Text style={{fontSize:18,fontWeight: "bold"}}> 메모장 </Text>

        </View>
        </View>
      <View style={{backgroundColor:'#eeeeee', padding:10, height:"80%", width:"100%"}}>
        <TextInput value={txt} 
                    multiline 
                   onChangeText={txt => setTxt(txt)}
                  />
      </View>
      <View style={{position:'absolute', right:20, bottom:20,zIndex:10, shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.15,
    shadowRadius: 2}}>
          <View style={{width:50, height:50, backgroundColor:'#FCF0BC', borderRadius:25,
                alignItems:'center', justifyContent:'center', 
            }}>          
            <TouchableOpacity onPress={()=>saveData(txt)}>       
              <Text style={{color:'black',fontWeight: "bold" }}>저장</Text>
            </TouchableOpacity>
          </View>
        </View>
    </SafeAreaView>
   </View>
  );
}