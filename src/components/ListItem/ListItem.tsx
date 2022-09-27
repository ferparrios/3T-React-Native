import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons'
import { ListItemStyles } from './ListItem.presets';
import { Resp } from '../../interfaces/respInterface';
// import { useData } from '../../hooks/useData';


interface ListItemProps {
  title: string
  comparative?: string
  data?: Resp[]
  cardData?: Resp[]
  chartData?: Resp[]
  cardName: string
  units?: string
}

export const ListItem = ({ 
  title, 
  comparative, 
  data, 
  cardData, 
  chartData, 
  cardName, 
  units,
}: ListItemProps) => {

  const navigator = useNavigation()

  return (
    <SafeAreaView style={ListItemStyles.container}>
      <View>
        <TouchableOpacity
          onPress={() => navigator.navigate('ResultsScreen', {
            data: data
          })}
        >
          <Text style={ListItemStyles.listText}>
            {title}
          </Text>
        </TouchableOpacity>
        <Text style={ListItemStyles.listText}>
          {comparative}
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => navigator.navigate('CardScreen', {
          cardData: cardData,
          chartData: chartData,
          cardName: cardName,
          units: units
        })}
        style={ListItemStyles.iconsContainer}
      >
        <Icon name="info" color={"#84B1ED"} size={30} />
        <Icon name="keyboard-arrow-right" color={"gray"} size={10} />
      </TouchableOpacity>
    </SafeAreaView>
  )
}
