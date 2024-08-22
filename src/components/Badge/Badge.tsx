import {View, Text, StyleSheet, ViewStyle, TextStyle} from 'react-native';
import React from 'react';

export default function Badge({
  title,
  titleColor,
  subTitle,
  subTitleColor = '#838383',
  containerStyle,
  titleStyle,
  subTitleStyle,
}: {
  title: string;
  titleColor: string;
  subTitle?: string;
  subTitleColor?: string;
  titleStyle?: TextStyle;
  subTitleStyle?: TextStyle;
  containerStyle?: ViewStyle;
}) {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.title, titleStyle, {color: titleColor, flex: 1}]}>
        {title}
      </Text>
      {subTitle && (
        <Text style={[styles.subTitle, subTitleStyle, {color: subTitleColor}]}>
          {subTitle}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderRadius: 15,
    borderColor: '#D8DADC',
    paddingVertical: 12,
    paddingHorizontal: 22,
    backgroundColor: '#FBFAFA',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: '800',
  },
  subTitle: {
    fontSize: 14,
    fontWeight: '400',
  },
});
