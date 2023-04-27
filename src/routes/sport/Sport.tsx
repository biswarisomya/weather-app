import { useLocation } from '../../context/LocationContext'
import { useEffect, useState } from 'react'
import { ISportDetails } from '../../types'
import { getSports } from '../../api'
import { ClipLoader } from 'react-spinners'
import './Sport.scss'

const Sport = () => {
    const { location } = useLocation()
    const [sportsDetails, setSportsDetails] = useState<{
        isLoading: boolean
        error: any
        data: ISportDetails | null
    }>({
        isLoading: false,
        error: null,
        data: null,
    })
    useEffect(() => {
        setSportsDetails({ ...sportsDetails, data: null })
    }, [])

    useEffect(() => {
        if (!location) {
            setSportsDetails({ ...sportsDetails, data: null })
        }
        if (location?.lon) {
            ;(async () => {
                setSportsDetails({ ...sportsDetails, isLoading: true })
                const { data } = await getSports(location?.name)
                console.log('somya', data)
                setSportsDetails({
                    ...sportsDetails,
                    data,
                    isLoading: false,
                })
            })()
        }
    }, [location])

    if (sportsDetails.isLoading) {
        return (
            <div className="app-main-loader">
                <ClipLoader size="40px" />
            </div>
        )
    }

    if (!location || !sportsDetails.data) {
        return <div className="app-main-text">Please enter city name</div>
    }

    const details = Object.entries(sportsDetails.data).reduce(
        (
            acc: {
                stadium: string
                country: string
                region: string
                tournament: string
                start: string
                match: string
                type: string
            }[],
            [type, d]
        ) => {
            const temp = d.map((c: any) => {
                console.log('d', d)
                return {
                    ...c,
                    type,
                }
            })
            acc = [...acc, ...temp]

            return acc
        },
        []
    )

    console.log(details)

    return (
        <div className="Sport">
            {details.map((d) => {
                return (
                    <div key={d.start} className="Sport-top">
                        <div>
                            <div>country</div>
                            <div>{d.country}</div>
                        </div>
                        <div>
                            <div>match</div>
                            <div>{d.match}</div>
                        </div>
                        {d.region && (
                            <div>
                                <div>region</div>
                                <div>{d?.region}</div>
                            </div>
                        )}
                        <div>
                            <div>stadium</div>
                            <div>{d.stadium}</div>
                        </div>
                        <div>
                            <div>start</div>
                            <div>{d.start}</div>
                        </div>
                        <div>
                            <div>tournament</div>
                            <div>{d.tournament}</div>
                        </div>
                        <div>
                            <div>type</div>
                            <div>{d.type}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Sport
