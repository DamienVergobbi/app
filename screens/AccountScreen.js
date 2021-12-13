import * as React from 'react';
import { useState } from 'react';
import { Switch, View, Text, SafeAreaView, ScrollView, StyleSheet, TextInput, Button } from 'react-native';
import CompteData from '../data/CompteData';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Toast from 'react-native-toast-message';

export default function AccountScreen({ navigation }) {
	const [actu_enabled, set_actu_enabled] = useState(CompteData.usrNews);
	const [offre_enabled, set_offre_enabled] = useState(CompteData.usrOffres);

  	const toggleActu = () => {
		set_actu_enabled(previousState => !previousState);
	}
	const toggleOffre = () => {
		set_offre_enabled(previousState => !previousState);
	}

	const [usrTel, setUsrTel] = useState(CompteData.usrTel);
	const [usrAdress, setUsrAdress] = useState(CompteData.usrAddressee);
	const [usrEmail, setUsrEmail] = useState(CompteData.usrMail);

	const showToast = () => {
		Toast.show({
			type: 'success',
			text1: 'Changement enregistré !',
			text2: "L'adresse postale a bien été mise à jour 👍"
		});
	}

	validate = (text) => {
		console.log(text);
		let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
		if (reg.test(text) === false) {
		  console.log("Email is Not Correct");
		  this.setState({ email: text })
		  return false;
		}
		else {
		  this.setState({ email: text })
		  console.log("Email is Correct");
		}
	  }

	return (
		<ScrollView contentInsetAdjustmentBehavior="automatic" style={{backgroundColor: '#141414'}} >
			<SafeAreaView style={styles.container}>

				<View style={styles.wrapper}>
					<Text style={styles.title}>Type de compte :</Text>
					<Text style={styles.content}>{CompteData.usrStatus}</Text>
				</View>

				<View style={styles.wrapper}>
					<Text style={styles.title}>Compte de :</Text>
					<Text style={styles.content}>{CompteData.usrName}</Text>
				</View>
				<Toast />

				<View style={styles.wrapper}>
					<Text style={styles.title}>
						<Ionicons name="create" size={20} color="#ddd" />
						Adresse postale :
					</Text>
					<TextInput
						style={styles.content}
						editable={true}
						autoComplete="postal-address"
						autoCompleteType="street-address"
						textContentType="fullStreetAddress"
						keyboardType="default"
						value={usrAdress}
						onChangeText={usrAdress => setUsrAdress(usrAdress)}
						onBlur={showToast}
					/>
				</View>

				<View style={styles.wrapper}>
					<Text style={styles.title}>
						<Ionicons name="create" size={20} color="#ddd" />
						E-mail :
					</Text>
					<TextInput
						style={styles.content}
						editable={true}
						autoComplete="email"
						autoCompleteType="email"
						textContentType="emailAddress"
						keyboardType="email-address"
						value={usrEmail}
						onChangeText={usrEmail => setUsrEmail(usrEmail)}
					/>
				</View>

				<View style={styles.wrapper}>
					<Text style={styles.title}>
						<Ionicons name="create" size={20} color="#ddd" />
						Téléphone :
					</Text>
					<TextInput 
						style={styles.content}
						editable={true}
						autoComplete="tel"
						autoCompleteType="tel"
						clearButtonMode="while-editing"
						textContentType="telephoneNumber"
						keyboardType="number-pad"
						value={usrTel}
						onChangeText={usrTel => setUsrTel(usrTel)}
					/>
				</View>
				
				<View style={styles.wrapper}>
					<Text style={styles.title}>Mot de passe :</Text>
					<Text style={styles.content}>{CompteData.usrPass}</Text>
					<Button title="Modifier le mot de passe"></Button>
				</View>

				<View style={styles.wrapper}>
					<Text style={styles.title}>Notifications :</Text>

					<View style={styles.wrapper_notif}>
						<Text style={[styles.content, {paddingRight: 10}]}>Être informé des nouvelles offres :</Text>
						<Switch
							trackColor={{ false: "#333", true: "blue" }}
							thumbColor={offre_enabled ? "#fff" : "#f4f3f4"}
							ios_backgroundColor="#3e3e3e"
							onValueChange={toggleOffre}
							value={offre_enabled}
							style={{ transform: [{ scaleX: .7 }, { scaleY: .7 }] }}
						/>
					</View>

					<View style={styles.wrapper_notif}>
						<Text style={[styles.content, {paddingRight: 10}]}>Être informé des nouvelles actualités :</Text>
						<Switch
							trackColor={{ false: "#333", true: "blue" }}
							thumbColor={actu_enabled ? "#fff" : "#f4f3f4"}
							ios_backgroundColor="#3e3e3e"
							onValueChange={toggleActu}
							value={actu_enabled}
							style={{ transform: [{ scaleX: .7 }, { scaleY: .7 }] }}
						/>
					</View>

					<View style={styles.wrapper}>
						<Button title="Se déconnecter"></Button>
					</View>
				</View>
			</SafeAreaView>
		</ScrollView>
		
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 30,
		backgroundColor: 'transparent',
	},
	wrapper: {
		padding: 15,
	},
	wrapper_notif: {
		paddingVertical: 5,
		flexDirection: 'row',
		alignItems: 'center',
	},
	title: {
		fontSize: 20,
		fontWeight: "700",
		color: '#fff',
		paddingBottom: 15,
	},
	content: {
		fontSize: 16,
		fontWeight: "400",
		color: '#ddd',
	},
});