import React, { Component } from 'react';
import { Text, View, StyleSheet  } from 'react-native';


  class ZuWissen extends Component {

   constructor(){
       super();
       this.state = {
           title: "Gut zu wissen",
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
export default ZuWissen ;