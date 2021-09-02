import React from 'react'
import {View,Text} from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

function EventDetail(){
    const LeftContent = props => <Avatar.Icon {...props} source={require('../../assets/2.jpg')} />
    return(
 <View>
     <Card>
    <Card.Title title="ChildLife Foundation" subtitle="1 month ago"  left={LeftContent}/>

    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
 </View>
    )

}
export default EventDetail