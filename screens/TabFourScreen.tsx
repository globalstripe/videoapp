import * as React from 'react';
import { useEffect } from 'react';
import { Button, ScrollView, StyleSheet, Platform} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from 'expo-ads-admob';

//  Need Must Also add you "googleMobileAdsAppId": to /apps.json
// "config": {
//   "googleMobileAdsAppId": "ca-app-pub-6964741882714582~9359841559"
// },

// Interstitial Ad Unit ID
// ca-app-pub-6964741882714582~9359841559
// ca-app-pub-6964741882714582/1432938651

// AdMobInterstitial.setAdUnitID("ca-app-pub3940256099942544/1033173712");
// AdMobInterstitial.addEventListener("interstitialDidLoad", () =>
//   console.log("interstitialDidLoad")
// );
// AdMobInterstitial.addEventListener("interstitialDidFailToLoad", () =>
//   console.log("interstitialDidFailToLoad")
// );
// AdMobInterstitial.addEventListener("interstitialDidOpen", () =>
//   console.log("interstitialDidOpen")
// );
// AdMobInterstitial.addEventListener("interstitialDidClose", () =>
//   console.log("interstitialDidClose")
// );
// AdMobInterstitial.addEventListener("interstitialWillLeaveApplication", () =>
//   console.log("interstitialWillLeaveApplication")
// );


export default function TabFourScreen() {  
  
// Set global test device ID
setTestDeviceIDAsync('EMULATOR');
// ALWAYS USE TEST ID for Admob ads


const adUnitID = Platform.select({
  // https://developers.google.com/admob/ios/test-ads
  ios: 'ca-app-pub-6964741882714582/7936861156',
  // https://developers.google.com/admob/android/test-ads
  android: 'ca-app-pub-3940256099942544/6300978111',
});


useEffect(() => {

  async function runasync() {
    console.log('Running UseEffect Once Only')
    await DoShowInterstitial('ca-app-pub-6964741882714582/1432938651')
    return null;
  }

  runasync();

},[]);


const DoShowInterstitial = async (adunitid) => {
  console.log('Request Interstitial Ad!')
  //await AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712'); // Test ID, Replace with your-admob-unit-id
  await AdMobInterstitial.setAdUnitID(adunitid);
  
  try {
    console.log('Make Ad Request')
  await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});

  try {
    console.log('Try to Show')
    await AdMobInterstitial.showAdAsync();
  } catch(e) {
    console.log('Ad Show Failed')
  }

  } catch(e) {
    console.log('Ad Request Failed')
  }
}


  return (  
    
    <ScrollView >


<Button
          title="Interstitial"
          // This AdUnit ID specificed only text/rich media or video interstitials
          onPress={ () => DoShowInterstitial('ca-app-pub-6964741882714582/1432938651')}
  />

  
  <Button
          title="Video Interstitial"
          // This AdUnit ID specificed only video interstitials
          onPress={ () => DoShowInterstitial('ca-app-pub-6964741882714582/5503404977')}
  />
<Text style={styles.adText}>GlobalStripe AdMob Top Banner Ad Unit</Text>
<Text style={styles.adText}> </Text>
<Text style={styles.adText}> </Text>

<AdMobBanner
  bannerSize="fullBanner"
  adUnitID="ca-app-pub-6964741882714582/1836574754" // Gstripe Banner Ad Unit ID
  // adUnitID="ca-app-pub-3940256099942544/2934735716" // Test ID, Replace with your-admob-unit-id
  //adUnitID="ca-app-pub-6964741882714582/9359841559" // Gstripe Banner Ad Unit ID
  servePersonalizedAds // true or false
 />
 

      <Text style={styles.title}> </Text>
      <Text style={styles.title}>Tab Four Navigator</Text>
      <Text style={styles.title}>Tab Four Screen</Text>
      <Text style={styles.title}> </Text>

      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      
      <EditScreenInfo path="/screens/TabFourScreen.tsx" />

      <Text style={styles.title}> </Text>
      <Text style={styles.title}>Banner Ad Unit - Video Only</Text>
      <Text style={styles.title}> </Text>
      <Text style={styles.title}> </Text>

      <AdMobBanner
  bannerSize="fullBanner"
  //adUnitID="ca-app-pub-3940256099942544/2934735716" // Test ID, Replace with your-admob-unit-id
  //adUnitID="ca-app-pub-6964741882714582/9359841559" // Gstripe Banner Ad Unit ID
  //adUnitID="ca-app-pub-6964741882714582/1836574754" // Gstripe Banner Ad Unit ID
  
  adUnitID="ca-app-pub-6964741882714582/5639136340"
  servePersonalizedAds // true or false
 />

      <Text style={styles.title}> </Text>
      <Text style={styles.title}>And Another Ad in the ScrollView</Text>
      <Text style={styles.title}> </Text>


      <AdMobBanner
  bannerSize="fullBanner"
  //adUnitID="ca-app-pub-3940256099942544/2934735716" // Test ID, Replace with your-admob-unit-id
  //adUnitID="ca-app-pub-6964741882714582/9359841559" // Gstripe Banner Ad Unit ID
  //adUnitID="ca-app-pub-6964741882714582/1836574754" // Gstripe Banner Ad Unit ID
  
  adUnitID="ca-app-pub-6964741882714582/7936861156"
  servePersonalizedAds // true or false
 />


<EditScreenInfo path="/screens/TabFourScreen.tsx" />

      <Text style={styles.title}> </Text>
      <Text style={styles.title}>And Some more</Text>
      <Text style={styles.title}> </Text>

      <EditScreenInfo path="/screens/TabFourScreen.tsx" />
      <Text style={styles.title}> </Text>

      <AdMobBanner bannerSize="fullBanner"
          adUnitID="ca-app-pub-6964741882714582/7936861156"
          servePersonalizedAds // true or false
      />

      <Text style={styles.title}> </Text>
      <Text style={styles.title}>And Another Ad in the ScrollView</Text>
      <Text style={styles.title}> </Text>

      <AdMobBanner bannerSize="fullBanner"
          //adUnitID="ca-app-pub-3940256099942544/2934735716" // Test ID, Replace with your-admob-unit-id
          //adUnitID="ca-app-pub-6964741882714582/9359841559" // Gstripe Banner Ad Unit ID
          //adUnitID="ca-app-pub-6964741882714582/1836574754" // Gstripe Banner Ad Unit ID  
          adUnitID="ca-app-pub-6964741882714582/7936861156"
          servePersonalizedAds // true or false
      />



    </ScrollView>
  

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  interstitialBanner: {
    width: "100%",
    marginLeft: 0
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  },
  adText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'black',
    paddingTop: 10,
    paddingLeft: 5,
},
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    backgroundColor: 'black'
  },
});
