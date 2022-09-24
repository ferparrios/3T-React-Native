import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import { WelcomeScreenStyles } from './WelcomeScreen.presets';

import Icon from 'react-native-vector-icons/MaterialIcons'


export const WelcomeScreen = () => {

    const navigator = useNavigation()

    return (
        <SafeAreaView>
            <View style={WelcomeScreenStyles.container}>
                <View style={WelcomeScreenStyles.iconContainer}>
                    <Icon name="attach-money" color={"red"} size={100} />
                </View>
                <Text style={WelcomeScreenStyles.titleText}>
                    Welcome to the MoneyApp
                </Text>

                <TouchableOpacity
                    onPress={() => {
                        navigator.navigate('ListScreen')
                    }}
                    style={WelcomeScreenStyles.buttonContainer}
                >
                    <Text style={WelcomeScreenStyles.buttonText}>
                        Click to check the data
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
