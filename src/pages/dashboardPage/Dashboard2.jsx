import React from 'react'

import DashboardCard from '../../Components/Card/DashboardCard'
import MiniDrawer from '../../Components/sidebar/SideBar2'
import Header2 from '../../Components/header/Header2/Header2'
import Footer from '../../Components/Footer/Footer'

import { useSelector } from 'react-redux'

import { Box, Stack, Typography } from '@mui/material'

function Dashboard2() {

    const open = useSelector((state)=>state.sideExpand.open)

    const cardData = [
        {
            title:'CUSTOMERS',
            number:10
        },
        {
            title:'INVOICES',
            number:1
        },
        {
            title:'PAID',
            number:0
        },
        {
            title:'UNPAID',
            number:1
        },
    ]

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

        <Box sx={{
            backgroundColor:'#6270e4',
            width:"100%",
            // height:'200vh'
        }}>
            <Stack 
                direction='row' 
                justifyContent='center' 
                alignItems='center'
                spacing={{
                    xs:0,
                    sm:0,
                    md:4
                }} 
                gap={{
                    xs:2,
                    sm:2,
                    md:0
                }}
                py={15}
                sx={{
                    flexDirection:{
                        xs:'column',
                        sm:'column',
                        md:'row'
                    },
                }}
            >
                {cardData.map((item,index)=>{
                    return(
                        <DashboardCard key={index} data={item}/>
                    )
                })}
            </Stack>
        </Box>

    </Box>
    <Footer/>
    </>
  )
}

export default Dashboard2