//Import needed Libraries
import React, {Component}from "react";
import {Alert, Button, Image, Platform, Text, StyleSheet, TouchableOpacity, View, ActivityIndicator} from "react-native";
import {Picker} from '@react-native-picker/picker';
import {ScrollView} from "react-native-gesture-handler";
import * as rssParser from 'react-native-rss-parser';
import DateTimePicker from '@react-native-community/datetimepicker';
import Moment from 'moment';

var mensaListe = [ // hier weitere Parameter einfügen wie z.B. Öffnungszeiten, RSS-URLs etc.
    { 
        id: 1, name: "Mensa Große Pause",
        rssDieseWoche: "http://www.stwh-portal.de/mensa/index.php?wo=7&wann=2&format=rss", 
        rssNaechsteWoche: "http://www.stwh-portal.de/mensa/index.php?wo=7&wann=3&format=rss",
    },
    {
         id: 2, name: "Mensa TiHo-Tower", 
         rssDieseWoche: "http://www.stwh-portal.de/mensa/index.php?wo=0&wann=2&format=rss", 
         rssNaechsteWoche: "http://www.stwh-portal.de/mensa/index.php?wo=0&wann=3&format=rss", 
    },
    {
         id: 3, name: "Mensa Caballus", 
         rssDieseWoche: "http://www.stwh-portal.de/mensa/index.php?wo=1&wann=2&format=rss", 
         rssNaechsteWoche: "http://www.stwh-portal.de/mensa/index.php?wo=1&wann=3&format=rss", 
    },
    {
         id: 4, name: "Hauptmensa", 
         rssDieseWoche: "http://www.stwh-portal.de/mensa/index.php?wo=2&wann=2&format=rss", 
         rssNaechsteWoche: "http://www.stwh-portal.de/mensa/index.php?wo=2&wann=3&format=rss", 
    },
    {
         id: 5, name: "Contine", 
         rssDieseWoche: "https://www.stwh-portal.de/mensa/index.php?wo=3&wann=2&format=rss", 
         rssNaechsteWoche: "https://www.stwh-portal.de/mensa/index.php?wo=3&wann=3&format=rss", 
    },
    {
         id: 6, name: "Mensa Campus Linden", 
         rssDieseWoche: "https://www.stwh-portal.de/mensa/index.php?wo=6&wann=2&format=rss", 
         rssNaechsteWoche: "https://www.stwh-portal.de/mensa/index.php?wo=6&wann=3&format=rss", 
    },
    {
         id: 7, name: "Mensa HMTMH", 
         rssDieseWoche: "https://www.stwh-portal.de/mensa/index.php?wo=8&wann=2&format=rss", 
         rssNaechsteWoche: "https://www.stwh-portal.de/mensa/index.php?wo=8&wann=3&format=rss", 
    },
    {
         id: 8, name: "Marktstand Hauptmensa", 
         rssDieseWoche: "https://www.stwh-portal.de/mensa/index.php?wo=9&wann=2&format=rss", 
         rssNaechsteWoche: "https://www.stwh-portal.de/mensa/index.php?wo=9&wann=3&format=rss", 
    },
    {
         id: 9, name: "Cafeteria Herrenhausen", 
         rssDieseWoche: "https://www.stwh-portal.de/mensa/index.php?wo=12&wann=2&format=rss", 
         rssNaechsteWoche: "https://www.stwh-portal.de/mensa/index.php?wo=12&wann=3&format=rss", 
    },
    {
         id: 10, name: "Mensa Garbsen", 
         rssDieseWoche: "https://www.stwh-portal.de/mensa/index.php?wo=13&wann=2&format=rss", 
         rssNaechsteWoche: "https://www.stwh-portal.de/mensa/index.php?wo=13&wann=3&format=rss", 
    },
    {
         id: 11, name: "Mensa Blumhardtstraße", 
         rssDieseWoche: "https://www.stwh-portal.de/mensa/index.php?wo=14&wann=2&format=rss", 
         rssNaechsteWoche: "https://www.stwh-portal.de/mensa/index.php?wo=14&wann=3&format=rss", 
    },
];

class Mensa extends Component {

    constructor(){
        super();
        this.preprocessSpeiseplan = this.preprocessSpeiseplan.bind(this);
        this.RSS = this.RSS.bind(this);
        this.rssNextWeek = this.rssNextWeek.bind(this);
        Moment.locale('de');
        this.state = {
            feed: { title: "", items: [] },
            feedNaechsteWoche: { title: "", items: [] },
            selectedMensa: 1,
            loading: false,
            today: new Date(),
            selDate: new Date(),
            firstDayThisWeek: Moment(new Date).startOf("isoWeek").toDate(),
            lastDayNextWeek: Moment(new Date).add(7, "d").endOf("isoWeek").toDate(),
            mode: 'date',
            show: false,
        };
    }
    
    RSS(value) {
        return fetch((mensaListe.find(x => x.id === value).rssDieseWoche))
            .then((response) => response.text())
            .then((responseData) => rssParser.parse(responseData))
            .then((rss) => {
                this.setState(() => ({
                    feed: rss,
                    loading: false
                }));
            });
    }

    rssNextWeek(value) {
        return fetch((mensaListe.find(x => x.id === value).rssNaechsteWoche))
            .then((response) => response.text())
            .then((responseData) => rssParser.parse(responseData))
            .then((rss) => {
                this.setState(() => ({
                    feedNaechsteWoche: rss,
                    loading: false
                }));
            });
    }

    getdatespeiseplan(speiseplan) {
        //console.log("-------------");
        //console.log(speiseplan);
        //console.log("+++++++++++++++")
        
        var condition = new RegExp(Moment(this.state.selDate).format("DD.MM.YYYY"));
        var result = speiseplan.filter(function (item) {
            return condition.test(item.datum);
        });
        if(typeof result === "undefined") {
            result = "Geschlossen"
        };
        //console.log(result[0]);
        return result[0];
    }

    preprocessSpeiseplan(speiseplan) {
        let selectedSpeiseplan = this.getdatespeiseplan(speiseplan);
        if(typeof selectedSpeiseplan !== "undefined") {
            let sliceSpeiseplan = selectedSpeiseplan.gericht.match(/<li>.*?<\/li>/g);
            return sliceSpeiseplan.map((menuePunkt, id) => (
                <TouchableOpacity
                    key={id}
                    style={styles.menuePunktStyle} 
                    onPress={() => alert("Essen ausgewählt.")}
                >
                    <View>
                        <Text style={styles.menuePunktText}>{menuePunkt}</Text>
                    </View>
                </TouchableOpacity>
                
            ))
        } else {
            return (
                <TouchableOpacity
                    key={id}
                    style={styles.menuePunktStyle} 
                    onPress={() => alert("Essen ausgewählt.")}
                >
                    <View>
                        <Text style={styles.menuePunktText}>Geschlossen</Text>
                    </View>
                </TouchableOpacity>
            )
        }
    }

    componentDidMount() {
        this.RSS(1);
        this.rssNextWeek(1);
    }
    
    buildMensaPicker() {
        return (
            <View style={styles.mensaPickerView}>
                <Picker
                    selectedValue={this.state.selectedMensa}
                    style={styles.mensaPicker}
                    onValueChange={value => { this.setState(() => ({ loading: true })); this.changeMensa(value); } }
                >
                    {mensaListe.map((einzelneMensa, id) => (
                        <Picker.Item key={id} label={einzelneMensa.name} value={einzelneMensa.id} />
                    ))}
                </Picker>
            </View>
        )
    }

    changeMensa(value) {
        this.setState(() => ({ selectedMensa: value }));
        this.RSS(value);
        this.rssNextWeek(value);
    }
    
    setDate = (event, selectedDate) => {
        const currentDate = selectedDate || this.state.selDate;
        this.setState(() => ({ show: Platform.OS === 'ios' }));
        this.setState(() => ({ selDate: currentDate }));
    }

    show = mode => {
        this.setState({ show: true, mode, });
    }
    
    datepicker = () => {
        this.show('date');
    }

    buildDatePicker() {
        return (
            <View style={styles.datePickerView}>               
                <TouchableOpacity
                    style={styles.datePickerButton} 
                    onPress={this.datepicker}
                >
                    <View>
                        <Text style={styles.datePickerText}>{Moment(this.state.selDate).format("DD.MM.YYYY")}</Text>
                    </View>
                    <View style={styles.calendarIconView}>
                        <Image
                            style={styles.calendarIcon}
                            source={require("../assets/icon_calendar.png")}
                        />
                </View>
                </TouchableOpacity>            
                { this.state.show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={this.state.selDate}
                        mode="date"
                        display="default"
                        maximumDate={this.state.lastDayNextWeek}
                        minimumDate={this.state.firstDayThisWeek}
                        onChange={this.setDate}
                    />
                )}
            </View>
        )
    }
    
    render (){
        var speiseplanObject;

        if(Moment(this.state.selDate).isSame(this.state.today, "isoWeek")) {
            speiseplanObject = { mensaID: this.state.selectedMensa, speiseplan: this.state.feed.items.map(item => ({datum: item.title, gericht: item.description})) };
        } else {
            speiseplanObject = { mensaID: this.state.selectedMensa, speiseplan: this.state.feedNaechsteWoche.items.map(item => ({datum: item.title, gericht: item.description})) };
        };
         
        if(speiseplanObject.speiseplan.length > 0 && this.state.loading == false) {
            const plan = this.preprocessSpeiseplan(speiseplanObject.speiseplan);
            return(
                <View style={styles.container}>
                    <View style={styles.PickerContainer}>
                        {this.buildDatePicker()}
                        {this.buildMensaPicker()}
                    </View>
                    <ScrollView>{plan}</ScrollView>
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <View style={styles.PickerContainer}>
                        {this.buildDatePicker()}
                        {this.buildMensaPicker()}
                    </View>
                    <View style={styles.waitContainer}>
                        <ActivityIndicator size="large" color="#0000ff"/>
                    </View>
                </View>
            )
        }      
    }
}

const styles = StyleSheet.create({

    animation: {
        width: 100,
        height: 100
      },
    calendarIcon: {

    },
    calendarIconView: {
        paddingLeft: 10,
    },
    container: {
        backgroundColor: "white",
        width: "100%",
        flex: 1,
    },
    datePickerButton: {
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        flexDirection: "row",
    },
    datePickerText: {
        color: "black",
        fontSize: 18,
        borderStyle: "solid",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "black",
        paddingHorizontal: 10,
        textAlign: "center",
    },
    datePickerView: {
        width: "45%",
        backgroundColor: "white",
        alignSelf: "flex-start",

    },
    menuePunktStyle: {
        width: "100%",
        backgroundColor: "white",
        padding: 15,
        alignItems: "flex-start",
        justifyContent: "center",
        borderBottomColor: '#CCCCCC',
        borderBottomWidth: .5,
        borderTopColor: '#CCCCCC',
        borderTopWidth: .5,
    },
    menuePunktText: {
        color: "black",
        fontSize: 18,       
    },
    mensaPicker: {
        height: 50,
        width: "100%",
    },
    mensaPickerView: {
        backgroundColor: "white",
        height: 50,
        width: "55%",
        alignSelf: "flex-end",        
        justifyContent: "center",
    },
    PickerContainer: {
        flexDirection: "row",
    },
    waitContainer: {
        backgroundColor: "#e1e1e1",
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    }

});

export default Mensa;
