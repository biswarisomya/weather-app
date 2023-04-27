import './Astronomy.scss'
import { useEffect, useState } from 'react'
import { getAstronomy } from '../../api'
import { useLocation } from '../../context/LocationContext'
import { ClipLoader } from 'react-spinners'
import { IAstronomy } from '../../types'

const Astronomy = () => {
    const { location } = useLocation()
    const [astronomyDetails, setAstronomyDetails] = useState<{
        isLoading: boolean
        error: any
        data: IAstronomy | null
    }>({
        isLoading: false,
        error: null,
        data: null,
    })
    useEffect(() => {
        setAstronomyDetails({ ...astronomyDetails, data: null })
    }, [])

    useEffect(() => {
        if (!location) {
            setAstronomyDetails({ ...astronomyDetails, data: null })
        }
        if (location?.lon) {
            ;(async () => {
                setAstronomyDetails({ ...astronomyDetails, isLoading: true })
                const { data } = await getAstronomy(
                    `${location?.lat},${location?.lon}`
                )

                setAstronomyDetails({
                    ...astronomyDetails,
                    data,
                    isLoading: false,
                })
            })()
        }
    }, [location])

    if (astronomyDetails.isLoading) {
        return (
            <div className="app-main-loader">
                <ClipLoader size="40px" />
            </div>
        )
    }

    if (!location) {
        return <div className="app-main-text">Please enter city name</div>
    }

    const { data } = astronomyDetails

    return (
        <div className="Astronomy">
            <div className="Astronomy-top">
                <div>
                    <div>City</div>
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
            </div>
            <div className="Astronomy-bottom">
                <div>
                    <div>sunrise</div>
                    <div>{data?.astronomy.astro.sunrise}</div>
                </div>
                <div>
                    <div>sunset</div>
                    <div>{data?.astronomy.astro.sunset}</div>
                </div>
                <div>
                    <div>moonrise</div>
                    <div>{data?.astronomy.astro.moonrise}</div>
                </div>
                <div>
                    <div>moonset</div>
                    <div>{data?.astronomy.astro.moonset}</div>
                </div>
                <div>
                    <div>moon phase</div>
                    <div>{data?.astronomy.astro.moon_phase}</div>
                </div>
                <div>
                    <div>moon illumination</div>
                    <div>{data?.astronomy.astro.moon_illumination}</div>
                </div>
            </div>
        </div>
    )
}

export default Astronomy
