import React, {Component, useState, useEffect}from "react";
import 'react-native-gesture-handler';
import {Text, AppRegistry, View, Image,  ScrollView, StyleSheet, TouchableOpacity, Modal, SafeAreaView} from "react-native";
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
import Mensa from "./Mensa";
import MensaPlan from "./MensaPlan";
import Buttons from "./Buttons";
import ZuWissen from "./ZuWissen";
import Einfuegen from "./Einfuegen";
import {handleClick1} from "./Einfuegen";
 
import Test2 from "./Test2";
import Test from "./Test";
import Wochentage from "./Wochentage";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, Icon,  ListItem, Avatar  } from 'react-native-elements';
import styles from './Style';
 

function GOHome({ screenName }) {
  const navigation = useNavigation();

  return (
      <TouchableOpacity  onPress={() => navigation.navigate(screenName)}>       
          <Icon                       
            style = {{margin : 15, marginBottom: 25}}
            size={47}  
            name="home"
            type='font-awesome' 
            />
      </TouchableOpacity> 
  );
}

function KurseEinfuegen({ screenName }) {
  const navigation = useNavigation();

  return (
      <TouchableOpacity onPress={() => {alert('You tapped the button!');}} > 
            <Image 
            style={styles.tinyLogo} 
            source={require('./Icons/einstellung.png')} />
      </TouchableOpacity> 
  );
}



class MenuScreen extends Component {
    constructor(props){
      super(props);
      this.state = {  
        show: false, 
                     }; 
                       } 
        
render (){
const { navigate } = this.props.navigation;
      return (
          <View style={styles.MenuScreen1}> 
              <View  style={styles.MenuScreen} >
                  <View style={styles.Behalter}> 
                      <TouchableOpacity style={styles.buttonGPlusStyle} activeOpacity={0.5} onPress={() => {   navigate('Kurs einf??gen', { caption: 'Some caption' })}}>
                            <Image
                              source={require('./Icons/Stundenplan.png')} 
                              style={styles.buttonImageIconStyle}
                            />
                            <View style={styles.buttonIconSeparatorStyle} />
                            <Text style={styles.buttonTextStyle}> Stundenplan </Text>
                      </TouchableOpacity>
                  </View>    
              </View>
              <View  style={styles.MenuScreen} >
                  <View style={styles.Behalter}> 
                      <TouchableOpacity style={styles.buttonGPlusStyle} activeOpacity={0.5} >
                            <Image
                              source={require('./Icons/Pr??fungen.png')} 
                              style={styles.buttonImageIconStyle}
                            />
                            <View style={styles.buttonIconSeparatorStyle} />
                            <Text style={styles.buttonTextStyle}> Pr??fungen </Text>
                      </TouchableOpacity>
                     
                  </View>
              </View>
              <View  style={styles.MenuScreen} >
                  <View style={styles.Behalter}> 
                      <TouchableOpacity style={styles.buttonGPlusStyle} activeOpacity={0.5}  onPress={() => navigate('Mensa', { caption: 'Some caption' })}>
                            <Image
                              source={require('./Icons/Mensa.png')} 
                              style={styles.buttonImageIconStyle}
                            />
                            <View style={styles.buttonIconSeparatorStyle} />
                            <Text style={styles.buttonTextStyle}> Mensa </Text>
                      </TouchableOpacity>
                     
                  </View>
              </View>

              <View  style={styles.MenuScreen}> 
                  <View style={styles.Behalter}> 
                      <TouchableOpacity style={styles.buttonGPlusStyle} activeOpacity={0.5}   onPress={() => navigate('Gut Zu Wissen', { caption: 'Some caption' })}>
                            <Image
                              source={require('./Icons/Gut_zu_wissen.png')} 
                              style={styles.buttonImageIconStyle}
                            />
                            <View style={styles.buttonIconSeparatorStyle} />
                            <Text style={styles.buttonTextStyle}> Gut zu wissen </Text>
                      </TouchableOpacity>
                  </View>
              </View>
              <View  style={styles.MenuScreen}> 
                  <View style={styles.Behalter}> 
                      <TouchableOpacity style={styles.buttonGPlusStyle} activeOpacity={0.5} onPress={() => navigate('News', { caption: 'Some caption' })}>
                            <Image
                              source={require('./Icons/News.png')} 
                              style={styles.buttonImageIconStyle}
                            />
                            <View style={styles.buttonIconSeparatorStyle} />
                            <Text style={styles.buttonTextStyle}> News </Text>
                      </TouchableOpacity>
                  </View>
              </View>

              <View  style={styles.MenuScreen}> 
                  <View style={styles.Behalter}> 
                      <TouchableOpacity style={styles.buttonGPlusStyle} activeOpacity={0.5}>
                            <Image
                              source={require('./Icons/Freizeit.png')} 
                              style={styles.buttonImageIconStyle}
                            />
                            <View style={styles.buttonIconSeparatorStyle} />
                            <Text style={styles.buttonTextStyle}> Freizeit </Text>
                      </TouchableOpacity>
                  </View>
              </View>
              
          </View>  
      );
}}
  
 function Stundenplan1  ({ navigation }) {
      return (
        <View  style={styles.HomeScreen}>
              <View>
                <MensaPlan/>
              </View >
          <TouchableOpacity onPress={() => navigation.navigate('Kurs einf??gen')} style={{backgroundColor:"#FF9933",   alignItems: 'center', width:"80%", height: 60,  justifyContent: 'center', borderRadius: 10, margin:80}}> 
                <Text style={{ color: "white" , fontSize:20}}>Stundenplan erstellen</Text>
          </TouchableOpacity>
        </View>
      );
    }

    function StundenplanErstellen({ navigation }) {
          return (
            <View style={styles.HomeScreen}>
              <Einfuegen />
            </View>
          );
                                                   }

  function MensaScreen({ navigation }) {
          return (
            <View style={styles.HomeScreen}>
              <Mensa />
            </View>
          );
                                        }

  function MensaPlanScreen() {
          return (
            <View style={styles.HomeScreen}>
              <MensaPlan />
            </View>
          );
                              }
 
  function GutZuWissen() {
          return (
            <View style={styles.HomeScreen}>
              <MensaPlan/>
            </View>
          );
                          } 
  
      function news() {
        return (
          <View style={styles.HomeScreen}>
            <MensaPlan/>
          </View>
        );
                        } 


   const von_Laptop = "82c3a5fb-bd9c-11eb-87cb-ff2b6fb5ff8c"
   const von_Handy = "7bebf792-bd74-11eb-8b52-5d41905ab7af"
  const Stack = createStackNavigator();
  function TabStack() {
          return (
            <Tab.Navigator
              initialRouteName="Feed"
              tabBarOptions={{
                activeTintColor: '#FFFFFF',
                inactiveTintColor: '#F8F8F8',
                style: {
                  backgroundColor: '#633689',
                },
                labelStyle: {
                  textAlign: 'center',
                },
                indicatorStyle: {
                  borderBottomColor: '#87B56A',
                  borderBottomWidth: 2,
                },
              }}>
              <Tab.Screen
                name="FirstPage"
                component={FirstPage}
                options={{
                  tabBarLabel: 'Home',
                  // tabBarIcon: ({ color, size }) => (
                  //   <MaterialCommunityIcons name="home" color={color} size={size} />
                  // ),
                }}  />
              <Tab.Screen
                name="SecondPage"
                component={SecondPage}
                options={{
                  tabBarLabel: 'Setting',
                  // tabBarIcon: ({ color, size }) => (
                  //   <MaterialCommunityIcons name="settings" color={color} size={size} />
                  // ),
                }} />
            </Tab.Navigator>
          );
                          }

  function MenuListe({ navigation }) {
            return (
              <NavigationContainer>
                <Stack.Navigator initialRouteName="Home"   >
                  <Stack.Screen name="ImStudium"   component={MenuScreen} options={{
                            title: 'ImStudium',
                            headerTitleStyle: {
                              fontWeight: 'bold',
                              alignSelf:"center",
                              fontSize: 30,

                            },
                            
                         }}  
                  />  
                  <Stack.Screen  name="Stundenplan" component={Stundenplan1}/>
                  <Stack.Screen name="Mensa" component={MensaScreen} />
                  <Stack.Screen name="MensaPlan" component={MensaPlanScreen} />
                  <Stack.Screen name="Gut Zu Wissen" component={GutZuWissen} 
                  options={{
                    title: '',
                 
                  headerLeft: () =>  <GOHome screenName="ImStudium" />}}  /> 
                  <Stack.Screen name="Kurs einf??gen" component={StundenplanErstellen}  
                  options={{
                            title: '',
                          headerRight: () =>    <KurseEinfuegen screenName="ImStudium" />,
                          headerLeft: () =>  <GOHome screenName="ImStudium" />}}  
                  />
                   <Stack.Screen name="News" component={news} /> 
                </Stack.Navigator>
                
              </NavigationContainer>
            );
                                      }
   
export default MenuListe;
 
 
 
//Quelle https://snack.expo.io/kU4Bj5h9r  

 