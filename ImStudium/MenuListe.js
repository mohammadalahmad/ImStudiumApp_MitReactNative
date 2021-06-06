import React, {Component}from "react";
import 'react-native-gesture-handler';
import {Text,  View, Image, TouchableOpacity} from "react-native";
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Mensa from "./Mensa";
import MensaPlan from "./MensaPlan";
<<<<<<< HEAD
import Buttons from "./Buttons";
import ZuWissen from "./ZuWissen";
import Test from "./Test";
 

function MenuScreen({ navigation: { navigate } }) {
  
    return (
        <View style={styles.MenuScreen1}> 
       
            <View  style={styles.MenuScreen} >
               
                <View style={styles.Behalter}> 
                    <Buttons  onPress={() => navigate('Stundenplan', { caption: 'Some caption' })}>Stundenplan</Buttons>  
                </View>
                <View style={styles.Behalter}> 
                     <Buttons  onPress={() => navigate('Mensa', { caption: 'Some caption' })}>Mensa</Buttons>
                </View>
            </View>
            <View  style={styles.MenuScreen}> 
                <View style={styles.Behalter}> 
                    <Buttons  onPress={() => navigate('Gut Zu Wissen', { caption: 'Some caption' })}>Gut zu wissen</Buttons>
                </View>
                <View style={styles.Behalter}> 
                    <Buttons>News</Buttons>
                </View>
            </View>
            <View  style={styles.MenuScreen}> 
                <View style={styles.Behalter}> 
                     <Buttons>Freizeit</Buttons>
                </View>
                <View style={styles.Behalter}> 
                    <Buttons>Prüfungen</Buttons>
                </View>
            </View>
  
        </View>
    );
  }

   

    function Stundenplan1({ navigation }) {
       
      return (
        <View style={{ flexDirection: "row",  justifyContent: "flex-end" }}>
 
          <TouchableOpacity style={styles.buttoneinfügen1}   > 
                <Text    style={styles.Texteinfügen}>Kurs einfügen</Text>
=======
import ZuWissen from "./ZuWissen";
import Einfuegen from "./Einfuegen";
import Test from "./Test";
import { Icon} from 'react-native-elements';
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
                      <TouchableOpacity style={styles.buttonGPlusStyle} activeOpacity={0.5} onPress={() => {   navigate('Kurs einfügen', { caption: 'Some caption' })}}>
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
                              source={require('./Icons/Prüfungen.png')} 
                              style={styles.buttonImageIconStyle}
                            />
                            <View style={styles.buttonIconSeparatorStyle} />
                            <Text style={styles.buttonTextStyle}> Prüfungen </Text>
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
                <Scrollen/>
              </View >
          <TouchableOpacity onPress={() => navigation.navigate('Kurs einfügen')} style={{backgroundColor:"#FF9933",   alignItems: 'center', width:"80%", height: 60,  justifyContent: 'center', borderRadius: 10, margin:80}}> 
                <Text style={{ color: "white" , fontSize:20}}>Stundenplan erstellen</Text>
>>>>>>> Mohammad
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

<<<<<<< HEAD

  function MensaScreen({ navigation }) {
    return (
      <View style={styles.HomeScreen}>
<<<<<<< HEAD
        <Test />
=======
        
        <Mensa />
>>>>>>> 6496c866ee6f98adbe520984a2d2ca4195e5d302
        
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
=======
  function MensaPlanScreen() {
          return (
            <View style={styles.HomeScreen}>
              <MensaPlan />
            </View>
          );
                              }
>>>>>>> Mohammad
 
  function GutZuWissen() {
          return (
            <View style={styles.HomeScreen}>
              <ZuWissen/>
            </View>
          );
                          } 
  
      function news() {
        return (
          <View style={styles.HomeScreen}>
            <ZuWissen/>
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
<<<<<<< HEAD
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="ImStudium" component={MenuScreen} />
          <Stack.Screen  name="Stundenplan"  component={Stundenplan1}/>
          <Stack.Screen name="Mensa" component={MensaScreen} />
          <Stack.Screen name="MensaPlan" component={MensaPlanScreen} />
          <Stack.Screen name="Gut Zu Wissen" component={GutZuWissen} /> 
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
   
export default MenuListe;

  const styles = StyleSheet.create({
  
    HomeScreen: {
        backgroundColor: "#DFDFE6",
       flex:1,
        alignItems: 'center', //Horizontal Alignment
        justifyContent: "center", //Vertical Alignment
  
    },
    MenuScreen: {
   
      flexDirection: 'row',
      justifyContent: 'center', 
      alignItems: 'center',
      backgroundColor: '#FFF', 
      height: 120,
      
  },
  Behalter: {
    flex: 1, 
     margin: 2,
      
     
  },
  MenuScreen1: {
    flex: 1, 
    backgroundColor: '#e65c00', 
    justifyContent: "center", //Vertical Alignment
     
  },   
 
Texteinfügen: {
    fontWeight: "600",
    paddingTop:15,
    paddingBottom:15,
    alignSelf:"center",
    color: "#FF0000",
    fontSize: 15,

},
buttoneinfügen1:{
  borderRadius: 10,
  backgroundColor: "#FFF",
  alignSelf: "stretch",
  height: 30,
  margin:5,
  borderColor: "#FF9933",
  borderWidth:2,
  padding: 10,
  alignItems: 'center',  
  justifyContent: "center",
  width: 130,
  
 
},
  });

=======
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
                  <Stack.Screen name="Kurs einfügen" component={StundenplanErstellen}  
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
>>>>>>> Mohammad
 
 
 
//Quelle https://snack.expo.io/kU4Bj5h9r  

 