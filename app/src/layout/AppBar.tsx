import {
  Box,
  IconButton,
  Toolbar,
  AppBar,
  InputLabel,
  Badge,
  Avatar,
  Divider,
  ListItem,
  ListItemText,
  List,
  Typography
} from "@mui/material";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import appName from '../assets/appName.png';
import logo from '../assets/logo.svg';
import menuEvent from '../assets/menuEvent.svg';
import BgHeader2 from '../assets/BgHeader2.svg';
import Badge1 from '../assets/Badge1.svg';
import Badge2 from '../assets/Badge2.svg';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useState } from "react";
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { useNavigate } from "react-router-dom";
import { apiRoutes } from "../routes";

interface ToolbarProps {
    show: boolean;
    badgeOpt: boolean;
    toolbarHeight: boolean;
    hideBtn: boolean;
}

function ToolBar(props: ToolbarProps) {
    let navigate = useNavigate();
    console.log('navbar', props)
    const {hideBtn, show, badgeOpt, toolbarHeight} = props;
    const [isOpen, setIsopen] = useState(false);

    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    }
    const handleNavigation = (label: any) => {
        console.log('label ', label);
        let path = ""
        switch(label) {
            case 'Exhibits':
                path = apiRoutes.EXHIBITS_HOME; 
                navigate(path);
                break
            case 'Leader board':
                path = apiRoutes.LEADER_BOARD; 
                navigate(path);
                break
            case 'Credential Verification':
                path = apiRoutes.VERIFIED_BADGES; 
                navigate(path);
                break
            case 'Logout':
                console.log('logout')
                break
        
        }
    }

    const goBack = () => {
        navigate(-1)
    }

    const listItem = [{label: 'Exhibits', showIcon: true}, {label: 'Leader board',  showIcon: true},{label: 'Credential Verification',  showIcon: true},{label: 'Logout',  showIcon: false}]
  return (
    <>
    <Box className="App wrapper" id="page-wrap">
        <AppBar position="static">
            <Toolbar sx={{position: 'absolute', padding: '0 4px'}}>
                <img src={BgHeader2} style={toolbarHeight ? {marginTop: '-2rem'} : {marginTop: '-5rem'}} />
                <IconButton
                    size="large"
                    edge="end"
                    color="inherit"
                    aria-label="menu"
                    sx={{position:'absolute', transform: 'translate(0%, -50%)', top: '2.8rem', left:'2%' }}
                    >
                    { !hideBtn ? (show ? (<MenuRoundedIcon onClick={ToggleSidebar} fontSize="large"/>) : (<ArrowBackOutlinedIcon onClick={goBack} fontSize="large"/>)) : <></>}
                </IconButton>
                <div>
                    
                </div>
                <img src={appName} style={{position:'absolute', transform: 'translate(-50%, -50%)', left:'50%', top:'2.8rem' }}/>
                {show ? (<><QrCodeScannerIcon style={{position:'absolute', transform: 'translate(-50%, -50%)', right:'12%', top:'2.8rem' }}/>
                    <span style={{position:'absolute', transform: 'translate(-50%, -50%)', right:'4%', top:'2.8rem', width:'7%', fontSize:'7px', lineHeight:'7px' }}> Scan QR At Exhibits</span>
                    </>): (<></>)}
                {badgeOpt ? 
                <Box mt={6} sx={{display:'flex', position:'absolute', alignItems:'center', justifyContent:'space-between', width:'100%', padding:'1rem'}}>
                    <InputLabel>Badges:</InputLabel>
                    <Badge anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }} color="secondary" badgeContent={1000} max={999}>
                    <img src={Badge1}></img>
                    </Badge>
                    <Badge anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }} color="secondary" badgeContent={1000} max={999}>
                    <img src={Badge2}></img>
                    </Badge>
                    <KeyboardArrowRightIcon/>
                </Box>
                : <></>}
            </Toolbar>
        </AppBar>
    </Box>
    <div className={`sidebar ${isOpen == true ? 'active' : ''}`}>
        <img src={logo} width={'100%'}/>
        <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} m={1}>
            <Avatar></Avatar>
            <InputLabel>Name/Organisation</InputLabel>
            <SettingsRoundedIcon/>
        </Box>
        <Divider/>
        <Typography mt={2} variant="h6" fontWeight={'bold'}>Welcome to UP@AI!</Typography>
        <img style={{marginTop:'10%'}} src={menuEvent} width={'100%'}/>
        <List sx={{marginTop:'2%'}} >
            {listItem.map((ls, i) => (
            <ListItem key={i+1} secondaryAction={ls.showIcon ?
                    <IconButton aria-label="comment" onClick={() => handleNavigation(ls.label)}>
                    <ArrowForwardIosRoundedIcon fontSize='small' />
                    </IconButton> : <></>
                }>
                <ListItemText sx={{fontSize:'14px !important'}}>{ls.label}</ListItemText>
            </ListItem>
            ))}
        </List>
    </div>
    <div className={`sidebar-overlay ${isOpen == true ? 'active' : ''}`} onClick={ToggleSidebar}></div>

    </>
  )
};

export default ToolBar;