import React from 'react'
import { StyleSheet, Text, View, Image, FlatList, Button, TouchableOpacity, Linking } from 'react-native'
import CardDetail from './CardDetail'


const Demo = () => {
    
  return (
    <View style={styles.mainStyle}>
    <CardDetail textData='this is my 1st image' imgsrc={require('./assets/ntr1.jpg')} />
    <CardDetail textData='this is my 2nd image' imgsrc={require('./assets/nithin2.jpg')} />
    <CardDetail textData='this is my 3rd image' imgsrc={require('./assets/nithin3.jpg')} />
    <CardDetail textData='this is my 4th image' imgsrc={require('./assets/nithin4.jpg')} />
    <CardDetail textData='this is my 5th image' imgsrc={require('./assets/nature1.jpg')} />
   

 </View>
  )
}



const styles = StyleSheet.create({
    textStyle:{
        color:"darkred",
        fontSize:40,
        fontWeight:"bold",
      
    },

    imageStyle:{
        width:100,
        height:100,
      
    },
    mainStyle:{
      alignItems:"center",
    }
})


export default Demo;