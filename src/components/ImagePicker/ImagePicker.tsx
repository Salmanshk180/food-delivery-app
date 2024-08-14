import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {TouchableOpacityBase} from 'react-native';
import {TouchableOpacity} from 'react-native';
interface Props {
  title: string;
  icon: React.ReactNode;
  onPress: () => void;
}
const ImagePicker = ({title, icon, onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View
        style={{
          paddingHorizontal: 80,
          paddingVertical: 28,
          gap: 20,
          alignItems: 'center',
        }}>
        {icon}
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FBFAFA',
    borderWidth: 1,
    borderColor: '#D8DADC',
    borderRadius: 10,
  },
  title: {
    color: '#9E9E9E',
    fontSize: 16,
    fontWeight: '500',
  },
});
