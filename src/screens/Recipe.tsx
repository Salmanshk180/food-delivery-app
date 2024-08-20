import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Dimensions,
} from 'react-native';
import Search from '../assets/Search';
import Filter from '../assets/Filter';
import {
  CAN_HAVE_IN,
  CATEGORIES,
  FOOD_TYPE,
  RECIPES,
  TIME_TO_MAKE,
} from '../constants/category';
import RecipeCard from '../components/cards/RecipeCard';
import {useCallback, useRef, useState} from 'react';
import CustomBottomSheet from '../components/BottomSheet/BottomSheet';
import {BottomSheetMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import Filters from '../components/Filters/Filters';

const Recipes = () => {
  const bottomSheetRef = useRef<BottomSheetMethods>(null);
  const OpenBottomSheet = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);
  const CloseBottomSheet = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);
  const [checkedValues, setCheckedValues] = useState<string[]>([]);
  const {width} = Dimensions.get('screen');
  return (
    <>
      <View style={styles.container}>
        <View style={[styles.inputContainer]}>
          <View style={[styles.input, {flex: 1}]}>
            <Search />
            <TextInput
              style={[styles.textInput, {flex: 1}]}
              placeholder="Search recipes"
              placeholderTextColor={'#838383'}
              inputMode="search"
              returnKeyType="search"
            />
          </View>
          <TouchableOpacity onPress={OpenBottomSheet}>
            <Filter />
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            horizontal
            data={CATEGORIES}
            contentContainerStyle={{paddingHorizontal: 20, gap: 10}}
            renderItem={({item}) => (
              <TouchableOpacity style={[styles.badge]}>
                <Text style={[{color: '#18270B'}]}>{item.text}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={{flex: 1}}>
          <FlatList
            data={RECIPES}
            contentContainerStyle={{paddingHorizontal: 20}}
            renderItem={({item}) => <RecipeCard recipe={item} />}
          />
        </View>
      </View>
      <CustomBottomSheet
        bottomSheetRef={bottomSheetRef}
        onClose={CloseBottomSheet}
        component={
          <ScrollView>
            <Filters
              data={TIME_TO_MAKE}
              checkedValues={checkedValues}
              setCheckedValues={setCheckedValues}
              title={'Time to make'}
            />
            <View style={{borderBottomWidth: 1, borderColor: '#EBEBEB'}} />
            <Filters
              data={FOOD_TYPE}
              checkedValues={checkedValues}
              setCheckedValues={setCheckedValues}
              title={'Food type'}
            />
            <View style={{borderBottomWidth: 1, borderColor: '#EBEBEB'}} />
            <Filters
              data={CAN_HAVE_IN}
              checkedValues={checkedValues}
              setCheckedValues={setCheckedValues}
              title={'Can have in'}
            />
          </ScrollView>
        }
        title="Filters"
      />
    </>
  );
};

export default Recipes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    gap: 16,
    paddingTop: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    // width: '100%',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    gap: 12,
  },
  input: {
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: '#D8DADC',
    backgroundColor: '#FAFAFA',
    paddingVertical: 15,
    paddingHorizontal: 16,
    color: '#838383',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  textInput: {
    padding: 0,
    color: '#838383',
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Avenir',
  },
  badge: {
    backgroundColor: '#FFF',
    color: '#18270B',
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: '#D8DADC',
  },
});
