import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

const FeedCard = ({data}: any) => {
  return (
    // <TouchableOpacity activeOpacity={0.6} style={{flex: 1}}>
    //   <View style={styles.cardContainer}>
    //     <ImageBackground source={data.image} style={styles.imageBackground}>
    //       <View style={styles.overlay}>
    //         <View style={styles.textContainer}>
    //           <Text style={styles.titleText}>{data.text}</Text>
    //           <View style={styles.infoContainer}>
    //             <Text style={styles.infoText}>{data.date}</Text>
    //             <Text style={styles.infoText}>{data.time + ' min'}</Text>
    //           </View>
    //         </View>
    //       </View>
    //     </ImageBackground>
    //   </View>
    // </TouchableOpacity>
    <TouchableOpacity style={{flex: 1}} activeOpacity={0.6}>
      <View style={{position: 'relative', borderRadius: 10}}>
        <Image source={data.image} style={{width: '100%', borderRadius: 10}} />
        <View style={styles.overlay}>
          <View>
            <Text style={styles.titleText}>{data.text}</Text>
            <View style={styles.infoContainer}>
              <Text style={styles.infoText}>{data.date}</Text>
              <Text style={styles.infoText}>{data.time + ' min'}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10,
    position: 'relative',
  },
  // imageBackground: {
  //   width: '100%',
  // },
  overlay: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    paddingStart: 9,
    paddingVertical: 9,
    gap: 5,
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  titleText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '800',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingEnd: 9,
  },
  infoText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 14,
  },
});

export default FeedCard;
