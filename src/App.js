// Modules
import React from "react";
const StatusBarExpo = require("expo-status-bar").StatusBar;
import io from "socket.io-client";

// Components
import { registerRootComponent } from "expo";
import { Component } from "react";
import { AppRegistry, SafeAreaView, View, StyleSheet, ScrollView } from "react-native";
import { Provider, connect } from "react-redux";

// Screens
import Chat from "./components/Chat";
import Start from "./components/Start";

// Stores
import AppStore from "./states/AppStore";

// Variables
const constants = require("../config.json");

const socket = io("https://gizmo-chat.herokuapp.com/", {
  transports: ["websocket"],
  reconnection: true
});

const styles = {
  background: {
    flex: 1,
    backgroundColor: constants.BACKGROUND_COLOR,
  }
};

const userToken = "lolHAHA";

class App extends Component {

  constructor (props) {

    super(props);

    socket.emit("user:init", {
      "userKey": userToken
    });

    socket.emit("messageHistory:get", {
      "userKey": userToken
    });

    socket.on("messageHistory:receive", data => {
      AppStore.dispatch({ type: "OVERRIDE_MESSAGE_HISTORY", data });
    });

    socket.on("message:receive", data => {
      AppStore.dispatch({ type: "ADD_TO_MESSAGE_HISTORY", data });
    });
  }

  handleSubmitMessage (text) {
    socket.emit("message:send", {
      type: "text",
      content: text,
      userKey: userToken
    });
  }

  // <Chat handleSubmitMessage = { this.handleSubmitMessage }/>

  render () {
    return (
      <Provider store = { AppStore }>
        <SafeAreaView style = { styles.background }>
          <Start />
        </SafeAreaView>
      </Provider>
    );
  }
};

export default registerRootComponent(App);
