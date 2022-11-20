import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const GIPHY_RATINGS = {
  G: 'g',
  R: 'r',
  PG: 'pg',
  PG_13: 'pg-13',
};

export const DEFAULT_RATING = GIPHY_RATINGS.G;

export const SEARCH_LIMIT = 24;
export const GIFS_PER_ROW = 3;
export const GIF_SIZE = (width - 40 - 10 * (GIFS_PER_ROW - 1)) / GIFS_PER_ROW;
