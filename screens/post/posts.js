import React from 'react'
import {View,Text} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper'
import styles from './style'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalendar, faClock, faBuilding, faCalendarCheck } from '@fortawesome/free-regular-svg-icons';
const Post =()=>{
    const LeftContent = props => <Avatar.Image size={34} source={require('../../assets/2.jpg')} />
    
    return(
  <View style={styles.container}>

  <Card style={styles.cardContainer}>
    <Card.Title 
    titleStyle={styles.cardTitle} 
    style={styles.cardTitle} 
    title="Campus Talk -Faislabad" 
    subtitleStyle={styles.cardSubtitle}
     subtitle={<Subtitle/>}
     left={LeftContent} />
    <Card.Content>
      <Title style={{color:'yellow',fontSize:15}} >Opportunity</Title>
      <Paragraph style={styles.optionsColor}>
      <Icon  name="eye" size={15} color="gray" /> Karachi </Paragraph>
      <Paragraph style={styles.optionsColor}>
      <Icon  name="eye" size={15} color="gray" />Fresher</Paragraph>
      <Paragraph style={styles.optionsColor}>
      <Icon  name="eye" size={15} color="gray" />N/A-N/A</Paragraph>
      <Paragraph style={styles.optionsColor}>
      <Icon  name="eye" size={15} color="gray" />Ibex</Paragraph>
      <Paragraph style={styles.optionsColor}>
      <Icon  name="eye" size={15} color="gray" />Others</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
        <Icon name="thumbs-up" size={15} color="white"/>
        <Icon name="comment" size={15} color="white"/>
        <Icon name="share-square" size={15} color="white"/>
        <FontAwesomeIcon color="white" icon={faClock} style={{ marginRight: 5 }} />
    
      
    </Card.Actions>
  </Card>
</View>

    )

}



const Subtitle=()=>{
    return(
           <View style={styles.cardSubtitleView}>
            <Text style={styles.subtitle}>1 Week ago | 0 </Text>
            <Icon  name="eye" size={15} color="gray" />
           </View>
    )
}
export default Post