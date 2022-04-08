import React, {useState} from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'


const UseState = () => {
    const [State, setState] = useState(0)
  
  return (
      <View style={styles.mainContainer}>
          <Text style={styles.textStyle}>{State}</Text>
     
      <View>
     <TouchableOpacity onPress={() => {
         setState(State + 1)
       
     }}>
     <Text style={styles.textStyle}>INC</Text>
    

     </TouchableOpacity>
     <TouchableOpacity onPress={() => {
        
         
             setState(0)
         
        
     }}>
     <Text style={styles.textStyle}>RESET</Text>
    

     </TouchableOpacity>

     
     <TouchableOpacity onPress={() => {
         if(State >= 1)
         {
            setState(State - 1)

         }
         else{
             setState(0)
         }
       
       
     }}>
     <Text style={styles.textStyle}>DEC</Text>
    

     </TouchableOpacity>


    </View>
    </View>

    
  )
}



const styles = StyleSheet.create({
    textStyle:{
        color:"red",
        fontWeight:"bold",
        fontSize:40,
        textAlign:"center",
        borderWidth:2,
        width:150,
    },
    mainContainer:{
        alignItems:"center",
        justifyContent:"center",
    }
})


export default UseState;