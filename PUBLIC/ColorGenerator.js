import React, {useState} from 'react'
import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native'



const ColorGenerator = () => {
    const [newColor, setNewColor] = useState([])
    const randomColor = () => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);

        return `rgb(${red},${green},${blue})`;
        
    }
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity style={styles.buttonStyle} onPress={() =>{
          setNewColor([...newColor,  randomColor()])
      
        
      }}>
      <Text style={styles.textStyle}>Generate Random Color</Text>
      </TouchableOpacity>
      <FlatList 
      keyExtractor={(key) => key}
      data={newColor} renderItem={({item}) => {
          return (
            <View style={styles.header} >
          <Text style={{
              backgroundColor:item,
              width:300,
              height:100,
              borderRadius:5,
              marginTop:20,
              color:"white",
              textAlign:"center",
              fontSize:20,
              fontWeight:"bold",
           
          }}>{item}

          </Text>
      </View>
          )
      }} />
     
    </View>
  )
}



const styles = StyleSheet.create({
    mainContainer:{
        marginTop:50,
    },

    buttonStyle:{
        backgroundColor:"darkred",
        position:"relative",
        overflow:"hidden",
        color:"red",
        paddingVertical:10,
        margin:0,
        paddingHorizontal:15,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:5,

    },

    textStyle:{
        fontVariant:["small-caps"],
        fontSize:40,
        fontWeight:"bold",
        color:"white",
        textAlign:"center",
    },

    imageStyle:{
        marginVertical:50,
        paddingHorizontal:30,
        display:"flex",
    },
    header:{
        alignItems:"center",
    }
})


export default ColorGenerator;