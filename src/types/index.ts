import {NavigationProp} from '@react-navigation/native';

export type ScreenNames =
  | 'Home'
  | 'HomeStack'
  | 'BottomTab'
  | 'Recipes'
  | 'RecipeDetail'
  | 'AddRecipe';

export type RootStackParamList = {
  Home: undefined;
  HomeStack: undefined;
  BottomTab: undefined;
  Recipes: undefined;
  RecipeDetail: {title: string,data: any};
  AddRecipe: undefined;
};
export type StackNavigation = NavigationProp<RootStackParamList>;
