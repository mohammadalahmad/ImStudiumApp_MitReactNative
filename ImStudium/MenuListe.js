import React, {Component}from "react";
import 'react-native-gesture-handler';
import {Text, AppRegistry, View,  ScrollView, StyleSheet, TouchableOpacity, Modal, SafeAreaView} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Stundenplan from "./Stundenplan";
import Mensa from "./Mensa";
import MensaPlan from "./MensaPlan";
import Buttons from "./Buttons";
import ZuWissen from "./ZuWissen";
import Einfuegen from "./Einfuegen";
import Scrollen from "./Scrollen";
import Test2 from "./Test2";
import Test from "./Test";
import { Button, Icon,  ListItem, Avatar  } from 'react-native-elements';
  class MenuScreen extends Component {
    
   test(){
   
   }
    render (){
      const { navigate } = this.props.navigation;
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
                    <Buttons>Test</Buttons>
                </View>
       
      </View>
        </View>
    );
  }}
  
 function Stundenplan1  ({ navigation }) {
      return (
        <View  style={styles.HomeScreen}>
              <View>
                <Scrollen/>
              </View >
          <TouchableOpacity onPress={() => navigation.navigate('Kurs einfügen')} style={{backgroundColor:"#FF9933",   alignItems: 'center', width:"80%", height: 60,  justifyContent: 'center', borderRadius: 10, margin:80}}> 
                <Text style={{ color: "white" , fontSize:20}}>Stundenplan erstellen</Text>
          </TouchableOpacity>
        </View>
      );
    }

    function StundenplanErstellen({ navigation }) {
       
      return (
        <View style={styles.HomeScreen}>
          <Einfuegen />
        </View>
      );
    }

  function MensaScreen({ navigation }) {
    return (
      <View style={styles.HomeScreen}>
        
        <Mensa />
        
      </View>
    );
  }

  function MensaPlanScreen() {
    return (
      <View style={styles.HomeScreen}>
        <MensaPlan />
      </View>
    );
  }
 
 
  function GutZuWissen() {
    return (
      <View style={styles.HomeScreen}>
        <MensaPlan/>
      </View>
    );
  } 
  
  const Stack = createStackNavigator();
  
  function MenuListe({ navigation }) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="ImStudium" component={MenuScreen} />
          <Stack.Screen  name="Stundenplan" component={Stundenplan1}/>
          <Stack.Screen name="Mensa" component={MensaScreen} />
          <Stack.Screen name="MensaPlan" component={MensaPlanScreen} />
          <Stack.Screen name="Gut Zu Wissen" component={GutZuWissen} /> 
          <Stack.Screen name="Kurs einfügen" component={StundenplanErstellen} /> 
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
        justifyContent: "center",
        //Vertical Alignment
  
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
item: {
       
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 30,
  margin: 2,
  borderRadius: 10,
  backgroundColor: "#FFF",
  height: 70,
  borderColor: "#FF9933",
  borderWidth:2,
  
},
  
  });
