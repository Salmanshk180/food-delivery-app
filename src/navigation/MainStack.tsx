import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import BottomTab from './BottomTab';
import RecipeDetail from '../screens/RecipeDetail';
import {Alert, Button, TouchableOpacity} from 'react-native';
import Back from '../assets/Back';
import Like from '../assets/Like';

export default function MainStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{headerShown: false, headerBackVisible: false}}
      />
      <Stack.Screen
        name="RecipeDetail"
        component={RecipeDetail}
        options={({route, navigation}: any) => ({
          headerShown: true,
          headerBackVisible: false,
          title: `${route.params?.title}`,
          headerTitleStyle: {fontSize: 20, fontWeight: '800'},
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Back />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              style={{
                backgroundColor: '#E8FFD6',
                borderRadius: 50,
                width: 36,
                height: 36,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth:1
              }}>
              <Like />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
}
