import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const FeedCard = ({data}: any) => {
  return (
    <TouchableOpacity activeOpacity={0.6}>
      <View style={styles.cardContainer}>
        <ImageBackground source={data.image} style={styles.imageBackground}>
          <View style={styles.overlay}>
            <View style={styles.textContainer}>
              <Text style={styles.titleText}>{data.text}</Text>
              <View style={styles.infoContainer}>
                <Text style={styles.infoText}>{data.date}</Text>
                <Text style={styles.infoText}>{data.time + ' min'}</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    maxHeight: 231,
    maxWidth: 168,
    width: '100%',
    height: '100%',
    borderRadius: 10,
    position: 'relative',
  },
  imageBackground: {
    width: 168,
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    paddingStart: 9,
    paddingVertical: 9,
    gap: 5,
    backgroundColor: 'rgba(0,0,0,0.1)',
    // width: '100%',
    // height: '100%',
    // borderRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  textContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    // height: '100%',
    // width: '100%',
  },
  titleText: {
    color: '#FFF',
    fontSize: 16,
    flexWrap: 'wrap',
    fontWeight: '800',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingEnd: 9,
    width: '100%',
  },
  infoText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 14,
  },
});

export default FeedCard;
