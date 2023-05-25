
import React from 'react'
import { Box, CircularProgress } from '@mui/material'

function Loader() {
  return (
    <>
    
    <Box sx={{
        position:'absolute',
        height:'100vh',
        width:'100vw',
        backgroundColor:'#000000cc',
        zIndex:100,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    }}
    >
        <Box>
            <CircularProgress/>
        </Box>
    </Box>
    
    </>
  )
}

export default Loader