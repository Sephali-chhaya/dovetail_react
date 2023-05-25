import React, {useState, useEffect} from 'react'
import Header2 from '../../Components/header/Header2/Header2'
import Footer from '../../Components/Footer/Footer'
import MiniDrawer from '../../Components/sidebar/SideBar2'
import { Box, Paper, Typography, Card, Stack, Divider, TextField, FormControl, InputLabel, Select,MenuItem, Button } from '@mui/material'
import { useSelector } from 'react-redux'
import http from '../../services/http'

import StateList from '../../Components/List/StateList'
import ProfilePicture from '../../Components/Assets/images/profilePicture.jpg'

function Profile() {

    const open = useSelector((state)=>state.sideExpand.open) 
    const [formData,setFormData] = useState({})

    const changeHandler = (e)=>{
        const {name, value} = e.target
        setFormData((state)=>({
            ...state,
            [name]:value
        }))
    }

    const submitHandler = (e)=>{
        console.log(formData)
    }    

    const fetchUser = async()=>{
        const id = {
            "user_id":localStorage.getItem('user_id')
        }
        if(id.user_id !== undefined){
            const res = await http.post('/api/profiledetail',id )
            if(res.success){
                setFormData(res.success)
            }else{
                console.error('Error while fetchiing user data')
            }
        }else{
            console.log('unable to find user_id in localstorage, please login again')
        }
    }

    useEffect(()=>{
        fetchUser()
    },[])


  return (
    <>

    <Header2/>
    <MiniDrawer/>
    <Box sx={{
        marginLeft:{
            xs:7,
            sm:8,        
        },
        ...(open && { marginLeft:30 }),
        transition:'200ms',
        overflowX:'hidden',
        minHeight:'77vh'
    }}>

        <Stack 
        direction={{
            md:'row',
            sm:'column-reverse',
            xs:'column-reverse'
        }} 
        justifyContent='space-around'
        alignItems={{md:'flex-start', sm:'center',xs:'center'}}
        sx={{
            padding:2,
        }}
        spacing={2}
        >
            <Paper 
            elevation={1}
            sx={{
                width:{
                    md:'55%'
                },
                padding:4
            }}
            >   
                <Typography color='#333' variant='body' fontSize='large'>My account</Typography>
                <br/>
                <Divider/>
                <br/>
                <Stack 
                direction='column'
                spacing={2}
                sx={{
                    alignItems:'left',
                }}
                >
                    <Typography variant='body' fontSize='small' color='text.secondary'>USER INFORMATION</Typography>
                    <br/>
                    <Stack direction='row' justifyContent='space-around' alignItems='center' spacing={1}>
                        <TextField 
                        fullWidth 
                        size='small' 
                        label='Username' 
                        name='user_name'
                        value={formData.user_name || ''}
                        onChange={changeHandler}
                        InputProps={{
                            readOnly: true,
                          }}
                        />
                        <TextField 
                        fullWidth 
                        size='small' 
                        label='Email Address' 
                        type='email' 
                        name='email'
                        value={formData.email || ''}
                        onChange={changeHandler}
                        InputProps={{
                            readOnly: true,
                          }}
                        />
                    </Stack>
                    <Stack direction='row' justifyContent='space-around' alignItems='center' spacing={1}>
                        <TextField 
                        fullWidth 
                        size='small' 
                        label='Name' 
                        name='name'
                        value={formData.name || ''}
                        onChange={changeHandler}
                        />
                        <TextField 
                        fullWidth 
                        size='small' 
                        label='Mobile' 
                        type='number' 
                        name='mobile'
                        value={formData.mobile || ''}
                        onChange={changeHandler}
                        />
                    </Stack>
                    <Divider/>
                    <Typography variant='body' fontSize='small' color='text.secondary'>CONTACT INFORMATION</Typography>
                    <br/>
                    <Stack direction='row' justifyContent='space-around' alignItems='center' spacing={1}>
                        <TextField 
                        fullWidth 
                        size='small' 
                        label='Address' 
                        name='address'
                        value={formData.address || ''}
                        onChange={changeHandler}
                        />
                    </Stack>
                    <Stack direction='row' justifyContent='space-around' alignItems='center' spacing={1}>
                        <FormControl fullWidth size='small'>
                            <InputLabel>State</InputLabel>
                            <Select
                                name='indianState'
                                label="Select"
                                value={formData.indianState || ''}
                                onChange={changeHandler}
                            >
                                {StateList.map((item,index)=>{
                                    return <MenuItem key={index} value={item}>{item}</MenuItem>
                                })}
                            </Select>
                        </FormControl>
                        <TextField 
                        fullWidth 
                        size='small' 
                        label='Pin' 
                        type='number'
                        name='pin'
                        value={formData.pin || ''}
                        onChange={changeHandler}
                        />
                    </Stack>
                    <Button
                    variant='contained'
                    sx={{
                        width:{
                            xs:'50%',
                            sm:'30%',
                            md:'20%'
                        }
                    }}
                    onClick={submitHandler}
                    >
                        Save
                     </Button>
                    
                </Stack>
            </Paper>
            <Paper
            sx={{
                width:{
                    md:'35%'
                },
                padding:4
            }}
            >
                <Stack
                direction='column'
                spacing={2}
                justifyContent='space-between'
                alignItems='center'
                >
                    <img 
                    src={ProfilePicture} 
                    alt='Profile'
                    width='50%'
                    style={{
                        borderRadius:150
                    }}
                    />
                    <input
                    type='file'
                    style={{
                        border:'1px solid #33333355',
                        width:'80%'
                    }}
                    />
                    <Button
                    variant='contained'
                    sx={{
                        width:{
                            xs:'60%',
                            sm:'40%',
                            md:'30%'
                        }
                    }}
                    >
                        Update
                    </Button>
                </Stack>
            </Paper>
        </Stack>

    </Box>
    <Footer/>
  
    </>
  )
}

export default Profile