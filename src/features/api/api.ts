import axios from 'axios'

export const api = axios.create({
    baseURL: "http://localhost:8080/api/"
})

api.interceptors.request.use((config) => {
    return config
});
api.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        throw error.response.data
    }
);