import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export enum MainRootRouteNames {
  RANDOM_GIPHY = 'randomGiphy',
  SEARCH = 'search',
}

export type MainRootParamList = {
  [MainRootRouteNames.RANDOM_GIPHY]: undefined;
  [MainRootRouteNames.SEARCH]: undefined;
};

export type MainNavigationProp<
  RouteName extends keyof MainRootParamList = MainRootRouteNames,
> = BottomTabNavigationProp<MainRootParamList, RouteName>;
