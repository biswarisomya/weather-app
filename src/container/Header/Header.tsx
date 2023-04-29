import './Header.scss'
import Autocomplete from '@mui/material/Autocomplete'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { getCity } from '../../api'
import { useState } from 'react'
import { debounce } from 'lodash'
import { useLocation } from '../../context/LocationContext'
import { useLocation as useLoc } from 'react-router-dom'
import Button from '@mui/material/Button'
import { ILocation } from '../../types'
import { HiOutlineMenu } from 'react-icons/hi'
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'

const Header = () => {
    const { setLocation } = useLocation()
    const loc = useLoc()
    const [options, setOptions] = useState<ILocation[]>([])
    // const [ipInput, setIpInput] = useState('')
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const data = [
        {
            url: '',
            label: 'Realtime Weather',
        },
        {
            url: 'timezone',
            label: 'TIMEZONE',
        },
        {
            url: 'astronomy',
            label: 'ASTRONOMY',
        },
        {
            url: 'sports',
            label: 'SPORTS',
        },
    ]

    // const checkIfValidIP = (ipInput: string) => {
    //     // Regular expression to check if string is a IP address
    //     const regexExp =
    //         /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi
    //
    //     return regexExp.test(ipInput)
    // }

    const handleOnSubmit = (e: any) => {
        e.preventDefault()
        // if (!checkIfValidIP) {
        //     alert('You have entered an invalid IP address!')
        // } else {
        //     const fetchIpDetails = async () => {
        //         const res = await getIpDetails(ipInput)
        //         console.log(res)
        //     }
        // }
    }
    const handleInputChange = debounce(async (e, value) => {
        if (value === '') {
            setOptions([])
            return
        }
        try {
            console.log('value', value)
            const { data } = await getCity(value)
            setOptions(data)
        } catch (e: any) {
            alert('Error in autocomplete api')
        }
    }, 500)
    return (
        <div className="header">
            <div className="header-logo">
                <img
                    src={'./images/logo.png'}
                    alt={'logo'}
                    width="auto"
                    height={'50px'}
                />
            </div>
            <div className="header-search">
                {loc.pathname !== '/ip' && (
                    <Autocomplete
                        className="header-search-autocomplete"
                        disablePortal
                        id="combo-box-demo"
                        options={options}
                        noOptionsText=""
                        autoHighlight
                        onInputChange={handleInputChange}
                        onChange={(event: any, newValue: ILocation | null) => {
                            setLocation(newValue)
                        }}
                        renderInput={(params) => (
                            <TextField {...params} label="City" />
                        )}
                        getOptionLabel={(option: ILocation) =>
                            `${option.name},${
                                option?.region ? option?.region + ',' : ''
                            }${option.country}`
                        }
                        renderOption={(props, option) => (
                            <Box component="li" {...props}>
                                {option.name},
                                {option?.region ? option?.region + ',' : ''}
                                {option.country}
                            </Box>
                        )}
                    />
                )}

                {loc.pathname === '/ip' && (
                    <form
                        className="header-search-form"
                        onSubmit={handleOnSubmit}
                    >
                        <TextField
                            id="outlined-search"
                            label="Search Ip"
                            type="search"
                            // onChange={(e) => setIpInput(e.target.value)}
                        />
                        <Button variant="outlined" type="submit">
                            Submit
                        </Button>
                    </form>
                )}
            </div>
            <div className="header-menu">
                <Menu
                    noOverlay
                    onOpen={() => setMobileMenuOpen(!mobileMenuOpen)}
                    isOpen={mobileMenuOpen}
                    crossButtonClassName="hidden"
                    customBurgerIcon={<HiOutlineMenu />}
                    right
                >
                    {data.map((d) => (
                        <Link
                            key={d.label}
                            role="button"
                            to={d.url}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {d.label}
                        </Link>
                    ))}
                </Menu>
            </div>
        </div>
    )
}

export default Header
