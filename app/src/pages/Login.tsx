
import {ReactElement, FC} from "react";
import {Box, Button, Grid, TextField, Typography, Link, InputLabel} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { apiRoutes } from "../routes";
import { useForm } from "react-hook-form";
import ToolBar from "../layout/AppBar";

const FirstLogin: FC<any> = (): ReactElement => {
    let navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const onSubmit = (data: any) =>  {
        console.log(data)
        console.log('submit');
        let path = apiRoutes.USER_HOME; 
        navigate(path);
    };
    
    function ReceiveOTP() {
        console.log('Receive OTP');
        // API call to receive otp
    }
    
    function ResendOTP() {
        console.log('Resend OTP');
        // API call to receive otp
    }

    return (
        <Box sx={{flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center' }}>
        <ToolBar show={true} badgeOpt={false} toolbarHeight={false}/>
        <Box sx={{ my: 25, mx: 2, color:'primary.dark', width:'100%'}}>
            <Grid container alignItems="center">
                <Grid item xs>
                    <Typography m={2} gutterBottom variant="subtitle1" component="div" color={'primary.dark'} fontWeight={'bold'}>
                        Hey visitor, please login using your registered phone number and otp
                    </Typography>
                </Grid>
            </Grid>
            <Box width={'100%'} mt={4} mb={4}  component="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="inputFields">
                    <InputLabel>My Phone</InputLabel>
                    <TextField id="outlined-basic" type="number" {...register("phone")} label="" variant="outlined" margin="normal"/>
                    <Button variant="contained" size="large" onClick={ReceiveOTP} sx={{backgroundColor:"#6558F4", color:"white", padding: 0, width:'10rem', textTransform:'capitalize'}}>Receive OTP</Button>
                </div>
                <div className="inputFields">
                    <InputLabel>OTP</InputLabel>
                    <TextField id="outlined-basic" label="" {...register("otp")} variant="outlined" />
                    <Link href="#" sx={{padding: 0, width:'10rem', textTransform:'capitalize'}} onClick={ResendOTP}>Resend OTP</Link>
                </div>
                <div>
                    <Button variant="contained" type="submit" sx={{backgroundColor:"#6558F4", color:"white", marginTop: '4rem'}}>Login</Button>
                </div>
            </Box>
        </Box>
    </Box>
    );
};

export default FirstLogin;