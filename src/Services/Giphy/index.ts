import axios from 'axios';
import { ROOT_API, API_KEY } from '../../Config/API';

import { DEFAULT_RATING, SEARCH_LIMIT } from '../../Constants/Giphy';

import { TGif, TGiphyPagination } from '../../Types/Giphy';

/*
  I would like to create separate service for axios
  and for example put api_key in each "get" request using interceptors,
  or set analytic logs,
  but as this is a small project I decided to do in this way and put api_key in each request.
*/

export const getRandomGif = async (): Promise<TGif | null> => {
  try {
    const {
      data: { data: giphy },
    } = await axios.get(`${ROOT_API}random`, {
      params: {
        tag: '',
        api_key: API_KEY,
        rating: DEFAULT_RATING,
      },
    });

    return giphy;
  } catch (e) {
    // handle error if needed and log in analytics
    return null;
  }
};

export const getGifs = async (
  query = '',
  offset = 0,
): Promise<{ gifs: TGif[]; pagination: TGiphyPagination } | null> => {
  try {
    const {
      data: { data: gifs, pagination },
    } = await axios.get(`${ROOT_API}search`, {
      params: {
        offset,
        q: query,
        api_key: API_KEY,
        limit: SEARCH_LIMIT,
        rating: DEFAULT_RATING,
      },
    });

    return { gifs, pagination };
  } catch (e) {
    // handle error if needed and log in analytics
    return null;
  }
};
