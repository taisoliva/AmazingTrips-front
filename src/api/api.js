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

function getHotels(){
    const promise = axios.get(`${BASE_URL}/hotels`)
    return promise
}

function getHotel(id){
    const promise = axios.get(`${BASE_URL}/hotels/${id}`)
    return promise
}

function getPhoto(id){
    const promise = axios.get(`${BASE_URL}/photos/${id}`)
    return promise
}

function getPrice(id){
    const promise = axios.get(`${BASE_URL}/flights/${id}`)
    return promise
}

function getFlight(id){
    const promise = axios.get(`${BASE_URL}/flight/${id}`)
    return promise
}

const api = {
    getCities,
    getFlights,
    getHotels,
    getHotel,
    getPhoto,
    getPrice,
    getFlight
}

export default api