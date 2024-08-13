import {NavigationProp} from '@react-navigation/native';

export type ScreenNames =
  | 'Home'
  | 'HomeStack'
  | 'BottomTab'
  | 'Recipes'
  | 'RecipeDetail';

export type RootStackParamList = {
  Home: undefined;
  HomeStack: undefined;
  BottomTab: undefined;
  Recipes: undefined;
  RecipeDetail: {title: string,data: any};
};
export type StackNavigation = NavigationProp<RootStackParamList>;
