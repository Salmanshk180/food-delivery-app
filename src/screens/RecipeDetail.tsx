import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Badge from '../components/Badge/Badge';
import {CATEGORIES, RECIPES} from '../constants/category';
import RecipeCard from '../components/cards/RecipeCard';

export default function RecipeDetail({route}: any) {
  const {title, data} = route.params;
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={data?.image}
          style={{borderRadius: 5, width: 353, height: 229, objectFit: 'cover'}}
        />
        <View style={styles.detailContainer}>
          <Badge
            title={data.time + ' min.'}
            titleColor="#76BC3F"
            subTitle="Time to cook"
          />
          <Badge
            title={data.isVeg ? 'Veg' : 'Non veg'}
            titleColor={data.isVeg ? '#76BC3F' : '#E64646'}
            subTitle="Meal Type"
          />
        </View>
        <View style={styles.nutritionsContainer}>
          <Text style={{color: '#18270B', fontSize: 18, fontWeight: '800'}}>
            Nutritions
          </Text>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              gap: 11,
            }}>
            {data?.nutritions.map((nutrition: any, index: number) => (
              <Badge
                title={nutrition.title}
                titleColor="#18270B"
                subTitleColor="#76BC3F"
                subTitle={nutrition.value}
                containerStyle={styles.nutritionBadge}
                titleStyle={styles.nutritionBadgeTitle}
                subTitleStyle={styles.nutritionBadgeSubTitle}
                key={index}
              />
            ))}
          </View>
        </View>
        <View style={styles.nutritionsContainer}>
          <Text style={{color: '#18270B', fontSize: 18, fontWeight: '800'}}>
            Can have it in
          </Text>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'flex-start',
              gap: 11,
            }}>
            {data?.canHaveItIn.map((data: any, index: number) => (
              <Badge
                title={data}
                titleColor="#18270B"
                containerStyle={styles.canHaveItInBadge}
                titleStyle={styles.nutritionBadgeTitle}
                subTitleStyle={styles.nutritionBadgeSubTitle}
                key={index}
              />
            ))}
          </View>
        </View>
        <View style={styles.nutritionsContainer}>
          <Text style={{color: '#18270B', fontSize: 18, fontWeight: '800'}}>
            Ingredients
          </Text>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'flex-start',
              gap: 10,
            }}>
            {data?.ingredients.map((data: any, index: number) => (
              <Badge
                title={data}
                titleColor="#18270B"
                containerStyle={styles.canHaveItInBadge}
                titleStyle={styles.nutritionBadgeTitle}
                subTitleStyle={styles.nutritionBadgeSubTitle}
                key={index}
              />
            ))}
          </View>
        </View>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            maxWidth: 353,
            gap: 16,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              maxWidth: 353,
            }}>
            <Text style={{color: '#18270B', fontSize: 18, fontWeight: '800'}}>
              Similar recipes for you
            </Text>
            <TouchableOpacity>
              <Text style={{color: '#76BC3F'}}>See all</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView
          horizontal
          contentContainerStyle={{
            gap: 18,
            paddingBottom: 14,
            paddingStart: 20,
            
          }}>
          {RECIPES.map((recipe, index) => (
            <RecipeCard
              recipe={recipe}
              key={index}
              isTouchEffectDisabled
              // cardStyle={{maxWidth: 280 ,index === RECIPES.length - 1 && {marginEnd: 20}}}
              detailStyle={{flexDirection: 'column', gap: 5}}
              isTimer={false}
            />
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 24,
    paddingTop: 14,
    backgroundColor: '#fff',
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
    width: 353,
  },
  nutritionsContainer: {
    flexDirection: 'column',
    gap: 12,
    width: 353,
  },
  nutritionBadge: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 15,
    backgroundColor: '#F1F8EC',
    borderRadius: 50,
    width: 165,
    height: 60,
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
    width: 111,
    height: 46,
  },
});
