import React from 'react'
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, Dimensions, TextInput } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

const LoginScreen = props => {
    return (
        <View style={styles.mainContainer}>
            <ImageBackground 
                source={require('../assets/login-bg.jpg')}
                style={styles.backgroundImage}
                blurRadius='3'
                borderBottomLeftRadius={40}
                borderBottomRightRadius={40}
            > 
            </ImageBackground>
            <View style={styles.filter}></View>
            <View style={styles.headerText}>
                <View style={styles.titleContainer}>
                    <View>
                        <Text style={styles.title}>
                            find
                        </Text>
                    </View>
                    <View style={styles.subTitle}>
                        <FontAwesome name='search' color='#FF256C' size={30}/>
                        <Text style={styles.title}>
                            ut
                        </Text>
                    </View>
                </View>
                <Text style={styles.headerLoginText}>Log In</Text>
                <Text style={styles.headerSlideText}>Slide to go Back</Text>
                <FontAwesome name='chevron-down' color='white' size={18}/>
            </View>

            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <FontAwesome name='user' color='#FF256C' size={16}/>
                    <TextInput
                        placeholder='Search'
                        placeholderTextColor='grey'
                        style={{marginLeft: 15}}
                    >
                    </TextInput>
                </View>
                <View style={styles.inputContainer2}>
                    <View style={{flexDirection: 'row'}}>
                        <FontAwesome name='user' color='#FF256C' size={16}/>
                        <TextInput
                            placeholder='Search'
                            placeholderTextColor='grey'
                            style={{marginLeft: 15}}
                        >
                        </TextInput>
                    </View>
                    <FontAwesome name='eye' color='#FF256C' size={16}/>
                </View>
                <Text style={styles.forgotText}>Forgot your password?</Text>
                <TouchableOpacity 
                    style={styles.loginBtn}
                    onPress={() => {
                        props.navigation.navigate({name: 'Travels'})
                    }}
                >
                    <Text style={styles.loginBtnText}>Log In</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    backgroundImage: {
        height: Dimensions.get('window').height * .55
    },
    filter: {
        height: Dimensions.get('window').height * .55,
        backgroundColor: 'black',
        opacity: .3,
        position: 'absolute',
        width: '100%',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
    },
    headerText: {
        position: 'absolute',
        width: '100%',
        top: 0,
        alignItems: 'center'
    },
    titleContainer: {
        marginTop: 40,
        width: Dimensions.get('window').width * .4
    },
    title: {
        color: 'white',
        fontSize: 45,
        fontWeight: 'bold',
    },
    subTitle: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginTop: -20,
        marginLeft: 55
    },
    headerLoginText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 130
    },
    headerSlideText: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold',
        marginTop: 25,
        marginBottom: 10
    },
    formContainer: {
        marginHorizontal: 25,
        marginVertical: 40
    },
    inputContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'lightgrey',
        marginBottom: 20
    },
    inputContainer2: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'lightgrey',
        marginBottom: 20,
        justifyContent: 'space-between'
    },
    forgotText: {
        color: 'grey',
        alignSelf: 'center'
    },
    loginBtn: {
        backgroundColor: '#FF256C',
        padding: 10,
        borderRadius: 10,
        marginTop: 30
    },
    loginBtnText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})

export default LoginScreen
