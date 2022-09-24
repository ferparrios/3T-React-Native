import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View } from 'react-native'
import { CardData } from '../../components/CardData/CardData'
import { Chart } from '../../components/Chart/Chart'

interface Props extends StackScreenProps<any, any> { }

export const CardScreen = ({ route }: Props) => {

  const params = route.params

  return (
    <View>
      <CardData cardData={params.cardData} cardName={params.cardName} units={params.units} />
      <Chart chartData={params.chartData} />
    </View>
  )
}
