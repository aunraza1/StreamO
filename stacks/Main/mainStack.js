import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStack,Home} from '../../screens/Home';
import Icon from 'react-native-vector-icons/FontAwesome';
import About from '../../screens/About'
import Contact from '../../screens/contact'
function MainStack(){



 const BottomTabs=createBottomTabNavigator()   
return(
    
   
    <BottomTabs.Navigator
    initialRouteName="HomeTab"
    screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        headerShown: false,
     
      }}>
    
        <BottomTabs.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarIcon:()=>(  
                <Icon name="home" color='red' size={25}/>  
            )  
          }}
          
        />
        <BottomTabs.Screen
        name="About"
        component={About}
        options={{
            tabBarIcon:()=>(  
                <Icon name="globe" color='red' size={25}/>  
            )  
          }}
        
        />
        <BottomTabs.Screen
        name="Contact"
        component={Contact}
        options={{
            tabBarIcon:()=>(  
                <Icon name="globe" color='red' size={25}/>  
            )  
          }}
        
        />
          
       
    </BottomTabs.Navigator>
    

)



}
export default MainStack