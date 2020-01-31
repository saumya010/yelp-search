import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const icon = '';

const SearchBar = ({searchTerm, onTermChange, onTermSubmit}) => {
	return(
		<View style={styles.searchContainer}>
			<Feather name="search" style={styles.iconStyle} />
			<TextInput
				style={styles.search}
				placeholder="Search"
				autoCorrect={false}
				autoCapitalize="none"
				onEndEditing={onTermSubmit}
				value={searchTerm}
				onChangeText={onTermChange}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	searchContainer: {
		backgroundColor: '#f0eeee',
		borderRadius: 5,
		flexDirection: 'row',
		height: 50,
		marginVertical: 15,
		paddingHorizontal: 10,
	},
	search: {
		flex: 1,
		fontSize: 18,
		paddingHorizontal: 10,
	},
	iconStyle: {
		alignSelf: 'center',
		fontSize: 35,
	}
});

export default SearchBar;
