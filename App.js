import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'; 
import Intro from "./screen/Intro"
import Intro2 from "./screen/Intro2"
import Login from "./screen/Login"
import Main_dawlist from './screen/Main_dawlist.js';
import Main_chat from './screen/Main_chat';
import Main_board from './screen/Main_board';
import Main_settings from './screen/Main_settings';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Daw list"
        component={Main_dawlist}/>
      <Tab.Screen
        name="Chat"
        component={Main_chat}
      />
      <Tab.Screen
        name="공유게시판"
        component={Main_board}
      />
      <Tab.Screen
        name="Setting"
        component={Main_settings}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}


