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

const MoreSettings = () => {
  
  const [modalVisible, setModalVisible] = useState(false);

  const [key, SetKey] = React.useState("name");
  const [value, SetValue] = React.useState("Unknown");

  const showModal = () => {
    console.log("Modal Pressable Pressed");
    setModalVisible(!modalVisible);
  };


  return (
    <View style={{ backgroundColor: "black" }}>
      
      <Text
        style={{
          backgroundColor: "black",
          color: "white",
          marginTop: 10,
          marginLeft: 45,
        }} > {" "} </Text>

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
        title="Save this key/value pair"
        onPress={() => {
          save(key, value);
          SetKey("name");
          SetValue("Chris");
        }}
      />  

      <Button
        title="Get the Saved Value"
        onPress={() => {
          getValueFor("name");
        }}
      />

      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 20,
        }}
      />

       {/* Modal 2 */}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hey Here's another  Modal</Text>
            <Text style={styles.modalText}>This one slid in from the bottom ?</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => showModal()}
            >
              <Text style={styles.textStyle}>Dismiss Modal</Text>
            </Pressable>


          <View style={ImageStyles.container}>

<Image
  style={ImageStyles.tinyLogo}
  source={{
    uri: 'https://reactnative.dev/img/tiny_logo.png',
  }}
/>
<View
        style={{
          borderBottomColor: '#528277',
          borderBottomWidth: 20,
        }}
      />
<Image
  style={ImageStyles.logo}
  source={{
    uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
  }}
/>

</View>

</View>


        </View>
        <Text style={styles.modalText}>Some more?</Text>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Another Modal</Text>
      </Pressable>

      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 20,
        }}
      />

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hey Here's a Modal</Text>
            <Text style={styles.modalText}>Your Ad or Promo could go in here ?</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => showModal()}
            >
              <Text style={styles.textStyle}>Dismiss Modal</Text>
            </Pressable>



          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>

      <Text
        style={{
          backgroundColor: "black",
          color: "white",
          marginTop: 340,
          marginLeft: 115,
        }}
      >
        Copyright: GlobalStripe 2021
      </Text>

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

export default MoreSettings;
