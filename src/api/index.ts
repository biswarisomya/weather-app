import axios, { AxiosResponse } from 'axios'
import {
    IAstronomy,
    IIpDetails,
    ILocation,
    ISportDetails,
    ITimeZone,
    IWeather,
} from '../types'

const BASE_URl = 'https://weatherapi-com.p.rapidapi.com'
const headers = {
    'X-RapidAPI-Key': '6dbd64ec1bmshf41240f479676d1p1f43e7jsnfee48f44cc1d',
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
