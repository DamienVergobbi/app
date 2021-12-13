import * as React from 'react';
import { Animated, Easing, SafeAreaView, StyleSheet, StatusBar } from 'react-native';

class Loader extends React.Component {
	constructor(props) {
        super(props);
        this.animatedValue = new Animated.Value(0);
    }

	handleAnimation = () => {
        Animated.timing(this.animatedValue, {
            toValue: 1,
            duration: 1800,
			useNativeDriver: false,
            easing: Easing.in(Easing.bounce)
        }).start()
    }

	render() {
		this.handleAnimation();

		return (
			<SafeAreaView style={styles.container}>
				<StatusBar barStyle="dark-content" />
				<Animated.Image
                    source={{ uri: 'https://www.mayansenergies.com/img/logo.png'}} 
                    resizeMode='contain'
                    style={{
                        height: 150,
                        width: 150,
                        transform: [
                            {
                                scale: this.animatedValue.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [.6, 1]
                                })
                            }
                        ]
                    }}
				/>
			</SafeAreaView>
		);
	}
}

function LoadScreen({ navigation }) {
	setTimeout(() => {
		navigation.navigate('home_base');
	}, 2000);
	return (<Loader/>)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#000',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	image: {
		height: 150,
		width: 150,
	}
})

export default LoadScreen