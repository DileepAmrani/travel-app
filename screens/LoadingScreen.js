import React from 'react'
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, Dimensions } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'


const LoadingScreen = props => {
    return (
        <TouchableOpacity
            onPress={() => {
                props.navigation.navigate({name: 'Login'})
            }}
        >
            <ImageBackground 
                source={require('../assets/loading.jpg')}
                style={styles.backgroundImage}
                blurRadius='3'
            >
                <View style={styles.titleContainer}>
                    <View>
                        <Text style={styles.title}>
                            find
                        </Text>
                    </View>
                    <View style={styles.subTitle}>
                        <FontAwesome name='search' color='#FF256C' size={50}/>
                        <Text style={styles.title}>
                            ut
                        </Text>
                    </View>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    backgroundImage: {
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    titleContainer: {
        marginBottom: 80,
        width: Dimensions.get('window').width * .5
    },
    title: {
        color: 'white',
        fontSize: 65,
        fontWeight: 'bold'
    },
    subTitle: {
        color: 'white',
        fontSize: 65,
        fontWeight: 'bold',
        flexDirection: 'row',
        position: 'absolute',
        top: 50,
        left: 75,
        alignItems: 'baseline',
        justifyContent: 'flex-end'
    }
})


export default LoadingScreen
