import React from 'react';
import { SectionList, StyleSheet, Text, Touchable, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from "axios"

export default function Main_board({route}) {
  const {name} = route.params
  console.log(name)
  const API_URL = "http://10.125.218.14:8011/get_daw_list/?name="
  
  const result = 
    axios.get(API_URL+encodeURI(name))
      .then(response => {
        return response
      })
      .catch(error => {
        console.error(error);
      })
   console.log(result)
   
  /*const API_URL2 = "http://10.125.218.14:8011/get_daw_list/"
  const result2 = axios.get(API_URL2)
  console.log(result2)*/

  const newTaskData = [{
    title: "New Tasks",
    data: [
      {
        id: "1",
        task: "Buy groceries"
      },
      {
        id: "2",
        task: "Feed Cat"
      },
      {
        id: "3",
        task: "Sleep for 3 hours"
      },
    ]
  }];
  const completedTaskData = [{
    title: "Completed Tasks",
    data: [
      {
        id: "6",
        task: "Make a section list tutorial"
      },
      {
        id: "7",
        task: "Share this tutorial"
      },
      {
        id: "8",
        task: "Ask doubt in the Comments"
      },
      {
        id: "9",
        task: "Subscribe to logrocket"
      },
    ]
  }];
  return (
    <View style={styles.container}>
      <SectionList
        sections={[...newTaskData]}
        renderItem={({item})=>(
          <TouchableOpacity onPress={()=>navigate.navigation("Map")}>
            <Text style={styles.taskItem}>{item.task}</Text>
          </TouchableOpacity>
        )}
        renderSectionHeader={({section})=>(
          <Text style={styles.taskTitle}>{section.title}</Text>
        )}
        keyExtractor={item=>item.id}
        stickySectionHeadersEnabled
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262626'
  },
  taskItem:{
    padding: 10,
    marginVertical: 15,
    fontSize: 16,
    color:"#ffffff"
  },
  taskTitle:{
    backgroundColor: "#ffffff",
    fontSize: 14,
    fontWeight: "bold",
    padding: 10,
  }
});