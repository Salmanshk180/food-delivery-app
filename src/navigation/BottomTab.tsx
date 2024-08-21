import React, {useCallback, useRef, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabRecipeIcon from '../components/tabBarIcons/TabRecipeIcon';
import TabHomeIcon from '../components/tabBarIcons/TabHomeIcon';
import {Home} from '../screens/Home';
import Recipes from '../screens/Recipe';
import Feed from '../screens/Feed';
import TabMyDiet from '../components/tabBarIcons/TabMyDiet';
import Header from '../components/Header/Header';
import AddRecipe from '../screens/AddRecipe';
import Add from '../assets/Add';
import {BottomSheetMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import CustomBottomSheet from '../components/BottomSheet/BottomSheet';
import Like from '../assets/Like';
import {Pressable} from 'react-native';
import AddFormsList from '../components/AddFormsList/AddFormsList';
import Profile from '../components/tabBarIcons/Profile';

export default function BottomTab() {
  const Tab = createBottomTabNavigator();
  const [isOpen, setIsOpen] = useState(false);
  const bottomSheetRef = useRef<BottomSheetMethods>(null);
  const OpenBottomSheet = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);
  const CloseBottomSheet = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            height: 98,
            position: 'relative',
            zIndex: 10,
          },
          tabBarItemStyle: {
            paddingVertical: 19,
          },
          tabBarLabelPosition: 'below-icon',
          headerTitleStyle: {
            color: '#303030',
            fontSize: 20,
            fontWeight: 800,
            lineHeight: 28,
          },
          tabBarHideOnKeyboard: true,
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarActiveTintColor: '#76BC3F',
            tabBarIcon: ({focused}) => <TabHomeIcon focused={focused} />,
          }}
        />
        <Tab.Screen
          name="Recipes"
          component={Recipes}
          options={{
            header: () => <Header title="Recipe" />,
            tabBarActiveTintColor: '#76BC3F',
            tabBarIcon: ({focused}) => <TabRecipeIcon focused={focused} />,
          }}
        />
        <Tab.Screen
          name="AddRecipe"
          component={AddRecipe}
          options={({route, navigation}) => ({
            tabBarButton: () => (
              <Pressable
                onPress={() => {
                  setIsOpen(!isOpen);
                  isOpen ? CloseBottomSheet() : OpenBottomSheet();
                }}
                style={{justifyContent: 'center', paddingHorizontal: 16}}>
                <Add onFocus={isOpen} />
              </Pressable>
            ),
          })}
        />
        <Tab.Screen
          name="My Diet"
          component={Feed}
          options={{
            header: () => <Header title="Feeds" isBack />,
            tabBarActiveTintColor: '#76BC3F',
            tabBarIcon: ({focused}) => <TabMyDiet focused={focused} />,
          }}
        />
        <Tab.Screen
          name="My Profile"
          component={Feed}
          options={{
            header: () => <Header title="Feeds" isBack />,
            tabBarActiveTintColor: '#76BC3F',
            tabBarIcon: ({focused}) => <Profile focused={focused} />,
          }}
        />
      </Tab.Navigator>
      {isOpen && (
        <CustomBottomSheet
          bottomSheetRef={bottomSheetRef}
          onClose={() => {
            CloseBottomSheet();
            setIsOpen(!isOpen);
          }}
          component={
            <AddFormsList
              onSheetClose={() => {
                CloseBottomSheet();
                setIsOpen(!isOpen);
              }}
            />
          }
          snapPointsArray={['66%','66%']}
          title="Add"
        />
      )}
    </>
  );
}
