import axios from "axios";

const financeData = axios.create({
    baseURL: 'https://api.sbif.cl/api-sbifv3/recursos_api',
    params: {
        apikey: 'e97e55b88643fe3fc74c9a5d97103614f052e118',
        formato: 'json'
    }
})

export default financeData