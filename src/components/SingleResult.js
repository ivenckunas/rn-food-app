import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

const SingleResult = ({item}) => {
	return (
		<View style={styles.container}>
			<Image
				style={styles.image}
				source={{uri: item.image_url}}
			/>
			<Text style={styles.name}>{item.name}</Text>
			<Text style={styles.rating}>
				{item.rating}/5 stars, {item.review_count} reviews
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginBottom: 10,
	},
	image: {
		marginLeft: 15,
		marginBottom: 5,
		width: 250,
		height: 150,
		borderRadius: 5,
	},
	name: {
		marginLeft: 15,
		marginBottom: 1,
		fontSize: 15,
		fontWeight: 'bold',
	},
	rating: {
		marginLeft: 15,
		color: 'grey',
	},
});

export default SingleResult;
