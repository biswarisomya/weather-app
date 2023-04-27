import './IpLookUp.scss'

// import { useState } from 'react'
//
// import { IIpDetails } from '../../types'

const IpLookUp = () => {
    // const [ipDetails, setIpDetails] = useState<{
    //     isLoading: boolean
    //     error: any
    //     data: IIpDetails | null
    // }>({
    //     isLoading: false,
    //     error: null,
    //     data: null,
    // })

    // useEffect(() => {
    //     if (!location) {
    //         setWeather({ ...weather, data: null })
    //     }
    //     if (!weather.data && location?.lon) {
    //         ;(async () => {
    //             const { data } = await getWeather(
    //                 `${location?.lat},${location?.lon}`
    //             )
    //             setWeather({ ...weather, data })
    //         })()
    //     }
    // }, [location, weather.data])

    return (
        <div className="IpLookUp">
            <div className="IpLookUp-top">
                <div>
                    <div>Ip Address is:</div>
                    <div>ip</div>
                </div>
                <div>
                    <div>type</div>
                    <div>type</div>
                </div>
                <div>
                    <div>continent name</div>
                    <div>continent name</div>
                </div>
            </div>

            <div className="IpLookUp-bottom">
                <div>
                    <div>City</div>
                    <div>City</div>
                </div>
                <div>
                    <div>region</div>
                    <div>region</div>
                </div>
                <div>
                    <div>country</div>
                    <div>country</div>
                </div>
                <div>
                    <div>latitude</div>
                    <div>lat</div>
                </div>
                <div>
                    <div>longitude</div>
                    <div>lon</div>
                </div>
            </div>
        </div>
    )
}

export default IpLookUp
