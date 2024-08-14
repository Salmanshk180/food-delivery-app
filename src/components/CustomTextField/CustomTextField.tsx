import {
  View,
  Text,
  StyleSheet,
  TextInput,
  InputModeOptions,
} from 'react-native';
import React from 'react';
interface Props {
  label: string;
  placeHolder: string;
  inputType?: InputModeOptions | undefined;
  icon?: React.ReactNode;
}
const CustomTextField = ({
  label,
  placeHolder,
  inputType = 'text',
  icon,
}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeHolder}
          placeholderTextColor={'#838383'}
          inputMode={inputType}
          style={styles.input}
        />
        {icon}
      </View>
    </View>
  );
};

export default CustomTextField;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 11,
  },
  label: {
    color: '#18270B',
    fontSize: 16,
    fontWeight: '500',
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#D8DADC',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 18,
    flexDirection: 'row',
    alignItems:"center",
    justifyContent: 'space-between',
  },
  input: {
    color: '#838383',
    fontSize: 16,
    fontWeight: '400',
    padding: 0,
  },
});
