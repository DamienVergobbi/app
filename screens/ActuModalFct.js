import * as React from 'react';
import { SafeAreaView, ScrollView, Text, Image, Button, StyleSheet, StatusBar } from 'react-native';

function ActuModalFct({ navigation, route }) {
    // Get it from props
    const { title, image, date_actu, content } = route.params;
    
    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic" >
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.actu_container}>
                <Image source={{uri: image}} style={styles.actu_logo} resizeMode="contain" />
                <Text style={styles.actu_name}>{title}</Text>
                <Text style={styles.actu_detail}>Posté le {date_actu}.</Text>
                <Text style={styles.actu_content}>{content}</Text>
                <Button onPress={() => navigation.goBack()} title="Fermer" />
            </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    actu_container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingVertical: 30,
        margin: 'auto',
    },
    actu_name: {
        fontSize: 24,
        fontWeight: "700",
        color: '#333',
        textAlign: 'center',
        width: 300,
        paddingBottom: 20,
    },
    actu_logo: {
        width: 300,
        height: 250,
        marginVertical: 30,
    },
    actu_detail: {
        fontSize: 12,
        color: '#333',
        textAlign: 'center',
        width: 300,
    },
    actu_content: {
        paddingVertical: 30,
        color: '#333',
        textAlign: 'justify',
        width: 300,
    },
})

export default ActuModalFct