import React, { FC, memo } from 'react';
import { Text, StyleSheet, View } from 'react-native';

interface EmptyComponentProps {
  isLoading: boolean;
}

const EmptyComponent: FC<EmptyComponentProps> = ({ isLoading }) =>
  !isLoading ? (
    <View style={styles.container}>
      <Text style={styles.text}>There is no gifs.</Text>
    </View>
  ) : null;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default memo(EmptyComponent);
