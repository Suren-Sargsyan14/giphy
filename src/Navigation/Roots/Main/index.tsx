import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {MainRootParamList, MainRootRouteNames} from './routes';

const Root = createBottomTabNavigator<MainRootParamList>();

import {RandomGiphyScreen, SearchScreen} from '../../../Screens';

const MainRoot = () => {
  return (
    <Root.Navigator>
      <Root.Screen
        component={RandomGiphyScreen}
        name={MainRootRouteNames.RANDOM_GIPHY}
      />
      <Root.Screen component={SearchScreen} name={MainRootRouteNames.SEARCH} />
    </Root.Navigator>
  );
};

export default MainRoot;
