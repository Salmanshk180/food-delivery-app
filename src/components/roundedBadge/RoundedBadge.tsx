import {View, Text} from 'react-native';
import React from 'react';

interface Props {
  text: string;
  value: string;
}

const RoundedBadge = ({text, value}: Props) => {
  return (
    <View
      style={{
        paddingHorizontal: 15,
        paddingVertical: 12,
        backgroundColor: '#F1F8EC',
        borderRadius: 22,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex:0.5
      }}>
      <Text style={{color: '#18270B', fontSize: 16, fontWeight: 400}}>
        {text}
      </Text>
      <Text style={{color: '#76BC3F', fontSize: 18, fontWeight: 500}}>
        {value}
      </Text>
    </View>
  );
};

export default RoundedBadge;
