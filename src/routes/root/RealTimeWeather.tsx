import './RealTimeWeather.scss'
import { useLocation } from '../../context/LocationContext'
import { useEffect, useState } from 'react'
import { getWeather } from '../../api'
import { ClipLoader } from 'react-spinners'
import { IWeather } from '../../types'

const RealTimeWeather = () => {
    const { location } = useLocation()
    const [weather, setWeather] = useState<{
        isLoading: boolean
        error: any
        data: IWeather | null
    }>({
        isLoading: false,
        error: null,
        data: null,
    })

    useEffect(() => {
        setWeather({ ...weather, data: null })
    }, [])

    useEffect(() => {
        if (!location) {
            setWeather({ ...weather, data: null })
        }
        if (!weather.data && location?.lon) {
            ;(async () => {
                setWeather({ ...weather, isLoading: true })
                const { data } = await getWeather(
                    `${location?.lat},${location?.lon}`
                )
                setWeather({ ...weather, data, isLoading: false })
            })()
        }
    }, [location, weather.data])

    if (weather.isLoading) {
        return (
            <div className="app-main-loader">
                <ClipLoader size="40px" />
            </div>
        )
    }

    if (!location || location === null) {
        return <div className="app-main-text">Please enter city name</div>
    }
    return (
        <div className="RealTimeWeather">
            <div className="RealTimeWeather-main">
                <div className="RealTimeWeather-main-left">
                    <div className="RealTimeWeather-main-left-heading">
                        Current Weather
                    </div>
                    <div className="RealTimeWeather-main-left-date">
                        {weather.data?.location.localtime}
                    </div>
                    <img
                        className="RealTimeWeather-main-left-image"
                        src={weather.data?.current.condition?.icon}
                        width="auto"
                        alt="icon"
                    />
                    <div className="RealTimeWeather-main-left-temp">
                        <div className="RealTimeWeather-main-left-temp-f">
                            <div>{weather.data?.current.temp_f}°F</div>
                            <div>
                                Feels <span>like</span>:
                                {weather.data?.current.feelslike_f}°F
                            </div>
                        </div>
                        <div className="RealTimeWeather-main-left-temp-c">
                            <div>{weather.data?.current.temp_c}°C</div>
                            <div>
                                Feels <span>like</span>:
                                {weather.data?.current.feelslike_c}°C
                            </div>
                        </div>
                    </div>
                    <div className="RealTimeWeather-main-left-text">
                        {weather.data?.current.condition.text}
                    </div>
                </div>
                <div className="RealTimeWeather-main-right">
                    <div>
                        <div>name</div>
                        <div>{weather?.data?.location.name}</div>
                    </div>
                    <div>
                        <div>region</div>
                        <div>{weather?.data?.location.region}</div>
                    </div>
                    <div>
                        <div>country</div>
                        <div>{weather?.data?.location.country}</div>
                    </div>
                    <div>
                        <div>latitude</div>
                        <div>{weather?.data?.location.lat}</div>
                    </div>
                    <div>
                        <div>longitude</div>
                        <div>{weather?.data?.location.lon}</div>
                    </div>
                </div>
            </div>
            <div className="RealTimeWeather-details">
                <div>
                    <div>Wind</div>
                    <div>
                        {weather.data?.current.wind_mph}mph/
                        {weather.data?.current.wind_kph}kph
                    </div>
                </div>
                <div>
                    <div>Wind Degree</div>
                    <div>{weather.data?.current.wind_degree}</div>
                </div>
                <div>
                    <div>Wind Direction</div>
                    <div>{weather.data?.current.wind_dir}</div>
                </div>
                <div>
                    <div>Wind Dusts</div>
                    <div>
                        {weather.data?.current.gust_mph}mph/
                        {weather.data?.current.gust_kph}kph
                    </div>
                </div>
                <div>
                    <div>Pressure</div>
                    <div>
                        {weather.data?.current.pressure_mb}mb/
                        {weather.data?.current.pressure_in}in
                    </div>
                </div>
                <div>
                    <div>Humidity</div>
                    <div>{weather.data?.current.humidity}</div>
                </div>
            </div>
        </div>
    )
}

export default RealTimeWeather
