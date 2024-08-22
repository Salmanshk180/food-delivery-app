import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Dimensions,
  ActivityIndicator,
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
import {useCallback, useEffect, useRef, useState} from 'react';
import CustomBottomSheet from '../components/BottomSheet/BottomSheet';
import {BottomSheetMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import Filters from '../components/Filters/Filters';
import {supabase} from '../supabaseClient';

const Recipes = () => {
  const bottomSheetRef = useRef<BottomSheetMethods>(null);
  const [recipes, setRecipes] = useState<any[]>([]);
  const [isOpen, setIsOPen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const OpenBottomSheet = useCallback(() => {
    setIsOPen(!isOpen);
    bottomSheetRef.current?.expand();
  }, []);
  const CloseBottomSheet = useCallback(() => {
    bottomSheetRef.current?.close();
    setIsOPen(!isOpen);
  }, []);
  const [checkedValues, setCheckedValues] = useState<string[]>([]);
  async function getRecipes() {
    try {
      setLoading(true);
      let {data: recipes, error} = await supabase.from('recipes').select('*');
      if (recipes && recipes.length > 0) {
        setRecipes(recipes as any[]);
      } else {
        setError('Recipes not found');
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getRecipes();
  }, []);
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
          {loading ? (
            <View style={{flex: 1, justifyContent: 'center'}}>
              <ActivityIndicator size="large" color="#76BC3F" />
            </View>
          ) : (
            <>
              {error ? (
                <View style={styles.errorContainer}>
                  <Text style={styles.errorText}>{error}</Text>
                </View>
              ) : (
                <FlatList
                  data={recipes}
                  ListEmptyComponent={() => (
                    <View style={{flex: 1, alignItems: 'center'}}>
                      <Text style={{color: '#000'}}>No Data</Text>
                    </View>
                  )}
                  ListFooterComponent={() => (
                    <View>
                      <Text style={{color: '#76BC3F', textAlign: 'center'}}>
                        You see all the data
                      </Text>
                    </View>
                  )}
                  contentContainerStyle={{paddingHorizontal: 20}}
                  renderItem={({item}) => <RecipeCard recipe={item} />}
                />
              )}
            </>
          )}
        </View>
      </View>
      {isOpen && (
        <CustomBottomSheet
          bottomSheetRef={bottomSheetRef}
          onClose={() => {
            CloseBottomSheet();
            setIsOPen(!isOpen);
          }}
          snapPointsArray={['95%', '95%']}
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
      )}
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
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 18,
    textAlign: 'center',
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
