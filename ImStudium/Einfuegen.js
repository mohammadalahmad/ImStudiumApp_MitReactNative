import React, {Component}from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, View, TouchableOpacity, Modal } from "react-native";
import Buttons from "./Buttons";
import Scrollen from "./Scrollen";
import { Button, Icon,  ListItem, Avatar  } from 'react-native-elements';
import * as firebase from "firebase";
import "firebase/firestore";
import { db, auth } from "firebase";

//import { getKurse } from "KurseApi";
//import { Value } from "react-native-reanimated";
 
var firebaseConfig = {
  apiKey: "AIzaSyDj-vY3N5PQ1RDLbsbK85G6JBbMmTXMU5c",
  authDomain: "imstudium-b7940.firebaseapp.com",
  databaseURL: "https://imstudium-b7940-default-rtdb.firebaseio.com",
  projectId: "imstudium-b7940",
  storageBucket: "imstudium-b7940.appspot.com",
  messagingSenderId: "909412362520",
  appId: "1:909412362520:web:6980a283c134da263e166d"
  
};
 
 
if(!firebase.apps.length) {
firebase.initializeApp(firebaseConfig);
}

class Einfuegen extends React.Component {
  constructor(){
    super();
    this.state = {
      show: false,
      zeit: "", 
      raum: "",
      dozent: "",
      fach: "",
      students: null
  };
}

 
/*
componentDidMount(){
  db.collection("Stundeplan")
   .get()
   .then(snapshot => {
     console.log(snapshot) 
   })
   .catch(error => console.log(error))
 }
 */
 
writeuserdata(zeit, raum, dozent, fach) {
 
  firebase.database().ref("Fächer").push(
    {
      zeit,
      raum,
      fach,
      dozent
    }
  ).then((data) => {
    console.log("data", data);
  }).catch((error) => {
    console.log("error", error );
  });    
  /*
    firebase.database().ref("students").on("value", (data) => {
     console.log(data.toJSON());
    }) 
    */
 
} 
  /*
componentDidMount(){
  console.log("test") 
    firebase.firestore().collection("Fächer")
  .get()
  .then(snapshot => {
    const students = []
    snapshot.forEach((doc) => {
      students.push(doc.data())
    });
    this.setState({students: students})
    // console.log(snapshot) 
     // console.log(students)   
     
  })
  .catch(error => console.log(error))
}
 */


componentDidMount(){
firebase.firestore().collection('Fächer')
.get()
.then(snapshot => {
  snapshot
    .docs
    .forEach(doc => {
      console.log(JSON.parse(doc._document.data.toString()))
    });
});

}


render (){
 
    return(
        <View style={styles.menu}> 
         
              <View style={{ flexDirection: "row",  justifyContent: "flex-end" }}>
                 
                  <Modal 
                      transparent= {true}
                      visible={this.state.show}
                      >
                      <View style={{backgroundColor:"#000000aa", flex:1 }}>
                        <View style={{backgroundColor:"#ffffff", margin:15, padding:40, borderRadius:10, height:500 }}>
                        <SafeAreaView>
                        <TextInput
                              style={styles.input}  
                              onChangeText={(fach) => this.setState({fach}) }
                            />
                            <View>
                            <Scrollen/>
                          </View >
                            <TextInput
                              style={styles.input}
                              placeholder="Zeit"
                              onChangeText={(zeit) => this.setState({zeit}) }
                            />
                            <TextInput
                              style={styles.input}
                              placeholder="Raum"
                              onChangeText={(raum) => this.setState({raum}) }
                            />
                            <TextInput
                              style={styles.input}
                              placeholder="Dozent"
                              onChangeText={(dozent) => this.setState({dozent}) }
                            />
                            <View style={{ flexDirection: "row"  }}> 
                               <TouchableOpacity  onPress={()=>{this.setState({show:false})}} style={styles.buttonStyle} >
                                    <Text style={styles.TextStyle}> Abbrechen</Text>
                                </TouchableOpacity>
                                <TouchableOpacity  style={styles.buttonStyle} onPress={()=>{this.writeuserdata(this.state.zeit, this.state.raum, this.state.dozent , this.state.fach ) }} >
                                    <Text style={styles.TextStyle}> Hinzufügen </Text>
                                </TouchableOpacity>
                                
                            </View>
                      </SafeAreaView>
                        </View>
                      </View>
                  </Modal>
                  <View style={{  flex: 0.9,    flexDirection: 'column'  }}> 
                      <View style={{    borderWidth: 2 , borderRadius: 10,  backgroundColor: "white", flexDirection: 'row',    alignItems: 'baseline' }}> 
                            <Text style={{     fontSize:25,   marginLeft:5, margin:5, marginRight:170, justifyContent: 'center'  }}>Fächer einfügen</Text>
                            <View  style={{flexDirection: 'row', justiftyContent:"flex-end", alignItems:"flex-end" }}    > 
                            <Icon       
                          size={30}
                          name="plus"
                          type='font-awesome' 
                          onPress={()=>{this.setState({show:true})}}
                          />
                          </View>
                      </View>    
                  </View> 
              </View> 
              <View> 
 
              { 
                this.state.students &&
                this.state.students.map(students => {
                  return (
                    <div>
                      <p>test</p>
                      <p>{students.raum}</p>
                    </div>
                  )
                })
              }
              </View>
        </View>
    )
}
};

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
     
  },
  buttonStyle:{
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
});

export default Einfuegen;