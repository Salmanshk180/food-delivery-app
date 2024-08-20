import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import BottomTab from './BottomTab';
import RecipeDetail from '../screens/RecipeDetail';
import {TouchableOpacity} from 'react-native';
import Like from '../assets/Like';
import Header from '../components/Header/Header';
import Back from '../assets/Back';
import AddRecipe from '../screens/AddRecipe';
import ImageView from '../screens/ImageView';

export default function MainStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen
        name="ImageView"
        component={ImageView}
        options={{animation: 'slide_from_bottom'}}
      />
      <Stack.Screen
        name="AddRecipe"
        component={AddRecipe}
        options={() => ({
          headerShown: true,
          header: () => <Header title="Add Recipe" isBack />,
        })}
      />
      <Stack.Screen
        name="RecipeDetail"
        component={RecipeDetail}
        options={{
          headerShown: true,
          header: ({route}: any) => (
            <Header
              title={route.params.title}
              isBack
              backIcon={<Back />}
              icon={
                <TouchableOpacity
                  style={{
                    backgroundColor: '#E8FFD6',
                    padding: 8,
                    borderRadius: 50,
                  }}>
                  <Like />
                </TouchableOpacity>
              }
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
