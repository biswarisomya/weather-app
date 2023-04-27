import {
    createContext,
    useContext,
    useMemo,
    useState,
    Dispatch,
    SetStateAction,
} from 'react'
import { ILocation } from '../types'

interface LocationContextProps {
    location: ILocation | null
    setLocation: Dispatch<SetStateAction<ILocation | null>>
}

const LocationContext = createContext<LocationContextProps>({
    location: null,
    setLocation: (prevState: SetStateAction<ILocation | null>) => prevState,
})

interface LocationProviderProps {
    children: React.ReactNode
}

function LocationProvider({ children }: LocationProviderProps) {
    const [location, setLocation] = useState<ILocation | null>(null)

    const value = useMemo(
        () => ({ location, setLocation }),
        [location, setLocation]
    )

    return (
        <LocationContext.Provider value={value}>
            {children}
        </LocationContext.Provider>
    )
}

const useLocation = () => useContext(LocationContext)

export { LocationProvider, useLocation }
