import React, { useState, useEffect } from 'react'
import { Text, View } from '../../components/Themed';
import styles from './styles';
import { Button, NativeModules, Image, Pressable, Platform, FlatList} from 'react-native';
import { MaterialIcons, Entypo, AntDesign, Ionicons, Feather, FontAwesome } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import Constants from 'expo-constants';
import * as Location from 'expo-location';

import { requestTrackingPermissionsAsync } from 'expo-tracking-transparency'

import NetInfo from '@react-native-community/netinfo';

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
    const [netType, setNetworkType] = useState('');
    const [connected, setConnected] = useState('');
    const [trackingStatus, setTrackingStatus] = useState('');
    const [location, setLocation] = useState('Checking ....');
    const [errorMsg, setErrorMsg] = useState(' ');

    useEffect(() => {
      (async () => {
        const { status } = await requestTrackingPermissionsAsync();
        setTrackingStatus(status)
        if (status === 'granted') {
          console.log('Tracking Status:', status);
        }
      })();
    }, []);

    useEffect(() => {
      (async () => {
        if (Platform.OS === 'android' && !Constants.isDevice) {
          setErrorMsg(
            'Oops, this will not work on Snack in an Android emulator. Try it on your device!'
          );
          return;
        }
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
  
        try {
           let location = await Location.getCurrentPositionAsync({});
           //console.log(location);
           console.log(location.coords); 
           setLocation(JSON.stringify(location.coords))
        } catch {
            console.log('Could not get Location.getCurrentPositionAsync()')
            setLocation('**Could not get location**')
        }


      })();
    }, []);

    let text = 'Waiting..';
    if (errorMsg) {
      text = errorMsg;
    } else if (location) {
      text = JSON.stringify(location);
      console.log('Waiting: ', text)
    }



    NetInfo.fetch().then(state => {
      console.log('Connection type', state.type);
      setNetworkType(state.type)
      console.log('Is connected?', state.isConnected);
        if (state.isConnected) {
          setConnected('True')
        } else {
          setConnected('False')
        }
    })
    
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
    
let detect = getCountryByIp();

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
            <Text style={{ backgroundColor: 'black', color: 'white', marginTop: 20, marginLeft: 45 }}>Network Type: {netType}</Text>
            <Text style={{ backgroundColor: 'black', color: 'white', marginTop: 20, marginLeft: 45 }}>Connected: {connected}</Text>
            <Text style={{ backgroundColor: 'black', color: 'white', marginTop: 20, marginLeft: 45 }}>Tracking Status: {trackingStatus}</Text>
            <Text style={{ backgroundColor: 'black', color: 'white', marginTop: 20, marginLeft: 45 }}>Location: </Text>
            <Text style={{ backgroundColor: 'black', color: 'white', marginTop: 20, marginLeft: 45 }}>{location}</Text>
            <Text style={{ backgroundColor: 'black', color: 'white', marginTop: 20, marginLeft: 45 }}>Copyright: GlobalStripe 2021</Text>

        </View>
    )
};

export default SettingsScreen;