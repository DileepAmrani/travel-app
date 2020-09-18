import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useFonts } from 'expo-font'
import { AppLoading } from 'expo'

import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen'
import TravelsScreen from './screens/TravelsScreen'


const Stack = createStackNavigator()

const Routes = () => {

    let [fontsLoaded] = useFonts({
        'Poppins': require('./assets/fonts/Poppins-Regular.ttf'),
        'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    })

    if (fontsLoaded) {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name='Loading'
                        component={LoadingScreen}
                        options={{header: () => null}}
                    />
                    <Stack.Screen
                        name='Login'
                        component={LoginScreen}
                        options={{header: () => null}}
                    />
                    <Stack.Screen
                        name='Travels'
                        component={TravelsScreen}
                        options={{header: () => null}}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
    else {
        return (
            <AppLoading/>
        )
    }
}

export default Routes
