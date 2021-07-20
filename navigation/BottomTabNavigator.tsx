/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Button } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen/';
import styles from '../screens/HomeScreen/styles';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ListItemScreen from '../screens/ListItem';

import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, TabOneParamList, HomeParamList, TabTwoParamList,SettingsParamList } from '../types';

// import { AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
        style: {
          backgroundColor: '#000000',
          borderTopWidth: 0,  // Gets rid of the white border
          elevation: 0 // Gets rid of the white border
        },
      }}>

      <BottomTab.Screen
        name="Home"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />,
        }}
      />

      <BottomTab.Screen
        name="Coming_Soon"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="video-library" size={24} color={color} />,
        }}
      />

      <BottomTab.Screen
        name="Search"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="search" size={24} color={color} />,
        }}
      />

      <BottomTab.Screen
        name="Download"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="download" size={24} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/

function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

const HomeStack = createStackNavigator<HomeParamList>();

function TabOneNavigator() {

  const navigation = useNavigation();

  const onSettingsPress = () => {
      navigation.navigate('SettingsScreen')
  }

  const onHamBurgerPress = () => {
       navigation.navigate('ListItemScreen')
  }

  const onBackPress = () => {
    navigation.navigate('HomeScreen')
}


  return (
    <HomeStack.Navigator>

      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        
        options={{
          headerTitle: 'Home',
          headerTintColor: 'white',
          headerLeftContainerStyle: {
            paddingTop: 0,
            paddingBottom: 2,
            paddingLeft: 21,
            paddingRight: 0,
          },
          headerRightContainerStyle: {
            paddingTop: 3,
            paddingBottom: 1,
            paddingLeft: 1,
            paddingRight: 26,
          },

          headerLeft: () => (
            <Ionicons
              name="menu-outline"
              size={30}
              color="grey"
              onPress={() => onHamBurgerPress()}
            />
          ),

          headerRight: () => (
            <Ionicons
              name="settings-outline"
              size={24}
              color="grey"
              onPress={() => onSettingsPress()}
            />
          ),

          headerStyle: {
            backgroundColor: 'black',
            height: 75,
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
            borderBottomWidth: 0 // Just in case.
          },
        }}
      />

      <HomeStack.Screen
        name="MovieDetailsScreen"
        component={MovieDetailsScreen}
        options={{ 
          headerShown: false,
        }}
    />


        <HomeStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        
        options={{
          headerTitle: 'Settings',
          headerTintColor: 'white',
          headerLeftContainerStyle: {
            paddingTop: 0,
            paddingBottom: 2,
            paddingLeft: 21,
            paddingRight: 0,
          },
          headerRightContainerStyle: {
            paddingTop: 0,
            paddingBottom: 2,
            paddingLeft: 1,
            paddingRight: 26,
          },

          headerLeft: () => (
            <Ionicons
              name="ios-arrow-back"
              size={30}
              color="grey"
              onPress={() => onBackPress()}
            />
          ),

          headerRight: () => (
            <Ionicons
              name="ios-arrow-forward"
              size={30}
              color="grey"
            />
          ),

          headerStyle: {
            backgroundColor: 'black',
            height: 75,
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
            borderBottomWidth: 0 // Just in case.
          },
        }}
    />

<HomeStack.Screen
        name="ListItemScreen"
        component={ListItemScreen}
        
        options={{
          headerTitle: 'ItemScreen',
          headerTintColor: 'white',
          headerLeftContainerStyle: {
            paddingTop: 0,
            paddingBottom: 2,
            paddingLeft: 21,
            paddingRight: 0,
          },
          headerRightContainerStyle: {
            paddingTop: 0,
            paddingBottom: 2,
            paddingLeft: 1,
            paddingRight: 26,
          },

          headerLeft: () => (
            <Ionicons
              name="ios-arrow-back"
              size={30}
              color="grey"
              onPress={() => onBackPress()}
            />
          ),

          headerRight: () => (
            <Ionicons
              name="ios-arrow-forward"
              size={30}
              color="grey"
            />
          ),

          headerStyle: {
            backgroundColor: 'black',
            height: 75,
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
            borderBottomWidth: 0 // Just in case.
          },
        }}
    />

    </HomeStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen1"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />

      <TabTwoStack.Screen
        name="TabTwoScreen2"
        component={ListItemScreen}
        options={{ headerTitle: 'ListItemScreen' }}
      />

    </TabTwoStack.Navigator>
  );
}


