import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: result.image_url }} style={styles.image} />
      <Text style={styles.title}>{result.name}</Text>
      <Text>
        {' '}
        {result.rating} Stars, {result.review_count} Reviews{' '}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },

  image: {
    height: 120,
    width: 250,
    borderRadius: 4,
    marginBottom: 5,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default ResultsDetail;
