import { Card, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'

import { FcStumbleupon } from "react-icons/fc";

function DashboardCard({data}) {


  return (
    <>
    
    <Card sx={{
        width:{
            xs:'70%',
            sm:'70%',
            md:'20%'
        },
        height:'5rem',
        ":hover":{
            scale:'1.03',
            cursor:'pointer'
        },
        transition:'150ms'
    }}>
        <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <CardContent>
            <Typography variant='body' fontSize='small' fontWeight='bold' color='text.disabled'>
                {data.title}
            </Typography>
            <Typography variant='h6' fontWeight='bold' >
                {data.number}
            </Typography>
        </CardContent>
        <CardContent>
            <FcStumbleupon size={50}/>
        </CardContent>
        </Stack>
    </Card>

    </>
  )
}

export default DashboardCard