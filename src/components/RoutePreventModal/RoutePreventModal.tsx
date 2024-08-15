import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import CustomModal from '../CustomModal/CustomModal';

const RoutePreventModal = ({onDiscard, onCancel}: any) => {
  return (
    <CustomModal>
      <View
        style={{
          backgroundColor: '#fff',
          borderRadius: 5,
        }}>
        <Text
          style={{
            color: '#18270B',
            fontSize: 18,
            fontWeight: '900',
            textAlign: 'center',
            paddingVertical: 15,
            paddingHorizontal: 37,
          }}>
          Are you sure you want to go back?
        </Text>
        <View
          style={{
            flexDirection: 'row',
            borderTopWidth: 1,
            borderColor: '#D9D9D9',
          }}>
          <TouchableOpacity
            style={{flex: 1, paddingVertical: 15}}
            onPress={onCancel}>
            <Text
              style={{
                color: '#18270B',
                fontSize: 18,
                fontWeight: '500',
                textAlign: 'center',
              }}>
              Cancel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: '#E64646',
              paddingVertical: 15,
              borderBottomRightRadius: 5,
            }}
            onPress={onDiscard}>
            <Text
              style={{
                color: '#fff',
                fontSize: 18,
                fontWeight: '500',
                textAlign: 'center',
              }}>
              Yes
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </CustomModal>
  );
};

export default RoutePreventModal;
