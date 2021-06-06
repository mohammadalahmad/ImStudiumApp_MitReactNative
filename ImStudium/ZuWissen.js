import React, {Component}from "react";
import { ScrollView, Linking, Text, View, TouchableOpacity} from "react-native";
import {ListItem} from 'react-native-elements';
import * as firebase from "firebase";
import "firebase/firestore";
import styles from './Style';
import { List } from 'react-native-paper';

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
   
export default class ZuWissen extends Component {
    
    render() {
        
        return (
          <ScrollView style={styles.ScrollView}> 
            <View>
                <Text
                style={{
                  fontWeight: "bold",
                  alignSelf: "center",
                  fontSize: 30,
                  marginTop: 10,
                  marginBottom: 100,
                }}
                   >
                 Gut zu Wissen
                 </Text>
                <View>               
                    <List.Accordion   title="Bafög" style={styles.MenuScreen2} > 
                          <ListItem.Title   style={styles.TextFirebase}>Grundsätzlich haben alle Studierenden einen Rechtsanspruch auf Förderung nach dem Bundesausbildungsförderungsgesetz. Für diese finanzielle Unterstützung müssen bestimmte Voraussetzungen erfüllt sein. Ob du diese Leistung beziehen kannst und wie viel Bafög dir zusteht, sowie auch weitere Informationen findest du unter: 
                          </ListItem.Title>
                      </List.Accordion>
                      <List.Accordion   title="Semesterbeitrag " style={styles.MenuScreen2} > 
                          <ListItem.Title   style={styles.TextFirebase}>Als Student zahlst du jedes Semester einen Semesterbeitrag. Dieser setzt sich zusammen aus: 
                                                    •	GVH-Ticket 
                                                    •	Landesweites Semesterticket 
                                                    •	Studentenschaft 
                                                    •	Studentenwerk 
                                                    •	Verwaltungskostenbeitrag   
                                                    Achte auf die Rückmeldefristen für die jeweiligen Semester. Weitere Informationen  findest du hier (https://www.hs-hannover.de/ueber-uns/organisation/akademische- angelegenheiten/studierende/semesterbeitrag-und-rueckmeldung/). 
                          </ListItem.Title>
                      </List.Accordion>
                      <List.Accordion   title="Modulhandbuch" style={styles.MenuScreen2} > 
                          <ListItem.Title   style={styles.TextFirebase}>
                            Das Modulhandbuch stellt die Prüfungsordnung und den Studienablauf dar. Dort findest du die Einzelheiten zu jedem Modul, 
                            das du während deines Studiengangs belegen wirst. Die Studiengänge Informationsmanagement (BIM) und Medizinisches Informationsmanagement 
                            (BMI) haben unterschiedliche Modulhandbücher, die im Folgenden verlinkt sind. 
                            BIM Modulhandbuch{"\n"}{"\n"}<TouchableOpacity onPress={() => Linking.openURL('https://daten-ik.hs-hannover.de/satellitenseiten/BIM/Studienhandbuch_Bachelor_Informationsmanagement_20201202.pdf')}><Text style={{color: 'blue'}}> 
                                               hier 🎉
                      </Text></TouchableOpacity>  
                            BMI Modulhandbuch (https://bmi.f3.hs-hannover.de/wp-content/uploads/2019/02/Studienhandbuch.pdf) 
                          </ListItem.Title>
                      </List.Accordion>
                      <List.Accordion   title="Language Center" style={styles.MenuScreen2} > 
                          <ListItem.Title   style={styles.TextFirebase}>Während deines Studiums musst du mindestens einen Englischkurs belegen. Das Language Center bietet kostenlose Sprachkurse auf verschiedenen Sprachniveaus für euch. Das Gesamtangebot für das laufende Semester, sowie die Anmeldung findest du hier(https://www.hs-hannover.de/ueber-uns/organisation/servicezentrum-lehre/servicezentrum-lehre-abteilung-sprachen/sprachkurse/). </ListItem.Title>
                      </List.Accordion>
                      <List.Accordion   title="Ersti-Broschüre" style={styles.MenuScreen2} > 
                          <ListItem.Title   style={styles.TextFirebase}>In der Erstsemesterbroschüre findest du hilfreiche Informationen und Ansprechpartner*innen für einen perfekten Studienstart. Die Broschüre findest du hier (https://f3.hs-hannover.de/studium/informationen-fuer-erstsemester/ )</ListItem.Title>
                      </List.Accordion>
                      <List.Accordion   title="Linksammlung " style={styles.MenuScreen2} > 
                          <ListItem.Title   style={styles.TextFirebase}>Suchst du einen bestimmten IT-Angebot? Mit den Links für externe oder interne Seiten erhaltest du schnell Zugriff auf die verschiedenen Dienste, wie Academic Cloud oder Webspace und andere interessante Webseiten.  Hier (https://service.it.hs-hannover.de/links/) kommst du zu der Linksammlung. </ListItem.Title>
                      </List.Accordion>
                </View> 
            </View>
            </ScrollView>
        ) 
    }
}