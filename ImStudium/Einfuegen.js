import React, { Component, useState, useEffect } from "react";
import {
  SafeAreaView,
  FlatList,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";

import {ListItem} from "react-native-elements";
import * as firebase from "firebase";
import "firebase/firestore";
import uuid from "react-native-uuid";
import styles from "./Style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { List } from "react-native-paper";
 

var firebaseConfig = {
  apiKey: "AIzaSyDj-vY3N5PQ1RDLbsbK85G6JBbMmTXMU5c",
  authDomain: "imstudium-b7940.firebaseapp.com",
  databaseURL: "https://imstudium-b7940-default-rtdb.firebaseio.com",
  projectId: "imstudium-b7940",
  storageBucket: "imstudium-b7940.appspot.com",
  messagingSenderId: "909412362520",
  appId: "1:909412362520:web:6980a283c134da263e166d",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

var USID = uuid.v1();
class Einfuegen extends React.Component {
  constructor(props) {
    super(props);
    this.callbackFromB = this.callbackFromB.bind(this);
    this.state = {
      id: uuid.v1(),
      title: "",
      show: false,
      show1: false,
      dozent: "",
      zeit: "",
      zeit1: "",
      raum: "",
      fach: "",
      students: null,
      faecher: [],
      disabled: true,
      usid: "",
      token: "",
      test5: "",
      tag: "",
      time: "", 
      animals: [],
      loading: false,
      selectedId: null,
      selectedDay: "Mo",
      DATA: [
        { id: "1", title: "Mo" },
        { id: "2", title: "Di" },
        { id: "3", title: "Mi" },
        { id: "4", title: "Do" },
        { id: "5", title: "Fr" },
        { id: "6", title: "Sa" },
      ],
      selectedId2: null,
      selectedDay2: "Montag",
      wochentage: [
        { id: "1", title: "Montag" },
        { id: "2", title: "Dienstag" },
        { id: "3", title: "Mittwoch" },
        { id: "4", title: "Donnerstag" },
        { id: "5", title: "Freitag" },
        { id: "6", title: "Samstag" },
      ],
    };
    this.getData();
  }

  callbackFromB(data) {
    this.setState({ tag: data });
    console.log(data);
  }

  getData = async () => {
    try {
      let value = await AsyncStorage.getItem("token");
      if (value !== null) {
        this.setState({ token: value });
      }
    } catch (err) {
      alert(err);
    }
  };

  save(id2) {
    this.setState({ usid: id2 });
  }

  async checkUserSignedIn() {
    var test = "";
    let context = this;
    try {
      var value1 = await AsyncStorage.getItem("token");
      if (value1 != null) {
        this.state.test5 = value1;
        console.log("nicht gleich null", value1);
        this.getDayData();
      } else {
        this.setState({ token: USID });
        await AsyncStorage.setItem("token", USID);
        console.log(" gleich null", value1);
        this.getDayData();
      }
    } catch (error) {
      console.log(error);
    }
  }

  testID() {}

  writeuserdata(fach, selectedDay, dozent, zeit, zeit1, raum) {
    console.log("test================================0", this.state.test5);
    console.log("selectedDay", this.state.selectedDay);
    firebase
      .database()
      .ref(`nutzer/` + this.state.test5 + "/faecher/")
      .push({
        fach,
        selectedDay,
        dozent,
        zeit,
        zeit1,
        raum,
      })
      .then((data) => {
        console.log("data", data);
      })
      .catch((error) => {
        alert("error", error);
      });

    firebase
      .database()
      .ref("nutzer")
      .on("value", (data) => {
        console.log(data.toJSON());
      });
  }

  getDayData() {
    console.log("wwwwwwwwwwwwwwwwwww", this.state.token);
    console.log("======================0", this.state.selectedDay2);
    if (this.state.selectedDay2 == "Montag") {
      firebase
        .database()
        .ref()
        .child(`nutzer/` + this.state.test5 + "/faecher/")
        .orderByChild("selectedDay") 
        .equalTo("Mo")
        .on("value", (childSnapshot) => {
          //firebase.database().ref().child(  `nutzer/` + "7238a98d-bdad-11eb-b36c-3158e41d1d70" + "/faecher").where("capital", "==", true).on("value", (childSnapshot) => {
          //   firebase.firestore().collection( `nutzer/` + "7238a98d-bdad-11eb-b36c-3158e41d1d70" + "/faecher").get().then(snapshot => {
          // firebase.database().ref().child(  `nutzer/` + "7238a98d-bdad-11eb-b36c-3158e41d1d70" + "/faecher").orderByChild("dozent").equalTo("Steinberg").on("value", (childSnapshot) => {

          const animals = [];
          childSnapshot.forEach((doc) => {
            animals.push({
              key: doc.key,
              fach: doc.toJSON().fach,
              selectedDay: doc.toJSON().selectedDay,
              dozent: doc.toJSON().dozent,
              zeit: doc.toJSON().zeit,
              zeit1: doc.toJSON().zeit1,
              raum: doc.toJSON().raum,
            });
            this.setState({
              animals: animals.sort((dozent) => {
                return dozent;
              }),
              loading: false,
            });
          });
        });
    } else if (this.state.selectedDay2 == "Dienstag") {
      firebase
        .database()
        .ref()
        .child(`nutzer/` + this.state.test5 + "/faecher/")
        .orderByChild("selectedDay")
        .equalTo("Di")
        .on("value", (childSnapshot) => {
          //firebase.database().ref().child(  `nutzer/` + "7238a98d-bdad-11eb-b36c-3158e41d1d70" + "/faecher").where("capital", "==", true).on("value", (childSnapshot) => {
          //   firebase.firestore().collection( `nutzer/` + "7238a98d-bdad-11eb-b36c-3158e41d1d70" + "/faecher").get().then(snapshot => {
          // firebase.database().ref().child(  `nutzer/` + "7238a98d-bdad-11eb-b36c-3158e41d1d70" + "/faecher").orderByChild("dozent").equalTo("Steinberg").on("value", (childSnapshot) => {

          const animals = [];
          childSnapshot.forEach((doc) => {
            animals.push({
              key: doc.key,
              fach: doc.toJSON().fach,
              selectedDay: doc.toJSON().selectedDay,
              dozent: doc.toJSON().dozent,
              zeit: doc.toJSON().zeit,
              raum: doc.toJSON().raum,
            });
            this.setState({
              animals: animals.sort((dozent) => {
                return dozent;
              }),
              loading: false,
            });
          });
        });
    } else if (this.state.selectedDay2 == "Mittwoch") {
      firebase
        .database()
        .ref()
        .child(`nutzer/` + this.state.test5 + "/faecher/")
        .orderByChild("selectedDay")
        .equalTo("Mi")
        .on("value", (childSnapshot) => {
          //firebase.database().ref().child(  `nutzer/` + "7238a98d-bdad-11eb-b36c-3158e41d1d70" + "/faecher").where("capital", "==", true).on("value", (childSnapshot) => {
          //   firebase.firestore().collection( `nutzer/` + "7238a98d-bdad-11eb-b36c-3158e41d1d70" + "/faecher").get().then(snapshot => {
          // firebase.database().ref().child(  `nutzer/` + "7238a98d-bdad-11eb-b36c-3158e41d1d70" + "/faecher").orderByChild("dozent").equalTo("Steinberg").on("value", (childSnapshot) => {

          const animals = [];
          childSnapshot.forEach((doc) => {
            animals.push({
              key: doc.key,
              fach: doc.toJSON().fach,
              selectedDay: doc.toJSON().selectedDay,
              dozent: doc.toJSON().dozent,
              zeit: doc.toJSON().zeit,
              raum: doc.toJSON().raum,
            });
            this.setState({
              animals: animals.sort((dozent) => {
                return dozent;
              }),
              loading: false,
            });
          });
        });
    } else if (this.state.selectedDay2 == "Donnerstag") {
      firebase
        .database()
        .ref()
        .child(`nutzer/` + this.state.test5 + "/faecher/")
        .orderByChild("selectedDay")
        .equalTo("Do")
        .on("value", (childSnapshot) => {
          //firebase.database().ref().child(  `nutzer/` + "7238a98d-bdad-11eb-b36c-3158e41d1d70" + "/faecher").where("capital", "==", true).on("value", (childSnapshot) => {
          //   firebase.firestore().collection( `nutzer/` + "7238a98d-bdad-11eb-b36c-3158e41d1d70" + "/faecher").get().then(snapshot => {
          // firebase.database().ref().child(  `nutzer/` + "7238a98d-bdad-11eb-b36c-3158e41d1d70" + "/faecher").orderByChild("dozent").equalTo("Steinberg").on("value", (childSnapshot) => {

          const animals = [];
          childSnapshot.forEach((doc) => {
            animals.push({
              key: doc.key,
              fach: doc.toJSON().fach,
              selectedDay: doc.toJSON().selectedDay,
              dozent: doc.toJSON().dozent,
              zeit: doc.toJSON().zeit,
              raum: doc.toJSON().raum,
            });
            this.setState({
              animals: animals.sort((dozent) => {
                return dozent;
              }),
              loading: false,
            });
          });
        });
    } else if (this.state.selectedDay2 == "Freitag") {
      firebase
        .database()
        .ref()
        .child(`nutzer/` + this.state.test5 + "/faecher/")
        .orderByChild("selectedDay")
        .equalTo("Fr")
        .on("value", (childSnapshot) => {
          //firebase.database().ref().child(  `nutzer/` + "7238a98d-bdad-11eb-b36c-3158e41d1d70" + "/faecher").where("capital", "==", true).on("value", (childSnapshot) => {
          //   firebase.firestore().collection( `nutzer/` + "7238a98d-bdad-11eb-b36c-3158e41d1d70" + "/faecher").get().then(snapshot => {
          // firebase.database().ref().child(  `nutzer/` + "7238a98d-bdad-11eb-b36c-3158e41d1d70" + "/faecher").orderByChild("dozent").equalTo("Steinberg").on("value", (childSnapshot) => {

          const animals = [];
          childSnapshot.forEach((doc) => {
            animals.push({
              key: doc.key,
              fach: doc.toJSON().fach,
              selectedDay: doc.toJSON().selectedDay,
              dozent: doc.toJSON().dozent,
              zeit: doc.toJSON().zeit,
              raum: doc.toJSON().raum,
            });
            this.setState({
              animals: animals.sort((dozent) => {
                return dozent;
              }),
              loading: false,
            });
          });
        });
    } else if (this.state.selectedDay2 == "Samstag") {
      firebase
        .database()
        .ref()
        .child(`nutzer/` + this.state.test5 + "/faecher/")
        .orderByChild("selectedDay")
        .equalTo("Sa")
        .on("value", (childSnapshot) => {
          //firebase.database().ref().child(  `nutzer/` + "7238a98d-bdad-11eb-b36c-3158e41d1d70" + "/faecher").where("capital", "==", true).on("value", (childSnapshot) => {
          //   firebase.firestore().collection( `nutzer/` + "7238a98d-bdad-11eb-b36c-3158e41d1d70" + "/faecher").get().then(snapshot => {
          // firebase.database().ref().child(  `nutzer/` + "7238a98d-bdad-11eb-b36c-3158e41d1d70" + "/faecher").orderByChild("dozent").equalTo("Steinberg").on("value", (childSnapshot) => {

          const animals = [];
          childSnapshot.forEach((doc) => {
            animals.push({
              key: doc.key,
              fach: doc.toJSON().fach,
              selectedDay: doc.toJSON().selectedDay,
              dozent: doc.toJSON().dozent,
              zeit: doc.toJSON().zeit,
              raum: doc.toJSON().raum,
            });
            this.setState({
              animals: animals.sort((dozent) => {
                return dozent;
              }),
              loading: false,
            });
          });
        });
    } else {
      alert("Wähle bitte einen Tag");
    }
  }

  deleteData(wert) {
    firebase
        .database()
        .ref()
        .child(`nutzer/` + this.state.test5 + "/faecher/" + wert ).remove();
  }



  componentDidMount() {
 
    this.setState(
      { selectedId2: 1, selectedDay2: "Montag", selectedDay: "Mo",    },
      () => {
        this.checkUserSignedIn();
       
      }
    );
    
  }

  
  vaild_field = () => {
    const { zeit } = this.state;
    const reg =  /[0-9]{2}\:[0-9]{2}|[0-9]{2}\.[0-9]{2}/;
    let isValid= reg.test(this.state.zeit)
    if (zeit == "" ) {
      alert("Bitte Zeit eingeben");
    }  else if(isValid === false){
      alert("Bitte korrekte Zeit eingeben wie 12:00");
    }
    
    else {
      this.writeuserdata(
        this.state.fach,
        this.state.selectedDay,
        this.state.dozent,
        this.state.zeit,
        this.state.zeit1,
        this.state.raum
      );
      this.setState({ show: false });
      this.state.zeit="";
     
    }
  };

 abbrechen = () => {
  this.setState({ show: false });
  this.state.zeit="";
 
 }


  render() {
    console.log(this.state.selectedDay2);
    const { rec, animals } = this.state;
    //console.log(this.state.animals) USID
    console.log("12", this.state.test5);

    const Item = ({ item, onPress, backgroundColor, textColor }) => (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.item, backgroundColor]}
      >
        <Text style={[styles.title, textColor]}>{item.title}</Text>
      </TouchableOpacity>
    );

    const Item2 = ({ item, onPress, backgroundColor, textColor }) => (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.item1, backgroundColor]}
      >
        <Text style={[styles.title, textColor]}>{item.title}</Text>
      </TouchableOpacity>
    );

    const renderItem = ({ item }) => {
      const backgroundColor =
        item.id === this.state.selectedId ? "#FFF" : "#FAEBD7";
      const color = item.id === this.state.selectedId ? "red" : "#000000";

      this.state.tag = this.state.selectedDay;

      return (
        <Item
          item={item}
          onPress={() => {
            this.setState({ selectedId: item.id, selectedDay: item.title });
          }}
          backgroundColor={{ backgroundColor }}
          textColor={{ color }}
        />
      );
    };
    const renderItem2 = ({ item }) => {
      const backgroundColor =
        item.id === this.state.selectedId2 ? "#FFF" : "#FAEBD7";
      const color = item.id === this.state.selectedId2 ? "red" : "#000000";

      return (
        <Item2
          item={item}
          onPress={() => {
            this.setState(
              { selectedId2: item.id, selectedDay2: item.title },
              () => {
                this.getDayData();
              }
            );
          }}
          backgroundColor={{ backgroundColor }}
          textColor={{ color }}
        />
      );
    };
    // console.log( "test",  this.state.token);
    const { DATA } = this.props;
    const { semester } = this.props;
    return (
      //console.log( "testssssssssssssssss",       this.state.selectedDay),
      //console.log("wwwwwwwwwwwwwwwwwww", this.state.test5),
      //  nicht gleich null 74eea1cd-bdad-11eb-9575-0302b4b48a16
      // nicht gleich null 7238a98d-bdad-11eb-b36c-3158e41d1d70
      // console.log( "test1",  this.state.token),
      <ScrollView style={styles.ScrollView}>
        <View style={styles.menu}>
          <Text
            style={{
              fontWeight: "bold",
              alignSelf: "center",
              fontSize: 30,
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            Stundenplan
          </Text>
          <View style={styles.container1}>
            <SafeAreaView>
              <FlatList
                horizontal={true}
                data={this.state.wochentage}
                renderItem={renderItem2}
                keyExtractor={(item) => item.id}
                extraData={this.state.selectedId2}
              />
            </SafeAreaView>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
            <Modal transparent={true} visible={this.state.show}>
              <View style={{ backgroundColor: "#000000aa", flex: 1 }}>
                <View
                  style={{
                    backgroundColor: "#ffffff",
                    margin: 30,
                    padding: 34,
                    borderRadius: 10,
                    height: 400,
                  }}
                >
                  <SafeAreaView>
                    <TextInput
                      style={styles.input}
                      placeholder="Veranstaltung"
                      onChangeText={(fach) => this.setState({ fach })}
                    />
                    <View>
                      <SafeAreaView>
                        <FlatList
                          horizontal={true}
                          data={this.state.DATA}
                          renderItem={renderItem}
                          keyExtractor={(item) => item.id}
                          extraData={(item) => item.id}
                        />
                      </SafeAreaView>
                    </View>

                    <TextInput
                      style={styles.input}
                      placeholder="Dozent"
                      onChangeText={(dozent) => {
                        this.setState({ dozent });
                      }}
                    />

                    <TextInput
                      style={styles.input}
                      keyboardType={"numeric"}
                      placeholder="von (z.B. 10.00)"
                      value={this.state.zeit}
                      pattern={[
                        '[0-9]{1,2}\[:||.][0-9]{2}',
                      ]}
                      onValidation={isValid => this.setState({ isValid })}
                      onChangeText={(zeit) => this.setState({ zeit })}
                    />
                    <TextInput
                      style={styles.input}
                      keyboardType={"numeric"}
                      placeholder="bis (z.B. 12.00)"
                      value={this.state.zeit1}
                      onChangeText={(zeit1) => this.setState({ zeit1 })}
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="Raum (z.B. 2E.1.26)"
                      onChangeText={(raum) => this.setState({ raum })}
                    />

                    <View style={{ flexDirection: "row" }}>
                      <TouchableOpacity
                        onPress={() => {
                          this.abbrechen();
                        }}
                        style={styles.buttonStyle}
                      >
                        <Text style={styles.TextStyle1}> Abbrechen</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={() => {
                          this.vaild_field();
                        }}
                        // disabled= {this.state.disabled}
                      >
                        <Text style={styles.TextStyle}> Hinzufügen </Text>
                      </TouchableOpacity>
                    </View>
                  </SafeAreaView>
                </View>
              </View>
            </Modal>
            <View style={styles.container}>
              <View>
                <List.Section style={styles.FaecherEinfuegen4} title="">
                  <List.Accordion 
                    onPress={() => {
                      this.setState({ show: true });
                    }}
                    style={styles.MenuScreen2}
                    title="Fächer einfügen"
                    right={(props) => <List.Icon {...props} icon="plus" />}
                  ></List.Accordion>
                </List.Section>
                {animals.map((item, i) => (
                  console.log("itemitemitemitemitemitemitemitem", item.key),
                  
                  <List.Accordion
                    key={i}
                    title={item.fach}
                    style={styles.MenuScreen2}
                  > 
                    <ListItem.Title style={styles.TextFirebase}>
                      {item.zeit} - {item.fach}  
                      {"\n"}{item.zeit} - {item.zeit1}: {item.raum}: {item.dozent}{" "}  
                      <TouchableOpacity style={styles.bearbeitenpunkte} onPress={() => {
                      this.setState({ show1: true });
                    }}>
                  <Text style={styles.deletepunkte}> ... </Text>
                </TouchableOpacity>
                    </ListItem.Title>
                    <Modal transparent={true} visible={this.state.show1}>
                        <View style={{ backgroundColor: "#000000aa", flex: 1 }}>
                          <View
                            style={{
                              backgroundColor: "#ffffff",
                              margin: 25,
                              padding: 30,
                              borderRadius: 10,
                              alignItems: 'center',
                              justifyContent: "center",
                              flexDirection: 'row', 
                              height: 130,
                            }}
                          >
                            <SafeAreaView>
                              <View style={{ flexDirection: "row" }}>
                                <TouchableOpacity
                                  onPress={() => {
                                    this.setState({ show1: false });
                                  }}
                                  style={styles.buttonStyle}
                                >
                                  <Text style={styles.TextStyle1}> Abbrechen</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                  style={styles.buttonStyle}
                                  onPress={() => {
                                    this.deleteData(item.key);
                                    this.setState({ show1: false });
                                  }}
                                  // disabled= {this.state.disabled}
                                >
                                  <Text style={styles.TextStyle}> Löschen </Text>
                                </TouchableOpacity>
                              </View>
                            </SafeAreaView>
                          </View>
                        </View>
                    </Modal> 
                  </List.Accordion>
                ))}
              </View>
            </View>
          </View>
        </View>
         
      </ScrollView>
    );
  }
}

export default Einfuegen;

/*
<Modal transparent={true} visible={this.state.show1}>
<View style={{ backgroundColor: "#000000aa", flex: 1 }}>
  <View
    style={{
      backgroundColor: "#ffffff",
      margin: 30,
      padding: 34,
      borderRadius: 10,
      height: 400,
    }}
  >
    <SafeAreaView>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => {
            this.setState({ show1: false });
          }}
          style={styles.buttonStyle}
        >
          <Text style={styles.TextStyle1}> Abbrechen</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            this.deleteData(item.key);
          }}
          // disabled= {this.state.disabled}
        >
          <Text style={styles.TextStyle}> Löschen </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  </View>
</View>
</Modal>

*/