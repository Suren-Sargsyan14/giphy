import React, { useCallback, useEffect, useRef, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { getGifs } from '../../Services/Giphy';

import { GIF_SIZE, SEARCH_LIMIT } from '../../Constants/Giphy';

import List from '../../Components/Search/List';
import Header from '../../Components/Search/Header';

import { TGif } from '../../Types/Giphy';

const Search = () => {
  const [data, setData] = useState<TGif[]>([]);
  const [text, setText] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const page = useRef<number>(1);
  const timeoutRef = useRef<number>(0);
  const canLoadMore = useRef<boolean>(true);

  const onEndReached = useCallback(async () => {
    if (!isLoading && canLoadMore.current) {
      setIsLoading(true);
      const result = await getGifs(text, page.current * SEARCH_LIMIT);
      ++page.current;

      if (result?.gifs?.length) {
        setData(previous => {
          const newData = [...previous, ...result?.gifs];
          canLoadMore.current =
            newData?.length < (result?.pagination?.total_count || 0);

          return newData;
        });
      }

      setIsLoading(false);
    }
  }, [isLoading, text]);

  useEffect(() => {
    if (text) {
      setIsLoading(true);
    }

    timeoutRef.current = setTimeout(async () => {
      const result = await getGifs(text);
      setIsLoading(false);

      if (result?.gifs?.length) {
        setData(result?.gifs);
      }

      page.current = 1;

      canLoadMore.current =
        (result?.gifs?.length || 0) < (result?.pagination?.total_count || 0);
    }, 300);

    return () => clearTimeout(timeoutRef.current);
  }, [text]);

  return (
    <View style={styles.container}>
      <Header setText={setText} text={text} />
      <List data={data} isLoading={isLoading} onEndReached={onEndReached} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: getStatusBarHeight() + 50,
  },
  gif: {
    width: GIF_SIZE,
    height: GIF_SIZE,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
});

export default Search;
