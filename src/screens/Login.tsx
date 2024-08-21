import {View, Text, StyleSheet, TextInput, BackHandler} from 'react-native';
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
      <View style={styles.logoContainer}>
        <View style={{gap: 20, alignItems: 'center', marginVertical: 'auto'}}>
          <Logo />
          <Text style={styles.text}>Eatvisor by Shalini Bansal</Text>
        </View>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.loginTitle}>Login</Text>
            <Text style={styles.subtitle}>Hello, Welcome to Eatvisor!</Text>
          </View>
          <View style={{gap: 6, paddingHorizontal: 20}}>
            <Text style={styles.label}>Phone Number</Text>
            <View style={styles.inputWrapper}>
              <Text style={styles.countryCode}>+91</Text>
              <TextInput
                style={styles.input}
                placeholder="9712345678"
                placeholderTextColor={'#838383'}
                keyboardType="numeric"
                maxLength={10}
                value={values.phoneNumber}
                onChangeText={handleChange('phoneNumber')}
                onBlur={handleBlur('phoneNumber')}
              />
            </View>
          {errors.phoneNumber && (
            <Text style={styles.errorText}>{errors.phoneNumber}</Text>
          )}
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            title={'Send OTP'}
            onPress={() => {
              handleSubmit();
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logoContainer: {
    width: '100%',
    flex: 0.6,
  },
  text: {
    color: '#1F3210',
    textAlign: 'center',
    fontFamily: 'Avenir',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  formContainer: {
    alignItems: 'flex-start',
    width: '100%',
    flex: 0.4,
    justifyContent: 'space-between',
  },
  titleContainer: {
    alignItems: 'flex-start',
    width: '100%',
    gap: 5,
    paddingHorizontal: 20,
  },
  loginTitle: {
    color: '#1F3210',
    fontSize: 24,
    fontWeight: '800',
  },
  subtitle: {
    color: '#838383',
    fontSize: 18,
    fontWeight: '500',
  },
  inputContainer: {
    width: '100%',
    alignItems: 'flex-start',
    gap: 24,
  },
  label: {
    color: '#1F3210',
    fontSize: 16,
    fontWeight: '500',
  },
  inputWrapper: {
    borderWidth: 1,
    width: '100%',
    borderColor: '#D8DADC',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 18,
    flexDirection: 'row',
    gap: 5,
  },
  countryCode: {
    fontSize: 18,
    fontWeight: '400',
    color: '#18270B',
  },
  input: {
    padding: 0,
    fontSize: 18,
    fontWeight: '400',
    color: '#18270B',
    flex: 1,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
  },
  buttonContainer: {
    width: '100%',
  },
});
