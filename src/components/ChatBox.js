// Modules
import React from "react";
import { connect } from "react-redux";

// Components
import { Component } from "react";
import { StyleSheet, ScrollView } from "react-native";
import ChatMessage from "./ChatMessage"

// Variables
var currentMessageContentCollector = [];

const styles = StyleSheet.create({
    chatBoxContainer: {
        flex: .8,
        flexDirection: "column"
    }
});

const mapStateToProps = (state) => {
    return {
        lastMessage: state.lastMessage,
        messageHistory: state.messageHistory
    };
}

function ChatBox (props) {
    return (
        <ScrollView
            style = { styles.chatBoxContainer }
            showsVerticalScrollIndicator = { true }
            indicatorStyle = "white"
        >
            {
                typeof props.messageHistory === "object" && Object.keys(props.messageHistory).map(id => {

                    /**
                     * Same-author nesting
                     *
                     * Basically, check if the next message's author is the same as current.
                     * If it is, store current content in the 'currentMessageContentCollector'
                     * array until the next author isn't the same. Once we hit that wall, we
                     * apply the array of stored contents to a 'ChatMessage' component
                     */

                    let msg = props.messageHistory[id];
                    let { author: { id: nextAuthorId } } = props.messageHistory[`${parseInt(id) + 1}`] || { author: {} };

                    if (nextAuthorId === msg.author.id) {
                        currentMessageContentCollector[msg.id] = msg.content;
                    } else {
                        if (Object.keys(currentMessageContentCollector).length > 0) {

                            // Read currently saved contents
                            let fContent = currentMessageContentCollector;
                            currentMessageContentCollector = {};

                            // Apply all saved contents to ChatMessage component
                            return <ChatMessage key = { msg.id } data = {{ ...msg, content: { ...fContent, [msg.id]: msg.content } }} />;
                        } else {
                            return <ChatMessage key = { msg.id } data = { msg } />;
                        }
                    }
                    /**
                     * No same-author nesting
                     *
                     * return <ChatMessage key = { msg.id } data = { msg } />;
                     */
                })
            }
        </ScrollView>
    );
}

export default connect(mapStateToProps)(ChatBox);