import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useRef} from 'react';
import Logo from '../assets/Logo';
import CustomButton from '../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {StackNavigation} from '../types/index';
import {useFormik} from 'formik';
import {object, string} from 'yup';
import Back from '../assets/Back';

const Verification = () => {
  const navigation = useNavigation<StackNavigation>();
  const otpRefs = useRef<TextInput[]>([]);
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

  const handleChangeText = (index: number, value: string) => {
    const otpValue = values.otp.split('');
    otpValue[index] = value;
    setFieldValue('otp', otpValue.join(''));

    if (value && index < otpRefs.current.length - 1) {
      otpRefs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (index: number, e: any) => {
    if (e.nativeEvent.key === 'Backspace' && index > 0) {
      otpRefs.current[index - 1].focus();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.backButton}
        onPress={() => {
          navigation.goBack();
        }}>
        <Back color={'#000'} />
      </TouchableOpacity>
      <View style={styles.topSection}>
        <View style={styles.logoContainer}>
          <Logo />
          <Text style={styles.text}>Eatvisor by Shalini Bansal</Text>
        </View>
      </View>
      <View style={styles.bottomSection}>
        <View style={styles.otpContainer}>
          <View style={styles.otpTextContainer}>
            <Text style={styles.otpTitle}>Enter OTP</Text>
            <Text style={styles.otpSubtitle}>
              Enter 6 digit OTP sent to your phone number +91 9712345678
            </Text>
          </View>
          <View style={styles.inputContainer}>
            {[...Array(4)].map((_, index) => (
              <TextInput
                key={index}
                style={styles.input}
                maxLength={1}
                keyboardType="numeric"
                ref={ref => (otpRefs.current[index] = ref as TextInput)}
                onChangeText={value => handleChangeText(index, value)}
                onKeyPress={e => handleKeyPress(index, e)}
              />
            ))}
          </View>
          {errors.otp && <Text style={styles.errorText}>{errors.otp}</Text>}
          <Text style={styles.resendText}>
            Didn’t receive code? <Text style={styles.resendLink}>Resend</Text>
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            title={'Verify'}
            onPress={() => {
              handleSubmit();
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Verification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  topSection: {
    flex: 0.6,
    justifyContent: 'space-between',
    width: '100%',
  },
  backButton: {
    top: 20,
    left: 10,
    position: 'absolute',
  },
  logoContainer: {
    gap: 20,
    alignItems: 'center',
    marginVertical: 'auto',
  },
  text: {
    color: '#1F3210',
    textAlign: 'center',
    fontFamily: 'Avenir',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  bottomSection: {
    flex: 0.4,
    justifyContent: 'space-between',
    width: '100%',
  },
  otpContainer: {
    alignItems: 'flex-start',
    width: '100%',
    gap: 24,
    paddingHorizontal: 20,
  },
  otpTextContainer: {
    alignItems: 'flex-start',
    width: '100%',
    gap: 5,
  },
  otpTitle: {
    color: '#1F3210',
    fontSize: 24,
    fontWeight: '800',
  },
  otpSubtitle: {
    color: '#838383',
    fontSize: 18,
    fontWeight: '500',
  },
  inputContainer: {
    flexDirection: 'row',
    gap: 24,
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
  resendText: {
    color: '#838383',
    fontSize: 18,
    fontWeight: '500',
  },
  resendLink: {
    color: '#18270B',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
  },
  buttonContainer: {
    width: '100%',
  },
});
