import React from "react";
import { ImageBackground, StyleSheet, Text, View, Button } from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import { WithLocalSvg } from "react-native-svg";
import logo from "../assets/Group-2.svg"
import title from "../assets/dawtitle.svg"
import { TouchableOpacity } from "react-native-gesture-handler";

const Intro2 = () => (
  <View style={styles.container}>
    <ImageBackground source={require("../assets/map.png")} resizeMode="cover" style={styles.image}>
    <LinearGradient colors={['black', 'rgba(255,255,255,0)']} style={styles.container}>
      <View style ={{marginBottom:"20%"}}>
    <WithLocalSvg
            width={200}
            height={40}
            asset={title}
        />
    <WithLocalSvg
            width={200}
            height={107}
            asset={logo}
            shadowColor = "#000000"
            shadowOpacity= {0.5}
        />
        </View>
      <View style={{justifyContent:"flex-end",position : "absolute", bottom: 50 }}>
      <TouchableOpacity>
      <View style={{ height:52, width:315, backgroundColor:"#292929", alignItems:"center", justifyContent:"center", borderRadius:10}}>
        <Text style={{color:"white"}}>LOG IN</Text>
      </View>
      </TouchableOpacity>
      </View>
    </LinearGradient>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
container: {
        flex: 1,
        height:"100%",
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
    },
  image: {
    flex: 1,
    width:"100%",
    height:"100%",
    alignContent:"center",
    justifyContent: "center"
  },
});

export default Intro2;