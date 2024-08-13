import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
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

  return (
    <>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <View style={styles.input}>
            <Search />
            <TextInput
              style={styles.textInput}
              placeholder="Search recipes"
              placeholderTextColor={'#838383'}
            />
          </View>
          <TouchableOpacity onPress={OpenBottomSheet}>
            <Filter />
          </TouchableOpacity>
        </View>
        <View>
          <ScrollView
            horizontal
            contentContainerStyle={styles.categoryContainer}
            showsHorizontalScrollIndicator={false}>
            {CATEGORIES.map((category, index) => (
              <TouchableOpacity key={index} style={[styles.badge]}>
                <Text
                  style={[
                    // styles.badge,
                    {color: 'black'},
                    index === CATEGORIES.length - 1 && styles.lastBadge,
                  ]}>
                  {category.text}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <ScrollView showsVerticalScrollIndicator style={styles.recipeList}>
          {RECIPES.map((recipe, index) => (
            <RecipeCard recipe={recipe} key={index} cardStyle={{width: 353}} />
          ))}
        </ScrollView>
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
    paddingTop: 20,
    flexDirection: 'column',
    gap: 16,
  },
  inputContainer: {
    maxWidth: 393,
    flexDirection: 'row',
    marginHorizontal: 'auto',
    gap: 12,
  },
  input: {
    width: 285,
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
  categoryContainer: {
    paddingStart: 20,
    paddingEnd: 10,
  },
  badge: {
    backgroundColor: '#FFF',
    color: '#18270B',
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 5,
    textAlign: 'center',
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: '#D8DADC',
  },
  lastBadge: {
    marginEnd: 20,
  },
  recipeList: {
    maxWidth: 353,
    margin: 'auto',
  },
});
