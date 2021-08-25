import React from 'react'
import {Image,View,Text,TouchableOpacity,ScrollView } from 'react-native'
import ImageBackground from 'react-native/Libraries/Image/ImageBackground'
import { Avatar,Card,Button,Title,Paragraph, } from 'react-native-paper';
import styles from './style'
import { useState } from 'react';


const Communities=(props)=>{


    const [btnName,setBtnName]=useState('Join Community')
    const [btnIcon,setBtnIcon]=useState('bell')
    const [isPress,setisPress]=useState(false)
 


    const handleChange=()=>{
        if(btnName=='Join Community'){
            setBtnName("Leave Community")
            setBtnIcon('globe')
        }
        else{
            setBtnName("Join Community")
            
        
        }

    }

    return(
        


        
        <ScrollView style={styles.container}>
                      <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={()=>setisPress(true)}
                      >
                       <Card 
                       style={ isPress ?styles.pressedConatiner:styles.cardConatiner}
                       >
                        <View style={styles.contentView }> 

                       <Avatar.Image 
                       style={styles.AvatarImage} 
                       size={60} 
                       source={require('../../assets/2.jpg')}
                        />
                       <View style={{marginLeft:10}}>

                        <ImageBackground resizemode="contain" style={styles.image} source={require('../../assets/2.jpg')}>

                       <Text 
                       style={styles.mainHeading}>
                        Mehndi Online
                      </Text>

                       <Text 
                       style={styles.subHeading}>
                           Offical Channel
                       </Text>

                       <Text 
                       style={styles.description}>
                        Memebers 10 | Posts  7
                       </Text>
                       
                    <Button 
                       onPress={()=>handleChange()}
                        color="red"
                        mode="contained"
                        icon="bell">
                     {btnName}
                    </Button>

                       </ImageBackground>
                       </View>
                       </View>
                       </Card>
                       </TouchableOpacity>
    
           </ScrollView>
                    
        
      
    )

}
export default Communities 