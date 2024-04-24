import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null); //expecting an object from the API
  const id = navigation.getParam('id');

  useEffect(() => {
    const getResult = async (id) => {
      const response = await yelp.get(`/${id}`);
      setResult(response.data);
    };

    getResult(id);
  }, []);

  if (!result) {
    return null;
  }
  console.log(result);
  return (
    <View>
      <Text style={styles.title}>{result.name} </Text>

      <Text style={styles.subTitle}>
        {' '}
        {result.location['display_address'][0]}
      </Text>
      <Text style={styles.subTitle2}>
        {' '}
        {result.location['display_address'][1]}
      </Text>
      <FlatList
        horizontal
        data={result.photos}
        keyExtractor={(photo) => photo.url}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
    marginLeft: 10,
    borderRadius: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 'semibold',
    textAlign: 'center',
  },
  subTitle2: {
    fontSize: 16,
    fontWeight: 'semibold',
    textAlign: 'center',
    paddingBottom: 10,
  },
});

export default ResultsShowScreen;
