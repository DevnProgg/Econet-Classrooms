import {BottomNavigation,Drawer, InputAdornment,Box ,BottomNavigationAction,Menu, MenuItem, Stack, Typography, IconButton, TextField} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import { LibraryBooks, AccountCircle, Shop, AddCircle, Search, Send, Settings, DocumentScanner, Logout } from '@mui/icons-material'
import MenuIcon from '@mui/icons-material/Menu'
import {useState} from 'react'
import Home from './Views/Home'
import Library from './Views/Library'
import EconetShop from './Views/EconetShop'
import NewClass from './Views/NewClass'
import Profile from './Views/Profile'
import './styles/relative.css'
import './styles/main.css'
import logo from './logo.svg'



export const BottomNavBar = () => {
    const [searchtext, setSearchText] = useState('')
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    let drawer = <Drawer anchor='right' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <Box p={2} width='150px' role='presentation'>
            <img src={logo} />
            <Stack spacing={6}>
           <Stack  spacing={2}direction='row'>
            <AccountCircle color='info'/>
                <Typography color='info.dark'>Profile</Typography>
                
                </Stack>
                <Stack spacing={2} direction='row'>
            <Settings color='info'/>
                <Typography color='info.dark'>Policy</Typography>
                
                </Stack>

                <Stack spacing={2} direction='row'>
            <DocumentScanner color='info'/>
                <Typography color='info.dark'>About</Typography>
                
                </Stack>
                <Stack spacing={2} direction='row'>
            <Logout color='info'/>
                <Typography color='info.dark'>Logout</Typography>
                
                </Stack>
                
                </Stack>
               
                
        </Box>
    </Drawer>
    let drawerIcon = <IconButton size='large' edge='end' color='inherit' onClick={() => setIsDrawerOpen(true)}><MenuIcon/></IconButton>
    let sendButton = <IconButton color='primary' ><Send /></IconButton>
    const [anchorEl , setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>{
        setAnchorEl(event.currentTarget)
    }
    const handleClose =()=>{
        setAnchorEl(null)
    }
    let search = <Search />
    let menuitem = <TextField onChange={(event) =>{setSearchText(event.target.value); console.log(searchtext)}} value={searchtext} className='textfield' placeholder='Search for class or discussion...' 
    InputProps={
        {
            startAdornment: <InputAdornment position='start'>{search}</InputAdornment>,
            endAdornment: <InputAdornment position='end'>{sendButton}</InputAdornment>
        }
    }/>
    let topnav = <Stack className='headercontainer' spacing={6}>
    <Stack  spacing={3} direction='row'>
        <Typography className='headertext'  variant="h5">Econet Classrooms</Typography>
        <IconButton id='search-button' 
        onClick={handleClick} aria-controls={open ? 'search-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined} color='inherit'>{search}</IconButton>
        <Menu id='search-menu' anchorEl={anchorEl} open={open} MenuListProps={{
            'aria-labelledby' : 'search-button',
        }} onClose={handleClose}>
            <MenuItem>{menuitem}</MenuItem>
        </Menu>
        {drawerIcon}
        {drawer}
    </Stack>
</Stack>
    const [value, setValue] = useState(0)
    let nav = <BottomNavigation className='bottomnav' sx={{
        width:'100%',
        position:'fixed',
        bottom:0
    }}
    value={value}
    onChange={(event, newValue) =>{
        setValue(newValue)
        console.log(newValue)
    }}
    showLabels
    >
        
        <BottomNavigationAction label='Home' icon={
        <HomeIcon />
        } />
        <BottomNavigationAction label='Library' icon={
        <LibraryBooks />
        } />
        <BottomNavigationAction label='New Class' icon={
        <AddCircle />
        } />
        <BottomNavigationAction label='Econet Shop' icon={
        <Shop />
        } />
        <BottomNavigationAction label='Profile' icon={
        <AccountCircle />
        } />
    </BottomNavigation>
    const body = () =>{
        if (value === 0){
            return(<Home />)
        }
        if (value === 1 ){
            return(<Library />)
        }
        if (value === 2){
            return(<NewClass />)
        }
        if (value === 3){
            return(<EconetShop />)
        }
        if (value === 4){
            return(<Profile/>)
        }
        return(<></>)
    }
    return(
        <>
        {topnav}
        {body}
        {nav}
        </>
    )
}
