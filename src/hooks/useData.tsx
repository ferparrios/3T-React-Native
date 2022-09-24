import { useEffect, useState } from "react"
import financeData from "../api/data"
import { Resp } from '../interfaces/respInterface';


export const useData = () => {

    const [dollarInfo, setDollarInfo] = useState<Resp[]>([])
    const [euroInfo, setEuroInfo] = useState<Resp[]>([])
    const [ipcInfo, setIpcInfo] = useState<Resp[]>([])
    const [utmfInfo, setUtmfInfo] = useState<Resp[]>([])
    const [ufInfo, setUfInfo] = useState<Resp[]>([])
    const [dailyDollar, setDailyDollar] = useState<Resp[]>([])
    const [dailyEuro, setDailyEuro] = useState<Resp[]>([])
    const [monthlyIpc, setMonthlyIpc] = useState<Resp[]>([])
    const [dailyUf, setDailyUf] = useState<Resp[]>([])
    const [monthlyUtm, setMonthlyUtm] = useState<Resp[]>([])
    const [dolarTenDays, setDolarTenDays] = useState<Resp[]>([])
    const [euroTenDays, setEuroTenDays] = useState<Resp[]>([])
    const [ufTenDays, setUfTenDays] = useState<Resp[]>([])
    const [isLoading, setIsLoading] = useState(true)


    const getDollars = async () => {
        const resp = await financeData.get('/dolar/2022/08')
        setDollarInfo(resp.data.Dolares)
    }

    const getEuros = async () => {
        const resp = await financeData.get('/euro/2022/08')
        setEuroInfo(resp.data.Euros)
    }

    const getIpc = async () => {
        const resp = await financeData.get('/ipc/2022')
        setIpcInfo(resp.data.IPCs)
    }

    const getUF = async () => {
        const resp = await financeData.get('/uf/2022/08')
        setUfInfo(resp.data.UFs)
    }

    const getUtm = async () => {
        const resp = await financeData.get('/utm/2010')
        setUtmfInfo(resp.data.UTMs)
    }

    const getDailyEuro = async () => {
        const resp = await financeData.get('/euro')
        setDailyEuro(resp.data.Euros)
    }

    const getDailyDollar = async () => {
        const resp = await financeData.get('/dolar')
        setDailyDollar(resp.data.Dolares)
    }

    const getMonthlyIpc =async () => {
        const resp = await financeData.get('/ipc')
        setMonthlyIpc(resp.data.IPCs)
    }

    const getDailyUf =async () => {
        const resp = await financeData.get('/uf')
        setDailyUf(resp.data.UFs)
    }

    const getMonthlyUtm =async () => {
        const resp = await financeData.get('utm')
        setMonthlyUtm(resp.data.UTMs)
    }

    const getDolarTenDays = async () => {
        const resp =  await financeData.get('/dolar/periodo/2022/09/dias_i/04/2022/09/dias_f/20')
        setDolarTenDays(resp.data.Dolares)
    }

    const getEuroTenDays = async () => {
        const resp = await financeData.get('/euro/periodo/2022/09/dias_i/04/2022/09/dias_f/20')
        setEuroTenDays(resp.data.Euros)
    }

    const getUfTenDays = async () => {
        const resp = await financeData.get('/uf/posteriores/2022/09')
        setUfTenDays(resp.data.UFs)

    }

    useEffect(() => {
        getDollars()
        getEuros()
        getIpc()
        getUF()
        getUtm()
        getDailyEuro()
        getDailyDollar()
        getMonthlyIpc()
        getDailyUf()
        getMonthlyUtm()
        getDolarTenDays()
        getEuroTenDays()
        getUfTenDays()
        setIsLoading(false)
      }, [])

    return {
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
        isLoading
    }
}