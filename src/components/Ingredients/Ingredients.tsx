import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Close from '../../assets/Close';

interface Props {
  data: string[];
  onPress: (item: string) => void;
}

const Ingredients = ({data, onPress}: Props) => {
  return (
    <FlatList
      data={data}
      numColumns={2}
      contentContainerStyle={{gap: 10}}
      columnWrapperStyle={{gap: 12}}
      renderItem={({item}) => (
        <View style={styles.ingeredientBadges}>
          <Text style={{color: '#1F3210', flex: 1}}>{item}</Text>
          <TouchableOpacity activeOpacity={0.5} onPress={() => onPress(item)}>
            <Close />
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

export default Ingredients;

const styles = StyleSheet.create({
  ingeredientBadges: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#76BC3F',
    backgroundColor: '#F5FFEE',
    paddingVertical: 15,
    paddingHorizontal: 16,
    gap: 10,
    borderRadius: 5,
    flex: 0.5,
  },
});
