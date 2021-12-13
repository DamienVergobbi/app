import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomBar from './components/BottomBar';
import LoadScreen from './screens/LoadScreen';
import InstalModalFct from './screens/InstalModalFct';
import ActuModalFct from './screens/ActuModalFct';

import { Button } from 'react-native';

const Stack = createNativeStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="load" component={LoadScreen} options={{ headerShown: false }} />
				<Stack.Screen name="home_base" component={BottomBar} options={{ headerShown: false }} />
				<Stack.Screen 
					name="mod_actu" 
					component={ActuModalFct}
					options={{
					headerBackTitle: 'Revenir',
					headerTitle: "Actualité",
						headerRight: () => (
							<Button
								onPress={() => console.log("Fermeture du modal")}
								title="Retour"
								color="#fff"
							/>
						),
					}} 
				/>
				<Stack.Screen 
					name="mod_install" 
					component={InstalModalFct}
					options={{
					headerBackTitle: 'Revenir',
					headerTitle: "Installation",
						headerRight: () => (
							<Button
								onPress={() => console.log("Fermeture du modal")}
								title="Retour"
								color="#fff"
							/>
						),
					}} 
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
export default App;