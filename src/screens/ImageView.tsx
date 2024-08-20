import {View, Text, Image, Pressable, TouchableOpacity} from 'react-native';
import React from 'react';
import Back from '../assets/Back';

const ImageView = ({route, navigation}: any) => {
  const {source} = route.params;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        position: 'relative',
      }}>
      <TouchableOpacity
        style={{position: 'absolute', top: 15, left: 10}}
        onPress={navigation.goBack}>
        <Back color={'#fff'} />
      </TouchableOpacity>
      <Image source={source} style={{width: '100%'}} />
    </View>
  );
};

export default ImageView;
