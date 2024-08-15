import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Close from '../../assets/Close';

interface Props {
  data: string[];
  onPress: (item: string) => void;
}

const Ingredients = ({data, onPress}: Props) => {
  return (
    <View>
      <FlatList
        horizontal
        data={data}
        contentContainerStyle={{gap: 12}}
        renderItem={({item}) => (
          <View style={styles.ingeredientBadges}>
            <Text style={{color: '#1F3210'}}>{item}</Text>
            <TouchableOpacity activeOpacity={0.5} onPress={() => onPress(item)}>
              <Close />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default Ingredients;

const styles = StyleSheet.create({
  ingeredientBadges: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#76BC3F',
    backgroundColor: '#F5FFEE',
    paddingVertical: 12,
    paddingHorizontal: 15,
    gap: 12,
    flex: 1,
    borderRadius: 5,
  },
});
