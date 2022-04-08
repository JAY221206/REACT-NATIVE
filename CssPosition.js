import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CssPosition = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.textStyle1, styles.commonStyle]}>1st Box</Text>
      <Text  style={[styles.textStyle2, styles.commonStyle]}>2nd Box</Text>
      <Text  style={[styles.textStyle3, styles.commonStyle]}>3rd Box</Text>
      <Text  style={[styles.textStyle4, styles.commonStyle]}>4th Box</Text>
      <View style={styles.header}>
      <Text  style={[styles.textStyle5, styles.commonStyle]}>5th Box</Text>
      </View>
     
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        borderWidth:5,
        width:400,
        position:'relative',
        marginTop:100,
        marginHorizontal:10,
        height:500,

    },
    textStyle1:{
        color:"blue",
        
        

    },
    textStyle2:{
        color:"darkpink",
        right:0,
      
        
    },
    textStyle3:{
        color:"darkred",
        bottom:0,
      
      
        
    },
    textStyle4:{
        color:"green",
        bottom:0,
        right:0,
        
      

        
    },
    textStyle5:{
        color:"red",
        // marginBottom:20,
        alignSelf:"center",
        
       
    
        
    },
    commonStyle:{
        fontSize:30,
        fontWeight:"bold",
        width:100,
        borderWidth:2,
        // paddingVertical:20,
        // marginTop:20,
        // marginLeft:20,
        position:'absolute',

    },
    header:{
        alignItems:"center",
        // justifyContent:"center",

    }
})



export default CssPosition;