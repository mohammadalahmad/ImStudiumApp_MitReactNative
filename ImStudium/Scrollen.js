import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView } from 'react-native';

class Scrollen extends Component {
   state = {
      names: [
         {'Tag': 'Montag', 'id': 1},
         {'Tag': 'Dienstag', 'id': 2},
         {'Tag': 'Mittwoch', 'id': 3},
         {'Tag': 'Donnerstag', 'id': 4},
         {'Tag': 'Freitag', 'id': 5},
         {'Tag': 'Samstag', 'id': 6},
         {'Tag': 'Sonntag', 'id': 7},
        
      ]
   }
   render() {
      return (
         <View  style = {{width: "100%"}}>
            <ScrollView  horizontal={true}>
               {   
                  this.state.names.map((item, index) => (
                     <View key = {item.id} style = {styles.item}>
                        <Text style = {styles.TextStyle}>{item.Tag}</Text>
                     </View>
                  )) 
               }
            </ScrollView>
         </View>
      )
   }

}

export default Scrollen

const styles = StyleSheet.create ({
   item: {
       
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      margin: 2,
      borderRadius: 10,
      backgroundColor: "#FFF",
      height: 40,
      width : 100 ,
      borderColor: "#FF9933",
      borderWidth:2,
      
   },TextStyle: {
      alignSelf:"center",
      color: "#FF0000",
  }
    

})

 