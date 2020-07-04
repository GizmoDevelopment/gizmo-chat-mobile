// Modules
import React from "react";

// Components
import { StyleSheet, View, Image, Text } from "react-native";

// Variables
const globalStyles = require("../styles/global");

const styles = StyleSheet.create({
    messageContainer: {
        flex: 1,
        flexDirection: "row",
        padding: 5
    },
    messageLabels: {
        flex: 1,
        flexDirection: "column",
        paddingLeft: 10
    },
    messageSender: {
        height: 18,
        fontSize: 14,
        fontWeight: "bold"
    },
    messageContentContainer: {
        flexDirection: "column"
    },
    messageContent: {
        flex: 1,
        marginTop: 2
    },
    messageTextContent: {
        fontSize: 15
    },
    messageImageContent: {
        maxWidth: "100%",
        maxHeight: 280,
        minWidth: 30,
        minHeight: 30,
        aspectRatio: 1,
        resizeMode: "cover",
    }
});

function evaluateContent (id, singleContent) {
    if (typeof singleContent === "string") { // Text
        return <Text
            key = { id }
            style = {[
                globalStyles.element,
                styles.messageContent,
                styles.messageTextContent
            ]}
        >{ singleContent }</Text>;
    } else {
        switch (singleContent.type) { // Media
            case "image":
                return <Image
                            key = { id }
                            defaultSource = { require("../../assets/default.png") }
                            source = {{ uri: singleContent.uri }}
                            style = {[
                                globalStyles.imageBig,
                                styles.messageContent,
                                styles.messageImageContent
                            ]}
                        />;
            case "video":
                break;
            default:
        }
    }
}

export default function ChatMessage (props) {

    const { id, type, content, author: { username, avatar } } = props.data;

    return (
        <View style = { styles.messageContainer }>
            <Image
                source = {{ uri: avatar, width: 40, height: 40 }}
                defaultSource = { require("../../assets/default.png") }
                style = {[
                    globalStyles.image
                ]}
            />
            <View style = { styles.messageLabels }>
                <Text
                    style = {[
                        globalStyles.element,
                        styles.messageSender
                    ]}
                >{ username }</Text>
                <View style = { styles.messageContentContainer }>
                    {
                        typeof content === "object"
                        ? content.hasOwnProperty("type")
                            ? evaluateContent(id, content) // Single media message
                            : Object.keys(content).map(singleContentId => evaluateContent(singleContentId, content[singleContentId])) // Same-author nesting
                        : evaluateContent(id, content) // Single message
                    }
                </View>
            </View>
        </View>
    );
};