import React, { useState, useEffect } from 'react'
import { Text, View } from '../../components/Themed';
import styles from './styles';
import { NativeModules, Image, Pressable, FlatList} from 'react-native';
import { MaterialIcons, Entypo, AntDesign, Ionicons, Feather, FontAwesome } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

import * as Device from 'expo-device';
//
// iOS:
const locale = NativeModules.SettingsManager.settings.AppleLocale ||
               NativeModules.SettingsManager.settings.AppleLanguages[0] // "fr_FR"

// IOS Keyboard
const keybooard = '';

// Android:
//const locale = NativeModules.I18nManager.localeIdentifier // "fr_FR"







const SettingsScreen = () => {

    // const deviceId = Expo.Constants.deviceId;

    const [geoipCountry, setCountryCode] = useState('');


    
    let detectedLanguage ='NOT SET'

const getCountryByIp = async () => {
    
      console.log('Running Fetch')
        const result = fetch('https://geoip.bingwatchplaylearn.com/json', {
          headers: {
            'content-type': 'application/json',
            'api-key': 'ZDAyMmQ1NzQtODQ3ZC00NTFiLTljODMtMDUwNThmYzBhN2E3',
          },
        })
          .then((response) => response.json()
          .then((responseJson) => {
            detectedLanguage = responseJson.data.country_code.toLowerCase();
            console.log('Detected Language:' ,detectedLanguage)
            setCountryCode(detectedLanguage)
    
          })
        )
 

}
    
let detect = getCountryByIp()

    return (

        <View style={{ backgroundColor: 'black' }}>
            
            <Text style={{ backgroundColor: 'black', color: 'white', marginTop: 60, marginLeft: 45 }}>App Version: 1.1.1</Text>
            <Text style={{ backgroundColor: 'black', color: 'white', marginTop: 20, marginLeft: 45 }}>React Native: 0.64</Text>
            <Text style={{ backgroundColor: 'black', color: 'white', marginTop: 20, marginLeft: 45 }}>Device Brand: {Device.brand}</Text>
            <Text style={{ backgroundColor: 'black', color: 'white', marginTop: 20, marginLeft: 45 }}>Model Name:  {Device.modelName}</Text>
            <Text style={{ backgroundColor: 'black', color: 'white', marginTop: 20, marginLeft: 45 }}>Model ID:  {Device.modelId}</Text>
            <Text style={{ backgroundColor: 'black', color: 'white', marginTop: 20, marginLeft: 45 }}>OS Version: {Device.osVersion}</Text>
            <Text style={{ backgroundColor: 'black', color: 'white', marginTop: 20, marginLeft: 45 }}>Build ID: {Device.osBuildId}</Text>
            <Text style={{ backgroundColor: 'black', color: 'white', marginTop: 20, marginLeft: 45 }}>MaxMind Location: {geoipCountry.toUpperCase()}</Text>
            <Text style={{ backgroundColor: 'black', color: 'white', marginTop: 20, marginLeft: 45 }}>Device Locale: {locale.toUpperCase()}</Text>
            <Text style={{ backgroundColor: 'black', color: 'white', marginTop: 20, marginLeft: 45 }}>Copyright: GlobalStripe 2021</Text>

        </View>
    )
};

export default SettingsScreen;