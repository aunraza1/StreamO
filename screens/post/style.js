import {Dimensions, StyleSheet} from 'react-native'


const {height,width}= Dimensions


const styles=StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'black'
    },
    cardContainer:{
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
    }

})
export default styles


