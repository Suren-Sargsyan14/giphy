import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import {RouteProp} from '@react-navigation/native';

import {
  MainRootParamList,
  MainRootRouteNames,
} from '../../Navigation/Roots/Main/routes';

import Random from '../../assets/icons/perspective-dice-six-faces-random-svgrepo-com.svg';
import Search from '../../assets/icons/search-svgrepo-com.svg';

interface TabBarIconsProps {
  focused: boolean;
  route: RouteProp<
    MainRootParamList,
    MainRootRouteNames.RANDOM_GIPHY | MainRootRouteNames.SEARCH
  >;
}

const TabBarIcons: FC<TabBarIconsProps> = ({focused, route}) => {
  switch (route.name) {
    case MainRootRouteNames.RANDOM_GIPHY:
      return (
        <Random
          width={30}
          height={30}
          style={!focused && styles.semiTransparent}
        />
      );
    case MainRootRouteNames.SEARCH:
      return (
        <Search
          width={20}
          height={20}
          fill={'black'}
          style={!focused && styles.semiTransparent}
        />
      );
  }
};

const styles = StyleSheet.create({
  semiTransparent: {
    opacity: 0.5,
  },
});

export default TabBarIcons;
