import React, { useState, useEffect } from 'react'
import { Text, View } from '../../components/Themed';
import styles from './styles';
import { NativeModules, Image, Pressable, FlatList} from 'react-native';
import { MaterialIcons, Entypo, AntDesign, Ionicons, Feather, FontAwesome } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';


const MoreSettings = () => {

    return (

        <View style={{ backgroundColor: 'black' }}>
            
            <Text style={{ backgroundColor: 'black', color: 'white', marginTop: 60, marginLeft: 45 }}> More Settings!</Text>
            <Text style={{ backgroundColor: 'black', color: 'white', marginTop: 20, marginLeft: 45 }}>Copyright: GlobalStripe 2021</Text>

        </View>
    )
};

export default MoreSettings;