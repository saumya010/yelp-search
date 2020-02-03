import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import SearchBar from '../Components/SearchBar';
import ResultsList from '../Components/ResultsList';
import useResults from '../Hooks/useResults';

const Search = () => {

	const [searchTerm, updateSearch] = useState('');
	const [searchApi, results, errorMsg] = useResults();

	const filterResultsPrice = (price) => {
		return results.filter(result => {
			return result.price === price
		})
	}

	return(
		<View style={styles.result}>
			{ errorMsg ? <Text>{errorMsg}</Text> : null }
			<SearchBar
				searchTerm={searchTerm}
				onTermChange={updateSearch}
				onTermSubmit = {() => searchApi(searchTerm)}
			/>
			<Text style={{marginLeft: 10}}>Found {results.length} results</Text>
			<ScrollView>
				<ResultsList
					title="Cost effective"
					results = {filterResultsPrice('$')}
				/>
				<ResultsList
					title="Pricier"
					results = {filterResultsPrice('$$')}
				/>
				<ResultsList
					title="Fancy"
					results = {filterResultsPrice('$$$')}
				/>
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	result: {
		flex: 1,
	}
})

export default Search;
