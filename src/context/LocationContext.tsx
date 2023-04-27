import {
    createContext,
    useContext,
    useMemo,
    useState,
    Dispatch,
    SetStateAction,
} from 'react'
import { ILocation } from '../api'

interface LocationContextProps {
    location: ILocation | null
    setLocation: Dispatch<SetStateAction<ILocation | null>>
}

const CityContext = createContext<LocationContextProps>({
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

    return <CityContext.Provider value={value}>{children}</CityContext.Provider>
}

const useLocation = () => useContext(CityContext)

export { LocationProvider, useLocation }
