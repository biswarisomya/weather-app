import './TimeZone.scss'
import { useLocation } from '../../context/LocationContext'
import { useEffect, useState } from 'react'
import { getTimeZone } from '../../api'
import { ClipLoader } from 'react-spinners'
import { ITimeZone } from '../../types'

const TimeZone = () => {
    const { location } = useLocation()
    const [timeZone, setTimeZone] = useState<{
        isLoading: boolean
        error: any
        data: ITimeZone | null
    }>({
        isLoading: false,
        error: null,
        data: null,
    })
    useEffect(() => {
        setTimeZone({ ...timeZone, data: null })
    }, [])

    useEffect(() => {
        if (!location) {
            setTimeZone({ ...timeZone, data: null })
        }
        if (location?.lon) {
            ;(async () => {
                setTimeZone({ ...timeZone, isLoading: true })
                const { data } = await getTimeZone(location?.name)

                setTimeZone({ ...timeZone, data, isLoading: false })
            })()
        }
    }, [location])

    if (timeZone.isLoading) {
        return (
            <div className="app-main-loader">
                <ClipLoader size="40px" />
            </div>
        )
    }

    if (!location) {
        return <div className="app-main-text">Please enter city name</div>
    }
    const { data } = timeZone
    return (
        <div className="TimeZone">
            <div className="TimeZone-details">
                <div>
                    <div>name</div>
                    <div>{data?.location.name}</div>
                </div>
                <div>
                    <div>region</div>
                    <div>{data?.location.region}</div>
                </div>
                <div>
                    <div>country</div>
                    <div>{data?.location.country}</div>
                </div>
                <div>
                    <div>latitude</div>
                    <div>{data?.location.lat}</div>
                </div>
                <div>
                    <div>longitude</div>
                    <div>{data?.location.lon}</div>
                </div>
                <div>
                    <div>timezone</div>
                    <div>{data?.location.tz_id}</div>
                </div>
                <div>
                    <div>localtime</div>
                    <div>{data?.location.localtime}</div>
                </div>
            </div>
        </div>
    )
}

export default TimeZone
