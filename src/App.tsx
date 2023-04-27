import './App.scss'
import Header from './container/Header/Header'
import { LocationProvider } from './context/LocationContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ErrorPage from './error-page'
import Sidebar from './container/Sidebar/Sidebar'
import RealTimeWeather from './routes/root/RealTimeWeather'
import IpLookup from './routes/ip/IpLookup'
import TimeZone from './routes/timezone/TimeZone'
import Astronomy from './routes/astronomy/Astronomy'
import Sport from './routes/sport/Sport'

function App() {
    return (
        <LocationProvider>
            <BrowserRouter>
                <div className="app">
                    <div className="app-header">
                        <Header />
                    </div>
                    <div className="app-sidebar">
                        <Sidebar />
                    </div>
                    <div className="app-main">
                        <Routes>
                            <Route
                                path="/"
                                element={<RealTimeWeather />}
                                errorElement={<ErrorPage />}
                            />

                            <Route
                                path="/timezone"
                                element={<TimeZone />}
                                errorElement={<ErrorPage />}
                            />
                            <Route
                                path="/astronomy"
                                element={<Astronomy />}
                                errorElement={<ErrorPage />}
                            />
                            <Route
                                path="/sports"
                                element={<Sport />}
                                errorElement={<ErrorPage />}
                            />
                            <Route
                                path="/ip"
                                element={<IpLookup />}
                                errorElement={<ErrorPage />}
                            />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </LocationProvider>
    )
}

export default App
