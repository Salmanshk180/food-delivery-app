import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {CheckBox} from 'react-native-elements';

const Filters = ({data, checkedValues, setCheckedValues, title}: any) => {
  const toggleCheckbox = (value: string) => {
    setCheckedValues((prevState: string[]) =>
      prevState.includes(value)
        ? prevState.filter(v => v !== value)
        : [...prevState, value],
    );
  };
  return (
    <>
      <View style={styles.filterContainer}>
        <Text style={styles.filterTitle}>{title}</Text>
        <ScrollView style={{gap: 11}}>
          {(Object.values(data) as Array<string>).map(time => (
            <View style={styles.filterOption} key={time}>
              <Text style={styles.filterOptionText}>{time}</Text>
              <CheckBox
                checked={checkedValues.includes(time)}
                onPress={() => toggleCheckbox(time)}
                key={time}
                id={time}
                iconType="material-community"
                checkedIcon="checkbox-outline"
                uncheckedIcon={'checkbox-blank-outline'}
                checkedColor="#76BC3F"
                containerStyle={{padding: 0}}
              />
            </View>
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default Filters;

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    paddingVertical: 20,
    gap: 15,
  },
  filterTitle: {
    color: '#000',
    fontSize: 20,
    fontWeight: '500',
  },
  filterOption: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filterOptionText: {
    color: '#838383',
    fontSize: 18,
    fontWeight: '500',
  },
});
