import axios from "axios"

const BASE_URL = process.env.REACT_APP_API_URL

function getCities(){
    const promise = axios.get(`${BASE_URL}/locals`)
    return promise
}

function getFlights(){
    const promise = axios.get(`${BASE_URL}/flights`)
    return promise
}

const api = {
    getCities,
    getFlights
}

export default api