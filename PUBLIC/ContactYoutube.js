import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert  } from 'react-native'
import CheckBox from "expo-checkbox";
import {
     useFonts, 
    JosefinSans_400Regular, 
    JosefinSans_500Medium, 
    JosefinSans_300Light, 
    JosefinSans_700Bold, 
} from '@expo-google-fonts/josefin-sans'
 import AppLoading from 'expo-app-loading'




const ContactYoutube = ({navigation}) => {
    const [userName, setUserName] = useState("")
   
    const [password, setPassword] = useState("")
    
    const [agree, setAgree] = useState(false)

    console.log(userName, password);

    const submit = () => {
        
        
        if(userName === "rajbhar" && password === "221206")
        {
            Alert.alert(`Thank you ${userName}`);
            navigation.navigate('Home');
            
        }
        else{
            Alert.alert("username and password is not correct")
        }
    }

    let [fontLoaded, error] = useFonts({
         
        JosefinSans_400Regular, 
        JosefinSans_500Medium, 
        JosefinSans_300Light,
        JosefinSans_700Bold,
     

    })
    if(!fontLoaded)
    {
       return <AppLoading />
    }

    
  
  return (
      
    <View style={styles.mainStyle}>
   
    <Text style={styles.mainHeader}>Login Form</Text>
    <Text style={styles.description}>You can reach us anytime via any@jai.com</Text>
    <View style={styles.mainContainer}>
        <Text style={styles.lables}>Enter Your Name</Text>
        <TextInput  style={styles.inputStyle} 
            
       
       
       
        value={userName}
        onChangeText={(actualData) => setUserName(actualData)} 
         />
    </View>
    <View style={styles.mainContainer}>
    <Text style={styles.lables}>Enter Your Password</Text>
        <TextInput  style={styles.inputStyle}
        secureTextEntry={true}
         
        
       
      
            value={password}
            onChangeText={(actualData) => setPassword(actualData)}
        />
    </View>
    <View  style={styles.wrapper}>
        <CheckBox style={styles.wrapperText}
        value={agree} 
        onValueChange={() => setAgree(!agree) } 
        color={agree ? "blue" : undefined}
        />
        <Text style={styles.textStyle} >I have read and agreed with the TC</Text>
        
    </View>
    <TouchableOpacity 
     style={[
        styles.buttonStyle,
        {
            backgroundColor: agree ? "green" : "blue",
        },
     ]}
     disabled={!agree}
     onPress={() => submit()}
    >
    
        <Text style={styles.buttonText}>Login</Text>
        
    </TouchableOpacity>
     
    </View>
  )
}



const styles = StyleSheet.create({
    mainStyle:{
        alignItems:"center",
        justifyContent:"center",

    },

    mainHeader:{
        fontSize:40,
        fontWeight:"bold",
        color:"red",
        marginTop:50,

    },

    description:{
        fontSize:20,
        marginTop:25,
        color:"green",
        fontFamily:"JosefinSans_700Bold",

    },

    mainContainer:{
        alignItems:"center",
        justifyContent:"center"

    },

    lables:{
        marginTop:50,
        fontSize:20,
        color:"green",
        fontFamily:"JosefinSans_700Bold",
       

    },
    inputStyle:{
        borderWidth:1,
        width:300,
        height:30,
        fontSize:20,
        paddingLeft:10,

    },

    wrapper:{
        alignItems:"center",
        justifyContent:"center"

    },

    wrapperText:{
        fontSize:20,
        marginTop:30,

    },

    buttonText:{
        fontSize:25,
        fontWeight:"bold",
        color:"white"

    },

    buttonStyle:{
       
        marginTop:30,
     
    },
    textStyle:{
        color:"green",
        fontWeight:"bold",
    },



})


export default ContactYoutube;







