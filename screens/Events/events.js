import React from 'react'
import {Text,View,TouchableOpacity,FlatList} from 'react-native'
import styles from './style'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalendar, faClock, } from '@fortawesome/free-regular-svg-icons';
import { Avatar, Card, Paragraph } from 'react-native-paper';
import { faEllipsisH, faComment ,faThumbsUp,faShareSquare,faEye,faLocationArrow,faDatabase} from '@fortawesome/free-solid-svg-icons';



function Events(){

    const LeftContent = props => <Avatar.Image {...props} source={require('../../assets/2.jpg')} />
    const RightContet = props => <TouchableOpacity style={styles.donate}>
        <Text>
        <FontAwesomeIcon  icon={faDatabase} size={15} color="black" /> Donate</Text></TouchableOpacity>
    return(
        <>
 
     <View style={styles.container}>

 <FlatList
 data={[1,2,3,4,5]}
 renderItem={({ item }) =>
 
    <Card style={styles.cardContainer}>
    <Card.Title title="ChildLife Foundation"titleStyle={styles.titleStyle} subtitleStyle={styles.subtitleStyle} subtitle={<Subtitle/>} left={LeftContent} />
    <Card.Content>
    <Paragraph style={styles.optionsColor}>
    <FontAwesomeIcon  icon={faCalendar} size={15} color="aqua" /> 
    <Text style={styles.eventContent}> Date: July 19, 2021 </Text>
    </Paragraph>
    
    <Paragraph style={styles.optionsColor}>
    <FontAwesomeIcon  icon={faClock} size={15} color="aqua" /> 
    <Text style={styles.eventContent}> Start Time: 7:43 PM | End Time: 7:43 PM </Text>
    </Paragraph>

      <Paragraph style={styles.optionsColor}>
    <FontAwesomeIcon  icon={faLocationArrow} size={15} color="aqua" /> 
    <Text style={styles.eventContent}> Address Karachi </Text>
    </Paragraph>
     <Card.Title right={RightContet}>
     
     </Card.Title>
    </Card.Content>
    <TouchableOpacity>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    </TouchableOpacity>
  
    <Card.Actions>
  <View style={styles.actionContainer}>
      <FontAwesomeIcon icon={faThumbsUp} size={20} color="white" />
      <FontAwesomeIcon icon={faComment} size={20} color="white" />
      <FontAwesomeIcon icon={faShareSquare} size={20} color="white" />
      <FontAwesomeIcon icon={faEllipsisH} size={20} color="white" />
  </View>

    </Card.Actions>
    </Card>
 }/>
    </View>
        </>
    )

}
const Subtitle=()=>{
    return(
           <View style={styles.cardSubtitleView}>
            <Text style={styles.subtitle}>1 Week ago | 0 </Text>
            <FontAwesomeIcon icon={faEye} size={15} color="gray" />
           </View>
    )
}




export default Events