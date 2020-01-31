import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = () => {
	return(
		<TextInput style={styles.search} placeholder='search' />
	)
}

const styles = StyleSheet.create({
	search: {
		backgroundColor: '#f0eeee',
		borderRadius: 5,
		height: 50,
		margin: 20,
		paddingHorizontal: 10,
	}
});

export default SearchBar;
