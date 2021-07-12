import * as React from 'react';
import { StyleSheet, Image } from 'react-native';

import { Text, View } from '../../components/Themed';

import styles from './styles'

import EditScreenInfo from '../../components/EditScreenInfo';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: 'https://i.pinimg.com/originals/e4/6b/4e/e46b4ef27f2975d9021abe4816a6fce0.jpg' }}/>
    </View>
  );
}

export default HomeScreen;


