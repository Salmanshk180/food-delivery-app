import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

interface Props {
  onPress: () => void;
}

const CustomButton = ({onPress}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      style={styles.buttonContainer}>
      <View style={[styles.button]}>
        <Text style={styles.buttonText}>Save</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonContainer: {
    paddingTop: 16,
    paddingHorizontal: 20,
    paddingBottom: 16,
    backgroundColor: '#fff',
    borderTopWidth: 0.5,
    borderColor: '#D8DADC',
  },
  button: {
    backgroundColor: '#76BC3F',
    paddingVertical: 9,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
  },
});
