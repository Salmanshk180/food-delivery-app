import {
  View,
  Text,
  StyleSheet,
  TextInput,
  InputModeOptions,
  Pressable,
} from 'react-native';
import React, {ChangeEvent, useRef} from 'react';
interface Props {
  label: string;
  placeHolder: string;
  icon?: React.ReactNode;
  value: string;
  handleChange: (e: string | ChangeEvent<any>) => void;
  handleBlur: (e: any) => void;
  onKeyDown?: () => void;
}
const CustomTextField = ({
  label,
  placeHolder,
  icon,
  value,
  handleChange,
  handleBlur,
  onKeyDown,
}: Props) => {
    const inputRef = useRef<TextInput>(null);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Pressable style={styles.inputContainer}   onPress={() => inputRef.current?.focus()}>
        <TextInput
          ref={inputRef}
          placeholder={placeHolder}
          placeholderTextColor={'#838383'}
          style={styles.input}
          value={value}
          onChangeText={handleChange}
          enterKeyHint="search"
          onBlur={handleBlur}
          onSubmitEditing={onKeyDown}
        />
        {icon}
      </Pressable>
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
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    color: '#838383',
    fontSize: 16,
    fontWeight: '400',
    padding: 0,
  },
});
