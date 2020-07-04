import { StyleSheet, NativeModules } from "react-native";

const constants = require("../../config.json");

const globalStyles = StyleSheet.create({
    element: {
        color: constants.TEXT_COLOR
    },
    button: {
        borderColor: constants.PRIMARY_COLOR,
        backgroundColor: constants.PRIMARY_COLOR,
        borderWidth: 2,
        borderRadius: 17, 
    },
    input: {
        borderColor: constants.PRIMARY_COLOR,
        borderWidth: 2,
        borderRadius: 17,
        paddingLeft: 10
    },
    image: {
        borderRadius: 11
    },
    imageBig: {
        borderRadius: 14
    }
});

module.exports = globalStyles;