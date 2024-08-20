import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import Logo from '../assets/Logo';
import CustomButton from '../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {StackNavigation} from '../types/index';
import {useFormik} from 'formik';
import {object, string} from 'yup';
const Verification = () => {
  const navigation = useNavigation<StackNavigation>();
  const {values, handleSubmit, setFieldValue, errors} = useFormik({
    initialValues: {otp: ''},
    validationSchema: object({
      otp: string().length(4).required('OTP is required'),
    }),
    onSubmit: values => {
      if (!errors.otp) {
        navigation.navigate('BottomTab');
      }
    },
  });
  console.log(values.otp);
  return (
    <View style={styles.container}>
      <View style={{gap: 20, alignItems: 'center'}}>
        <Logo />
        <Text style={styles.text}>Eatvisor by Shalini Bansal</Text>
      </View>
      <View
        style={{
          alignItems: 'flex-start',
          width: '100%',
          gap: 24,
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            alignItems: 'flex-start',
            width: '100%',
            gap: 5,
          }}>
          <Text style={[{color: '#1F3210', fontSize: 24, fontWeight: '800'}]}>
            Enter OTP
          </Text>
          <Text style={{color: '#838383', fontSize: 18, fontWeight: '500'}}>
            Enter 6 digit OTP sent to your phone number +91 9712345678
          </Text>
        </View>
        <View style={{flexDirection: 'row', gap: 24}}>
          <TextInput
            style={styles.input}
            maxLength={1}
            keyboardType="numeric"
            onChangeText={(e: string) => {
              setFieldValue('otp', values.otp.concat(e));
            }}
          />
          <TextInput
            style={styles.input}
            maxLength={1}
            keyboardType="numeric"
            onChangeText={(e: string) => {
              setFieldValue('otp', values.otp.concat(e));
            }}
          />
          <TextInput
            style={styles.input}
            maxLength={1}
            keyboardType="numeric"
            onChangeText={(e: string) => {
              setFieldValue('otp', values.otp.concat(e));
            }}
          />
          <TextInput
            style={styles.input}
            maxLength={1}
            keyboardType="numeric"
            onChangeText={(e: string) => {
              setFieldValue('otp', values.otp.concat(e));
            }}
          />
        </View>
        {errors.otp && (
          <Text style={{color: 'red', fontSize: 14}}>{errors.otp}</Text>
        )}
      </View>
      <View style={{width: '100%'}}>
        <CustomButton
          title={'Verify'}
          onPress={() => {
            handleSubmit();
          }}
        />
      </View>
    </View>
  );
};

export default Verification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    gap: 146,
    justifyContent: 'flex-end',
    backgroundColor: '#fff',
  },
  text: {
    color: '#1F3210',
    textAlign: 'center',
    fontFamily: 'Avenir',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#D8DADC',
    fontSize: 16,
    width: 60,
    height: 60,
    textAlign: 'center',
    color: '#18270B',
  },
});
