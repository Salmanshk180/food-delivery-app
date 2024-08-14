import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native';

interface Props {
  placeholder: string;
  label: string;
}

const InputBadge = ({placeholder, label}: Props) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <View style={styles.inputField}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={'#838383'}
          style={styles.input}
        />
        <Text style={{color: '#76BC3F', fontSize: 16, fontWeight: '500'}}>
          {label}
        </Text>
      </View>
    </View>
  );
};

export default InputBadge;

const styles = StyleSheet.create({
 
  inputField: {
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#D8DADC',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  input: {
    padding: 0,
    fontSize: 16,
    fontWeight: '400',
    color: '#838383',
  },
});
