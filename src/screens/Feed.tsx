import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Search from '../assets/Search';
import {FEEDS, FEEDSDATA} from '../constants/category';
import FeedCard from '../components/cards/FeedCard';

const Feed = () => {
  return (
    <View style={styles.container}>
      <View style={{paddingHorizontal: 20}}>
        <View style={styles.input}>
          <Search />
          <TextInput
            style={styles.textInput}
            placeholder="Search recipes"
            placeholderTextColor={'#838383'}
          />
        </View>
      </View>
      <View>
        <FlatList
          data={FEEDS}
          horizontal
          contentContainerStyle={{paddingLeft: 20, paddingRight: 10}}
          renderItem={feed => (
            <TouchableOpacity activeOpacity={0.6}>
              <Text
                style={[
                  styles.badge,

                  feed.index === FEEDS.length - 1 && {marginEnd: 10},
                ]}>
                {feed.item.text}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      {/* <View style={{flex: 1}}>
        <FlatList
          data={FEEDSDATA}
          numColumns={2}
          // centerContent
          contentContainerStyle={{
            gap: 17,
            // alignItems: 'center',
            paddingHorizontal: 20,
          }}
          columnWrapperStyle={{justifyContent: 'space-between', width: '100%'}}
          renderItem={feed => <FeedCard data={feed.item} />}
          keyExtractor={feed => feed.id.toString()}
        />
      </View> */}
      <FlatList
        data={FEEDSDATA}
        numColumns={2}
        contentContainerStyle={{
          paddingHorizontal: 20,
          gap: 15,
          paddingBottom: 16,
        }}
        columnWrapperStyle={{gap: 17, justifyContent: 'space-between'}}
        renderItem={feed => <FeedCard data={feed.item} />}
      />
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    gap: 16,
  },
  input: {
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: '#D8DADC',
    backgroundColor: '#FAFAFA',
    paddingVertical: 15,
    paddingHorizontal: 16,
    color: '#838383',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  textInput: {
    padding: 0,
    color: '#838383',
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Avenir',
  },
  badge: {
    backgroundColor: '#FFF',
    color: '#18270B',
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 14,
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: '#D8DADC',
  },
});
