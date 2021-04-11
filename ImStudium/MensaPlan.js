//Import needed Libraries
import React, {Component}from "react";
import { Alert, Text, StyleSheet, TouchableOpacity, View} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

//Create Component
class MensaPlan extends React.Component {
    render (){
        const { navigation } = this.props;
        const routeIndex = navigation.dangerouslyGetState().index;
        const mensaName =  navigation.dangerouslyGetState().routes[routeIndex].params.mensaName

        return(
            <View style={styles.container}>
                <ScrollView>
                    <Text>{ mensaName }</Text>
                </ScrollView>
            </View>
        )
    }
}

// Wrap and export
export default function(props) {
    const navigation = useNavigation();

    return <MensaPlan navigation={navigation} />;
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
 