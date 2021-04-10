//Import needed Libraries
import React, {Component}from "react";
import { Alert, Text, StyleSheet, TouchableOpacity, View} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

//Create Component

class Mensa extends Component {
    render (){
        return(
            <View style={styles.container}>
                <ScrollView>
                    <TouchableOpacity
                        style={styles.mensaButton} 
                        onPress={() => Alert.alert("Mensa-Auswahl", "Mensa")}
                    >
                        <View>
                            <Text style={styles.mensaButtonText}>Mensa Große Pause</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.mensaButton} 
                        onPress={() => Alert.alert("Mensa-Auswahl", "Mensa")}
                    >
                        <View>
                            <Text style={styles.mensaButtonText}>Mensa TiHo-Tower</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.mensaButton} 
                        onPress={() => Alert.alert("Mensa-Auswahl", "Mensa")}
                    >
                        <View>
                            <Text style={styles.mensaButtonText}>Mensa Caballus</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.mensaButton} 
                        onPress={() => Alert.alert("Mensa-Auswahl", "Mensa")}
                    >
                        <View>
                            <Text style={styles.mensaButtonText}>Hauptmensa</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.mensaButton} 
                        onPress={() => Alert.alert("Mensa-Auswahl", "Mensa")}
                    >
                        <View>
                            <Text style={styles.mensaButtonText}>Contine</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.mensaButton} 
                        onPress={() => Alert.alert("Mensa-Auswahl", "Mensa")}
                    >
                        <View>
                            <Text style={styles.mensaButtonText}>Mensa Campus Linden</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.mensaButton} 
                        onPress={() => Alert.alert("Mensa-Auswahl", "Mensa")}
                    >
                        <View>
                            <Text style={styles.mensaButtonText}>Mensa HMTMH</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.mensaButton} 
                        onPress={() => Alert.alert("Mensa-Auswahl", "Mensa")}
                    >
                        <View>
                            <Text style={styles.mensaButtonText}>Marktstand Hauptmensa</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.mensaButton} 
                        onPress={() => Alert.alert("Mensa-Auswahl", "Mensa")}
                    >
                        <View>
                            <Text style={styles.mensaButtonText}>Cafeteria Herrenhausen</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.mensaButton} 
                        onPress={() => Alert.alert("Mensa-Auswahl", "Mensa")}
                    >
                        <View>
                            <Text style={styles.mensaButtonText}>Mensa PZH</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.mensaButton} 
                        onPress={() => Alert.alert("Mensa-Auswahl", "Mensa")}
                    >
                        <View>
                            <Text style={styles.mensaButtonText}>Mensa Blumhardtstraße</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
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
export default Mensa ;

 