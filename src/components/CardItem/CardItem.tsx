import React from 'react'
import { View, Text } from 'react-native'
import { CardItemStyles } from './CardItem.presets';

interface CardItemProps {
    data: string
    title: string
}

export const CardItem = ({ data, title }: CardItemProps) => {
    return (
        <View style={CardItemStyles.container}>
            <Text style={CardItemStyles.titleText}>
                {title}
            </Text>
            <Text style={CardItemStyles.dataText}>
                {data}
            </Text>
        </View>
    )
}
