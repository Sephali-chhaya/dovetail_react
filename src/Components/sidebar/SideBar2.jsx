import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { NavLink } from 'react-router-dom';

//Icon Imports
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ListIcon from '@mui/icons-material/List';
import PublicIcon from '@mui/icons-material/Public';
import ReceiptIcon from '@mui/icons-material/Receipt';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SavingsIcon from '@mui/icons-material/Savings';
import SummarizeIcon from '@mui/icons-material/Summarize';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PasswordIcon from '@mui/icons-material/Password';

//nested icon Imports
import CategoryIcon from '@mui/icons-material/Category';
import SellIcon from '@mui/icons-material/Sell';
import Person4Icon from '@mui/icons-material/Person4';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import ScaleIcon from '@mui/icons-material/Scale';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

import SiteLogo from '../Assets/images/DovetailLogo.svg'
import SiteLogoInitial from '../Assets/images/SiteIcon.svg'

import { useSelector, useDispatch } from 'react-redux';
import { trigger } from '../../redux/reducers/SideExpand';
import { Menu, MenuList, Stack, Button } from '@mui/material';
import { MenuItem } from 'react-pro-sidebar';
import MasterEntery from '../../pages/masterEntery/MasterEntry';
import MenuListCard from '../MenuListCard/MenuListCard';

const drawerWidth = 270;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);



export default function MiniDrawer() {


    const dispatch = useDispatch()
    const open = useSelector((state)=>state.sideExpand.open)

    const [isMenuExpanded, setIsMenuExpanded] = React.useState(false)
    const [selectedMenu, setSelectedMenu] = React.useState(0)

  const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    // setOpen(true);
    dispatch(trigger())
  };

  const handleDrawerClose = () => {
    // setOpen(false);
    dispatch(trigger())
  };

//   React.useEffect(()=>{
//     console.log('sidebar expanded:',open)
//   },[open])

  const handleExpand = (number)=>{
    setSelectedMenu(number)
    setIsMenuExpanded(!isMenuExpanded)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* <AppBar position="fixed" open={open} sx={{backgroundColor:'white', zIndex:-1}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
              color:'black'
            }}
          >
            <MenuIcon />
          </IconButton>
          <IconButton>
            <img src={SiteLogoInitial} alt="logoInitial" width='50' />
          </IconButton>
        </Toolbar>
      </AppBar> */}
    <Drawer variant="permanent" open={open}>
        <DrawerHeader>
            <img src={SiteLogo} alt="logo" width='150' hidden={open?false:true} />
            <IconButton onClick={handleDrawerClose}>
                {!open ? <MenuIcon /> : <ChevronLeftIcon />}
                </IconButton>
        </DrawerHeader>
        <Divider />

            <NavLink to='/dashboard' style={{textDecoration:'none', color:'#333'}}>
            <ListItem disablePadding sx={{ display: 'block' }}>
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
                    <DashboardIcon/>
                </ListItemIcon>
                <ListItemText primary={'Dashboard'} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            </NavLink>

        <Divider variant='middle' sx={{
            backgroundColor:'#6270e488',
            marginBottom:2,
        }}/>
        {/* <List>
          {['Master Entry', 'Customers/Ledgers', 'Invoices', 'Sales Order'].map((text, index) => (
            <ListItem number={text} disablePadding sx={{ display: 'block' }}>
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
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}

 

            <MenuListCard number={0} text={'Master Entry'} icon={<ListIcon/>} secondaryIcon={<ArrowDropDownIcon/>} isExpandable={true} handleExpand={handleExpand}/>
                <Box hidden={(isMenuExpanded && selectedMenu === 0)?false:true}>
                    <Divider sx={{backgroundColor:'black', marginLeft:5}}/>
                    <MenuListCard nested={true} fSize='0.9rem' text={'Category'} icon={<CategoryIcon/>} secondaryIcon={<ArrowDropDownIcon/>}/>
                    <MenuListCard nested={true} fSize='0.9rem' text={'Batch'} icon={<SellIcon/>} secondaryIcon={<ArrowDropDownIcon/>}/>
                    <MenuListCard nested={true} fSize='0.9rem' text={'Brands'} icon={<Person4Icon/>} secondaryIcon={<ArrowDropDownIcon/>}/>
                    <MenuListCard nested={true} fSize='0.9rem' text={'Items'} icon={<ViewInArIcon/>} secondaryIcon={<ArrowDropDownIcon/>}/>
                    <MenuListCard nested={true} fSize='0.9rem' text={'Units'} icon={<ScaleIcon/>} secondaryIcon={<ArrowDropDownIcon/>}/>
                    <MenuListCard nested={true} fSize='0.9rem' text={'HSN'} icon={<CheckBoxOutlineBlankIcon/>} secondaryIcon={<ArrowDropDownIcon/>}/>
                    <Divider sx={{backgroundColor:'black', marginLeft:5}}/>
                </Box>
                {/* <p>{selectedMenu}</p> */}
            <MenuListCard number={1} text={'Customers/Ledgers'} icon={<PublicIcon/>} secondaryIcon={<ArrowDropDownIcon/>} isExpandable={false}/>
            <MenuListCard number={2} text={'Invoice'} icon={<ReceiptIcon/>} secondaryIcon={<ArrowDropDownIcon/>} isExpandable={false}/>
            <MenuListCard number={3} text={'Sales Order'} icon={<MonetizationOnIcon/>} secondaryIcon={<ArrowDropDownIcon/>} isExpandable={false}/>
            <MenuListCard number={4} text={'Transaction'} icon={<AccountBalanceIcon/>} secondaryIcon={<ArrowDropDownIcon/>} isExpandable={true} handleExpand={handleExpand}/>
                <Box hidden={(isMenuExpanded && selectedMenu === 4)?false:true}>
                    <Divider sx={{backgroundColor:'black', marginLeft:5}}/>
                    <MenuListCard nested={true} fSize='0.9rem' text={'Create Reciepts'} icon={<CategoryIcon/>} secondaryIcon={<ArrowDropDownIcon/>}/>
                    <MenuListCard nested={true} fSize='0.9rem' text={'Payments'} icon={<SellIcon/>} secondaryIcon={<ArrowDropDownIcon/>}/>
                    <MenuListCard nested={true} fSize='0.9rem' text={'Purchase Order'} icon={<Person4Icon/>} secondaryIcon={<ArrowDropDownIcon/>}/>
                    <MenuListCard nested={true} fSize='0.9rem' text={'Purchase Bill'} icon={<ViewInArIcon/>} secondaryIcon={<ArrowDropDownIcon/>}/>
                    <MenuListCard nested={true} fSize='0.9rem' text={'Credit Note'} icon={<ScaleIcon/>} secondaryIcon={<ArrowDropDownIcon/>}/>
                    <MenuListCard nested={true} fSize='0.9rem' text={'Debit Note'} icon={<CheckBoxOutlineBlankIcon/>} secondaryIcon={<ArrowDropDownIcon/>}/>
                    <Divider sx={{backgroundColor:'black', marginLeft:5}}/>
                </Box>
            <MenuListCard number={5} text={'Dispatch Details'} icon={<LocalShippingIcon/>} secondaryIcon={<ArrowDropDownIcon/>} isExpandable={false}/>
            <MenuListCard number={6} text={'Account Master'} icon={<CreditCardIcon/>} secondaryIcon={<ArrowDropDownIcon/>} isExpandable={false}/>
            <MenuListCard number={7} text={'Unregister Online Payments'} icon={<SavingsIcon/>} secondaryIcon={<ArrowDropDownIcon/>} isExpandable={false}/>
            <MenuListCard number={8} text={'Report'} icon={<SummarizeIcon/>} secondaryIcon={<ArrowDropDownIcon/>} isExpandable={true} handleExpand={handleExpand}/>
                <Box hidden={(isMenuExpanded && selectedMenu === 8)?false:true}>
                    <Divider sx={{backgroundColor:'black', marginLeft:5}}/>
                    <MenuListCard nested={true} fSize='0.9rem' text={'Sales Register Summary'} icon={<CategoryIcon/>} secondaryIcon={<ArrowDropDownIcon/>}/>
                    <MenuListCard nested={true} fSize='0.9rem' text={'Sales Register Itemwise'} icon={<SellIcon/>} secondaryIcon={<ArrowDropDownIcon/>}/>
                    <MenuListCard nested={true} fSize='0.9rem' text={'Order Report Itemwise'} icon={<Person4Icon/>} secondaryIcon={<ArrowDropDownIcon/>}/>
                    <MenuListCard nested={true} fSize='0.9rem' text={'Customer Report'} icon={<ViewInArIcon/>} secondaryIcon={<ArrowDropDownIcon/>}/>
                    <MenuListCard nested={true} fSize='0.9rem' text={'Purchase Report'} icon={<ScaleIcon/>} secondaryIcon={<ArrowDropDownIcon/>}/>
                    <Divider sx={{backgroundColor:'black', marginLeft:5}}/>
                </Box>
            <MenuListCard number={9} text={'Register Company'} icon={<CardTravelIcon/>} secondaryIcon={<ArrowDropDownIcon/>} isExpandable={false}/>
            <MenuListCard number={10} text={'Configuration'} icon={<SettingsIcon/>} secondaryIcon={<ArrowDropDownIcon/>} isExpandable={false}/>
            <MenuListCard number={11} url='/profile' text={'Profile'} icon={<AccountBoxIcon/>} secondaryIcon={<ArrowDropDownIcon/>} isExpandable={false}/>
            <MenuListCard number={12} url='/change-password' text={'Change Password'} icon={<PasswordIcon/>} secondaryIcon={<ArrowDropDownIcon/>} isExpandable={false}/>
            
        <Divider />
        {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem number={text} disablePadding sx={{ display: 'block' }}>
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
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>

    </Box>
  );
}