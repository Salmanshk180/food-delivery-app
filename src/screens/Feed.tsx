import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Search from '../assets/Search';
import FeedCard from '../components/cards/FeedCard';
import {supabase} from '../supabaseClient';

const Feed = () => {
  const [feeds, setFeeds] = useState<any>(null);
  const [feedCategories, setFeedCategories] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategoeyId, setSelectedCategoryId] = useState<number | null>(
    null,
  );
  const getFeed = async () => {
    try {
      setLoading(true);
      let {data, error} = await supabase.from('feeds').select('*');
      if (data && data.length > 0) {
        setFeeds(data);
      } else {
        setError(error!.message);
      }
    } catch (error) {
      setError('Fetching Error....');
    } finally {
      setLoading(false);
    }
  };

  const getFeedCategories = async () => {
    let {data, error} = await supabase.from('categories').select('*');
    if (error) {
    } else {
      setFeedCategories(data);
    }
  };

  const getFeedsAccrodingToId = async () => {
    try {
      setLoading(true);
      let {data, error} = await supabase
        .from('feed_categories')
        .select('feeds(*)')
        .eq('category_id', selectedCategoeyId);
      if (data) {
        setFeeds(data);
      } else {
        setError(error!.message);
      }
    } catch (error) {
      setError('Error Fetching Recipes....');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFeedCategories();
    getFeed();
  }, []);

  useEffect(() => {
    if (selectedCategoeyId) {
      getFeedsAccrodingToId();
    } else {
      getFeed();
    }
  }, [selectedCategoeyId]);

  if (error) {
    return (
      <View>
        <Text style={{color: 'red'}}>{error}</Text>
      </View>
    );
  }

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
          data={feedCategories}
          horizontal
          contentContainerStyle={{paddingLeft: 20, paddingRight: 10}}
          renderItem={({item}) => (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() =>
                selectedCategoeyId === item.id
                  ? setSelectedCategoryId(null)
                  : setSelectedCategoryId(item.id)
              }>
              <Text
                style={[
                  styles.badge,
                  selectedCategoeyId === item.id && {
                    backgroundColor: '#76BC3F',
                    color: '#fff',
                  },
                ]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      {loading ? (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size="large" color="#76BC3F" />
        </View>
      ) : (
        <FlatList
          data={feeds}
          numColumns={2}
          ListEmptyComponent={() => (
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{color: '#000'}}>No Data Found</Text>
            </View>
          )}
          contentContainerStyle={{
            paddingHorizontal: 20,
            gap: 15,
            paddingBottom: 16,
          }}
          columnWrapperStyle={{justifyContent: 'space-between', gap: 17}}
          renderItem={({item}) => {
            return <FeedCard data={selectedCategoeyId ? item.feeds : item} />;
          }}
        />
      )}
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
