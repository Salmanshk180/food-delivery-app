import React, {useEffect} from 'react';
import {View, ImageBackground, Image, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigation} from '../types/index';

export default function SplashScreen() {
  const navigation = useNavigation<StackNavigation>();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);
    
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/Splash.jpg')}
        style={styles.imageBackground}
        resizeMode="cover">
        <View style={styles.logoContainer}>
          <Image source={require('../assets/logo.png')} style={styles.logo} />
          <Text style={styles.text}>Eatvisor by Shalini Bansal</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 20,
  },
  logo: {},
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
});
