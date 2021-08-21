import React, { useState, useEffect } from "react";
import { Text, View } from "../../components/Themed";
import styles from "./styles";
import {
  Alert,
  Button,
  Modal,
  NativeModules,
  Image,
  Pressable,
  FlatList,
  StyleSheet,
} from "react-native";
import {
  MaterialIcons,
  Entypo,
  AntDesign,
  Ionicons,
  Feather,
  FontAwesome,
} from "@expo/vector-icons";

import { Picker } from "@react-native-picker/picker";
import * as SecureStore from "expo-secure-store";
import { WebView } from 'react-native-webview';

const { InAppUtils } = NativeModules;

const WebViewHTML = require('../../assets/mailchimp.html');


interface AppProps {
};

interface AppState {
    webviewBackgroundColor: string;
};

// This webviewBackgroundColor stuff
// makes the WebView transparent when it loaads
// Then set the colors to match your html page + css

class SignupScreen extends React.Component<AppProps, AppState> {

  constructor(props) {
    super(props);
    this.state = {
        webviewBackgroundColor: 'transparent',
    }
}

render() {
    const {
        webviewBackgroundColor,
    } = this.state;

    return (
        <View style={{flex: 1, backgroundColor: 'black'}}>
            <WebView
                //useWebKit={false}
                style={{flex: 1, backgroundColor: webviewBackgroundColor}}
                originWhitelist={['*']}
                source={WebViewHTML}
                onLoad={() => {
                    this.setState(() => {
                        return {
                            webviewBackgroundColor: 'black', // override container's backgroundColor
                        }
                    })
                }}
            />
        </View>
    );
}
};

const ImageStyles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  tinyLogo: {
    paddingLeft: 10,
    marginLeft: 8,
    marginBottom: 8,
    alignItems: "center",
    width: 50,
    height: 50,
  },
  logo: {
    paddingLeft: 10,
    alignItems: "center",
    width: 66,
    height: 58,
  },
});

export default SignupScreen;
