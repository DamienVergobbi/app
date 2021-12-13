import * as React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, FlatList, Image } from 'react-native';
import ActuData from "../data/ActuData";

export default function ActuList({ navigation }) {
    const Item = ({ title, content, image, date_actu }) => (
        <TouchableOpacity 
            style={styles.act_container} 
            onPress={() => navigation.navigate('mod_actu', {
                title: title,
                image: image,
                content: content,
                date_actu: date_actu,
            })
        }>
            <View style={styles.act_header}>
                <Text style={styles.act_title}>{title}</Text>
                <Image 
                    source={{uri: image}}
                    style={styles.act_img}
                    resizeMode='cover'
                />
            </View>
            <Text style={styles.act_content} numberOfLines={3} >{content}</Text>
        </TouchableOpacity>
            
    );
    
    const renderItem = ({ item }) => (
        <Item title={item.title} content={item.content} image={item.image} date_actu={item.date_actu} />
    );
	  
	return (
        <FlatList
            data={ActuData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
	);
}

const styles = StyleSheet.create({
	act_container: {
        height: 'auto',
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		color: '#181818',
		margin: 20,
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
    act_header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 10,
    },
	act_title: {
		color: '#000',
		fontWeight: "700",
	},
	act_content: {
		color: '#181818',
        justifyContent: 'center',
		textAlign: 'left',
	},
    act_img: {
        height: 50,
        width: 50,
        borderRadius: 8.30,
    },
})