import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import React from 'react';
import Badge from '../components/Badge/Badge';
import {RECIPES} from '../constants/category';
import RecipeCard from '../components/cards/RecipeCard';

export default function RecipeDetail({route}: any) {
  const {data} = route.params;
  const {width} = Dimensions.get('screen');
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={data?.image} style={{borderRadius: 5, margin: 'auto'}} />
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
          <FlatList
            data={data?.nutritions}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            contentContainerStyle={{gap: 10}}
            numColumns={2}
            renderItem={({item}) => (
              <Badge
                title={item.title}
                titleColor="#18270B"
                subTitleColor="#76BC3F"
                subTitle={item.value}
                containerStyle={styles.nutritionBadge}
                titleStyle={styles.nutritionBadgeTitle}
                subTitleStyle={styles.nutritionBadgeSubTitle}
              />
            )}
          />
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
          <FlatList
            data={data?.ingredients}
            // contentContainerStyle={{gap: 11}}
            // columnWrapperStyle={{justifyContent:'space-between' }}
            numColumns={3}
            contentContainerStyle={{gap: 10}}
            columnWrapperStyle={{gap: 10, flexWrap: 'wrap'}}
            // horizontal
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
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            gap: 14,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
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
            data={RECIPES}
            horizontal
            contentContainerStyle={{paddingHorizontal: 20, gap: 18}}
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
    justifyContent: 'flex-start',
    gap: 24,
    paddingTop: 14,
    backgroundColor: '#fff',
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
    maxWidth: 111,
    maxHeight: 46,
  },
});
