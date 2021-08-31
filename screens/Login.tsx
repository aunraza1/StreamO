
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  TouchableOpacity
} from 'react-native';

import { TextInput } from 'react-native-paper';
import MainStack from '../stacks/Main/mainStack';






function Login ({navigation}){
  const [click,setClick]=useState(false)

  
  return(
    <>
    {click?<MainStack/>:
    <View style={styles.container}>
      <View style={styles.ImageContainer}>
        <ImageBackground style={styles.bckImage} resizeMode="cover" source={require('../assets/1.jpg')}>
          </ImageBackground>
      </View>
      <View>
        <TextInput style={styles.input} placeholder="Enter Username"/>
        <TextInput secureTextEntry={true}
         style={styles.input}
          placeholder="Password"
         
        
        />
      </View>
      <View>
        <TouchableOpacity onPress={()=>setClick(true)} style={styles.btn}>
          <Text style={styles.txt}>Sign in </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.pass}>
        <TouchableOpacity>
        <Text style={styles.txt}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.pass}>
       
          <Text style={styles.txt}>Don't have an account? 
          <TouchableOpacity onPress={()=>navigation.navigate('Signup')}><Text style={styles.Signup}>Sign Up</Text>
          </TouchableOpacity>
          </Text>

        
      </View>

  
      


    </View>
}
    </>
  )

}
export default Login

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:30,
    backgroundColor:'black',
   

  },
  ImageContainer:{
    justifyContent:'center',
    alignItems:'center',
    padding:70,
    backgroundColor:'black'
    
  },
  bckImage:{
    width:250,
    height:50,
    

  },
  input:{
   width:270,
   borderWidth:2,
   borderRadius:5,
   backgroundColor:'white',
   marginTop:20,
   height:40,
   paddingLeft:15,
   paddingRight:15,
   marginLeft:20,
   
  },
  txt:{
    color:'white',
    textAlign:'center'
    
  },
  btn:{
   backgroundColor:'maroon',   
   marginLeft:20,
   width:270,
   marginTop:30,
   padding:15,
   borderWidth:2,
   borderRadius:7,
   borderColor:'red'
    
  },
  pass:{
    marginTop:40,

  },
  Signup:{
    color:'red',
    
    
  }
  
  
  

})