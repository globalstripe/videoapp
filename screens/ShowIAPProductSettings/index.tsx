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

const { InAppUtils } = NativeModules;

const ShowIAPProductSettings = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const [key, SetKey] = React.useState("name");
  const [value, SetValue] = React.useState("Unknown");

  const showModal = () => {
    console.log("Modal Pressable Pressed");
    setModalVisible(!modalVisible);
  };

  // const identifiers = ["com.globalstripe.movieadmobapp"];

  // try {
  //   const AppStore = InAppUtils.loadProducts(identifiers, (error, products) => {
  //     console.log(products);
  //     //console.log(error)
  //     alert(products);
  //     //update store here.
  //   });
  // } catch {
  //   console.log("Load Products Failed");
  //   alert("Load Products Failed");
  // }

  return (
    <View style={{ backgroundColor: "black" }}>
      <Text
        style={{
          backgroundColor: "black",
          color: "white",
          marginTop: 60,
          marginLeft: 45,
        }}
      >
        {" "}
        More Settings!
      </Text>
      <Text
        style={{
          backgroundColor: "black",
          color: "white",
          marginTop: 20,
          marginLeft: 45,
        }}
      >
        Copyright: GlobalStripe 2021
      </Text>
      <Button
        title="Save this key/value pair"
        onPress={() => {
          save(key, value);
          SetKey("name");
          SetValue("Chris");
        }}
      />

      <Button
        title="Set name to Alan,"
        onPress={() => {
          save(key, value);
          SetKey("name");
          SetValue("Alan");
        }}
      />

      <Button
        title="Set name to Colin"
        onPress={() => {
          save(key, value);
          SetKey("name");
          SetValue("Colin");
        }}
      />

      <Button
        title="Get the Saved Value"
        onPress={() => {
          alert(getValueFor("name"));
        }}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={modalstyle.centeredView}>
          <View style={modalstyle.modalView}>
            <Text style={modalstyle.modalText}>Hey Here's a Modal</Text>
            <Text style={modalstyle.modalText}>Your Ad or Promo could go in here ?</Text>
            <Pressable
              style={[modalstyle.button, modalstyle.buttonClose]}
              onPress={() => showModal()}
            >
              <Text style={modalstyle.textStyle}>Dismiss Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[modalstyle.button, modalstyle.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={modalstyle.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
}

async function getValueFor(key) {
  let result = await SecureStore.getItemAsync(key);
  if (result) {
    alert("🔐 Here's your value 🔐 \n" + result);
  } else {
    alert("No values stored under that key.");
  }
}

const modalstyle = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: '#333000',
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 20,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "yellow",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default ShowIAPProductSettings;
