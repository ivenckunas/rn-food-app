import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {Ionicons} from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
	return (
		<View style={styles.backgroundStyle}>
			<Ionicons
				style={styles.iconStyle}
				name='search'
			/>
			<TextInput
				style={styles.inputStyle}
				placeholder='Search Bar'
				autoCapitalize='none'
				autoCorrect={false}
				value={term}
				onChangeText={onTermChange}
				onEndEditing={onTermSubmit}
			></TextInput>
		</View>
	);
};

const styles = StyleSheet.create({
	backgroundStyle: {
		backgroundColor: '#f0eeee',
		margin: 10,
		height: 50,
		borderRadius: 5,
		flexDirection: 'row',
	},
	inputStyle: {
		fontSize: 18,
		flex: 1,
	},
	iconStyle: {
		fontSize: 35,
		color: 'black',
		alignSelf: 'center',
		marginHorizontal: 5,
	},
});

export default SearchBar;
