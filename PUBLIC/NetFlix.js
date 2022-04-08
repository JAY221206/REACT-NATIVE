import React from 'react'
import { StyleSheet, Text, View, Image, Button, Linking } from 'react-native'


const NetFlix = () => {
  return (
    <View  style={styles.container} >
      <Text style={styles.textStyle}>NetFlix Card</Text>
      <View style={styles.poster}>
          <Image style={styles.imageStyle} source={require('./assets/ntr1.jpg')}  />
    
      <View style={styles.poster_info}>
          <Text style={styles.poster_header}>Janatha Garage</Text>
          <Text  style={styles.poster_text}>Janatha Garage, starring Jr NTR and Mohanlal, is consistently riding high 
          on numbers and has emerged as the third biggest hit in Telugu cinema history. In its third week, 
          the film — in both Telugu and Malayalam — had already grossed approximately Rs 106 crore in India.

</Text>
      </View>
      <Button title='watch now' onPress={() => Linking.openURL("https://www.youtube.com/watch?v=_Nq2m5LRQ3g")}></Button>
      </View>
    
    </View>
  )
}


const styles = StyleSheet.create({

    container:{
        alignItems:"center",
        justifyContent:"center",
    },

    textStyle:{
        color:"lightbrown",
        fontSize:40,
        fontWeight:"bold",
        fontStyle:"italic",
        fontVariant:["small-caps"],
        textAlign:"center",
        paddingTop:30,
        paddingBottom:30,

    },

    imageStyle:{
        width:"100%",
        height:undefined,
        aspectRatio:1,
        alignItems:"center",
        justifyContent:"center",
        paddingTop:30,

    },

    poster_info:{
        alignItems:"center",
        justifyContent:"center",
        marginVertical:20,


    },
    poster:{
        width:250,
        borderWidth:1,
        alignItems:"center",

    },

    poster_header:{
        color:"gray",
        fontSize:20,
        fontWeight:"bold",
        fontVariant:["small-caps"],
        


    },

    poster_text:{
        paddingTop:10,
        paddingHorizontal:10,
        paddingBottom:10,


    }


})


export default NetFlix;