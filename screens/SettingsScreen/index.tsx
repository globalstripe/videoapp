import React, { useState, useEffect } from 'react'
import { Text, View } from '../../components/Themed';
import styles from './styles';
import { Image, Pressable, FlatList } from 'react-native';
import { MaterialIcons, Entypo, AntDesign, Ionicons, Feather, FontAwesome } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

import * as Device from 'expo-device';

const SettingsScreen = () => {

    // const deviceId = Expo.Constants.deviceId;

    return (

        <View style={{ backgroundColor: 'black' }}>
            
            <Text style={{ backgroundColor: 'black', color: 'white', marginTop: 60, marginLeft: 45 }}>App Version: 1.1.1</Text>
            <Text style={{ backgroundColor: 'black', color: 'white', marginTop: 20, marginLeft: 45 }}>React Native: 0.64</Text>
            <Text style={{ backgroundColor: 'black', color: 'white', marginTop: 20, marginLeft: 45 }}>Device Brand: {Device.brand}</Text>
            <Text style={{ backgroundColor: 'black', color: 'white', marginTop: 20, marginLeft: 45 }}>Model Name:  {Device.modelName}</Text>
            <Text style={{ backgroundColor: 'black', color: 'white', marginTop: 20, marginLeft: 45 }}>Model ID:  {Device.modelId}</Text>
            <Text style={{ backgroundColor: 'black', color: 'white', marginTop: 20, marginLeft: 45 }}>OS Version: {Device.osVersion}</Text>
            <Text style={{ backgroundColor: 'black', color: 'white', marginTop: 20, marginLeft: 45 }}>Build ID: {Device.osBuildId}</Text>
            <Text style={{ backgroundColor: 'black', color: 'white', marginTop: 20, marginLeft: 45 }}>Copyright: GlobalStripe 2021</Text>

        </View>
    )
};

export default SettingsScreen;