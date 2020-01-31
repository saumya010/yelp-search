import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchBar from '../Components/SearchBar';
import yelp from '../API/Yelp';

const Search = () => {

	const [searchTerm, updateSearch] = useState('');
	const [results, setResults] = useState([]);

	const searchApi = async () => {
		const response = await yelp.get('/search', {
			params: {
				limit: 50,
				location: 'New York',
				term: searchTerm,
			}
		});
		setResults(response.data.businesses);
	}

	return(
		<View>
			<Text>Search</Text>
			<SearchBar
				search={searchTerm}
				onTermChange={(newTerm) => updateSearch(newTerm)}
				onTermSubmit = {searchApi}
			/>
			<Text>Found {results.length} results</Text>
		</View>
	)
}

export default Search;
