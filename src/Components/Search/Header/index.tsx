import React, {Dispatch, FC, memo, SetStateAction} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

import Colors from '../../../Styles/Colors';

import SearchIcon from '../../../assets/icons/search-svgrepo-com.svg';

interface HeaderProps {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
}

const Header: FC<HeaderProps> = ({text, setText}) => (
  <View style={styles.container}>
    <SearchIcon
      width={15}
      height={15}
      fill={Colors.black}
      style={styles.searchIcon}
    />
    <TextInput value={text} style={styles.input} onChangeText={setText} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 20,
    borderRadius: 15,
    marginBottom: 50,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.gray,
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 35,
    fontSize: 15,
    lineHeight: 17,
    marginRight: 15,
  },
});

export default memo(Header);
