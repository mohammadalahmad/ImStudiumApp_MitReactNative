import React, {Component}from "react";
import 'react-native-gesture-handler';
import {Text, AppRegistry, View, Button, StyleSheet, TouchableOpacity} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Stundenplan from "./Stundenplan";
import Mensa from "./Mensa";
import Buttons from "./Buttons";
import ZuWissen from "./ZuWissen";
 
 

function MenuScreen({ navigation: { navigate } }) {
  
    return (
        <View style={styles.MenuScreen1}> 
       
            <View  style={styles.MenuScreen} >
               
                <View style={styles.Behalter}> 
                    <Buttons  onPress={() => navigate('Stundenplan', { caption: 'Some caption' })}>Stundenplan</Buttons>  
                </View>
                <View style={styles.Behalter}> 
                     <Buttons  onPress={() => navigate('Mensa', { caption: 'Some caption' })}>Mensa</Buttons>
                </View>
            </View>
            <View  style={styles.MenuScreen}> 
                <View style={styles.Behalter}> 
                    <Buttons  onPress={() => navigate('Gut Zu Wissen', { caption: 'Some caption' })}>Gut zu wissen</Buttons>
                </View>
                <View style={styles.Behalter}> 
                    <Buttons>News</Buttons>
                </View>
            </View>
            <View  style={styles.MenuScreen}> 
                <View style={styles.Behalter}> 
                     <Buttons>Freizeit</Buttons>
                </View>
                <View style={styles.Behalter}> 
                    <Buttons>Prüfungen</Buttons>
                </View>
            </View>
  
        </View>
    );
  }
  
  
    function HomeScreen({ navigation }) {
      return (
        <View style={{ flexDirection: "row",  justifyContent: "flex-end" }}>
 
          <TouchableOpacity style={styles.buttoneinfügen1}> 
                <Text style={styles.Texteinfügen}>Kurs einfügen</Text>
          </TouchableOpacity>
        </View>
      );
    }




  function MensaScreen() {
    return (
      <View style={styles.HomeScreen}>
        <Mensa />
        
      </View>
    );
  }
 
  function GutZuWissen() {
    return (
      <View style={styles.HomeScreen}>
        <ZuWissen/>
      </View>
    );
  } 
  
  const Stack = createStackNavigator();
  
  function MenuListe({ navigation }) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="ImStudium" component={MenuScreen} />
          <Stack.Screen  name="Stundenplan" component={HomeScreen}/>
          <Stack.Screen name="Mensa" component={MensaScreen} />
          <Stack.Screen name="Gut Zu Wissen" component={GutZuWissen} /> 
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
   
export default MenuListe;

  const styles = StyleSheet.create({
  
    HomeScreen: {
        backgroundColor: "#DFDFE6",
       flex:1,
        alignItems: 'center', //Horizontal Alignment
        justifyContent: "center", //Vertical Alignment
  
    },
    MenuScreen: {
   
      flexDirection: 'row',
      justifyContent: 'center', 
      alignItems: 'center',
      backgroundColor: '#FFF', 
      height: 120,
      
  },
  Behalter: {
    flex: 1, 
     margin: 2,
      
     
  },
  MenuScreen1: {
    flex: 1, 
    backgroundColor: '#e65c00', 
    justifyContent: "center", //Vertical Alignment
     
  },   
  buttoneinfügen:{
    borderRadius: 10,
    backgroundColor: "#FFF",
    alignSelf: "stretch",
    height: 30,
    margin:5,
    borderColor: "#FF9933",
    borderWidth:2,
    padding: 10,
    alignItems: 'center',  
    justifyContent: "center",
    width: 130,
   
},
Texteinfügen: {
    fontWeight: "600",
    paddingTop:15,
    paddingBottom:15,
    alignSelf:"center",
    color: "#FF0000",
    fontSize: 15,

},
buttoneinfügen1:{
  borderRadius: 10,
  backgroundColor: "#FFF",
  alignSelf: "stretch",
  height: 30,
  margin:5,
  borderColor: "#FF9933",
  borderWidth:2,
  padding: 10,
  alignItems: 'center',  
  justifyContent: "center",
  width: 130,
  
 
},
  });

 
 
 
