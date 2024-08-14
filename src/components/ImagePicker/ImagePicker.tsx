import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
interface Props {
  title: string;
  icon: React.ReactNode;
}
const ImagePicker = ({title, icon}: Props) => {
  return (
    <View style={styles.container}>
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
    </View>
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
