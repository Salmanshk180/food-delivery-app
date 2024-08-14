import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
interface Props {
  label: string;
  options: string[];
}
const CustomSelect = ({label, options}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={{flexDirection: 'row', flexWrap: 'wrap', gap: 7}}>
        {options.map((option, index) => (
          <TouchableOpacity
            activeOpacity={0.5}
            key={index}
            style={styles.badge}>
            <Text style={styles.text}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default CustomSelect;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 11,
  },
  label: {
    color: '#18270B',
    fontSize: 16,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#D8DADC',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 18,
    color: '#838383',
    fontSize: 16,
    fontWeight: '400',
  },
  badge: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D8DADC',
    backgroundColor: '#FFF',
    paddingVertical: 18,
    paddingHorizontal: 16,
  },
  text: {
    color: '#838383',
    fontSize: 16,
    fontWeight: '400',
  },
});
