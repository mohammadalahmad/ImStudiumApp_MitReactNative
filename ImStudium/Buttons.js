import React, {Component}from "react";
import {TouchableOpacity, Text, StyleSheet} from "react-native";

const Buttons = (props) => {
    return(
        <TouchableOpacity style={styles.buttonStyle} onPress={props.onPress}>
            <Text style={styles.TextStyle}> {props.children} </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create ({
    buttonStyle:{
        borderRadius: 10,
        backgroundColor: "#FFF",
        alignSelf: "stretch",
        height: 70,
        margin:5,
        borderColor: "#FF9933",
        borderWidth:2,
         
       
    },
    TextStyle: {
        fontWeight: "600",
        paddingTop:15,
        paddingBottom:15,
        alignSelf:"center",
        color: "#FF0000",
        fontSize: 25,
        

    }

})
 

export default Buttons ;