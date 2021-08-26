import {StyleSheet, Dimensions} from 'react-native'
import { Avatar } from 'react-native-paper'

const { height, width } = Dimensions.get('screen');


const styles=StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'black'
    },
    cardConatiner:{
        width: width * 0.95,
        borderRadius:10, 
        borderWidth:1,
        backgroundColor:'black',        
        marginTop:10,
        marginLeft:10,
        borderColor:'white',
        paddingVertical:15,
    },
    pressedConatiner:{
        width: width*0.95,
        borderRadius:10, 
        borderWidth:1,
        backgroundColor:'black',
        marginLeft:10,
        marginTop:10,
        borderColor:'red',
        paddingVertical:15

    },

    contentView:{
        flexDirection:'row', 
        flexWrap:'wrap'
    },
    AvatarImage:{
        borderWidth:1,
        borderColor:'white',
        marginTop:10,
        marginLeft:10
    },
    image:{
        width:250

    },
    mainHeading:{
        color:'white',
        fontSize:30
    },
    subHeading:{
        color:'white',
        fontSize:17,
        marginTop:5
    },
    description:{
        color:'white',
        marginTop:5,
        marginBottom:5
    }



})
export default styles