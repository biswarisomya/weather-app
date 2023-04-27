import axios, { AxiosResponse } from 'axios'
import {
    IAstronomy,
    IIpDetails,
    ILocation,
    ISportDetails,
    ITimeZone,
    IWeather,
} from '../types'

const BASE_URl = process.env.REACT_APP_SERVICE_URL
const headers = {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
}

export const getCity = (
    location: string
): Promise<AxiosResponse<ILocation[]>> => {
    return axios.get(`${BASE_URl}/search.json?q=${location}`, { headers })
}

export const getWeather = (
    location: string
): Promise<AxiosResponse<IWeather>> => {
    return axios.get(`${BASE_URl}/current.json?q=${location}`, {
        headers: { ...headers, 'Content-Type': 'application/octet-stream' },
    })
}
export const getIpDetails = (
    ip: string
): Promise<AxiosResponse<IIpDetails>> => {
    return axios.get(`${BASE_URl}/ip.json?q=${ip}`, {
        headers: { ...headers, 'Content-Type': 'application/octet-stream' },
    })
}

export const getTimeZone = (
    location: string
): Promise<AxiosResponse<ITimeZone>> => {
    return axios.get(`${BASE_URl}/timezone.json?q=${location}`, {
        headers: { ...headers, 'Content-Type': 'application/octet-stream' },
    })
}

export const getAstronomy = (
    location: string
): Promise<AxiosResponse<IAstronomy>> => {
    return axios.get(`${BASE_URl}/astronomy.json?q=${location}`, {
        headers: { ...headers, 'content-type': 'application/octet-stream' },
    })
}

export const getSports = (
    location: string
): Promise<AxiosResponse<ISportDetails>> => {
    return axios.get(`${BASE_URl}/sports.json?q=${location}`, {
        headers: { ...headers, 'content-type': 'application/octet-stream' },
    })
}
