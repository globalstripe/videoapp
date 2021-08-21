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
import MoreSettings from '../screens/MoreSettings';
import ListItemScreen from '../screens/ListItem';
import SignupScreen from '../screens/SignupScreen';
import WebViewTwoScreen from '../screens/WebViewTwoScreen';
import WebViewThreeScreen from '../screens/WebViewThreeScreen';

import TabTwoScreen from '../screens/TabTwoScreen';
import TabTwoScreen2 from '../screens/TabTwoScreen2';
import TabThreeScreen from '../screens/TabThreeScreen';
import TabFourScreen from '../screens/TabFourScreen';

import {  BottomTabParamList, 
          HomeParamList, 
          TabOneParamList,
          TabTwoParamList,
          TabThreeParamList,
          TabFourParamList, 
          SettingsParamList,
          SignupParamList 
} from '../types';

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
      }}
    >

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
        component={TabThreeNavigator}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="search" size={24} color={color} />,
        }}
      />

      <BottomTab.Screen
        name="Downloads"
        component={TabFourNavigator}
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

  const transitionConfig = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };

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

const onMorePress = () => {
  navigation.navigate('MoreSettings')
}

const onSignUpPress = () => {
  navigation.navigate('SignupScreen')
}

const onWebViewTwoPress = () => {
  navigation.navigate('WebViewTwoScreen')
}

const onWebViewThreePress = () => {
  navigation.navigate('WebViewThreeScreen')
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
              onPress={() => onMorePress()}
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
        name="MoreSettings"
        component={MoreSettings}
        
        options={{
          headerTitle: 'MoreSettings',
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
              onPress={() => onSettingsPress()}
            />
          ),

          headerRight: () => (
            <Ionicons
              name="ios-arrow-forward"
              size={30}
              color="grey"
              onPress={() => onSignUpPress()}
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
        name="SignupScreen"
        component={SignupScreen}
        
        options={{
          headerTitle: 'Signup',
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
              onPress={() => onMorePress()}
            />
          ),

          headerRight: () => (
            <Ionicons
              name="ios-arrow-forward"
              size={30}
              color="grey"
              onPress={() => onWebViewTwoPress()}
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
        name="WebViewTwoScreen"
        component={WebViewTwoScreen}
        
        options={{
          headerTitle: 'Webview Two External',
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
              onPress={() => onSignUpPress()}
            />
          ),

          headerRight: () => (
            <Ionicons
              name="ios-arrow-forward"
              size={30}
              color="grey"
              onPress={() => onWebViewThreePress()}
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
        name="WebViewThreeScreen"  // If this error/warns make sure it is exported in HomeParamList in types.tsx
        component={WebViewThreeScreen}
        
        options={{
          headerTitle: 'Webview Three',
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
              onPress={() => onWebViewTwoPress()}
            />
          ),

          headerRight: () => (
            <Ionicons
              name="ios-arrow-forward"
              size={30}
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
        name="ListItemScreen"   // name needs to be defined in types.tsx
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

  const navigation = useNavigation();

  const onBackPress = () => {
    navigation.navigate('HomeScreen')
}

const onScreen2Press = () => {
  navigation.navigate('TabTwoScreen2')
}

  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen1"
        component={TabTwoScreen}
        options={{
          headerTitle: 'Tab Two Header',
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
              size={24}
              color="grey"
              onPress={() => onScreen2Press()}
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

      <TabTwoStack.Screen
        name="TabTwoScreen2"  
        component={TabTwoScreen2}
        options={{ headerTitle: 'TabTwoScreen2' }}
      />

    </TabTwoStack.Navigator>
  );
}



const TabThreeStack = createStackNavigator<TabThreeParamList>();

function TabThreeNavigator() {

  const navigation = useNavigation();

  const onBackPress = () => {
    navigation.navigate('HomeScreen')
}

  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="TabThreeScreen"
        component={TabThreeScreen}
        options={{
          headerTitle: 'Search',
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

          headerStyle: {
            backgroundColor: 'black',
            height: 75,
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
            borderBottomWidth: 0 // Just in case.
          },
        }}

      />

      <TabThreeStack.Screen
        name="TabThreeScreen2"
        component={ListItemScreen}
        options={{ headerTitle: 'Tab Three Screen 2' }}
      />

    </TabThreeStack.Navigator>
  );
}

const TabFourStack = createStackNavigator<TabFourParamList>();

function TabFourNavigator() {

  const navigation = useNavigation();

  const onBackPress = () => {
    navigation.navigate('HomeScreen')
}

  return (
    <TabFourStack.Navigator>
      <TabFourStack.Screen
        name="TabFourScreen1"
        component={TabFourScreen}
        options={{
          headerTitle: 'Screen Four Header',
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

          headerStyle: {
            backgroundColor: 'black',
            height: 75,
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
            borderBottomWidth: 0 // Just in case.
          },
        }}

      />

      <TabFourStack.Screen
        name="TabFourScreen2"
        component={ListItemScreen}
        options={{ headerTitle: 'Tab Four Screen 2' }}
      />

    </TabFourStack.Navigator>
  );
}

