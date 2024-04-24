import React, { useState } from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';

import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.icon} />
      <TextInput
        style={styles.inputStyle}
        autoCapitalize="none"
        autoCorrect="false"
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 10,
  },
  inputStyle: {
    height: 50,
    paddingLeft: 10,
    fontSize: 18,
  },
  icon: {
    fontSize: 35,
    color: 'black',
    marginHorizontal: 15,
    alignSelf: 'center',
  },
});

export default SearchBar;
