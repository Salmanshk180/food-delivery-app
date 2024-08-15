import {View, Text, Modal} from 'react-native';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const CustomModal = ({children}: Props) => {
  return (
    <Modal transparent>
      <View
        style={{
          backgroundColor: 'rgba(0,0,0,0.5)',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
        {children}
      </View>
    </Modal>
  );
};

export default CustomModal;
