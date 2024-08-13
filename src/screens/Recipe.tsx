import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';
import Search from '../assets/Search';
import Filter from '../assets/Filter';
import {CATEGORIES, RECIPES} from '../constants/category';
import RecipeCard from '../components/cards/RecipeCard';
import BottomSheet, {
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {useCallback, useMemo, useRef} from 'react';
import {CheckBox} from 'react-native-elements';

const Recipes = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(() => ['50%', '90%'], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);
  const handleDismissedModalPress = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

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
          <TouchableOpacity onPress={handlePresentModalPress}>
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
                  {color:"black"},
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
            <RecipeCard recipe={recipe} key={index} cardStyle={{width:353}} />
          ))}
        </ScrollView>
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        index={-1}
        enablePanDownToClose
        style={styles.bottomSheet}>
        <BottomSheetView style={styles.contentContainer}>
          <View style={styles.sheetHeader}>
            <Text style={styles.sheetHeaderText}>Filter</Text>
            <TouchableOpacity onPress={handleDismissedModalPress}>
              <View>
                <Text style={styles.sheetCloseText}>Close</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.filterContainer}>
            <Text style={styles.filterTitle}>Time to make</Text>
            <View style={styles.filterOption}>
              <Text style={styles.filterOptionText}>10 Min</Text>
              <CheckBox center />
            </View>
          </View>
        </BottomSheetView>
      </BottomSheet>
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
  bottomSheet: {
    borderRadius: 25,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  sheetHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'center',
  },
  sheetHeaderText: {
    color: '#76BC3F',
  },
  sheetCloseText: {
    color: '#000',
  },
  filterContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 20,
    gap: 16,
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
    color: '#000',
  },
});
