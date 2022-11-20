import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  LayoutAnimation,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { getRandomGif } from '../../Services/Giphy';
import { TGif } from '../../Types/Giphy';

const { width } = Dimensions.get('window');

const INTERVAL_TIMEOUT = 15 * 1000;

const RandomGiphy = () => {
  const [giphy, setGiphy] = useState<TGif>();
  const intervalRef = useRef<number>(0);

  useEffect(() => {
    getRandomGif().then((result: TGif | null) => {
      if (result) {
        LayoutAnimation.easeInEaseOut();

        setGiphy(result);
      }
    });
  }, []);

  useFocusEffect(
    useCallback(() => {
      // Setting interval inside useFocusEffect to avoid unnecessary requests when screen is unfocused
      intervalRef.current = setInterval(async () => {
        const result: TGif | null = await getRandomGif();

        if (result) {
          // Prefetching gif before setting state to change dimensions of image when it will be loaded
          if (result?.images?.original?.url) {
            await Image.prefetch(result?.images?.original?.url);
          }

          LayoutAnimation.easeInEaseOut();
          setGiphy(result);
        }
      }, INTERVAL_TIMEOUT);

      return () => {
        clearInterval(intervalRef.current);
      };
    }, []),
  );

  return (
    <View style={styles.container}>
      <Image
        style={[
          styles.image,
          {
            width: +(giphy?.images?.original?.width || 0),
            height: +(giphy?.images?.original?.height || 0),
          },
        ]}
        source={{
          uri: giphy?.images?.original?.url,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    maxWidth: width,
  },
});

export default RandomGiphy;
