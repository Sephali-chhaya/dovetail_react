
import React from 'react'
import { Link } from 'react-router-dom'

import { IconButton, Stack, Box, Menu, MenuItem, Button, Typography, Divider } from '@mui/material'
import { useSelector } from 'react-redux'

import SiteLogoInitial from '../../Assets/images/SiteIcon.svg'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CompanyLogo from '../../Assets/images/flag.png'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';

function Header2() {

    const open = useSelector((state)=>state.sideExpand.open)

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open1 = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const [anchorEl2, setAnchorEl2] = React.useState(null);
    const open2 = Boolean(anchorEl2);
    const handleClick2 = (event) => {
      setAnchorEl2(event.currentTarget);
    };
    const handleClose2 = () => {
      setAnchorEl2(null);
    //   console.log(anchorEl2)
    };

  return (
    <>
    
        <Box 
            sx={{
                width:'100%',
                height:60,
                ...(open && { marginLeft:25, width:'88.55%' }),
                transition:'200ms',
                zIndex:10,
                display:'flex',
                justifyContent:'space-between',
                alignItems:'center',
                paddingRight:5,
                boxShadow:1
            }} 
        >
        <Stack width={60} marginLeft={10} height='100%' justifyContent='center'>
          <IconButton 
            width={60}
            id="basic-button"
            aria-controls={open1 ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open1 ? 'true' : undefined}
            onClick={handleClick}
          >
            <img src={SiteLogoInitial} alt="logoInitial" width='50' />
          </IconButton>


        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open1}
            onClose={handleClose}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
        }}
        >
            <MenuItem onClick={handleClose}><img src={CompanyLogo} alt="Company Name" width='50' /></MenuItem>
            <MenuItem onClick={handleClose}><img src={CompanyLogo} alt="Company Name" width='50' /></MenuItem>
            <MenuItem onClick={handleClose}><img src={CompanyLogo} alt="Company Name" width='50' /></MenuItem>
        </Menu>

        </Stack>
        <IconButton
            id="basic-button2"
            aria-controls={open2 ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open2 ? 'true' : undefined}
            onClick={handleClick2}
        >
            <AccountCircleIcon fontSize='large'/>
        </IconButton>
        <Menu
            id="basic-menu2"
            anchorEl={anchorEl2}
            open={open2}
            onClose={handleClose2}
            MenuListProps={{
            'aria-labelledby': 'basic-button2',
        }}
        >
            <Link style={{textDecoration:'none'}} to='/profile'><MenuItem onClick={handleClose2} sx={{padding:0}}><Button  sx={{color:'black', padding:2}} startIcon={<AccountBoxIcon/>}>My Profile</Button></MenuItem></Link>
            <MenuItem onClick={handleClose2} sx={{padding:0}}><Button sx={{color:'black', padding:2}} startIcon={<LogoutIcon/>}>Log Out</Button></MenuItem>
        </Menu>

      </Box>
        <Divider/>
    </>
  )
}

export default Header2