// Modules
import React from "react";

// Components
import { StyleSheet, TouchableOpacity, Image } from "react-native";

// Variables
const globalStyles = require("../styles/global");

const styles = StyleSheet.create({
    chatInputButton: {
        height: "70%",
        flex: .12,
        justifyContent: "center",
        alignItems: "center"
    },
    chatInputButtonIcon: {
        width: "70%",
        height: "70%",
    }
});

export default function ChatInputButton (props) {
    return (
        <TouchableOpacity
            style = {[
                globalStyles.button,
                styles.chatInputButton
            ]}
            onPress = { props.onPress }
        >
            <Image
                source = { require(`../../assets/submit.png`) }
                style = {[
                    styles.chatInputButtonIcon
                ]}
            />
        </TouchableOpacity>
    );
}