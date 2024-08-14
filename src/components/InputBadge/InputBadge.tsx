import {
  View,
  Text,
  StyleSheet,
  KeyboardTypeOptions,
  Pressable,
} from 'react-native';
import React, {ChangeEvent, useRef} from 'react';
import {TextInput} from 'react-native';

interface Props {
  placeholder: string;
  label: string;
  keyboardType?: KeyboardTypeOptions | undefined;
  value: string;
  handleChange: (e: string | ChangeEvent<any>) => void;
  handleBlur: (e: any) => void;
}

const InputBadge = ({
  placeholder,
  label,
  keyboardType = 'default',
  value,
  handleBlur,
  handleChange,
}: Props) => {
  const inputRef = useRef<TextInput>(null);
  return (
    <Pressable
      style={styles.inputField}
      onPress={() => inputRef.current?.focus()}>
      <TextInput
        ref={inputRef}
        placeholder={placeholder}
        placeholderTextColor={'#838383'}
        style={styles.input}
        keyboardType={keyboardType}
        onChangeText={handleChange}
        onBlur={handleBlur}
        value={value}
      />
      <Text style={{color: '#76BC3F', fontSize: 16, fontWeight: '500'}}>
        {label}
      </Text>
    </Pressable>
  );
};

export default InputBadge;

const styles = StyleSheet.create({
  inputField: {
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#D8DADC',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flex: 1,
    justifyContent: 'space-between',
  },
  input: {
    padding: 0,
    fontSize: 16,
    fontWeight: '400',
    color: '#838383',
  },
});
