import {Dimensions, StyleSheet} from 'react-native'


const { height, width } = Dimensions.get('screen');

const styles=StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'black'
        
    },
    cardContainer:{

        width:width*0.95,
        margin:width*0.02,
        backgroundColor:'#404040',
        opacity:0.7,
        marginTop:20
    },
    cardTitle:{
        color:"white",
        fontSize:15

    },
    cardSubtitleView:{
        flex:1,
        flexDirection:'row'
    },
    subtitle:{
        color:'white'

    },
    optionsColor:{
        color:'white'
    },
    actions:{
        height:60
    },
    actionIcons:{
        flex:1,
         flexDirection:'row'
         ,justifyContent:'space-around'

    },
 

})
export default styles
