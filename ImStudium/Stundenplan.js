import React, {Component} from "react";
import 'react-native-gesture-handler';
import {Text,   View,  StyleSheet } from "react-native";
 
class Stundenplan extends Component {

  constructor(){
      super();
      this.state = {
          title: "Stundenplan",
      }
  }
  
  render (){
      return(
          <View style={styles.menu}> 
               <Text style= {styles.text}>{this.state.title}</Text> 
               
          </View>
      )
   }
 }

const styles = StyleSheet.create({

      menu: {
          backgroundColor: "#DFDFE6",
          height: 80,
          alignItems: 'center', //Horizontal Alignment
          justifyContent: "center", //Vertical Alignment
      },
      text: {
          fontSize: 25,
          fontWeight: 'bold',
      }
    });

export default Stundenplan;

 