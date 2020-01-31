import React, {useState} from 'react';
import { View, Text } from 'react-native';

import SearchBar from '../Components/SearchBar';
import ResultsList from '../Components/ResultsList';
import useResults from '../Hooks/useResults';

const Search = () => {

	const [searchTerm, updateSearch] = useState('');
	const [searchApi, results, errorMsg] = useResults();

	return(
		<View>
			{ errorMsg ? <Text>{errorMsg}</Text> : null }
			<SearchBar
				searchTerm={searchTerm}
				onTermChange={updateSearch}
				onTermSubmit = {() => searchApi(searchTerm)}
			/>
			<Text>Found {results.length} results</Text>
			<ResultsList
				title="Cost effective"
				results
			/>
			<ResultsList
				title="Pricier"
				results
			/>
			<ResultsList
				title="Fancy"
				results
			/>
		</View>
	)
}

export default Search;
