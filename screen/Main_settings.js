import React from 'react';
import { SectionList, StyleSheet, Text, Touchable, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default function Main_settings() {
  const newTaskData = [{
    title: "개인정보",
    data: [
      {
        id: "1",
        task: "계정관리"
      }
    ]
  }];
  const completedTaskData = [{
    title: "설정",
    data: [
      {
        id: "6",
        task: "알림설정"
      },
      {
        id: "7",
        task: "이용약관"
      },
      {
        id: "8",
        task: "사업자 정보"
      }
    ]
  }];
  return (
    <View style={styles.container}>
      <SectionList
        sections={[...newTaskData, ...completedTaskData]}
        renderItem={({item})=>(
          <TouchableOpacity>
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
    backgroundColor: '#FFF7EE'
  },
  taskItem:{
    padding: 10,
    marginLeft: 10,
    marginVertical: 15,
    fontSize: 16,
    color:"#472816"
  },
  taskTitle:{
    backgroundColor: "#FFE7DB",
    fontSize: 14,
    fontWeight: "bold",
    color:"#472816",
    padding: 10,
    
  }
});