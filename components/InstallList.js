import * as React from 'react';
import { TouchableOpacity, Text, StyleSheet, FlatList, Image } from 'react-native';
import InstallData from '../data/InstallData';

export default function InstallList({ navigation }) {
    const Item = ({ title, image, content, date_pose, location, fabricant }) => (
        <TouchableOpacity style={styles.inst_container} onPress={() => navigation.navigate('mod_install', {
            title: title,
            image: image,
            content: content,
            date_pose: date_pose,
            location: location,
            fabricant: fabricant
        })}>
            <Image
				source={{ uri: image }}
				style={{height: 80, width: 80}}
			/>
        </TouchableOpacity>
    );
    const renderItem = ({ item }) => (
        <Item 
            title={item.title} 
            content={item.content} 
            image={item.image} 
            date_pose={item.date_pose}
            location={item.location}
            fabricant={item.fabricant}
        />
    );
	  
	return (
		<FlatList
            data={InstallData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={2}
        />
	);
}

const styles = StyleSheet.create({
	inst_container: {
        maxWidth: '50%',
		backgroundColor: '#fff',
		color: '#181818',
		margin: 10,
		paddingVertical: 30,
        paddingHorizontal: 40,
		borderRadius: 8.30,
        shadowColor: "#fff",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
	},
	inst_title: {
		color: '#000',
		fontWeight: "700",
	},
	inst_content: {
		color: '#181818',
		textAlign: 'justify',
	}
})