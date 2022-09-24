import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import { ResultsScreenStyles } from './ResultsScreen.presets';
import { RootStackParams } from '../../navigator/StackNavigator';
import { Resp } from '../../interfaces/respInterface';


interface Props extends StackScreenProps<RootStackParams, 'ResultsScreen'> { }

export const ResultsScreen = ({ route }: Props) => {

    const params = route.params.data 

    return (
        <SafeAreaView>
            <ScrollView>
                {
                    params.map((i: Resp) => (
                        <View style={ResultsScreenStyles.container}>
                            <Text style={ResultsScreenStyles.dateTitle}>
                                {i.Fecha.trim()}
                            </Text>
                            <Text style={ResultsScreenStyles.valueText}>
                                ${i.Valor.trim()}
                            </Text>
                        </View>
                    ))
                }
            </ScrollView>
        </SafeAreaView>
    )
}
