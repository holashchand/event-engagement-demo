import {
  Box,
  IconButton,
  Toolbar,
  AppBar,
  InputLabel,
  Badge,
} from "@mui/material";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import appName from '../assets/appName.png';
import BgHeader2 from '../assets/BgHeader2.svg';
import Badge1 from '../assets/Badge1.svg';
import Badge2 from '../assets/Badge2.svg';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

interface ToolbarProps {
    show: boolean;
    badgeOpt: boolean;
    toolbarHeight: boolean;
}

function ToolBar(props: ToolbarProps) {
    console.log('navbar', props)
    const {show, badgeOpt, toolbarHeight} = props;
  return (
    <Box>
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
                    {show ? 
                    <MenuRoundedIcon fontSize="large"/> : <ArrowBackOutlinedIcon fontSize="large"/>}
                </IconButton>
                <div>
                    
                </div>
                <img src={appName} style={{position:'absolute', transform: 'translate(-50%, -50%)', left:'50%', top:'2.8rem' }}/>
                <QrCodeScannerIcon style={{position:'absolute', transform: 'translate(-50%, -50%)', right:'12%', top:'2.8rem' }}/>
                <span style={{position:'absolute', transform: 'translate(-50%, -50%)', right:'4%', top:'2.8rem', width:'7%', fontSize:'7px', lineHeight:'7px' }}> Scan QR At Exhibits</span>
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
  )
};

export default ToolBar;