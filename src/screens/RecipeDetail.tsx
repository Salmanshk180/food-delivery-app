import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Badge from '../components/Badge/Badge';
import RecipeCard from '../components/cards/RecipeCard';
import {supabase} from '../supabaseClient';
import RoundedBadge from '../components/roundedBadge/RoundedBadge';

export default function RecipeDetail({route}: any) {
  const {id} = route.params;
  const {width} = Dimensions.get('screen');
  const [recipe, setRecipe] = useState<any>(null);
  const [ingredients, setIngredients] = useState<any>([]);
  const [error, setError] = useState<string | undefined | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [similar_recipes, setSimilarRecipes] = useState<any>();
  const getRecipe = async () => {
    try {
      setLoading(true);
      let {data, error} = await supabase
        .from('recipes')
        .select('*')
        .eq('id', id);
      if (data && data.length > 0) {
        setRecipe(data[0]);
      } else {
        setError(error?.message);
      }
    } catch (err: any) {
      setError(err.message || 'Error fetching recipe');
    } finally {
      setLoading(false);
    }
  };

  const getRecipeIngredients = async () => {
    let {data: recipe_ingredients, error} = await supabase
      .from('recipe_ingredients')
      .select('ingredients(id,name)')
      .eq('recipe_id', id);
    if (error) {
      setError(error.message || 'Error fetching ingredients');
    } else {
      setIngredients(recipe_ingredients);
    }
  };
  const getSimilarRecipes = async () => {
    let {data} = await supabase
      .from('recipes')
      .select('*')
      .eq('food_type', recipe.food_type)
      .neq('id', recipe.id);
    setSimilarRecipes(data);
  };
  useEffect(() => {
    getRecipe();
    getRecipeIngredients();
  }, [id]);

  useEffect(() => {
    if (recipe) {
      getSimilarRecipes();
    }
  }, [recipe]);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator size="large" color="#76BC3F" />
      </View>
    );
  }
  if (error === undefined || error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error ?? 'Recipe Not Found'}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.container}>
        {recipe?.thumbnail_image && (
          <Image
            source={{uri: recipe.thumbnail_image[0].key}}
            style={{borderRadius: 5, margin: 'auto'}}
            width={353}
            height={229}
          />
        )}

        <View style={styles.detailContainer}>
          <Badge
            title={(recipe?.time_to_cook ?? 0) + ' ' + 'min.'}
            titleColor="#76BC3F"
            subTitle="Time to cook"
            containerStyle={{flex: 1}}
          />
          <Badge
            title={recipe?.food_type ?? 'Not Specified'}
            titleColor={recipe?.food_type === 'veg' ? '#76BC3F' : '#E64646'}
            subTitle="Meal Type"
            containerStyle={{flex: 1}}
          />
        </View>
        <View style={styles.nutritionsContainer}>
          <Text style={{color: '#18270B', fontSize: 18, fontWeight: '800'}}>
            Nutritions
          </Text>
          <View
            style={{
              flexDirection: 'row',
              gap: 23,
            }}>
            <RoundedBadge text={'Calories'} value={recipe?.calories ?? 0} />
            <RoundedBadge
              text={'Protein'}
              value={recipe?.protein ?? 0 + ' ' + 'gm'}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              gap: 23,
            }}>
            <RoundedBadge
              text={'Carbs'}
              value={recipe?.carbs ?? 0 + ' ' + 'gm'}
            />
            <RoundedBadge text={'Fat'} value={recipe?.fat ?? 0 + ' ' + 'gm'} />
          </View>
        </View>
        <View style={styles.nutritionsContainer}>
          <Text style={{color: '#18270B', fontSize: 18, fontWeight: '800'}}>
            Can have it in
          </Text>
          <FlatList
            data={recipe?.can_have}
            numColumns={3}
            ListEmptyComponent={() => (
              <View>
                <Text style={{color: '#000', textAlign: 'center'}}>
                  No Data
                </Text>
              </View>
            )}
            contentContainerStyle={{gap: 10}}
            columnWrapperStyle={{gap: 10, flexWrap: 'wrap'}}
            renderItem={({item}) => (
              <Badge
                title={item}
                titleColor="#18270B"
                containerStyle={styles.canHaveItInBadge}
                titleStyle={styles.nutritionBadgeTitle}
                subTitleStyle={styles.nutritionBadgeSubTitle}
              />
            )}
          />
        </View>
        <View style={styles.nutritionsContainer}>
          <Text style={{color: '#18270B', fontSize: 18, fontWeight: '800'}}>
            Ingredients
          </Text>
          <FlatList
            data={ingredients}
            numColumns={3}
            contentContainerStyle={{gap: 10, flex: 1}}
            ListEmptyComponent={() => (
              <View>
                <Text style={{color: '#000', textAlign: 'center'}}>
                  No Ingredients
                </Text>
              </View>
            )}
            columnWrapperStyle={{gap: 10}}
            renderItem={({item}) => (
              <Badge
                title={item.ingredients.name}
                titleColor="#18270B"
                containerStyle={styles.canHaveItInBadge}
                titleStyle={styles.nutritionBadgeTitle}
                subTitleStyle={styles.nutritionBadgeSubTitle}
              />
            )}
          />
        </View>
        <View style={{gap: 14}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 20,
            }}>
            <Text style={{color: '#18270B', fontSize: 18, fontWeight: '800'}}>
              Similar recipes for you
            </Text>
            <TouchableOpacity>
              <Text style={{color: '#76BC3F'}}>See all</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={similar_recipes}
            horizontal
            contentContainerStyle={{paddingHorizontal: 20, gap: 18}}
            ListEmptyComponent={() => (
              <View style={{width: width * 0.9}}>
                <Text style={{color: '#000', textAlign: 'center'}}>
                  No Similar Recipe
                </Text>
              </View>
            )}
            renderItem={({item}) => (
              <View style={{width: width * 0.8}}>
                <RecipeCard
                  recipe={item}
                  isTouchEffectDisabled
                  detailStyle={{flexDirection: 'column', gap: 5}}
                  isTimer={false}
                />
              </View>
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 24,
    paddingTop: 14,
    backgroundColor: '#fff',
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
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
    paddingHorizontal: 20,
  },
  nutritionsContainer: {
    flexDirection: 'column',
    gap: 12,
    paddingHorizontal: 20,
  },
  nutritionBadge: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 15,
    backgroundColor: '#F1F8EC',
    borderRadius: 50,
    alignItems: 'center',
  },
  nutritionBadgeTitle: {
    fontSize: 16,
    fontWeight: '400',
  },
  nutritionBadgeSubTitle: {
    fontSize: 18,
    fontWeight: '500',
  },
  canHaveItInBadge: {
    backgroundColor: '#F1F8EC',
    borderRadius: 8,
  },
});
