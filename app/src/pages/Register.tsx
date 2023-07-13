import {ReactElement, FC} from "react";
import {Box, Button, Grid, TextField, Typography, Link, InputLabel} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { apiRoutes } from "../routes";

import { useForm } from "react-hook-form";
import ToolBar from "../layout/AppBar";

const Register: FC<any> = (): ReactElement => {
    let navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const onSubmit = (data: any) =>  {
        console.log(data)
        console.log('start login');
        let path = apiRoutes.LOGIN; 
        navigate(path);
    };
    return (
        <Box sx={{flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center' }}>
            <ToolBar show={true} badgeOpt={false} toolbarHeight={false}/>
            <Box sx={{ my: 25, width:'100%'}}>
                <Grid container alignItems="center">
                <Grid item xs>
                    <Typography m={2} gutterBottom variant="subtitle1" component="div" color={'primary.dark'} fontWeight={'bold'}>
                        Hey visitor, would be great if you could register with us before the experience
                    </Typography>
                </Grid>
                </Grid>
                <Box width={'100%'} color={'black'} mt={4} mb={4} component="form" onSubmit={handleSubmit(onSubmit)} >
                    <div className="inputFields">
                        <InputLabel>My Phone</InputLabel>
                        <TextField id="phone" type="number" {...register("phone")} label=""/>
                    </div>
                    <div className="inputFields">
                        <InputLabel>My Name</InputLabel>
                        <TextField id="name" label="" type="text" {...register("name")}/>
                    </div>
                    <div className="inputFields">
                        <InputLabel>Name of my organisation</InputLabel>
                        <TextField id="organisation" label="" type="text" {...register("organisation")}/>
                    </div>
                    <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, backgroundColor:"#6558F4", color:"white"}}>Go to Login</Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">Already registered</Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};

export default Register;