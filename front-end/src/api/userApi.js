import axiosClient from './axiosClient'

const userApi = {
    update: (id, credentials) => {
        const url = `/api/users/${id}`
        return axiosClient.patch(url, credentials)
    },
}

export default userApi
