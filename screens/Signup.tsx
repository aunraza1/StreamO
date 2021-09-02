import React from 'react'
import { ImageBackground, View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-paper'
import countryList from 'react-select-country-list'
import { useState, useMemo, useEffect } from 'react'
import DropDownPicker from 'react-native-dropdown-picker';
import Axios from 'axios'


function Signup() {
    const [countries, setCountries] = useState([])
    const [selectedCountries, setSelectedCountries] = useState([])
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const options = useMemo(() => countryList().getData(), [])


    let mModel = {
        id: 0,
        countryID: 0,
        firstName: "",
        lastName: "",
        phone: "",
        emailAddress: "",
        userID: 0,
        isActive: true,
        religionID: 233,
        channelID: 0,
        regionID: 0,
        religionSectID: 0,

        userInfo: {
            id: 0,
            userName: "",
            password: "",
            password2: ""
        }

    }
    const [userData, setUserData] = useState(mModel)

    useEffect(() => {

        setUserData(mModel)

        Axios.get('https://uat-api.streamomedia.com/api/Common/GetCountries').then((res) => {

            if (res.data.status === 'success') {
                let list = res.data.data;
                let _countries = [];

                list.map((v, i) => {
                    _countries.push({ label: v.name, value: v.id })
                })

                setCountries(_countries);

            }
            else {
                alert("error getting countoues!")
            }

        }).catch(() => {
            console.log("Something Went Wrong!")
        })
    }, [])



    const getDatas = () => {
            if(userData.firstName!="" && userData.lastName!=="" && userData.emailAddress!=="" && userData.phone!=="" &&userData.userInfo.userName!==""){
                 if(userData.userInfo.password==userData.userInfo.password2){


         Axios.post('https://uat-api.streamomedia.com/api/Member/Register', userData).then((res) => {

             if(res.data.status=="success"){
                 alert("Member Registered Successfully!")
             }
             else if(res.data.status=="error" && res.data.message=="Username already in use."){
                 alert("UserName Already in use")
             }
             else if(res.data.status=="error" && res.data.message=="Email address already in use."){
                 alert("Email Address Already in use !")
             }
             else{
                 console.log(res.data)
             }

            }).catch((err) => {
                console.log(err)
            })
            }    
            else{
                alert("Password Mismtach!")
            }
        }    
            else{
                alert("Fields can't be empty")
            }

    }
  

    return (
        <ScrollView style={styles.container}>

            <View style={styles.ImageContainer}>
                <ImageBackground style={styles.backImg} source={require('../assets/1.jpg')} />
            </View>

            <View>
                <TextInput onChangeText={(text) => setUserData({...userData,firstName:text})} placeholder="First Name" style={styles.Input} />
                <TextInput onChangeText={(text) => setUserData({...userData,lastName:text})} placeholder="Last Name" style={styles.Input} />
                <TextInput onChangeText={(text) => setUserData({...userData,emailAddress:text})} placeholder="Email Address" style={styles.Input} />
                <DropDownPicker style={styles.dropdown}

                    onChangeValue={(value) => setUserData({ ...userData, countryID: value, regionID: value })}
                    items={countries}
                    open={open}
                    value={value}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setSelectedCountries}
                    listMode="MODAL"
                    theme="DARK"
                />
                <View style={styles.phoneContainer}>
                    <TextInput style={styles.cc} placeholder="CC" />
                    <TextInput onChangeText={(text) => setUserData({ ...userData, phone: text })} style={styles.phone} placeholder="Phone" />
                </View>
            </View>
            <View>
                <TextInput onChangeText={(text) =>setUserData({...userData,userInfo:{...userData.useInfo,userName:text}}) } placeholder="Username" style={styles.Input} />
                <TextInput onChangeText={(text) =>setUserData({...userData,userInfo:{...userData.userInfo,password:text}}) } secureTextEntry={true} placeholder="Password" style={styles.Input} />
                <TextInput onChangeText={(text) =>setUserData({...userData,userInfo:{...userData.userInfo,password2:text}}) } secureTextEntry={true} placeholder="Retype Password" style={styles.Input} />
            </View>
            <View>
                <View style={styles.box}>
                    <View>
                        <Text style={styles.referalTxt}>If you were invited by a friend,enter the code here.You will not be able to apply a refferal code once your account has been created
                        </Text>
                        <TextInput onChangeText={(text) => setUserData({ ...userData, referalCode: text })} placeholder="Referal Code (Optional)" style={styles.Input} />
                    </View>
                </View>
                <View>
                    <TouchableOpacity onPress={() => getDatas()} style={styles.btn}>
                        <Text style={styles.txt}>Submit</Text>

                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default Signup

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    backImg: {
        width: "115%",
        height: 70,
        marginRight: 10
    },
    ImageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        padding: 100,
        backgroundColor: 'black'

    },
    Input: {
        backgroundColor: 'white',
        marginBottom: 10,
        height: 40,
        marginLeft: 10,
        width: '90%',
        borderWidth: 2,
        borderRadius: 5


    },
    dropdown: {
        backgroundColor: 'white',
        marginBottom: 10,
        height: 45,
        marginLeft: 10,
        width: '90%',
        borderWidth: 2,
        borderRadius: 5

    },
    cc: {
        width: "15%",
        height: 40,
        marginLeft: 10,
        marginRight: 10,

    },
    phone: {
        width: "72%",
        height: 40,

    },
    phoneContainer: {

        flexDirection: 'row',
        height: 40,
        marginBottom: 10


    },
    box: {
        width: '90%',
        height: 120,
        borderWidth: 1,
        backgroundColor: 'wheat',
        marginLeft: 10,
    },
    referalTxt: {
        marginLeft: 5,
        marginTop: 5,
        marginBottom: 5

    },
    btn: {
        backgroundColor: 'maroon',
        width: "90%",
        marginLeft: 10,
        marginTop: 30,
        padding: 15,
        borderWidth: 2,
        borderRadius: 7,
        borderColor: 'red'

    },
    txt: {
        color: 'white',
        textAlign: 'center'

    },

})