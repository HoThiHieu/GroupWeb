import axios from 'axios'
import queryString from 'query-string'
const REACT_APP_API_URL = 'http://localhost:2000'

const axiosClient = axios.create({
    baseURL: REACT_APP_API_URL,
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: (params) => queryString.stringify(params),
})

export default axiosClient
