import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
	const [term, setTerm] = useState('');
	const [searchApi, results, errorMsg] = useResults();

	const filterByPrice = (price) => {
		return results.filter((result) => result.price === price);
	};

	return (
		<View style={styles.background}>
			<SearchBar
				term={term}
				onTermChange={(newTerm) => setTerm(newTerm)}
				onTermSubmit={() => searchApi(term)}
			/>
			{errorMsg ? <Text>{errorMsg}</Text> : null}
			{/* <Text>we have found {results.length} results</Text> */}
			<ScrollView>
				<ResultsList
					title='Cost Effective'
					results={filterByPrice('$')}
				/>
				<ResultsList
					title='Bit Pricier'
					results={filterByPrice('$$')}
				/>
				<ResultsList
					title='Big Spender'
					results={filterByPrice('$$$')}
				/>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	background: {
		flex: 1,
		backgroundColor: '#fff',
	},
});

export default SearchScreen;
