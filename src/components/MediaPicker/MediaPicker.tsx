import React from 'react';
import {View, Text, Image} from 'react-native';
import ImagePickers from '../ImagePicker/ImagePicker';
import Video from 'react-native-video';
import ThumbnailUpload from '../../assets/ThumbnailUpload';
import VideoUpload from '../../assets/VideoUpload';

const MediaPicker = ({media, mediaType, onPickMedia, error}:any) => {
  return (
    <>
      {media ? (
        <View style={{flex: 1, alignItems: 'center'}}>
          {mediaType === 'image' ? (
            <Image
              source={{uri: media}}
              style={{width: '100%', height: mediaType === 'image' ? 146 : 231}}
              resizeMode="contain"
            />
          ) : (
            <Video
              source={{uri: media}}
              style={{width: '100%', height: 231}}
              controls
            />
          )}
        </View>
      ) : (
        <View style={{gap: 10}}>
          <ImagePickers
            title={`Add ${mediaType === 'image' ? 'thumbnail image' : 'recipe video'} here`}
            icon={mediaType === 'image' ? <ThumbnailUpload /> : <VideoUpload />}
            onPress={onPickMedia}
          />
          {error && (
            <Text style={{color: 'red', fontSize: 14}}>{error}</Text>
          )}
        </View>
      )}
    </>
  );
};

export default MediaPicker;
