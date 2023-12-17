import React from 'react';
import Icon from '@expo/vector-icons/MaterialIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components/native';

import { Home } from '../screens/Home';
import { Books } from '../screens/Books';
import { BookBorrows } from '../screens/BookBorrows';
import User from '../screens/User';

const { Navigator, Screen } = createBottomTabNavigator();

export function PrivateRoutes() {
  const theme = useTheme();

  return (

    <Navigator
      screenOptions={{
        tabBarActiveTintColor: '#aeaeb3',
        tabBarInactiveTintColor: 'white',
        tabBarShowLabel: true,
        tabBarLabelStyle: { fontSize: 16, fontWeight: '400' },
        tabBarStyle: { backgroundColor: theme.colors.secondary, },
        headerShown: false,
      }}
      initialRouteName="Home"
    >

      <Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({ size, color }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="User"
        component={User}
        options={{
          title: 'Perfil',
          tabBarIcon: ({ size, color }) => (
            <Icon name="person" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="BookBorrows"
        component={BookBorrows}
        options={{
          title: 'Empréstimos',
          tabBarIcon: ({ size, color }) => (
            <Icon name="book" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Books"
        component={Books}
        options={{
          title: 'Livros',
          tabBarIcon: ({ size, color }) => (
            <Icon name="menu-book" size={size} color={color} />
          ),
        }}
      />
    </Navigator>

  );
}