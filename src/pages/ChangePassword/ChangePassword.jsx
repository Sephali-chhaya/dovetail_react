import React from 'react'
import { useSelector } from 'react-redux'

import Header2 from '../../Components/header/Header2/Header2'
import Footer from '../../Components/Footer/Footer'
import MiniDrawer from '../../Components/sidebar/SideBar2'

import { Stack, Box, TextField, Button, Paper, Typography } from '@mui/material'

function ChangePassword() {

    const open = useSelector((state)=>state.sideExpand.open)

  return (
    <>
    
    <Header2/>
    <MiniDrawer/>
    <Box sx={{
        // marginTop:{
        //     xs:7,
        //     sm:8
        // },
        marginLeft:{
            xs:7,
            sm:8,        
        },
        ...(open && { marginLeft:33 }),
        transition:'200ms',
        minHeight:'77vh'
    }}>

    <Stack 
    direction='column'
    justifyContent='center'
    alignItems='center'
    >
        <Paper
        sx={{
            width:{
                md:'40%',
                sm:'60%',
                xs:'70'
            },
            padding:5,
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            gap:1,
            px:{
                md:'5%',
                sm:'5%'
            },
            my:10
        }}
        >
            <Typography 
            variant='h5'
            sx={{
                fontSize:{
                    md:'large',
                    sm:'medium',
                    xs:'medium'
                }
            }}
            >
                Change Password
            </Typography>
        <TextField
            label="Current Password"
            type="password"
            fullWidth
            margin="normal"
            required
            size='small'
        />

        <TextField
            label="New Password"
            type="password"
            fullWidth
            margin="normal"
            required
            size='small'
        />

        <TextField
            label="Confirm New Password"
            type="password"
            fullWidth
            margin="normal"
            required
            size='small'
        />


        <Button  variant="contained" color="primary">
            Update
        </Button>
        </Paper>
    </Stack>

    </Box>
    <Footer/>
    
    </>
  )
}

export default ChangePassword