import React from 'react'
import {View,Text,StyleSheet,Dimensions} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBuilding, faCalendarCheck,faCloc,faThumbsUp,faShareSquare } from '@fortawesome/free-regular-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import styles from './style';



const LeftContent = props => <Avatar.Image  size={45} source={require('../../assets/1.jpg')}/>
const JobDetails=({navigation})=>{
    return(
    <ScrollView style={styles.container}>
    <Card style={styles.cardContainer} >
    <Card.Content style={styles.cardContent}>
    
    <Avatar.Image  size={45} source={require('../../assets/1.jpg')}/>
    <Card.Title titleStyle={styles.cardTitle}
    
         title="Campus Talk -Faislabad" subtitleStyle={styles.cardSubtitle} subtitle="4-hours Ago"  />
    </Card.Content>
    <Card.Cover style={styles.cardCover} source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Text style={styles.Textcolor}>6 Views | 0 Likes</Text>
      <FontAwesomeIcon style={styles.icon} size={20} color="white" icon={faThumbsUp}/>
      <FontAwesomeIcon style={styles.share} size={20} color="white" icon={faShare}/>
    </Card.Actions>
    <Card.Actions>
    <Text style={styles.Textcolor}>Opportunity</Text>
    </Card.Actions>

    <View style={{flex:1,borderBottomColor:'white',borderBottomWidth:1,height:20}}/>
  </Card>

  <View style={{marginTop:30}}>
      <Text style={styles.Textcolor}><Text style={{fontWeight:'bold'}}>Location:</Text>Lahore</Text>
      <Text style={styles.Textcolor}><Text style={{fontWeight:'bold'}}>Experience:</Text>2 Years</Text>
  </View>
  <View style={{marginTop:20}}>
      <Text style={{color:'gold'}}>Job Details</Text>
      <Text style={styles.Textcolor}><Text style={{fontWeight:'bold'}}>Industry:</Text> Others</Text>
      <Text style={styles.Textcolor}><Text style={{fontWeight:'bold'}}>Category:</Text> Sales & Marketing</Text>
      <Text style={styles.Textcolor}><Text style={{fontWeight:'bold'}}>Jobtype:</Text> Full Time</Text>
      <Text style={styles.Textcolor}><Text style={{fontWeight:'bold'}}>Jobtype:</Text>Full Time</Text>
  </View>
  <View style={{marginTop:20}}>
      <Text style={{color:'gold'}}>Company Details</Text>
      <Text style={styles.Textcolor}><Text style={{fontWeight:'bold'}}>Name:</Text>Ismail Industries Limited</Text>
      <Text style={styles.Textcolor}><Text style={{fontWeight:'bold'}}>Email:</Text>careers@ismailindustries.com</Text>
      <Text style={styles.Textcolor}><Text style={{fontWeight:'bold'}}>Phone:</Text> (+92 21 3431172 -76)</Text>
      <Text style={styles.Textcolor}><Text style={{fontWeight:'bold'}}>Website:</Text>https://ismailindustries.com.pk/</Text>
  </View>
  <View style={{marginTop:30}}>
      <Text style={styles.Textcolor}>Comment (0)</Text>

  </View>
  </ScrollView>

    )

}
export default JobDetails




