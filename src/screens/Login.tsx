import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import Logo from '../assets/Logo';
import CustomButton from '../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {StackNavigation} from '../types/index';
import {useFormik} from 'formik';
import {object, string} from 'yup';
const Login = () => {
  const navigation = useNavigation<StackNavigation>();
  const {values, handleSubmit, handleChange, handleBlur, errors, touched} =
    useFormik({
      initialValues: {phoneNumber: ''},
      validationSchema: object({
        phoneNumber: string().length(10).required('Phone number is required'),
      }),
      onSubmit: values => {
        console.log({values}, {errors});
        navigation.navigate('Verification');
      },
    });
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
            Login
          </Text>
          <Text style={{color: '#838383', fontSize: 18, fontWeight: '500'}}>
            Hello, Welcome to Eatvisor!
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            alignItems: 'flex-start',
            gap: 6,
          }}>
          <Text style={[{color: '#1F3210', fontSize: 16, fontWeight: '500'}]}>
            Phone Number
          </Text>
          <View
            style={{
              borderWidth: 1,
              width: '100%',
              borderColor: '#D8DADC',
              borderRadius: 10,
              paddingHorizontal: 16,
              paddingVertical: 18,
              flexDirection: 'row',
              gap: 5,
            }}>
            <Text style={{fontSize: 18, fontWeight: '400', color: '#18270B'}}>
              +91
            </Text>
            <TextInput
              style={{
                padding: 0,
                fontSize: 18,
                fontWeight: '400',
                color: '#18270B',
              }}
              placeholder="9712345678"
              placeholderTextColor={'#18270B'}
              keyboardType="numeric"
              maxLength={10}
              value={values.phoneNumber}
              onChangeText={handleChange('phoneNumber')}
              onBlur={handleBlur('phoneNumber')}
            />
          </View>
          {errors.phoneNumber && (
            <Text style={{color: 'red', fontSize: 14}}>
              {errors.phoneNumber}
            </Text>
          )}
        </View>
      </View>
      <View style={{width: '100%'}}>
        <CustomButton
          title={'Send OTP'}
          onPress={() => {
            handleSubmit();
          }}
        />
      </View>
    </View>
  );
};

export default Login;

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
});
