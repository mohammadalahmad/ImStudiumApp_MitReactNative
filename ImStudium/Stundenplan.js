import React, {Component, useState, useEffect }from "react";
import { View, Text,TextInput, Button, Image, AsyncStorage, StyleSheet, YellowBox, StatusBar, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import { GiftedChat } from "react-native-gifted-chat";
import { createStackNavigator } from '@react-navigation/stack';
import * as firebase from "firebase";
import "firebase/firestore";
 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const firebaseConfig = {
    apiKey: "AIzaSyDj-vY3N5PQ1RDLbsbK85G6JBbMmTXMU5c",
    authDomain: "imstudium-b7940.firebaseapp.com",
    databaseURL: "https://imstudium-b7940-default-rtdb.firebaseio.com",
    projectId: "imstudium-b7940",
    storageBucket: "imstudium-b7940.appspot.com",
    messagingSenderId: "909412362520",
    appId: "1:909412362520:web:6ddd18fad648b2763e166d"
  };
  
  if(firebase.apps.length === 0 ) {
    firebase.initializeApp(firebaseConfig);
  }
   

const Stack = createStackNavigator();


const db = firebase.firestore()
const chatsRef = db.collection("chats")


function Stundenplan() {

    const [user, setUser] = useState(null);
    const [name, setName] = useState("");
    const [messages, setMessages] = useState([])

    useEffect(()=> {
      readUser()
      const unsubscribe = chatsRef.onSnapshot(querySnapshot => {
          const messageFirestore = querySnapshot.docChanges().filter(({type}) => type ==="added")
                                                        .map(({doc}) => {
                                                            const message = doc.data()
                                                            return {...message, createdAt: message.createdAt.toDate() }
                                                        }).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
                                            setMessages(messageFirestore)
      })
    }, [])

    async function readUser(){
        const user = await AsyncStorage.getItem("user")
        if(user){
          setUser(JSON.parse(user))
          
        }
    }

    async function handlePress(){
        const _id = Math.random().toString(36).substring(7)
        const user = {_id, name}
        await AsyncStorage.setItem("usee", JSON.stringify(user))
        setUser(user)
    }

      if(!user) {
        return (
        <View style={styles.container}>
                 
            <TextInput style={styles.input}  placeholder="Enter your Name" value={name} onChangeText={setName}/> 
            <TouchableOpacity  style={styles.buttonStyle} onPress={handlePress}>
                      <Text style={styles.TextStyle}> Hinzufügen </Text>
              </TouchableOpacity>
        </View>
        )
      }

  return (
     <View style={StyleSheet.container}> 
         <Text>Home Screen</Text>
         <StatusBar style="auto"></StatusBar>
     </View>
  );
}

export default Stundenplan;

const styles = StyleSheet.create({
    container: {
      flex:0.7,
      width: "100%" ,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      padding : 30,
    },
    input: {
        height: 60,
        width: "100%",
        margin: 5,
        borderWidth: 1,
        color: '#000',
        fontSize:15,
        paddingLeft: 5,
        backgroundColor: '#fff',
        borderColor: "#FF9933",
        paddingLeft: 20,
        borderRadius: 10,
         
      }, buttonStyle:{
        borderRadius: 10,
        backgroundColor: "#FF9933",
        height: 60,
        width: "50%",
        margin:5,
        borderColor: "#fff",
        borderWidth:1,
        alignSelf:"center",
        justifyContent: 'center', 
       
      },
      TextStyle: {
      alignSelf:"center",
      color: "#fff",
      fontSize: 25,
       
      }
   })