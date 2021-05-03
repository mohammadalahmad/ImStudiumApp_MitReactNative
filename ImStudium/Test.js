import React, {Component, useState, useEffect }from "react";
import { View, Text,TextInput, Button, Image, AsyncStorage, StyleSheet, YellowBox, StatusBar, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import { GiftedChat } from "react-native-gifted-chat";
import { createStackNavigator } from '@react-navigation/stack';
import * as firebase from "firebase";
import "firebase/firestore";
//import Firebase from "./firebase";
 

var firebaseConfig = {
    apiKey: "AIzaSyDj-vY3N5PQ1RDLbsbK85G6JBbMmTXMU5c",
    authDomain: "imstudium-b7940.firebaseapp.com",
    databaseURL: "https://imstudium-b7940-default-rtdb.firebaseio.com",
    projectId: "imstudium-b7940",
    storageBucket: "imstudium-b7940.appspot.com",
    messagingSenderId: "909412362520",
    appId: "1:909412362520:web:6980a283c134da263e166d"
  };
  // Initialize Firebase
   
     
    if(!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
 

  class Test extends Component {
    constructor(){
      super();
      this.state = {
          name: "", 
          age:  ""  
      }; 
  }
  
  UNSAFE_componentWillMount() {

                firebase.database().ref("Stundeplan/001").set(
                  {
                    name: "test ",
                    age:7
                  }
                ).then((data) => {
                    console.log("data", data)
                  }).catch((error) => {
                    console.log("error", error )
                  })     
      }  
  render (){
      return(
          <View > 
               <TouchableOpacity  onPress={()=>{this.setState({name:"test"})}} >
                    <Text > test </Text>
               </TouchableOpacity>   
          </View>
      )
  }

}
 export default Test
 
  
  