import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View,  FlatList, Image } from 'react-native'




const HookEffect = () => {
  const [myUserData, setMyUserData] = useState()
  const [isLoaded, setIsLoaded] = useState(true)
    const getUserData = async () => {
        try {
         const response = await fetch(
           "https://thapatechnical.github.io/userapi/users.json"
           );
         const myData = await response.json();
         setMyUserData(myData)
         setIsLoaded(false)
         console.log(myData);
        } catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        getUserData();
    
    }, [])
    
  return (
    <View>
      <FlatList data={myUserData} renderItem={({item}) => {
        return (
          <View>
          
          <View style={styles.mainStyle}>
          <Image style={styles.imageStyle} source={require('./assets/ntr1.jpg')} />
          </View>
          <View>
          <View>
            <Text style={[styles.textStyle1, styles.commonStyle]}>{item.name}</Text>
            <Text style={[styles.textStyle2, styles.commonStyle]}>{item.email}</Text>
            <Text style={[styles.textStyle3, styles.commonStyle]}>{item.mobile}</Text>
          </View>
          </View>
          </View>
        )
      }} />
    </View>
  )
}



const styles = StyleSheet.create({
    textStyle1:{
      color:"red",
      marginTop:0,
        
    },

    textStyle2:{
      color:"blue",
        
    },

    textStyle3:{
      color:"green",
     
        
    },

    commonStyle:{
      fontSize:40,
      fontWeight:"bold",
      textAlign:"center",
     
    },
    imageStyle:{
      width:250,
      height:300,
    },
    mainStyle:{
      alignItems:"center",

    }

})

export default HookEffect