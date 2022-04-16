import React from 'react'
import { StyleSheet, Text, View, Image, FlatList, Button, TouchableOpacity, Linking } from 'react-native'


const CardDetail = (props) => {
    
  return (
    <View>
    <Text style={styles.textStyle}>{props.textData}</Text>
    <Image style={styles.imageStyle} source={props.imgsrc} />
    <Image  style={styles.imageStyle} source={{
      uri:"https://www.indiawords.com/wp-content/uploads/2017/11/cute-and-side-look-image-of-nani.jpg"
    }}  />
   

 </View>
  )
}



const styles = StyleSheet.create({
    textStyle:{
        color:"gray",
        fontSize:40,
        fontWeight:"bold",
      
    },

    imageStyle:{
        width:550,
        height:700,
      
    }
})


export default CardDetail;
