import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import InstallScreen from '../screens/InstallScreen';
import CalendarScreen from '../screens/CalendarScreen';
import ChatScreen from '../screens/ChatScreen';
import AccountScreen from '../screens/AccountScreen';

const Tab = createBottomTabNavigator();

export default function BottomBar({ navigation }) {
	return (
		<Tab.Navigator screenOptions={({ route }) => ({
			tabBarIcon: ({ color, size }) => {
				let iconName;
	
				if (route.name === 'home')
					iconName = 'home'
				else if (route.name === 'install')
					iconName = 'hammer'
				else if (route.name === 'calendar')
					iconName = 'calendar'
				else if (route.name === 'chat')
					iconName = 'chatbubbles'
				else if (route.name === 'account')
					iconName = 'person'
	
				return <Ionicons name={iconName} size={size} color={color} />;
			},
			tabBarActiveTintColor: '#fff',
			tabBarInactiveTintColor: '#ccc',
			headerStyle: { backgroundColor: '#000' },
			tabBarStyle: { backgroundColor: '#000' },
			tabBarInactiveBackgroundColor: '#000',
			tabBarActiveBackgroundColor: '#000',
			headerTintColor: '#fff',
            headerShadowVisible: false,
            tabBarLabel: () => {return null}
		})} >
			<Tab.Screen name="home" component={HomeScreen} options={{title: "Dernières actualités"}} />
			<Tab.Screen name="install" component={InstallScreen} options={{title: "Mes installations"}} />
			<Tab.Screen name="calendar" component={CalendarScreen} options={{title: "Calendrier"}} />
			<Tab.Screen name="chat" component={ChatScreen} options={{title: "Messagerie"}} />
			<Tab.Screen name="account" component={AccountScreen} options={{title: "Mon compte"}} />
		</Tab.Navigator>
	);
}