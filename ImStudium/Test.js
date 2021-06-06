import React, { Component } from 'react';
import {View,TextInput} from 'react-native';
import styles from "./Style";
import Buttons from './Buttons';




class Test8 extends Component {
   constructor(){
      super();
      this.state = {  
        selectedId1:  null,
        isValid: null,
        name:"",
         
    }; 
  } 
 
  
submit(){
  let rjx= /[0-9]{2}\:[0-9]{2}/;
  let isValid= rjx.test(this.state.name)
  if(isValid === false){
    alert ("Nicht Correkt")
  }else{
    alert ("Correkt")
  }
  console.warn(isValid)
   
}



   render() {      
 
    
    return (
      <View  >
    <TextInput
                      style={styles.input}
          
                      placeholder="bis (z.B. 12.00)"
                      value={this.state.zeit1}
                      onChangeText={(name) => this.setState({ name })}
                    />
         
        <Buttons onPress={()=>{this.submit()}}>Klicke mich</Buttons>
      </View>
    );  
   } 
    
         
}    

export default Test8
 
 



 
/*
 import React, { Component } from 'react';
import { TouchableOpacity, Text, Image, View,TextInput, StyleSheet, FlatList, StatusBar, ScrollView, SafeAreaView } from 'react-native';
import moment from 'moment';
import Buttons from './Buttons';
class Test5 extends Component {
   constructor(){
      super();
      this.state = {  
        email :'',
         validated: false ,
       
         
    }; 
  } 
  
  validate = (text) => {
    console.log(text);
    let reg = /[0-9]{1,2}\[:||.][0-9]{2}/;
    if (reg.test(text) === false) {
      alert("Email is Not Correct");
       
    }
    else {
      this.setState({ email: text })
      
    }
  }

   render() {
     
  return (
    <View> 
 <TextInput
  placeholder="Email"
  
/>
     
   <Buttons onPress={(text) => this.validate(text)}> clicke mich</Buttons>
 
   </View>
  );  
   } 
    
         
}    

export default Test5
 
 
*/

  



/*

import React, {useState, useEffect} from 'react';
import {View, Text, Button, StyleSheet, ScrollView, TextInput,   TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import Buttons from "./Buttons";
import styles from './Style';


function NextExample() {

  const [name, setName] = useState();

  var USID = uuid.v1();
  
  const save = async () => {
    try{ 
    await AsyncStorage.setItem("Myname", USID);
  } catch(err){
    alert(err); 
   }
   
  };

  const load = async () => {
    try{ 
    let name = await AsyncStorage.getItem("Myname"); 
    if (name!==null){
      setName(name)
    }
  } catch(err){
    alert(err); 
   }
  };


  const remove = async () => {
    try{ 
    await AsyncStorage.removeItem("Myname");
  } catch(err){
    alert(err); 
   } finally{
     setName("");
   }
  };

useEffect(() => {
  load();
},[]);

//console.log(name);
  return  <View > 
               <Text> {name} </Text>
              <Buttons onPress={() => save() } >
                       Save  
              </Buttons>
              <Buttons onPress={() => remove() } >
                   remove  
              </Buttons>
          </View>
    
}
export default NextExample;

 
 
 
 */





/*
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function GoToButton({ screenName }) {
  const navigation = useNavigation();

  return (
    <Button
      title={`Go to ${screenName}`}
      onPress={() => navigation.navigate(screenName)}
    />
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <GoToButton screenName="Details" />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>

      <GoToButton screenName="Home" />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;



*/

/*

import React, {Component} from 'react';
import {Button,NativeModules,StyleSheet,Text,TextInput,View,} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

const KEY = '@@KEY';
var USID = uuid.v1();

const INPUTS = [
  {
    title: 'Name',
    stateFragment: 'name',
    testId: 'testInput-name',
  },
  
   
];

export default class Merge extends Component  {
  state = {
    needRestart: false,
    name: '',
    traits: {
      trait1: '',
      trait2: '',
    },
  };

 
  saveItem = async () => {
    const {
      name,

    } = this.state;

    const obj = {
      name,
    };

    try {
      await AsyncStorage.setItem(USID, JSON.stringify(obj));
    } catch (e) {
      console.warn(e);
    }

    this.setState({needRestart: true});
  };

  restoreItem = async () => {
    let storedItem = {};

    try {
      const saved = await AsyncStorage.getItem(USID);
      storedItem = JSON.parse(saved || '{"traits": {}}');
    } catch (e) {
      console.warn(e);
    }

    const {traits} = storedItem || {};

    this.setState({
      name: storedItem.name || '',
 
    });
  };

  render() {
    const {name} = this.state;
 
    return (
      <View>
        <View>
          <Text
            testID="storyTextView"
            style={
              styles.story
            }>{`${name}  `}</Text>
        </View>

        {INPUTS.map((input) => {
          const isTraitsPart = input.stateFragment.includes('trait');
          const onChangeHandler = (text) => {
            isTraitsPart
              ? this.setState(({traits: currentTraits}) => ({ traits: { ...currentTraits,[input.stateFragment]: text,}, }))
              : this.setState((state) =>
                  ({
                    ...state,
                    [input.stateFragment]: text,
                  }),
                );
          };

          return (
            <View>
              <TextInput
                style={styles.inputView}
                onChangeText={onChangeHandler}
              />
            </View>
          );
        })}
          <View style={styles.bottomButtons}>
            <Button title="Save item" onPress={this.saveItem}/>
            <Button title="Restore item" onPress={this.restoreItem}/>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputView: {
    borderColor: '#333',
    borderWidth: 0.5,
    borderStyle: 'solid',
    fontSize: 14,
    padding: 0,
  },
  bottomButtons: {
    justifyContent: 'space-around',
    marginTop: 20,
    flexDirection: 'row',
  },
  story: {
    fontSize: 18,
    color: '#222',
  },
});

 
*/


 


 











/*




import React, {useState, useEffect} from 'react';
import {View, Text, Button, StyleSheet, ScrollView, TextInput,   TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import Buttons from "./Buttons";
import styles from './Style';

function NextExample() {
  const [name, setName] = useState();


  const save = async () => {
    try{ 
    await AsyncStorage.setItem("Myname", name);
  } catch(err){
    alert(err); 
   }
  };


  const load = async () => {
    try{ 
    let name = await AsyncStorage.getItem("Myname");
    if (name!==null){
      setName(name)
    }
  } catch(err){
    alert(err); 
   }
  };



  const remove = async () => {
    try{ 
    await AsyncStorage.removeItem("Myname");
  } catch(err){
    alert(err); 
   } finally{
     setName("");
   }
  };



  //console.log("ID: ", uuid.v1());

useEffect(() => {
  load();
},[]);


  return  <View > 
               <Text> {name} </Text>
              <TextInput      style={styles.input}  placeholder="Name" onChangeText={(text) => setName(text)}/>
              <Buttons onPress={() => save() } >
                       Save  
              </Buttons>

              <Buttons onPress={() => remove() } >
                   remove  
              </Buttons>
          </View>
    
}
export default NextExample;

*/











/*


import React from 'react';
import {View, Text, Button, StyleSheet, ScrollView, TextInput, useState, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function NextExample() {


  
  const [error, setError] = React.useState(null);
  const [inputKey, setInputKey] = React.useState();
  const [inputValue, setInputValue] = React.useState();
  const [value, setValue] = React.useState();

  function runWithCatch(block) {
    return async () => {
      try {
        setError(null);
        await block();
      } catch (e) {
        setError('Caught: ' + e.message || e);
      }   
    };
  }
  
  async function readValue() {
    const v = await AsyncStorage.getItem(inputKey);
    setValue(v);
  }

  async function saveValue() {
    await AsyncStorage.setItem(inputKey, inputValue);
  }
   

  return  <View >
              <TextInput onChangeText={setInputKey} placeholder="key"/>
              <TextInput onChangeText={setInputValue}   placeholder="value"/>
              <View>
                <Button title="Read" onPress={runWithCatch(readValue)}/>
                <Button title="Save" onPress={runWithCatch(saveValue)}/>
              </View>
              <Text>Value for {inputKey}: {value}</Text>

              
          </View>
    
}
export default NextExample;

*/

/*
import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function GetSet() {
  const [storedNumber, setStoredNumber] = React.useState('');
  const [needsRestart, setNeedsRestart] = React.useState(false);

  React.useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then((value) => {
      if (value) {
        setStoredNumber(value);
      }
    });
  }, []);

  const increaseByTen = React.useCallback(async () => {
    const newNumber = +storedNumber > 0 ? +storedNumber + 10 : 10;

    await AsyncStorage.setItem(STORAGE_KEY, `${newNumber}`);

    setStoredNumber(`${newNumber}`);
    setNeedsRestart(true);
  }, [setNeedsRestart, setStoredNumber, storedNumber]);

  
  return (
    <View>
      <Text testID="storedNumber_text">
        {storedNumber}
      </Text>
      <Button
        testID="increaseByTen_button"
        title="Increase by 10"
        onPress={increaseByTen}
      />
 
    </View>
  );
}



export const STORAGE_KEY = 'random';
*/



/*
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 30,
    height: 30,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default function DisplayAnImage() {
  return (
    <View style={styles.container}>
     <Image style={styles.tinyLogo} source={require('./Icons/einstellung.png')} />
     <Image style={styles.tinyLogo} source={require('./Icons/home.png')} />
     <Image style={styles.tinyLogo} source={require('./Icons/plus.png')} />
     <Image style={styles.tinyLogo} source={require('./Icons/zurück.png')} />
     <Image style={styles.tinyLogo} source={require('./Icons/einklappen.png')} />
     <Image style={styles.tinyLogo} source={require('./Icons/ausklappen.png')} />
    </View>
    
  );
}

*/

/*
const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
         
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;


 
*/
 

 /*

import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import * as SecureStore from 'expo-secure-store';

async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
}

async function getValueFor(key) {
  let result = await SecureStore.getItemAsync(key);
  if (result) {
    alert("🔐 Here's your value 🔐 \n" + result);
  } else {
    alert('No values stored under that key.');
  }
}

export default function App() {
  const [key, onChangeKey] = React.useState('Your key here');
  const [value, onChangeValue] = React.useState('Your value here');
  console.log(SecureStore.isAvailableAsync());
  return (
    <View style={styles.container}> 
       
      <Text style={styles.paragraph}>Save an item, and grab it later!</Text>
  
      <Button
        title="Save this key/value pair"
        onPress={() => { 
          save(key, value);  
          onChangeKey('Your key here');
          onChangeValue('Your value here');  
        }} 
      />

      <Text style={styles.paragraph}>🔐 Enter your key 🔐</Text>
      <TextInput   
        style={styles.textInput} 
        onSubmitEditing={event => {
          getValueFor(event.nativeEvent.text);
        }} 
        placeholder="Enter the key for the value you want to get"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    marginTop: 34,
    margin: 24, 
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textInput: {
    height: 35,
    borderColor: 'gray',
    borderWidth: 0.5,
    padding: 4,
  },
});


 */

//Für Einfügen.js


/*
import React, {Component}from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, View, TouchableOpacity, Modal } from "react-native";
import Buttons from "./Buttons";
import Scrollen from "./Scrollen";
import { Button, Icon,  ListItem, Avatar  } from 'react-native-elements';
import * as firebase from "firebase";
import "firebase/firestore";
import { db, auth } from "firebase";
import moment from 'moment';
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

 */ 
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
 /*
writeuserdata(zeit, raum, dozent, fach) {
 
  firebase.database().ref("Nutzer").push(
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
 
    firebase.database().ref("students").on("value", (data) => {
     console.log(data.toJSON());
    }) 
     
 
} 

*/
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
                                                                    console.log(snapshot) 
                                                                    //console.log(students)   
                                                                    
                                                                })
                                                                .catch(error => console.log(error))
                                                                }
                                                                */
    /*
componentDidMount(){
firebase.firestore().collection('Nutzer')
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
                                
                                <TouchableOpacity   
                                 style={styles.buttonStyle}    
                                 
                                 onPress={()=>{this.writeuserdata( this.state.zeit,this.state.raum, this.state.dozent , this.state.fach );this.setState({show:false}) } } 
                                 >

                                    <Text style={styles.TextStyle}> Hinzufügen </Text>
                                </TouchableOpacity>
                                
                            </View>
                      </SafeAreaView>
                        </View>
                      </View>
                  </Modal>
                  <View style={{  flex: 0.9,    flexDirection: 'column'  }}> 
                      <View style={{    borderWidth: 2 , borderRadius: 10,  backgroundColor: "white", flexDirection: 'row',    alignItems: 'baseline' }}> 
                            <Text style={{     fontSize:25,   marginLeft:5, margin:5,  justifyContent: 'center'  }}>Fächer einfügen</Text>
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
*/


/*

import React, { Component } from "react";
import { StyleSheet, TextInput } from "react-native";

class Test9 extends Component {
  handleValidation(value) {
    const { pattern } = this.props;
    if (!pattern) return true;

    // string pattern, one validation rule
    if (typeof pattern === 'string') {
      const condition = new RegExp(pattern, 'g');
      return condition.test(value);
    }

    // array patterns, multiple validation rules
    if (typeof pattern === 'object') {
      const conditions = pattern.map(rule => new RegExp(rule, 'g'));
      return conditions.map(condition => condition.test(value));
    }
  }

  onChange(value) {
    const { onChangeText, onValidation } = this.props;
    const isValid = this.handleValidation(value);

    onValidation && onValidation(isValid);
    onChangeText && onChangeText(value);
  }

  render() {
    const {
      pattern,
      onChangeText,
      children,
      style,
      ...props
    } = this.props;

    return (
      <TextInput
        style={style}
        onChangeText={value => this.onChange(value)}
        {...props}
      >
        {children}
      </TextInput>
    );
  }
}

export default Test9;
*/