import * as React from 'react';
import { Button, View, Text } from 'react-native';
import pageStyles from '../css/PageStyles';

export default function ChatScreen({ navigation }) {
	return (
		<View style={pageStyles.container}>
			<Text style={pageStyles.title}>Messagerie</Text>
			<Button
				title="Coucou"
				onPress={() => navigation.goBack()}
			/>
		</View>
	);
}