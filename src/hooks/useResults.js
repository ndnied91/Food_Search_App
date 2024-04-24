import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [err, setErr] = useState('');

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'New York',
        },
      });
      setResults(response.data.businesses);
      setErr('');
    } catch (e) {
      console.log(e);
      setErr('Something went wrong :( ');
    }
  };

  useEffect(() => {
    searchApi('pizza');
  }, []);

  return [searchApi, results, err];
};

//creating a custom hook steps

// 1. create a export default function block if its a default export
// 2. copy and paste all related data into the new function block
// 3. return all necessary variables are used in a separate component
