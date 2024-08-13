import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabRecipeIcon from '../components/tabBarIcons/TabRecipeIcon';
import TabHomeIcon from '../components/tabBarIcons/TabHomeIcon';
import {Home} from '../screens/Home';
import Recipes from '../screens/Recipe';
import Feed from '../screens/Feed';
import TabMyDiet from '../components/tabBarIcons/TabMyDiet';

export default function BottomTab() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 98,
          gap: 10,
          justifyContent: 'center',
          alignItems: 'center',
        },
        headerStyle: {
          borderBottomColor: '#76BC3F',
          borderBottomWidth: 1,
        },
        tabBarItemStyle: {
          justifyContent: 'center',
          paddingVertical: 19,
          alignItems: 'center',
          height: 'auto',
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
          tabBarActiveTintColor: '#76BC3F',
          tabBarIcon: ({focused}) => <TabHomeIcon focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Recipes"
        component={Recipes}
        options={{
          tabBarActiveTintColor: '#76BC3F',
          tabBarIcon: ({focused}) => <TabRecipeIcon focused={focused} />,
        }}
      />
      <Tab.Screen
        name="My Diet"
        component={Feed}
        options={{
          tabBarActiveTintColor: '#76BC3F',
          tabBarIcon: ({focused}) => <TabMyDiet focused={focused} />,
          title: 'Feeds',
        }}
      />
    </Tab.Navigator>
  );
}
