import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'; 
import Intro from "./screen/Intro"
import Intro2 from "./screen/Intro2"
import Login from "./screen/Login"
import Main_chat from './screen/Main_chat';
import Main_board from './screen/Main_board';
import Main_settings from './screen/Main_settings';
import Chatting from './screen/Chatting';
import Map from "./screen/Map"
import Icon from "react-native-vector-icons/Ionicons";
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Popup from './screen/Popup';

const Tab = createBottomTabNavigator();

const Tabs = ({navigation, route}) => {
  return (
    <Tab.Navigator
    screenOptions={{
     tabBarActiveBackgroundColor: '#FFE7DB',
     tabBarInactiveBackgroundColor:'#FFE7DB',
     tabBarInactiveTintColor:"#472816",
   }}>
      <Tab.Screen
        name="Board"
        component={Main_board}
        options={{
          tabBarIcon: ({ tabBarActiveTintColor, color, size }) => (
            <Icon
              name="document-text-outline"
              color={color}
              size = {size}
              active={tabBarActiveTintColor}
            />
          ),
          tabBarActiveTintColor: "#FF8682",
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Main_chat}
        options={{
          tabBarIcon: ({ tabBarActiveTintColor, color, size }) => (
            <Icon
              name="chatbubbles-outline"
              color={color}
              size = {size}
              active={tabBarActiveTintColor}
            />
          ),
          tabBarActiveTintColor: "#FF8682",
        }}
      />

      <Tab.Screen
        name="Setting"
        component={Main_settings}
        options={{
          tabBarIcon: ({ tabBarActiveTintColor, color, size }) => (
            <Icon
              name="settings-outline"
              color={color}
              size = {size}
              active={tabBarActiveTintColor}
            />
          ),
          tabBarActiveTintColor: "#FF8682",
        }}
      />
      
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Intro1">
        <Stack.Screen name="Intro" component={Intro} options={{ headerShown: false }} />
        <Stack.Screen name="Intro2" component={Intro2} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }}/>
        <Stack.Screen name="Chatting" component={Chatting} options={{ headerShown: true}}/>
        <Stack.Screen name="Map" component={Map} options={{ headerShown: true }}/>
        <Stack.Screen name="popup" component={Popup} options={{ headerShown: true }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const style = StyleSheet.create({

});