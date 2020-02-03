import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../API/Yelp';
import { Feather } from '@expo/vector-icons';

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
		<View style={styles.singleResult}>
			<View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10}}>
				<Text style={styles.resultTitle}>{data.name}</Text>
				<Text style={styles.resultDetail}>{data.rating}<Feather name="star" />  {data.review_count} reviews</Text>
			</View>
			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				data = {data.photos}
				keyExtractor = {(photo) => photo}
				renderItem = {({item}) => {
					return <Image source={{uri: item}} style={styles.resultImage} />
				}}
			/>
			<View style={styles.address}>
				<Text><Feather name="map-pin" size={18} />{data.location.display_address[0]}</Text>
				<Text>{data.location.display_address[1]}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	singleResult: {
		marginVertical: 10,
	},
	resultTitle: {
		fontSize: 24,
		marginLeft: 10,
	},
	resultDetail: {
		marginRight: 10,
	},
	resultImage: {
		height: 200,
		marginLeft: 10,
		width: 350,
	},
	address: {
		marginLeft: 10,
		marginTop: 15,
	},
})

export default ResultsShowScreen;
