import React from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ImageBackground, ScrollView, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Contact from './contact';
import Communities from './communities/index.js';
import Posts from './post/posts'


const Home = ({ navigation }) => {




    return (




        <ScrollView style={styles.container}>

            <Text style={styles.textColor}>StreamO Pick</Text>
            <View style={styles.cardsContainer}>

                <ImageBackground source={require('../assets/1.jpg')} style={styles.cardImage}>
                    <View style={{ alignItems: 'flex-end' }}>
                        <Icon name="rocket" size={25} color="red" />
                    </View>
                    <View style={styles.cardText}>
                        <Text style={styles.textColor}>StreamO Webinar</Text>
                    </View>
                </ImageBackground>


                <ImageBackground source={require('../assets/1.jpg')} style={styles.cardImage}>
                    <View style={{ alignItems: 'flex-end' }}>
                        <Icon name="rocket" size={25} color="red" />
                    </View>
                    <View style={styles.cardText}>
                        <Text style={styles.textColor}>Save a child Life by donating</Text>
                    </View>
                </ImageBackground>


                <ImageBackground source={require('../assets/1.jpg')} style={styles.cardImage}>
                    <View style={{ alignItems: 'flex-end' }}>
                        <Icon name="rocket" size={25} color="red" />
                    </View>
                    <View style={styles.cardText}>
                        <Text style={styles.textColor}>Donate to help underprivilieged</Text>
                    </View>
                </ImageBackground>

            </View>

            <View style={{ flex: 1 }} >
                <TouchableOpacity onPress={()=>navigation.navigate('Posts')}>
                <Text style={{ color: 'red' }}>Hello World</Text>
                </TouchableOpacity>
               
                <TouchableOpacity onPress={() => navigation.navigate('Communities')}>
                    <Text style={{ color: 'red' }}>Oppo</Text>
                </TouchableOpacity>
            </View>



            <FlatList
                horizontal={true}
                data={[
                    { key: 'Devin' },
                    { key: 'Dan' },
                    { key: 'Dominic' },
                    { key: 'Jackson' },

                ]}
                renderItem={({ item }) =>

                    <Image source={require('../assets/1.jpg')} style={styles.RecommendedCommunities} >

                    </Image>
                }
            />





        </ScrollView>


    )

}



function HomeStack() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
        >

            <Stack.Screen options={
                { headerShown: false }} name="Main" component={Home} />
            <Stack.Screen options={
                {
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: 'black',
                        opacity: 0.8,
                    }, headerTintColor: 'white'
                }} name="Communities" component={Communities} />

           <Stack.Screen name="Posts" component={Posts}></Stack.Screen>
 
        </Stack.Navigator>




    )

}
export {
    Home,
    HomeStack
}


const styles = StyleSheet.create({

    container: {

        backgroundColor: 'black'
    },
    textColor: {
        color: 'white'
    },
    cardImage: {
        width: 105,
        height: 150,
        resizeMode: 'cover',
        marginLeft: 10,


    },
    cardsContainer: {

        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,


    },
    cardText: {
        backgroundColor: 'black',
        height: 50,
        marginTop: 80,
        opacity: 0.8
    },
    RecommendedCommunities: {

        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        marginLeft: 55,
        marginTop: 20

    }




})