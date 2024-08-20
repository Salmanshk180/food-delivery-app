import {View, Text} from 'react-native';
import React from 'react';

const Error = ({isFirstError, isSecondError, firstError, secondError}: any) => {
  return (
    <>
      {(isFirstError || isSecondError) && (
        <View
          style={{
            flexDirection: 'row',
            gap: 17,
            width: '100%',
            justifyContent: !isFirstError ? 'flex-end' : 'space-between',
          }}>
          {isFirstError && (
            <Text
              style={{color: 'red', flex: 1, textAlign: 'left', maxWidth: 175}}>
              {firstError}
            </Text>
          )}
          {isSecondError && (
            <Text
              style={{
                color: 'red',
                flex: 1,
                maxWidth: 175,
                textAlign: 'left',
              }}>
              {secondError}
            </Text>
          )}
        </View>
      )}
    </>
  );
};

export default Error;
