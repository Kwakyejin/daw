import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'; 
import Intro from "./screen/Intro"
import Intro2 from "./screen/Intro2"
import Login from "./screen/Login"
import Main_dawlist from './screen/Main_dawlist.js';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Intro1">
        <Stack.Screen name="Intro" component={Intro} options={{ headerShown: false }} />
        <Stack.Screen name="Intro2" component={Intro2} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Main_dawlist" component={Main_dawlist} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


