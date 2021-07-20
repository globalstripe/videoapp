import React, { useState, useEffect } from 'react'
import { Text, View } from '../../components/Themed';
import styles from './styles';
import { Image, Pressable, FlatList } from 'react-native';
import { MaterialIcons, Entypo, AntDesign, Ionicons, Feather, FontAwesome } from '@expo/vector-icons';

import { ListItem, Avatar, Icon } from 'react-native-elements'

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
]

const list2 = [
    {
      title: 'Appointments',
      icon: 'av-timer'
    },
    {
      title: 'Trips',
      icon: 'flight-takeoff'
    },
  ]

  
const ListItemScreen = () => {

    // console.log(firstEpisode)
    return (

        <View style={{ backgroundColor: 'black' }}>
            
            {
    list.map((l, i) => (
      <ListItem  key={i} bottomDivider >
        <Avatar source={{uri: l.avatar_url}} />
        <ListItem.Content style={styles.listItem}>
          <ListItem.Title style={styles.listItem}>{l.name}</ListItem.Title>
          <ListItem.Subtitle style={styles.listItem}>{l.subtitle}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    ))
  }


{
    list2.map((item, i) => (
      <ListItem key={i} bottomDivider>
        <Icon name={item.icon} />
        <ListItem.Content>
          <ListItem.Title>{item.title}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    ))
  }


        </View>
    )
};

export default ListItemScreen;