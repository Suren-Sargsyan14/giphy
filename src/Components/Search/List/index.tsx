import React, { FC, memo } from 'react';
import { StyleSheet, FlatList, Image } from 'react-native';

import { GIF_SIZE, GIFS_PER_ROW } from '../../../Constants/Giphy';

import EmptyComponent from './EmptyComponent';
import FooterComponent from './FooterComponent';

import { TGif } from '../../../Types/Giphy';

interface ListProps {
  data: TGif[];
  isLoading: boolean;
  onEndReached: () => void;
}

const List: FC<ListProps> = ({ data, onEndReached, isLoading }) => (
  <FlatList
    data={data}
    numColumns={GIFS_PER_ROW}
    onEndReachedThreshold={0.5}
    onEndReached={onEndReached}
    keyExtractor={item => item?.id}
    showsVerticalScrollIndicator={false}
    renderItem={({ item }) => (
      <Image
        style={styles.gif}
        source={{
          uri: item?.images?.preview_gif?.url,
        }}
      />
    )}
    ListEmptyComponent={<EmptyComponent isLoading={isLoading} />}
    ListFooterComponent={<FooterComponent isLoading={isLoading} />}
  />
);

const styles = StyleSheet.create({
  gif: {
    width: GIF_SIZE,
    height: GIF_SIZE,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
});

export default memo(List);
