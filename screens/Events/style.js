import { AppColors } from '../../assets/AppColors'
import {StyleSheet,Dimenstions} from 'react-native'

const styles=StyleSheet.create({


    container:{
        flex:1,
        backgroundColor:AppColors.appBackground,
    },
    actionContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        height:40
        
    },
    cardContainer:{
        backgroundColor:'#404040',
        opacity:0.7,
        marginTop:30
    },
    titleStyle:{
        color:AppColors.textColor,
        fontSize:15   
     },
     subtitleStyle:{
         color:'gray'
     },
  
      cardSubtitleView:{
        flex:1,
        flexDirection:'row'
    },
    subtitle:{
        color:'white'

    },eventContent:{
        color:'aqua'
    }
    ,
    donate:{
   
        borderWidth:1,
        backgroundColor:'gold'
        ,height:30,
        width:100,
        borderRadius:10,
        padding:5

    }
        


})
export default styles