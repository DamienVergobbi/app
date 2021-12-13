import * as React from 'react';
import { Button, View, Text } from 'react-native';
import pageStyles from '../css/PageStyles';

export default function CalendarScreen({ navigation }) {
	return (
		<View style={pageStyles.container}>
			<Text style={pageStyles.title}>Rendez-vous</Text>
			<Button
				title="Coucou"
				onPress={() => navigation.navigate('chat')}
			/>
		</View>
	);
}