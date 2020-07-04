// Modules
import React, { Component } from "react";

// Components
import { StyleSheet, View, TextInput, TouchableOpacity, Image } from "react-native";
import ChatInputButton from "./ChatInputButton";

// Variables
const globalStyles = require("../styles/global");
const constants = require("../../config.json");

const styles = StyleSheet.create({
    chatInputContainer: {
        flex: .1,
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row"
    },
    chatInput: {
        height: "70%",
        flex: .83
    }
});

export default class ChatInput extends Component {

    state = {
        text: ""
    }

    handleTextInput (text) {
        this.setState({
            ...this.state,
            text
        });
    }

    render () {
        return (
            <View style = { styles.chatInputContainer }>
                <TextInput
                    style = {[
                        globalStyles.element,
                        globalStyles.input,
                        styles.chatInput
                    ]}
                    maxLength = { 215 }
                    onChangeText = { text => this.handleTextInput(text) }
                    value = { this.state.text }
                    placeholder = "Type message here..."
                    placeholderTextColor = { constants.TEXT_COLOR }
                    underlineColorAndroid = "transparent"
                />
                <ChatInputButton
                    icon = "submit.png"
                    onPress = {
                        () => {
                            if (this.state.text.trim().length > 0) {
                                this.props.handleSubmitMessage(this.state.text);
                                this.setState({
                                    ...this.state,
                                    text: ""
                                });
                            }
                        }
                    }
                />
            </View>
        );
    }
}