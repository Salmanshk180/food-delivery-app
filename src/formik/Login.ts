import {array, mixed, number, object, string} from 'yup';
export const LoginValues = {
  phoneNumber: '',
  otp: '',
};

export const LoginSchema = object({
  phoneNumber: string().length(10).required('Phone number is required'),
  otp: string().length(4).required('OTP is required'),
});
