import {NavigationProp} from '@react-navigation/native';
import {ImageSourcePropType} from 'react-native';

export type ScreenNames =
  | 'Home'
  | 'HomeStack'
  | 'Login'
  | 'BottomTab'
  | 'Recipes'
  | 'RecipeDetail'
  | 'AddRecipe'
  | 'ImageView'
  |'Verification';

export type RootStackParamList = {
  Home: undefined;
  HomeStack: undefined;
  BottomTab: undefined;
  Login: undefined;
  Recipes: undefined;
  RecipeDetail: {title: string; id: string};
  AddRecipe: undefined;
  ImageView: {source: string};
  Verification: undefined;
};
export type StackNavigation = NavigationProp<RootStackParamList>;
