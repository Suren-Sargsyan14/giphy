import axios from 'axios';
import {ROOT_API, API_KEY} from '../../Config/API';

import {GIPHY_RATINGS} from '../../Constants/Giphy';

import {TGif} from '../../Types/Giphy';

export const getRandomGif = async (): Promise<TGif | null> => {
  try {
    const {
      data: {data: giphy},
    } = await axios.get(`${ROOT_API}random`, {
      params: {
        tag: '',
        api_key: API_KEY,
        rating: GIPHY_RATINGS.G,
      },
    });

    return giphy;
  } catch (e) {
    // handle error if needed and log in analytics
    return null;
  }
};
