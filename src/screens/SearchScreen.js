import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useResults from '../hooks/useResults';
const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, err] = useResults(); //custom hook

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {err.length > 0 && <Text> {err} </Text>}

      <ScrollView>
        <ResultsList
          title="Cost Effective"
          results={filterResultsByPrice('$')}
        />
        <ResultsList title="Bit Pricier" results={filterResultsByPrice('$$')} />
        <ResultsList
          title="Big Spender"
          results={filterResultsByPrice('$$$')}
        />
      </ScrollView>
    </>
  );
};

export default SearchScreen;
