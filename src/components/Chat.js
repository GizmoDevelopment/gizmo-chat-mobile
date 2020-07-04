// Modules
import React from "react";

// Components
import { StyleSheet, KeyboardAvoidingView, View, ImagePropTypes } from "react-native";
import ChatBox from "./ChatBox";
import ChatInput from "./ChatInput";

const styles = StyleSheet.create({
    carryContainer: {
        flex: 1,
        overflow: "hidden"
    },
    fullContainer: {
        position: "absolute",
        width: "100%",
        height: "100%",
    },
    chatContainer: {
        height: "100%"
    }
});

export default function Chat (props) {
    return (
        <View style = { styles.carryContainer }>
            <KeyboardAvoidingView
                style = { styles.fullContainer }
                behavior = "position"
                keyboardVerticalOffset = { 45 }
            >
                <View style = { styles.chatContainer }>
                    <ChatBox currentMessageContentList = {[]}/>
                    <ChatInput handleSubmitMessage = { props.handleSubmitMessage }/>
                </View>
            </KeyboardAvoidingView>
        </View>
    );
};