import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../API/Yelp';

const ResultsShowScreen = ({navigation}) => {

	const [data, updateData] = useState(null);

	const ID = navigation.getParam('id');
	const getResult = async (id) => {
		const response = await yelp.get(`/${ID}`);
		updateData(response.data);
	}

	useEffect(() => {
		getResult(ID);
	}, []);

	if(!data) {
		return null;
	}

	return (
		<View>
			<Text>{data.name}</Text>
			<FlatList
				data = {data.photos}
				keyExtractor = {(photo) => photo}
				renderItem = {({item}) => {
					return <Image source={{uri: item}} style={styles.resultImage} />
				}}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	resultImage: {
		height: 200,
		width: 350,
	}
})

export default ResultsShowScreen;
