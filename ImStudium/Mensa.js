 //Import needed Libraries
 import React, {Component}from "react";
 import { Text, StyleSheet, View} from "react-native";

//Create Component

class Mensa extends Component {
    constructor(){
        super();
        this.state = {
            title: "Bildschirm für Mensa",
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
 
// Export the Component to be avaible for other component in the apps
export default Mensa ;

 