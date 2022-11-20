import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MainRootParamList, MainRootRouteNames } from './routes';
import { RandomGiphyScreen, SearchScreen } from '../../../Screens';

import TabBarIcons from '../../../Components/TabNavigation/TabBarIcons';
import TabBarLabels from '../../../Components/TabNavigation/TabBarLabels';

const Root = createBottomTabNavigator<MainRootParamList>();

const MainRoot = () => {
  return (
    <Root.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabBarIcons focused={focused} route={route} />
        ),
        tabBarLabel: ({ focused }) => (
          <TabBarLabels route={route} focused={focused} />
        ),
      })}>
      <Root.Screen
        component={RandomGiphyScreen}
        name={MainRootRouteNames.RANDOM_GIPHY}
      />
      <Root.Screen component={SearchScreen} name={MainRootRouteNames.SEARCH} />
    </Root.Navigator>
  );
};

export default MainRoot;
