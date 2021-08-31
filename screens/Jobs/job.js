import React from 'react';
import{View,Text,FlatList} from 'react-native'
import styles from './style';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalendar, faClock, faBuilding, faCalendarCheck } from '@fortawesome/free-regular-svg-icons';
import { TouchableOpacity } from 'react-native-gesture-handler'
import JobDetails from '../JobDetails/jobDetail';

const Jobs =({navigation})=>{

    const LeftContent = props => <Avatar.Image size={34} source={require('../../assets/2.jpg')} />
    
    return(
<View style={styles.container}>
  <FlatList

  data={[
    { key: 'Devin' },
    { key: 'Dan' },
    { key: 'Dominic' },
    { key: 'Jackson' },

]}
  renderItem={({ item }) =>
 
  <TouchableOpacity onPress={()=>navigation.navigate('JobDetails')} activeOpacity={0.8}>
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
    <Card.Actions style={styles.actions} >
        <View style={styles.actionIcons}>
        <Icon  name="thumbs-up" size={20} color="white"/>
        <Icon name="comment" size={20} color="white"/>
        <Icon   name="share-square" size={20} color="white"/>
        <FontAwesomeIcon size={20}  color="white" icon={faClock} style={{ marginRight: 5 }} />
        </View>
      
    </Card.Actions>
  </Card>
  </TouchableOpacity>

}
  
  />
 
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


const JobStack=()=>{
    const Stack = createStackNavigator();

    return(
     <Stack.Navigator>

       <Stack.Screen
       name="Jobs"
       component={Jobs}
       options=  {{ headerShown: true,
       headerStyle: {
           backgroundColor: 'black',
           opacity: 0.8,
       }, headerTintColor: 'white'
     }} >

        </Stack.Screen>
       <Stack.Screen 
       name="JobDetails" 
       component={JobDetails}
       options= {{ headerStyle: {
        backgroundColor: 'black',
        opacity: 0.8,
    }, headerTintColor: 'white'
  }}

       ></Stack.Screen>


    </Stack.Navigator>
    )
}
export {
    Jobs,
    JobStack
}