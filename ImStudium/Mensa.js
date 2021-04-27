//Import needed Libraries
import React, {Component}from "react";
import {Alert, Button, Platform, Text, StyleSheet, TouchableOpacity, View, ActivityIndicator} from "react-native";
import {Picker} from '@react-native-picker/picker';
import {ScrollView} from "react-native-gesture-handler";
import * as rssParser from 'react-native-rss-parser';
import DateTimePicker from '@react-native-community/datetimepicker';

var mensaListe = [ // hier weitere Parameter einfügen wie z.B. Öffnungszeiten, RSS-URLs etc.
    { id: 1, name: "Mensa Große Pause", rssHeute: "https://www.stwh-portal.de/mensa/index.php?wo=7&wann=1&format=rss", },
    { id: 2, name: "Mensa TiHo-Tower", rssHeute: "https://www.stwh-portal.de/mensa/index.php?wo=0&wann=1&format=rss", },
    { id: 3, name: "Mensa Caballus", rssHeute: "https://www.stwh-portal.de/mensa/index.php?wo=1&wann=1&format=rss", },
    { id: 4, name: "Hauptmensa", rssHeute: "https://www.stwh-portal.de/mensa/index.php?wo=2&wann=1&format=rss", },
    { id: 5, name: "Contine", rssHeute: "https://www.stwh-portal.de/mensa/index.php?wo=3&wann=1&format=rss", },
    { id: 6, name: "Mensa Campus Linden", rssHeute: "https://www.stwh-portal.de/mensa/index.php?wo=6&wann=1&format=rss", },
    { id: 7, name: "Mensa HMTMH", rssHeute: "https://www.stwh-portal.de/mensa/index.php?wo=8&wann=1&format=rss", },
    { id: 8, name: "Marktstand Hauptmensa", rssHeute: "https://www.stwh-portal.de/mensa/index.php?wo=9&wann=1&format=rss", },
    { id: 9, name: "Cafeteria Herrenhausen", rssHeute: "https://www.stwh-portal.de/mensa/index.php?wo=12&wann=1&format=rss", },
    { id: 10, name: "Mensa Garbsen", rssHeute: "https://www.stwh-portal.de/mensa/index.php?wo=13&wann=1&format=rss", },
    { id: 11, name: "Mensa Blumhardtstraße", rssHeute: "https://www.stwh-portal.de/mensa/index.php?wo=14&wann=1&format=rss", },
];

class Mensa extends Component {

    constructor(){
        super();
        this.preprocessSpeiseplan = this.preprocessSpeiseplan.bind(this);
        this.RSS = this.RSS.bind(this);
        this.state = {
            feed: { title: "", items: [] },
            selectedMensa: 1,
            loading: false,
            date: new Date(),
            mode: 'date',
            show: false,
        };
    }
    
    RSS(value) {
        return fetch((mensaListe.find(x => x.id === value).rssHeute))
            .then((response) => response.text())
            .then((responseData) => rssParser.parse(responseData))
            .then((rss) => {
                this.setState(() => ({
                    feed: rss,
                    loading: false
                }));
            });
    }

    preprocessSpeiseplan(speiseplan) {
        let sliceSpeiseplan = speiseplan[0].match(/<li>.*?<\/li>/g);
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
        ));
    }

    componentDidMount() {
        this.RSS(1);
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
    }
    
    setDate = (event, selectedDate) => {
        console.log("selectedDate=" + selectedDate);
            const currentDate = selectedDate || this.state.date;
            this.setState(() => ({ show: Platform.OS === 'ios' }));
            this.setState(() => ({ date: currentDate }));
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
                
                <Button onPress={this.datepicker} title="Datum" style={styles.datePickerButton} />
                
                { this.state.show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={this.state.date}
                        mode={this.state.mode}
                        display="default"
                        onChange={this.setDate}
                    />
                )}
            </View>
        )
    }
    
    render (){
        const speiseplanObject = { mensaID: this.state.selectedMensa, speiseplan: this.state.feed.items.map(item => item.description) };
        
        if(speiseplanObject.speiseplan.length > 0 && this.state.loading == false) {
            const plan = this.preprocessSpeiseplan(speiseplanObject.speiseplan);

            return(
                <View style={styles.container}>
                    <View stlye={styles.PickerContainer}>
                        {this.buildDatePicker()}
                        {this.buildMensaPicker()}
                    </View>
                    <ScrollView>{plan}</ScrollView>
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <View stlye={styles.PickerContainer}>
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
    container: {
        backgroundColor: "white",
        width: "100%",
        flex: 1,
    },
    datePickerButton: {

    },
    datePickerView: {

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
        
    },
    mensaPickerView: {
        backgroundColor: "white",
        height: 70,
        justifyContent: "center",
        alignItems: "center",

        //height: 70,
        //flex: 1,
        //alignItems: "center",
        //justifyContent: "center",
    },
    PickerContainer: {
        //height: 100,
        //top: 50,
        //flexDirection: "row",
        //width: "100%",
        //flexDirection: "row",
        //flexWrap: "wrap",
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
