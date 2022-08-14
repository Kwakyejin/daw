import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import { WithLocalSvg } from "react-native-svg";
import logo from "../assets/Group.svg"

const Intro2 = () => (
  <View style={styles.container}>
    <ImageBackground source={require("../assets/map.png")} resizeMode="cover" style={styles.image}>
    <LinearGradient colors={['black', 'rgba(255,255,255,0)']} style={styles.container}>
    <Text style={{color:"white",fontSize: 20, fontWeight:"300", marginRight:150, fontFamily:"Comfortaa-VariableFont_wght"}}>daw,</Text>
    <Text style={{color:"white",fontSize: 20, fontWeight:"600"}}>지도를 보는 또 다른 관점</Text>
    <WithLocalSvg
            width={200}
            height={107}
            asset={logo}
        />
    </LinearGradient>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
container: {
        flex: 1,
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
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
});

export default Intro2;