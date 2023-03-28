import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import yelp from '../api/yelp';

const ResultsShowScreen = ({navigation}) => {
	const id = navigation.getParam('id');
	const [result, setResult] = useState();
	console.log('result ===', result);
	useEffect(() => {
		getResult(id);
	}, []);

	const getResult = async (id) => {
		const resp = await yelp.get(`/${id}`);
		setResult(resp.data);
	};

	if (!result) {
		return null;
	}

	return (
		<View style={styles.container}>
			<FlatList
				data={result.photos}
				keyExtractor={(photo) => photo}
				renderItem={({item}) => {
					return (
						<Image
							style={styles.imageStyle}
							source={{uri: item}}
						/>
					);
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 15,
		backgroundColor: '#fff',
	},
	imageStyle: {
		height: 150,
		width: 200,
		marginBottom: 10,
	},
});

export default ResultsShowScreen;
