import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import DropdownIcon from '../../assets/DropDown';

interface Props {
  title: string;
  options: string[];
  selectedValue?: string;
  onValueChange?: (value: string) => void;
  error: string;
  isError:boolean;
  placeHolder: string;
}

const CustomDropDown = ({
  title,
  options,
  selectedValue,
  onValueChange,
  error,
  placeHolder,
  isError
}: Props) => {
  return (
    <View style={{flex: 1, gap: 14}}>
      <Text style={styles.title}>{title}</Text>
      <SelectDropdown
        data={options}
        dropdownStyle={{borderRadius: 12}}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
          if (onValueChange) {
            onValueChange(selectedItem);
          }
        }}
        renderButton={(selectedItem: string, isOpened: boolean) => (
          <View style={styles.searchInputStyle}>
            <Text
              style={[
                styles.selectedText,
                {color: selectedItem ? '#000' : '#838383'},
              ]}>
              {selectedItem || placeHolder}
            </Text>
            <DropdownIcon />
          </View>
        )}
        renderItem={(selectedItem: any, index: number, isSelected: boolean) => (
          <View
            style={{
              ...styles.dropdownItem,
              backgroundColor: isSelected ? '#f1f1f1' : '#fff',
            }}>
            <Text style={{color: isSelected ? '#000' : '#838383'}}>
              {selectedItem}
            </Text>
          </View>
        )}
      />
      {isError && <Text style={{color: 'red', fontSize: 14}}>{error}</Text>}
    </View>
  );
};

export default CustomDropDown;

const styles = StyleSheet.create({
  title: {
    color: '#18270B',
    fontSize: 16,
    fontWeight: '500',
  },
  searchInputStyle: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#D8DADC',
    padding: 16,
    borderRadius: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedText: {
    color: '#838383',
    fontSize: 16,
    fontWeight: '400',
  },
  dropdownItem: {
    padding: 12,
  },
});
