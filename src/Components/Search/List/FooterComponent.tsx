import React, { FC, memo } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

interface FooterComponentProps {
  isLoading: boolean;
}

const FooterComponent: FC<FooterComponentProps> = ({ isLoading }) =>
  isLoading ? (
    <View style={styles.container}>
      <ActivityIndicator size={'small'} />
    </View>
  ) : null;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default memo(FooterComponent);
