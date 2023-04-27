import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Sidebar.scss'

const Sidebar = () => {
    const [value, setValue] = useState(0)
    const navigate = useNavigate()
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }

    return (
        <Box className="Sidebar">
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{
                    borderRight: 1,
                    borderColor: 'divider',
                }}
            >
                <Tab
                    label="Realtime Weather"
                    onClick={() => navigate('/')}
                    value={'/'}
                    sx={{
                        fontWeight: 'bold',
                    }}
                />

                <Tab
                    label="TIMEZONE"
                    value="/timezone"
                    onClick={() => navigate('/timezone')}
                    sx={{
                        fontWeight: 'bold',
                    }}
                />
                <Tab
                    label="ASTRONOMY"
                    value="/astronomy"
                    onClick={() => navigate('/astronomy')}
                    sx={{
                        fontWeight: 'bold',
                    }}
                />

                <Tab
                    label="SPORTS"
                    value="/sports"
                    onClick={() => navigate('/sports')}
                    sx={{
                        fontWeight: 'bold',
                    }}
                />
                {/*<Tab*/}
                {/*    label="IP LOOKUP"*/}
                {/*    value="/ip"*/}
                {/*    onClick={() => navigate('/ip')}*/}
                {/*    sx={{*/}
                {/*        fontWeight: 'bold',*/}
                {/*    }}*/}
                {/*/>*/}
            </Tabs>
        </Box>
    )
}
export default Sidebar
