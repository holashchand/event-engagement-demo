
import {ReactElement, FC} from "react";
import { Box, Card, CardContent, InputLabel, Typography} from "@mui/material";
import QrCode2RoundedIcon from '@mui/icons-material/QrCode2Rounded';
import { useLocation } from "react-router-dom";
import ToolBar from "../layout/AppBar";
import CircleIcon from '@mui/icons-material/Circle';

const ExhibitResult: FC<any> = (): ReactElement => {

    const { state } = useLocation();
    console.log('navigate ', state);
    
    return (
        <Box sx={{
            flexGrow: 1,
            backgroundColor: 'whitesmoke',
            display: 'flex',
            justifyContent: 'center',
            width: '100%'
        }}>
            <ToolBar show={false} badgeOpt={false} toolbarHeight={true}/>
            <Card sx={{position: 'absolute', width: '80%', height: '15%', top:'18%', left: '10%', transform: 'translate(-0%, -50%)', borderRadius:'10px'}}>
                <CardContent sx={{display: 'flex', justifyContent: 'space-around', paddingTop:'8% !important', paddingBottom: '0 !important', alignItems: 'center', height: '100%'}}>
                    <div>
                        <CircleIcon sx={{color: "green"}}/>13
                        <InputLabel>Correct</InputLabel>
                    </div>
                    <div>
                        <CircleIcon sx={{color: "red"}}/>07
                        <InputLabel>Wrong</InputLabel>
                    </div>
                </CardContent>
            </Card>
            <Box sx={{ my: 30, mx: 2, color:'primary.dark', width: '100%'}}>
                <Typography variant="h6" component="div" fontWeight={'bold'} color={'#4DD8DD'}>Congratulation ! You earned a new badge!!</Typography>
                <Box mt={2}>
                    <QrCode2RoundedIcon fontSize="large" sx={{border: "5px solid black", width: '7rem', height: '7rem', color:'black'}}></QrCode2RoundedIcon>
                </Box>
            </Box>
        </Box>
    );
};

export default ExhibitResult;