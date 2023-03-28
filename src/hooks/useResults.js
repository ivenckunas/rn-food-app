import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {
	const [results, setResults] = useState([]);
	const [errorMsg, setErrorMsg] = useState('');

	const searchApi = async (searchTerm) => {
		try {
			const resp = await yelp.get('/search', {
				params: {
					limit: 50,
					term: searchTerm,
					location: 'texas',
				},
			});
			setResults(resp.data.businesses);
		} catch (error) {
			setErrorMsg('Something went wrong. Try again later');
		}
	};

	useEffect(() => {
		searchApi('grill');
	}, []);

	return [searchApi, results, errorMsg];
};
