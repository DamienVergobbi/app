import * as React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import pageStyles from '../css/PageStyles';
import ActuList from '../components/ActuList';

export default function HomeScreen({ navigation }) {
	return (
		<View style={pageStyles.container, styles.act_wrapper}>
			<StatusBar barStyle="light-content" />
			<ActuList navigation={navigation}/>
		</View>
	);
}

const styles = StyleSheet.create({
	act_main_title_wrapper: {
		minHeight: 40,
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderBottomColor: 'rgb(216, 216, 216)',
		borderBottomWidth: 1
	},
	act_main_title: {
		flex: 1,
		textAlign: 'center',
		fontWeight: "700",
		fontSize: 16,
		color: '#fff',
	},
	act_wrapper: {
		flex: 1,
		justifyContent: 'flex-start',
		backgroundColor: '#141414'
	},
})