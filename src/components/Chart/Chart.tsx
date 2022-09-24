import React from 'react'
import { View } from 'react-native'

import { LineChart } from "react-native-gifted-charts";
import { Resp } from '../../interfaces/respInterface';

interface ChartProps {
    chartData: Resp[]
}


export const Chart = ({ chartData }: ChartProps) => {

    let ar2: any = []
    const setValues = () => {
        chartData.forEach(e => {
            ar2.push({ value: parseInt(e.Valor), label: e.Fecha, dataPointText: parseInt(e.Valor) })
            return ar2
        })
    };

    setValues()


    return (
        <View>
            <LineChart
                data={ar2}
                height={250}
                showVerticalLines
                spacing={60}
                initialSpacing={30}
                color1="skyblue"
                color2="orange"
                textColor1="green"
                dataPointsHeight={6}
                dataPointsWidth={6}
                dataPointsColor1="blue"
                dataPointsColor2="red"
                textShiftY={-2}
                textShiftX={-5}
                textFontSize={13}
                noOfSections={3}
                width={320}
            />
        </View>
    );
}
