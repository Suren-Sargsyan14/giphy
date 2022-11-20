export const enum GiphyRatings {
  G = 'g',
  R = 'r',
  PG = 'pg',
  PG_13 = 'pg-13',
}

interface GiphyImage {
  url: string;
  size: string;
  width: string;
  height: string;
}

export type TGif = {
  type: 'gif' | string;
  id: string;
  url: string;
  slug: string;
  bitly_gif_url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  title: string;
  rating: GiphyRatings;
  content_url: string;
  source_tld: string;
  source_post_url: string;
  is_sticker: number;
  import_datetime: string;
  trending_datetime: string;
  images: {
    [key: string]: GiphyImage;
  };
};
