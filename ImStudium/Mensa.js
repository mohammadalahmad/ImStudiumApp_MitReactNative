//Import needed Libraries
import React, {Component} from "react";
import {Alert, Text, StyleSheet, TouchableOpacity, View} from "react-native";
// import { useNavigation } from '@react-navigation/native';
import {ScrollView} from "react-native-gesture-handler";
import {useNavigation} from '@react-navigation/native';
//Create Component

var mensaListe = [ // hier weitere Parameter einfügen wie z.B. Öffnungszeiten, RSS-URLs etc.
    { id: 1, name: "Mensa Große Pause", },
    { id: 2, name: "Mensa TiHo-Tower", },
    { id: 3, name: "Mensa Caballus", },
    { id: 4, name: "Hauptmensa", },
    { id: 5, name: "Contine", },
    { id: 6, name: "Mensa Campus Linden", },
    { id: 7, name: "Mensa HMTMH", },
    { id: 8, name: "Marktstand Hauptmensa", },
    { id: 9, name: "Cafeteria Herrenhausen", },
    { id: 10, name: "Mensa PZH", },
    { id: 11, name: "Mensa Blumhardtstraße", },
];

class Mensa extends Component {
    renderMensaListe() {
        const { navigation } = this.props;

        return mensaListe.map(einzelneMensa => (
            <TouchableOpacity
                key={einzelneMensa.id}
                style={styles.mensaButton} 
                onPress={() => Alert.alert("Mensa-Auswahl", "Mensa")}
                onPress={() => navigation.navigate('MensaPlan', { mensaName: einzelneMensa.name })}
            >
                <View>
                    <Text style={styles.mensaButtonText}>{einzelneMensa.name}</Text>
                </View>
            </TouchableOpacity>
        ));
    }
   
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    {this.renderMensaListe()}
                </ScrollView>
            </View>
        )
    }

}
export default function(props) {
    const navigation = useNavigation();

    return <Mensa navigation={navigation} />;
}
const styles = StyleSheet.create({

    container: {
        backgroundColor: "white",
        flex: 1,
        width: "100%",
    },
    mensaButton: {
        width: "100%",
        height: 70,
        backgroundColor: "white",
        padding: 15,
        alignItems: "flex-start",
        justifyContent: "center",
        borderBottomColor: '#CCCCCC',
        borderBottomWidth: .5,
        borderTopColor: '#CCCCCC',
        borderTopWidth: .5,
    },
    mensaButtonText: {
        color: "black",
        fontSize: 18,       
    },

});
// Export the Component to be avaible for other component in the apps
 

 