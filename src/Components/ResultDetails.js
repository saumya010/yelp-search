import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const ResultDetails = ({result}) => {
	return (
		<View style={styles.resultView}>
			<Image source={{uri: result.image_url}} style={styles.resultImage} />
			<Text style={styles.resultName}>{result.name}</Text>
			<Text>{result.rating}<Feather name="star" style={styles.iconStyle} />  {result.review_count} reviews</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	resultView: {
		marginRight: 10,
	},
	resultImage: {
		height: 100,
		marginBottom: 5,
		width: 200,
	},
	resultName: {
		fontSize: 16,
		fontWeight: 'bold'
	},
	iconStyle: {
		color: '#000'
	}
})

export default ResultDetails;
