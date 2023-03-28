import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {withNavigation} from 'react-navigation';
import SingleResult from './SingleResult';

const ResultsList = ({title, results, navigation}) => {
	if (!results.length) {
		return null;
	}

	return (
		<View>
			<Text style={styles.titleStyle}>{title}</Text>
			<FlatList
				showsHorizontalScrollIndicator={false}
				horizontal
				data={results}
				keyExtractor={(result) => result.id}
				renderItem={({item}) => {
					return (
						<TouchableOpacity
							onPress={() =>
								navigation.navigate('ResultsShow', {
									id: item.id,
								})
							}
						>
							<SingleResult item={item} />
						</TouchableOpacity>
					);
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	titleStyle: {
		marginLeft: 15,
		fontSize: 18,
		fontWeight: 'bold',
	},
});

export default withNavigation(ResultsList);
