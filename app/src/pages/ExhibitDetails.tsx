
import {ReactElement, FC} from "react";
import { Box, Button, Card, CardContent, Divider, Rating, Typography} from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";
import Profile from "../layout/Profile";
import QrCode2RoundedIcon from '@mui/icons-material/QrCode2Rounded';
import GradeIcon from '@mui/icons-material/Grade';
import { apiRoutes } from "../routes";

const ExhibitCardDetails: FC<any> = (): ReactElement => {
    const [value, setValue] = React.useState<number | null>(2);
    let navigate = useNavigate();
    function finishGame() {
        console.log('card login ', navigate);
        let path = apiRoutes.QUESTION_SET; 
        navigate(path);
    }

    return (
        <Box sx={{
            flexGrow: 1,
            backgroundColor: 'whitesmoke',
            display: 'flex',
            justifyContent: 'center',
            width: '100%'
        }}>
            <Box sx={{ my: 2, mx: 2, color:'primary.dark', width: '100%'}}>
                <Profile></Profile>
                <Divider/>
                <Typography variant="h6" component="div" fontWeight={'bold'}>Exhibit 1 - Experience</Typography>
                <Box sx={{justifyContent:"start"}}>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(_e, newValue) => {
                            setValue(newValue);
                        }}
                    />
                </Box>
                <Box border={'1px solid black'} sx={{height: '75%', position: 'relative'}}>
                    <Box sx={{width:'100%', height:'80%'}}>
                        <Card sx={{margin: "10px", height: '50%'}}>
                            <CardContent></CardContent>
                        </Card>
                        <Card sx={{margin: "10px", height: '50%'}}>
                            <CardContent></CardContent>
                        </Card>
                    </Box>
                    <Box mt={4} display={"flex"} justifyContent={"space-around"}>
                        <Button sx={{color:'#6558F4', border:'1px solid #6558F4'}} variant="outlined" endIcon={<GradeIcon />}>Rate</Button>
                        <Button sx={{color:'#6558F4', border:'1px solid #6558F4'}} variant="outlined" endIcon={<QrCode2RoundedIcon />}>Scan to play</Button>
                    </Box>
                </Box>
                <Box mt={4}>
                    <Button sx={{color:'#6558F4', border:'1px solid #6558F4'}} variant="outlined" size="large" onClick={finishGame}>Back</Button>
                </Box>
            </Box>
        </Box>
    );
};

export default ExhibitCardDetails;
