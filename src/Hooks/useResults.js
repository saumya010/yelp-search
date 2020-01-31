import { useEffect, useState } from 'react';
import yelp from '../API/Yelp';

export default () => {
	const [results, setResults] = useState([]);
	const [errorMsg, setError] = useState('');

	const searchApi = async searchTerm => {
		console.log('hqqqq')
		try {
			const response = await yelp.get('/search', {
				params: {
					limit: 50,
					location: 'New York',
					term: searchTerm,
				}
			});
			setResults(response.data.businesses);
		} catch(err) {
			setError('Something went wrong');
			console.log(err)
		}
	}

	useEffect(() => {
		searchApi('pizza');
	}, [])

	return [searchApi, results, errorMsg]
}
