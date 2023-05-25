
import React from 'react'
import { useSelector } from 'react-redux'

import { Box, Typography, Stack} from '@mui/material'

function Footer() {

    const open = useSelector((state)=>state.sideExpand.open)

  return (
    <>
    
    <Box sx={{
        marginLeft:{
            xs:7,
            sm:8,        
        },
        ...(open && { marginLeft:30 }),
        transition:'200ms'
        
    }}>
        <Stack direction='row'
        padding={5}
        sx={{
            justifyContent:'space-between',
            backgroundColor:'#eeeeee88'
        }}
        >
            <Typography variant="body1" color="#33333399">
                &copy; {new Date().getFullYear()} NALANDA INDUSTRIAL CORPORATION
            </Typography>
            <Stack direction='row' justifyContent='space-between' width='30%'>
                <Typography color='#33333399'
                sx={{
                    ":hover":{
                        color:'#333333dd'
                    },
                    cursor:'pointer'
                }}
                >
                    RICI Tech
                </Typography>
                <Typography color='#333333bb'
                sx={{
                    ":hover":{
                        color:'#333333dd'
                    },
                    cursor:'pointer'
                }}                
                >
                    About Us
                </Typography>
                <Typography color='#333333bb'
                sx={{
                    ":hover":{
                        color:'#333333dd'
                    },
                    cursor:'pointer'
                }}
                >
                    Contact Us
                </Typography>
                <Typography color='#333333bb'
                sx={{
                    ":hover":{
                        color:'#333333dd'
                    },
                    cursor:'pointer'
                }}
                >
                    MIT License
                </Typography>
            </Stack>
        </Stack>
       
    </Box>
    
    </>
  )
}

export default Footer