import { View, Text, ImageBackground, Image, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { useFonts } from 'expo-font';
import { useRouter } from 'expo-router';

export default function Login() {
  const [fontsLoaded] = useFonts({
    'outfit-bold': require('./../assets/fonts/Outfit-Bold.ttf'),
    'outfit-medium': require('./../assets/fonts/Outfit-Medium.ttf'),
  });

  // Show an ActivityIndicator while fonts are loading
  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.YELLOW} />
      </View>
    );
  }

  const router=useRouter();

  return (
    <ImageBackground
      source={require('./../assets/images/background-img.png')}
      style={styles.backgroundImage}
      blurRadius={3}
    >
      <View style={styles.container}>
        <Image
          source={require('./../assets/images/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.text}>Rojgar Rides</Text>
      </View>
      <TouchableOpacity style={styles.buttonD}
            onPress={()=> router.push('auth/sign-in')}
      >
        <Text style={styles.buttonTextD}>DRIVER</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonR}
            onPress={()=> router.push('auth/sign-in')}
      >
        <Text style={styles.buttonTextR}>RIDER</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.WHITE,
    fontSize: 34,
    fontFamily: 'outfit-bold',
  },
  buttonD: {
    width: '80%',
    padding: 10,
    backgroundColor: Colors.BLACK,
    borderRadius: 99,
    marginBottom: '5%',
  },
  buttonR: {
    width: '80%',
    padding: 10,
    backgroundColor: Colors.WHITE,
    borderRadius: 99,
    marginBottom: '20%',
  },
  buttonTextD: {
    color: Colors.WHITE,
    textAlign: 'center',
    fontFamily: 'outfit',
    fontSize: 20,
  },
  buttonTextR: {
    color: Colors.BLACK,
    textAlign: 'center',
    fontFamily: 'outfit',
    fontSize: 20,
  },
  logo: {
    width: 300, 
    height: 200,
    marginBottom: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.WHITE, 
  },
});
