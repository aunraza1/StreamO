import {StyleSheet,Dimensions} from 'react-native'
const {height,width}=Dimensions.get('screen')
import { AppColors } from '../../assets/AppColors';

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:AppColors.appBackground
        
    },
    cardContainer:{
        flex:1,
        backgroundColor:AppColors.appBackground,
    },
    cardTitle:{
        color: AppColors.textColor,
        fontSize:15,
    },
    cardSubtitle:{
        color:'grey'
    },
    cardCover:{
        height:350  
    },
    Textcolor:{
        color:AppColors.textColor
    },
    icon:{
        marginLeft:width*0.45
    },
    share:{
        marginLeft:width*0.04
    },
 
 

})
export default styles