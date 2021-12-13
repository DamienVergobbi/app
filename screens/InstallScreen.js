import * as React from 'react';
import { View } from 'react-native';
import pageStyles from '../css/PageStyles';
import InstallList from '../components/InstallList';

export default function InstallScreen({ navigation }) {
	return (
		<View style={pageStyles.container}>
			<InstallList navigation={navigation} />
		</View>
	);
}