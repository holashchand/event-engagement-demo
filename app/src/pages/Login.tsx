
import {ReactElement, FC} from "react";
import {Box, Button, Grid, Stack, TextField, Typography, Link} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { apiRoutes } from "../routes";

const FirstLogin: FC<any> = (): ReactElement => {
    let navigate = useNavigate();
    function login() {
        console.log('start login');
        let path = apiRoutes.USER_HOME; 
        navigate(path);
    }
    return (
        <Box sx={{ backgroundColor: 'white', flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center' }}>
        <Box sx={{ my: 3, mx: 2, color:'primary.dark', width:'100%'}}>
            <Grid container alignItems="center">
                <Grid item xs>
                    <Typography m={2} gutterBottom variant="subtitle1" component="div" color={'primary.dark'} fontWeight={'bold'}>
                        Hey visitor, please login using your registered phone number and otp
                    </Typography>
                </Grid>
            </Grid>
            <Box width={'100%'} color={'black'} mt={4} mb={4}>
            <Stack spacing={3} direction="row" justifyContent={"center"} mt={4}>
                <Typography component="div" sx={{width: '30%', display: 'flex', justifyContent: 'space-between', m: '2'}}>
                    My Phone 
                </Typography>
                <TextField id="outlined-basic" type="number" label="" variant="outlined" margin="none" sx={{padding: 0, width:'50%'}} />
                <Button variant="contained" size="small" onClick={login} sx={{backgroundColor:"#6558F4", color:"white", padding: 0, width:'20%', textTransform:'capitalize'}}>Receive OTP</Button>
            </Stack>
            <Stack spacing={3} direction="row" justifyContent={"center"} mt={4}>
                <Typography component="div" sx={{width: '30%', display: 'flex', justifyContent: 'space-between', m: '2'}}>
                    OTP 
                </Typography>
                <TextField id="outlined-basic" label="" variant="outlined" margin="none" sx={{padding: 0, width:'50%'}} />
                <Link href="#" sx={{padding: 0, width:'20%', textTransform:'capitalize'}}>Resend OTP</Link>
            </Stack>
            </Box>

            <Stack spacing={1} direction="column" justifyContent={"center"} mt={4}>
                <div>
                    <Button variant="contained" onClick={login} sx={{backgroundColor:"#6558F4", color:"white"}}>Login</Button>
                </div>
            </Stack>
        </Box>
    </Box>
    );
};

export default FirstLogin;