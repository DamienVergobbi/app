import * as React from 'react';
import { SafeAreaView, StatusBar, Text, Image, Button, StyleSheet } from 'react-native';

function InstalModalFct({ navigation, route }) {
    // Get it from props
    const { title, image, date_pose, content, fabricant, location } = route.params;
    
    return (
        <SafeAreaView style={styles.ins_container}>
            <StatusBar barStyle="dark-content" />
            <Image source={{uri: image}} style={styles.ins_logo} resizeMode="contain" />
            <Text style={styles.ins_name}>{title}</Text>
            <Text style={styles.ins_detail}>Produit de la marque {fabricant}</Text>
            <Text style={styles.ins_detail}>Posé le {date_pose} au {location}</Text>
            <Text style={styles.ins_content}>{content}</Text>
            <Button onPress={() => navigation.goBack()} title="Fermer" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    ins_container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingVertical: 30,
        margin: 'auto',
    },
    ins_name: {
        fontSize: 24,
        fontWeight: "700",
        color: '#333',
        textAlign: 'center',
        width: 300,
        paddingBottom: 20,
    },
    ins_logo: {
        width: 300,
        height: 250,
        marginVertical: 30,
    },
    ins_detail: {
        fontSize: 12,
        color: '#333',
        textAlign: 'center',
        width: 300,
    },
    ins_content: {
        paddingVertical: 30,
        color: '#333',
        textAlign: 'justify',
        width: 300,
    },
})

export default InstalModalFct