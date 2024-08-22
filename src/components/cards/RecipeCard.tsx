import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import NonVeg from '../../assets/NonVeg';
import Timer from '../../assets/Timer';
import {useNavigation} from '@react-navigation/native';
import {StackNavigation} from '../../types';

export default function RecipeCard({
  recipe,
  isTouchEffectDisabled,
  cardStyle,
  detailStyle,
  isTimer = true,
}: {
  recipe: any;
  isTouchEffectDisabled?: boolean;
  cardStyle?: ViewStyle;
  detailStyle?: ViewStyle;
  isTimer?: boolean;
}) {
  const navigation = useNavigation<StackNavigation>();
  return (
    <TouchableOpacity
      style={styles.touchable}
      activeOpacity={isTouchEffectDisabled ? 1 : 0.8}
      onPress={() => {
        navigation.navigate('RecipeDetail', {
          title: recipe.name,
          id: recipe.id,
        });
      }}>
      <View style={[styles.card, cardStyle]}>
        <Image
          source={{
            uri: recipe?.thumbnail_image[0].key,
          }}
          style={styles.image}
          width={353}
          height={190}
        />
        <View style={[styles.detailsContainer, detailStyle]}>
          <View style={styles.textContainer}>
            <NonVeg isVeg={recipe.food_type === 'veg'} />
            <Text style={[styles.text, {flex: 1}]}>{recipe.name}</Text>
          </View>
          {isTimer ? (
            <View style={[styles.timerContainer]}>
              <Timer />
              <Text style={styles.timerText}>
                {recipe.time_to_cook} minutes
              </Text>
            </View>
          ) : (
            <View style={styles.noTimerContainer}>
              <Text style={styles.caloriesText}>
                {recipe.calories} Calories
              </Text>
              <Text style={styles.timeText}>{recipe.time_to_cook} Mins.</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchable: {
    flex: 1,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 18,
  },
  image: {
    width: '100%',
    borderRadius: 10,
    resizeMode: 'cover',
  },
  detailsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    padding: 5,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    flex: 1,
  },
  text: {
    fontWeight: '900',
    fontSize: 16,
    color: '#303030',
  },
  timerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  timerText: {
    color: '#E64646',
  },
  noTimerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 25,
  },
  caloriesText: {
    color: '#838383',
  },
  timeText: {
    color: '#838383',
  },
});
