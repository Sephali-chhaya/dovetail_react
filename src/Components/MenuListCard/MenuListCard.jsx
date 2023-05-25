import React from 'react'

import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { ListItem, ListItemButton,ListItemIcon, ListItemText, Typography, Divider } from '@mui/material'

function MenuListCard({text, icon, secondaryIcon, isExpandable, fSize, handleExpand, number, nested, url }) {

    const open = useSelector((state)=>state.sideExpand.open)

    return (
        <>
            <NavLink to={url !== undefined?url:''} style={{textDecoration:'none', color:'#333'}}>
            <ListItem  disablePadding sx={{ display: 'block', ...(nested && {paddingLeft:2}) }} onClick={()=>{if(isExpandable){handleExpand(number)}}}>
                <ListItemButton
                    sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 2.5,
                    }}
                >
                    <ListItemIcon
                        sx={{
                            minWidth: 0,
                            mr: open ? 3 : 'auto',
                            justifyContent: 'center',
                        }}
                    >
                        {icon}
                    </ListItemIcon>
                    <ListItemText primary={<Typography fontSize={fSize || 'medium'} >{text}</Typography>} sx={{ opacity: open ? 1 : 0 }} />
                    {isExpandable && (<ListItemIcon
                        sx={{
                            paddingLeft: 3
                        }}
                        hidden={open?false:true}
                    >
                        {secondaryIcon}
                    </ListItemIcon>)}
                </ListItemButton>
            </ListItem>
            </NavLink>
            <Divider/>

        </>
    )
}

export default MenuListCard