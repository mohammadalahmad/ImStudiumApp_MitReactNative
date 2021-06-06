import React, {Component}from "react";
import {TouchableOpacity, Text,Image, StyleSheet, View} from "react-native";
 
const Buttons = (props) => {
    return(
        <View> 
              
             
            <TouchableOpacity style={styles.buttonGPlusStyle} activeOpacity={0.5} onPress={props.onPress}>
          <Image
            source={require('./Icons/Stundenplan.png')} 
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
         
          <Text style={styles.buttonTextStyle}> {props.children} </Text>
        </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
   
    buttonGPlusStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: "#FFF",
      borderWidth:2,
      borderColor: "#FF9933",
      height: 65,
      borderRadius: 10,
      margin: 5,
    },
    buttonFacebookStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#485a96',
      borderWidth: 0.5,
      borderColor: '#fff',
      height: 40,
      borderRadius: 5,
      margin: 5,
    },
    buttonImageIconStyle: {
      padding: 10,
      margin: 5,
      height:  35,
      width: 35,
      resizeMode: 'stretch',
    },
    buttonTextStyle: {
        fontWeight: "600",
        color: "#F5A431",
      marginBottom: 4,
      marginLeft: 10,
      fontSize: 30,
    },
    buttonIconSeparatorStyle: {
      backgroundColor: '#F5A431',
      width: 1,
      height: 40,
    },
  });

export default Buttons ;