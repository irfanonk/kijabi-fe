import axios from 'axios'

export const api = axios.create({
    baseURL: "https://kijabi-be.vercel.app/apiV1/"
    // baseURL: "http://localhost:8080/apiV1/"
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