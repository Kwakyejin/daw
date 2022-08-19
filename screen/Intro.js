import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WithLocalSvg } from "react-native-svg";
import daw from '../assets/daw.svg'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Intro({navigation}) {
  return (
  <TouchableOpacity onPress={()=>navigation.navigate("Intro2")}>
    <View style={styles.style1}>
        <WithLocalSvg
            width={180}
            height={90}
            asset={daw}
        />
    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    style1:{
        backgroundColor: '#FFF7EE',
        alignItems: 'center',
        justifyContent:"center",
        width:"100%",
        height:"100%"
    }
})