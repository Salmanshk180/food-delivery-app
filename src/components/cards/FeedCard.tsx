import moment from 'moment';
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

const FeedCard = ({data}: any) => {
  const feedDate = moment(data?.created_at).toArray();
  const timeAgo = moment(feedDate.slice(0, 2)).fromNow();
  return (
    <TouchableOpacity style={{flex: 0.5}} activeOpacity={0.6}>
      <View style={{position: 'relative', borderRadius: 10}}>
        <Image
          source={{uri: data?.thumbnail_image?.imageKey}}
          width={168}
          height={231}
          style={{width: '100%', borderRadius: 10}}
        />
        <View style={styles.overlay}>
          <View>
            <Text style={styles.titleText}>{data?.title}</Text>
            <View style={styles.infoContainer}>
              <Text style={styles.infoText}>{timeAgo}</Text>
              <Text style={styles.infoText}>
                {data?.time_to_read + ' ' + 'min'}
              </Text>
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
    textTransform: 'capitalize',
  },
});

export default FeedCard;
