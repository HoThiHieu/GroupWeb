import axiosClient from './axiosClient'

const auth = {
    login: (credentials) => {
        const url = '/api/auth/login'
        return axiosClient.post(url, credentials)
    },
    register: (credentials) => {
        const url = '/api/auth/register'
        return axiosClient.post(url, credentials)
    },
}

export default auth