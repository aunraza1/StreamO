import React from 'react'
import {ImageBackground,View,Text,ScrollView,StyleSheet,TouchableOpacity} from 'react-native'
import {TextInput} from 'react-native-paper'
import countryList from 'react-select-country-list'
import { useState, useMemo } from 'react'
import DropDownPicker from 'react-native-dropdown-picker';


function Signup(){
    const options = useMemo(() => countryList().getData(), [])
    const [items, setItems] = useState(options)
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);

    return(
        <ScrollView style ={styles.container}>

            <View style={styles.ImageContainer}>
                <ImageBackground style={styles.backImg} source ={require('../assets/1.jpg')}/>
            </View>

            <View>
                <TextInput placeholder="First Name" style={styles.Input}/>
                <TextInput placeholder="Last Name" style={styles.Input}/>
                <TextInput placeholder="Email Address" style={styles.Input}/>
                <DropDownPicker style={styles.dropdown}
            
              
                  items={items}
                  open={open}
                  value={value}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                  listMode="MODAL"
                  theme="DARK"
             />
             <View style={styles.phoneContainer}>
             <TextInput style={styles.cc} placeholder="CC" />
             <TextInput style={styles.phone} placeholder= "Phone"/>
             </View>
               
            </View>
            <View>
            <TextInput placeholder="Username" style={styles.Input}/>
            <TextInput secureTextEntry={true} placeholder="Password" style={styles.Input}/>
            <TextInput secureTextEntry={true} placeholder="Retype Password" style={styles.Input}/>
            </View>

            <View>
                 <View style={styles.box}>

                     <View>
                     <Text style={styles.referalTxt}>If you were invited by a friend,enter the code here.You will not be able to apply a refferal code once your account has been created
                     </Text>
                     <TextInput placeholder="Referal Code (Optional)" style={styles.Input}/>

                     </View>

                </View>

                <View>
                    <TouchableOpacity style= {styles.btn}>
                        <Text style={styles.txt}>Submit</Text>

                    </TouchableOpacity>
                </View>
            </View>

          
       
       </ScrollView>
    )

}
export default Signup

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black'
    },
    backImg:{
        width:"115%",
        height:70,
        marginRight:10
    },
    ImageContainer:{
        justifyContent:'center',
        alignItems:'center',
        height:100,
        padding:100,
        backgroundColor:'black'
        
      },
      Input:{
          backgroundColor:'white',
          marginBottom:10,
          height:40,
          marginLeft:10,
          width:'90%',
          borderWidth:2,
          borderRadius:5
         

      },
      dropdown:{
        backgroundColor:'white',
        marginBottom:10,
        height:45,
        marginLeft:10,
        width:'90%',
        borderWidth:2,
        borderRadius:5
        
      },
      cc:{
          width:"15%",
          height:40,
          marginLeft:10,
          marginRight:10,
        
      },
      phone:{
          width:"72%",
          height:40,
          
      },
      phoneContainer:{
          
          flexDirection:'row',
          height:40,
          marginBottom:10
          
       
      },
      box:{
          width:'90%',
          height:120,
          borderWidth:1,
          backgroundColor:'wheat',
          marginLeft:10,
      },
      referalTxt:{
          marginLeft:5,
          marginTop:5,
          marginBottom:5

      },
      btn:{
        backgroundColor:'maroon',   
        width:"90%",
        marginLeft:10,
        marginTop:30,
        padding:15,
        borderWidth:2,
        borderRadius:7,
        borderColor:'red'
         
       },
       txt:{
        color:'white',
        textAlign:'center'
        
      },
    
})