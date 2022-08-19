import React, { useEffect, useState }from 'react';
import { SectionList, StyleSheet, Text, Touchable, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import axios from "axios"
import Icon from 'react-native-vector-icons/Ionicons';

export default function Main_board({route,navigation}) {
  const {name} = route.params
  const API_URL = "http://10.125.218.14:8011/get_daw_list/?name="
  const API_URL2 = "http://10.125.218.14:8011/get_share_list/"
 


  function GetData() {
    const [data, setData] = useState({});
    useEffect(() => {
      axios.get(API_URL+encodeURI(name)).then((response)=> {
        setData(response.data);
      })
    }, []);
    
    const item = (Object.values(data)).map((item) => (
      <>
      <TouchableOpacity onPress={()=>navigation.navigate("Map")}>
      <View style={{backgroundColor:"#FFF7EE", padding:30, borderWidth:0.3,borderColor:"black"}}>
      <View style={{flexDirection:"row"}}>
      <TouchableOpacity>
        <Icon
          name="heart"
          color='#EE5162'
          size={31} >
          <Text style = {{marginLeft:7}}>{item.fields.like} </Text>
          </Icon>
      </TouchableOpacity> 
        <Text style={{fontSize:20, marginTop:4, marginLeft:5}}>{item.fields.daw_name}</Text>
        </View>
        <View style={{flexDirection:"row"}}>
          <Text>View: {item.fields.view} </Text>
          <Text>daw member: {item.fields.len_member} </Text>
          <Text>공유: {item.fields.share} </Text>
        </View>
      </View>
      </TouchableOpacity>
      
      </>
    ));
  
    return item;
  }

  function GetData2() {
    const [data, setData] = useState({});
    useEffect(() => {
      axios.get(API_URL2).then((response)=> {
        console.log(response.data)
        setData(response.data);
      })
    }, []);
    
    const item2 = (Object.values(data)).map((item2) => (
      <>
      <TouchableOpacity onPress={()=>navigation.navigate("Map",{daw_name: item2.fields.daw_name})}>
      <View style={{backgroundColor:"#FFF7EE", padding:30, borderWidth:0.3,borderColor:"black"}}>
      <View style={{flexDirection:"row"}}>
      <TouchableOpacity>
        <Icon
          name="heart"
          color='#EE5162'
          size={31} >
            <Text style = {{marginLeft:7}}>{item2.fields.like} </Text>
            </Icon>
          
      </TouchableOpacity> 
      
        <Text style={{fontSize:20, marginTop:4, marginLeft:5}}>{item2.fields.daw_name}</Text>
        </View>
        <View style={{flexDirection:"row"}}>
          <Text>View: {item2.fields.view} </Text>
          <Text>daw member: {item2.fields.len_member} </Text>
          <Text>공유: {item2.fields.share} </Text>
        </View>
      </View>
      </TouchableOpacity>
      
      </>
    ));
  
    return item2;
  }
  const item = GetData()
  const item2 = GetData2()

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={{backgroundColor:"#FFE7DB", padding:3}}>
        <Text>my boards</Text>
      </View>
      {item}
    <View style={{backgroundColor:"#FFE7DB", padding:3}}>
        <Text>other boards</Text>
        {item2}
      </View>
      <View style={{backgroundColor:"#FFE7DB", padding:3}}><Text>추천 daw</Text>
      <TouchableOpacity onPress={()=>navigation.navigate("Map")}>
      <View style={{backgroundColor:"#FFF7EE", padding:30, borderWidth:0.3,borderColor:"black"}}>
        <Text>추천 daw 확인하기</Text>
      </View>
      </TouchableOpacity>
      </View>
      
    </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#262626'
  },

});