import React from 'react'
import { Text, View } from 'react-native'
import { CardItem } from '../CardItem/CardItem'
import { CardDataStyles } from './CardData.presets';
import { Resp } from '../../interfaces/respInterface';

interface CardDataProps {
    cardData: Resp[]
    cardName: string
    units: string
}

export const CardData = ({ cardData, cardName, units }: CardDataProps) => {

    return (
        <View style={CardDataStyles.container}>
            <View style={CardDataStyles.valueContainer}>
                <Text style={CardDataStyles.valueText}>
                    ${cardData[0].Valor}
                </Text>
            </View>

            <CardItem title={"Nombre:"} data={cardName} />
            <CardItem title={"Fecha:"} data={cardData[0].Fecha} />
            {
                units && (
                    <CardItem title={"Unidad de Medida"} data={units} />
                )
            }
        </View>
    )
}
