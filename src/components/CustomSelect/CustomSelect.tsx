import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
interface Props {
  label: string;
  options: string[];
  handleChange: (value: string) => void;
  value: string | string[];
  error: string | string[];
  isError:boolean;
}
const CustomSelect = ({label, options, handleChange, value, error,isError}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={{flexDirection: 'row', flexWrap: 'wrap', gap: 7}}>
        {options.map((option, index) => (
          <TouchableOpacity
            activeOpacity={0.5}
            key={index}
            style={[
              styles.badge,
              {
                backgroundColor:
                  value === option || value.includes(option)
                    ? '#76BC3F'
                    : '#fff',
              },
            ]}
            onPress={() => handleChange(option)}>
            <Text
              style={[
                styles.text,
                {
                  color:
                    value === option || value.includes(option)
                      ? '#fff'
                      : '#838383',
                },
              ]}>
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {isError && <Text style={{color: 'red', fontSize: 14}}>{error}</Text>}
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
    paddingVertical: 18,
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
  },
});
