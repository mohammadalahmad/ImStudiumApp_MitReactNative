//Import needed Libraries
import Moment from "moment";
import React, { Component } from "react";
import { Alert, Image, Platform, Text, StyleSheet, TouchableOpacity, View, ActivityIndicator } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { ScrollView } from "react-native-gesture-handler";
import { Picker as SelectPicker } from "@react-native-picker/picker";
import * as rssParser from "react-native-rss-parser";


const mensaListe = [
    {
        id: 1, name: "Contine", 
        rssDieseWoche: "https://www.stwh-portal.de/mensa/index.php?wo=3&wann=2&format=rss", 
        rssNaechsteWoche: "https://www.stwh-portal.de/mensa/index.php?wo=3&wann=3&format=rss", 
    },
    {
        id: 2, name: "Hauptmensa", 
        rssDieseWoche: "http://www.stwh-portal.de/mensa/index.php?wo=2&wann=2&format=rss", 
        rssNaechsteWoche: "http://www.stwh-portal.de/mensa/index.php?wo=2&wann=3&format=rss", 
    },
    {
        id: 3, name: "Mensa Blumhardtstraße", 
        rssDieseWoche: "https://www.stwh-portal.de/mensa/index.php?wo=14&wann=2&format=rss", 
        rssNaechsteWoche: "https://www.stwh-portal.de/mensa/index.php?wo=14&wann=3&format=rss", 
    },
    {
        id: 4, name: "Mensa Caballus", 
        rssDieseWoche: "http://www.stwh-portal.de/mensa/index.php?wo=1&wann=2&format=rss", 
        rssNaechsteWoche: "http://www.stwh-portal.de/mensa/index.php?wo=1&wann=3&format=rss", 
    },
    {
        id: 5, name: "Mensa Campus Linden", 
        rssDieseWoche: "https://www.stwh-portal.de/mensa/index.php?wo=6&wann=2&format=rss", 
        rssNaechsteWoche: "https://www.stwh-portal.de/mensa/index.php?wo=6&wann=3&format=rss", 
    },
    {
        id: 6, name: "Mensa Garbsen", 
        rssDieseWoche: "https://www.stwh-portal.de/mensa/index.php?wo=13&wann=2&format=rss", 
        rssNaechsteWoche: "https://www.stwh-portal.de/mensa/index.php?wo=13&wann=3&format=rss", 
    },
    { 
        id: 7, name: "Mensa Große Pause",
        rssDieseWoche: "http://www.stwh-portal.de/mensa/index.php?wo=7&wann=2&format=rss", 
        rssNaechsteWoche: "http://www.stwh-portal.de/mensa/index.php?wo=7&wann=3&format=rss",
    },
    {
        id: 10, name: "Mensa HMTMH", 
        rssDieseWoche: "https://www.stwh-portal.de/mensa/index.php?wo=8&wann=2&format=rss", 
        rssNaechsteWoche: "https://www.stwh-portal.de/mensa/index.php?wo=8&wann=3&format=rss", 
    },
    {
        id: 9, name: "Mensa TiHo-Tower", 
        rssDieseWoche: "http://www.stwh-portal.de/mensa/index.php?wo=0&wann=2&format=rss", 
        rssNaechsteWoche: "http://www.stwh-portal.de/mensa/index.php?wo=0&wann=3&format=rss", 
    },
];

const zusatzstoffeLegende = { 
    "(1)": "- Farbstoff",
    "(11)": "- mit einer Zuckerart u. Süßungsmittel",
    "(12)": "- Nitritpökelsalz",
    "(2)": "- Konservierungsstoff",
    "(20A)": "- Glutenhaltiges Getreide: Weizen",
    "(20B)": "- Glutenhaltiges Getreide: Roggen",
    "(20C)": "- Glutenhaltiges Getreide: Gerste",
    "(20D)": "- Glutenhaltiges Getreide: Hafer",
    "(20E)": "- Glutenhaltiges Getreide: Dinkel",
    "(20F)": "- Glutenhaltiges Getreide: Kamut",
    "(21)": "- Krebstiere und Krebstiererzeugnisse",
    "(22)": "- Eier und Eiererzeugnisse",
    "(23)": "- Fisch und Fischerzeugnisse",
    "(24)": "- Erdnüsse und Erdnusserzeugnisse",
    "(25)": "- Soja und Sojaerzeugnisse",
    "(26)": "- Milch und Milcherzeugnisse",
    "(27J)": "- Mandeln",
    "(27K)": "- Haselnüsse",
    "(27L)": "- Walnüsse",
    "(27M)": "- Kaschunüsse",
    "(27N)": "- Pecannüsse",
    "(27O)": "- Paranüsse",
    "(27P)": "- Pistazien",
    "(27Q)": "- Macadamianüsse",
    "(28)": "- Sellerie und Sellerieerzeugnisse",
    "(29)": "- Senf und Senferzeugnisse",
    "(3)": "- Antioxidationsmittel",
    "(30)": "- Sesamsamen und Sesamsamenerzeugnisse",
    "(31)": "- Schwefeldioxid und Sulfite > 10 mg/kg",
    "(32)": "- Lupine und Lupinenerzeugnisse",
    "(33)": "- Weichtiere und Weichtiererzeugnisse",
    "(4)": "- Geschmacksverstärker",
    "(5)": "- geschwefelt",
    "(6)": "- geschwärzt",
    "(7)": "- gewachst",
    "(8)": "- Phosphat",
    "(85)": "- kakaohaltige Fettglasur",
    "(9)": "- Süßungsmittel",
    "(a)": "- mit Alkohol",
    "(f)": "- nachhaltige Fischerei",
    "(g)": "- enthält Geflügelfleisch",
    "(j)": "- artger. Tierhaltung",
    "(k)": "- mit Knoblauch",
    "(kt)": "- KlimaTeller",
    "(n)": "- Natürlich frisch!",
    "(r)": "- Rindfleisch",
    "(s)": "- Schweinefleisch",
    "(v)": "- ohne Fleisch",
    "(x)": "- vegan"
};


class Mensa extends Component {

    constructor(){
        super();

        this.preprocessSpeiseplan = this.preprocessSpeiseplan.bind(this);
        this.rssThisWeek = this.rssThisWeek.bind(this);
        this.rssNextWeek = this.rssNextWeek.bind(this);

        Moment.locale('de');

        this.state = {
            feed: { title: "", items: [] },
            feedNaechsteWoche: { title: "", items: [] },
            selectedMensa: 7,
            loading: true,
            today: new Date(),
            selectedDate: new Date(),
            firstDayThisWeek: Moment(new Date).startOf("isoWeek").toDate(),
            lastDayNextWeek: Moment(new Date).add(7, "d").endOf("isoWeek").toDate(),
            mode: 'date',
            showDatePicker: false,
        };
    }
    
    // ------- Datepicker -------

    buildDatePicker() {
        return (
            <View style={styles.datePickerView}>
                <TouchableOpacity
                    style={styles.datePickerButton} 
                    onPress={this.datepicker}
                >
                    <View>
                        <Text style={styles.datePickerText}>{Moment(this.state.selectedDate).format("DD.MM.YYYY")}</Text>
                    </View>
                    <View style={styles.calendarIconView}>
                        <Image
                            source={require("./Icons/icon_calendar.png")}
                        />
                </View>
                </TouchableOpacity>            
                { this.state.showDatePicker && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={this.state.selectedDate}
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

    datepicker = () => {
        this.show('date');
    }

    show = mode => {
        this.setState({ showDatePicker: true, mode, });
    }

    setDate = (event, selectedDate) => {
        const currentDate = selectedDate || this.state.selectedDate;
        this.setState(() => ({ showDatePicker: Platform.OS === 'ios' }));
        this.setState(() => ({ selectedDate: currentDate }));
    }

    // ------- MensaPicker -------

    buildMensaPicker() {
        return (
            <View style={styles.mensaPickerView}>
                <SelectPicker
                    selectedValue={this.state.selectedMensa}
                    style={styles.mensaPicker}
                    onValueChange={value => { this.setState(() => ({ loading: true })); this.changeMensa(value); } }
                >
                    {mensaListe.map((einzelneMensa, id) => (
                        <SelectPicker.Item key={id} label={einzelneMensa.name} value={einzelneMensa.id} />
                    ))}
                </SelectPicker>
            </View>
        )
    }

    changeMensa(selectedMensaID) {
        this.setState(() => ({ selectedMensa: selectedMensaID }));
        this.rssThisWeek(selectedMensaID);
        this.rssNextWeek(selectedMensaID);
    }

    // ------- RSS -------

    rssThisWeek(selectedMensaID) {
        fetch((mensaListe.find(x => x.id === selectedMensaID).rssDieseWoche))
            .then((response) => response.text())
            .then((responseData) => rssParser.parse(responseData))
            .then((rss) => {
                this.setState(() => ({
                    feed: rss,
                    loading: false,
                }));
            });
    }

    rssNextWeek(selectedMensaID) {
        fetch((mensaListe.find(x => x.id === selectedMensaID).rssNaechsteWoche))
            .then((response) => response.text())
            .then((responseData) => rssParser.parse(responseData))
            .then((rss) => {
                this.setState(() => ({
                    feedNaechsteWoche: rss,
                    loading: false,
                }));
            });
    }

    // ------- Speiseplan -------

    preprocessSpeiseplan(speiseplan) {
        let selectedSpeiseplan = this.getdatespeiseplan(speiseplan);
        if(typeof selectedSpeiseplan !== "undefined") {
            let sliceSpeiseplan = selectedSpeiseplan.gericht.match(/<ul>.*?<\/ul>/g);
            if(sliceSpeiseplan[0].includes("<ul></ul>")){
                return (
                    <View style={styles.menuePunktStyle}>
                        <Text style={styles.menuePunktText}>Kein Speiseplan verfügbar.</Text>
                    </View>
                )
            }
            sliceSpeiseplan = selectedSpeiseplan.gericht.match(/<li>.*?<\/li>/g);
            sliceSpeiseplan.sort();
            let filterBroetchen = /(<li>Bagels)|(<li>Croissants)|(<li>Gersterling)|(<li>Kuchen)|(<li>Snacks)|(<li>Urknacker)|(<li>[A-ZÄÖÜa-zäöüß]*rötchen)|(<li>[A-ZÄÖÜa-zäöüß]*ebäck)/g;
            let sliceSpeiseplanFiltered = sliceSpeiseplan.filter((entry) => !entry.match(filterBroetchen));
            
            if(typeof sliceSpeiseplanFiltered[0] === "undefined") {
                return (
                    <View style={styles.menuePunktStyle}>
                        <Text style={styles.menuePunktText}>Kein Speiseplan verfügbar.</Text>
                    </View>
                )
            } else if(sliceSpeiseplanFiltered[0].includes("Geschlossen") || sliceSpeiseplanFiltered[0].includes("<ul></ul>")){
                return (
                    <View style={styles.menuePunktStyle}>
                        <Text style={styles.menuePunktText}>Geschlossen.</Text>
                    </View>
                )
            } else {
                return sliceSpeiseplanFiltered.map((menuePunkt, id) => this.buildMenuePunkt(menuePunkt, id));
            }
        } else {
            return (
                <View style={styles.menuePunktStyle}>
                        <Text style={styles.menuePunktText}>Geschlossen.</Text>
                </View>
            )
        }
    }

    getdatespeiseplan(speiseplan) {      
        var chosenDate = Moment(this.state.selectedDate).format("DD.MM.YYYY");
        var result = speiseplan.filter(function (item) {
            return item.id === item.url + "#" + chosenDate.toString();
        });
        if(typeof result === "undefined") {
            result = "Geschlossen"
        };
        return result[0];
    }

    buildMenuePunkt(menuePunkt, id) {
        let ueberschrift = menuePunkt.split("<br/>")[0].substring(4, menuePunkt.length);
        let text = menuePunkt.split("<br/>")[1].substring(0, menuePunkt.split("<br/>")[1].length - 5);

        let textSplit = text.split(/(\([0-9]{1,2}\))|(\([A-Za-z]{1,2}\))|(\([0-9]{2}[A-Za-z]{1}\))/);
        let textSplitFilter = textSplit.filter(function (element) { return element != null && element != ""; });

        let gericht = textSplit[0];

        let zusatzstoffe = textSplitFilter.slice(1, -1)
        zusatzstoffe = zusatzstoffe.map(function(element){
            for (var prop in zusatzstoffeLegende) {
                element = element.replace(prop, zusatzstoffeLegende[prop]);
            }
            return element;
        });

        let preis = textSplit[textSplit.length - 1].match(/[0-9]{1,2}\,[0-9]{2}/g)[0];

        return (
            <View
                key={id}
                style={styles.menuePunktStyle}  
            >
                <TouchableOpacity onPress={() => Alert.alert(
                        'Zusatzstoffe',
                        zusatzstoffe.join("\n")
                    )}

                    style={styles.menuePunktTouchable}
                >
                    <View style={styles.gerichtView}>
                        <Text style={styles.menuePunktText, {fontWeight: "bold", paddingBottom: 10,}}>{ueberschrift}</Text>
                        <Text style={styles.menuePunktText}>{gericht}</Text>
                    </View>
                    <View style={styles.preisView}>
                        <Text style={styles.menuePunktText, {fontWeight: "bold", paddingLeft: 10, textAlign: 'right',}}>{preis + " €"}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    // ------- Mounting -------

    componentDidMount() {
        this.rssThisWeek(7);
        this.rssNextWeek(7);
    }

    // ------- Rendering -------

    render (){
        var speiseplanObject;
        var fertigerSpeiseplan;

        if(Moment(this.state.selectedDate).isSame(this.state.today, "isoWeek")) {
            speiseplanObject = { mensaID: this.state.selectedMensa, speiseplan: this.state.feed.items.map(item => ({url: item.links[0].url, id: item.id, gericht: item.description})) };
        } else {
            speiseplanObject = { mensaID: this.state.selectedMensa, speiseplan: this.state.feedNaechsteWoche.items.map(item => ({url: item.links[0].url, id: item.id, gericht: item.description})) };
        };

        if(speiseplanObject.speiseplan.length > 0 && this.state.loading === false) {

            fertigerSpeiseplan = this.preprocessSpeiseplan(speiseplanObject.speiseplan);

            return(
                <View style={styles.container}>
                    <View><Text style={styles.ueberschrift}>Mensa</Text></View>
                    <View style={styles.PickerContainer}>
                        {this.buildDatePicker()}
                        {this.buildMensaPicker()}
                    </View>
                    <ScrollView>{fertigerSpeiseplan}</ScrollView>
                </View>
            )            
        } else {
            return (
                <View style={styles.container}>
                    <View><Text style={styles.ueberschrift}>Mensa</Text></View>
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


// ------- Styles -------

const styles = StyleSheet.create({


    preisView: {
        flex: 0,
        justifyContent: "center",
    },
    gerichtView: {
        flex: 1,
         alignItems: "stretch",
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
        borderBottomColor: '#E6E6E6',
        borderBottomWidth: 1,
    },
    menuePunktText: {
        color: "black",
        fontSize: 18,       
    },
    menuePunktTouchable: {
        flex: 1,
        flexDirection: "row"
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
        borderBottomColor: '#F5A431',
        borderBottomWidth: 2,
        //marginBottom: 10,
    },
    ueberschrift: {
        color: "#F5A431",
        fontWeight: "bold",
        alignSelf: "center",
        fontSize: 30,
        marginTop: 10,
        marginBottom: 10,
    },
    waitContainer: {
        backgroundColor: "#E6E6E6",
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    }

});

export default Mensa;
