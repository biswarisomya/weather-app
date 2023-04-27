export interface ILocation {
    country: string
    id: number
    lat: number
    lon: number
    name: string
    region?: string
    url: string
}
export interface ILocationDetails {
    country: string
    lat: number
    lon: number
    name: string
    region?: string
    tz_id: string
    localtime_epoch?: number
    localtime?: string
}

interface ISport {
    stadium: string
    country: string
    region: string
    tournament: string
    start: string
    match: string
}

export interface ISportDetails {
    football?: ISport[]
    cricket?: ISport[]
    golf?: ISport[]
}

interface IHourDetails {
    time_epoch: number
    time: string
    temp_c: number
    temp_f: number
    is_day: number
    condition: {
        text: string
        icon: string
        code: number
    }
    wind_mph: number
    wind_kph: number
    wind_degree: number
    wind_dir: string
    pressure_mb: number
    pressure_in: number
    precip_mm: number
    precip_in: number
    humidity: number
    cloud: number
    feelslike_c: number
    feelslike_f: number
    heatindex_c: number
    heatindex_f: number
    dewpoint_c: number
    dewpoint_f: number
    will_it_rain: number
    chance_of_rain: number
    will_it_snow: number
    chance_of_snow: number
    vis_km: number
    vis_miles: number
    uv: number
    gust_mph: number
    gust_kph: number
}

interface IForecastDetails {
    forecastday: {
        date: string
        date_epoch: number
        day: {
            maxtemp_c: 12.1
            maxtemp_f: 53.8
            mintemp_c: 1.8
            mintemp_f: 35.2
            avgtemp_c: 7.1
            avgtemp_f: 44.8
            maxwind_mph: 7.6
            maxwind_kph: 12.2
            totalprecip_mm: 1.1
            totalprecip_in: 0.04
            totalsnow_cm: 0
            avgvis_km: 10
            avgvis_miles: 6
            avghumidity: 61
            daily_will_it_rain: 1
            daily_chance_of_rain: 86
            daily_will_it_snow: 0
            daily_chance_of_snow: 0
        }
        astro: IAstro
        hour: IHourDetails[]
    }[]
}

export interface IForecast {
    location: ILocationDetails
    current: ICurrentDetails
    forecast: IForecastDetails
}
interface IAstro {
    sunrise: string
    sunset: string
    moonrise: string
    moonset: string
    moon_phase: string
    moon_illumination: string
    is_moon_up: number
    is_sun_up: number
}

export interface IAstronomyDetails {
    astro: IAstro
}
export interface IAstronomy {
    location: ILocationDetails
    astronomy: IAstronomyDetails
}
export interface ICurrentDetails {
    last_updated_epoch: number
    last_updated: string
    temp_c: number
    temp_f: number
    is_day: number
    condition: {
        text: string
        icon: string
        code: number
    }
    wind_mph: number
    wind_kph: number
    wind_degree: number
    wind_dir: string
    pressure_mb: number
    pressure_in: number
    precip_mm: number
    precip_in: number
    humidity: number
    cloud: number
    feelslike_c: number
    feelslike_f: number
    vis_km: number
    vis_miles: number
    uv: number
    gust_mph: number
    gust_kph: number
}
export interface ITimeZone {
    location: ILocationDetails
}

export interface IWeather {
    location: ILocationDetails
    current: ICurrentDetails
}

export interface IIpDetails {
    ip: string
    type: string
    continent_code: string
    continent_name: string
    country_code: string
    country_name: string
    is_eu: boolean
    geoname_id: number
    city: string
    region: string
    lat: number
    lon: number
    tz_id: string
    localtime_epoch: number
    localtime: string
}
