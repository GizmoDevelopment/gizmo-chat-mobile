// Modules
import React from "react";

// Components
import { StyleSheet, View, Text } from "react-native";

// Values
const config = require("../../config.json");

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingTop: 90
    },
    title: {
        color: config.TEXT_COLOR,
        fontSize: 85,
    },
    inputContainer: {
        backgroundColor: "#a31ffc",
        
    }
});

export default function Start () {
    return (
        <View style = { styles.container }>
            <Text style = { styles.title }>Login</Text>
            <View style = { styles.inputContainer }>
            </View>
        </View>
    );
}