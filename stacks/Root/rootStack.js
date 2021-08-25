import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../screens/Login'
import Signup from '../../screens/Signup'
import { Home } from '../../screens/Home';



const Stack = createStackNavigator();

 function RootStackNavigation(){
    return(

        <NavigationContainer   
         screenOptions={{
            tabBarActiveTintColor: '#e91e63',
            headerShown: false,
          }}>
            <Stack.Navigator
            screenOptions={{headerShown:false}}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup}/>
            <Stack.Screen name="Home" component={Home}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}




export default RootStackNavigation