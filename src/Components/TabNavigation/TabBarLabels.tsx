import React, {FC} from 'react';
import {StyleSheet, Text} from 'react-native';
import {RouteProp} from '@react-navigation/native';

import {TAB_BAR_LABELS} from '../../Constants/Tabs';

import {
  MainRootParamList,
  MainRootRouteNames,
} from '../../Navigation/Roots/Main/routes';

interface TabBarLabelsProps {
  focused: boolean;
  route: RouteProp<
    MainRootParamList,
    MainRootRouteNames.RANDOM_GIPHY | MainRootRouteNames.SEARCH
  >;
}

const TabBarLabels: FC<TabBarLabelsProps> = ({focused, route}) => (
  <Text style={[styles.text, !focused && styles.semiTransparent]}>
    {TAB_BAR_LABELS[route.name]}
  </Text>
);

const styles = StyleSheet.create({
  text: {
    color: 'black',
  },
  semiTransparent: {
    opacity: 0.5,
  },
});

export default TabBarLabels;
