import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { ListItem } from '../../components/ListItem/ListItem';
import { useData } from '../../hooks/useData';



export const ListScreen = () => {
    const navigator = useNavigation()

    const { 
        dollarInfo, 
        euroInfo, 
        ipcInfo, 
        ufInfo, 
        utmfInfo, 
        dailyEuro, 
        dailyDollar, 
        monthlyIpc, 
        dailyUf, 
        monthlyUtm, 
        dolarTenDays, 
        euroTenDays, 
        ufTenDays,
    } = useData()

    useEffect(() => {
        navigator.setOptions({
            title: 'Indicadores',
            headerBacklTitle: ''
        })
    }, [])

    return (
        <SafeAreaView>
            <ListItem 
                title={"Dólar"} 
                comparative={"Pesos"} 
                data={dollarInfo}
                cardData={dailyDollar}
                chartData={dolarTenDays}
                cardName={"Dólar"} 
                units={"Pesos"}
            />
            <ListItem 
                title={"Euro"} 
                comparative={"Pesos"} 
                data={euroInfo} 
                cardData={dailyEuro} 
                chartData={euroTenDays} 
                cardName={"Euro"}
                units={"Pesos"}
            />
            <ListItem 
                title={"Indice de Precios Al Consumidor"} 
                comparative={"Porcentaje"} 
                data={ipcInfo} 
                cardData={monthlyIpc}
                cardName={"Indice de Precios Al Consumidor"}
            />
            <ListItem 
                title={"Unidad de Fomento"} 
                data={ufInfo}
                cardData={dailyUf}
                cardName={"Unidad de Fomento"}
                chartData={ufTenDays}
            />
            <ListItem 
                title={"Unidad Tributaria Mensual"} 
                comparative={"Porcentaje"} 
                data={utmfInfo}
                cardData={monthlyUtm}
                cardName={"Unidad Tributaria Mensual"}
            />
        </SafeAreaView>
    )
}
