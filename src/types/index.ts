import {NavigationProp} from '@react-navigation/native';
import {ImageSourcePropType} from 'react-native';

export type ScreenNames =
  | 'Home'
  | 'HomeStack'
  | 'BottomTab'
  | 'Recipes'
  | 'RecipeDetail'
  | 'AddRecipe'
  | 'ImageView';

export type RootStackParamList = {
  Home: undefined;
  HomeStack: undefined;
  BottomTab: undefined;
  Recipes: undefined;
  RecipeDetail: {title: string; data: any};
  AddRecipe: undefined;
  ImageView: {source: string};
};
export type StackNavigation = NavigationProp<RootStackParamList>;
