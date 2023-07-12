import {ReactElement, FC} from "react";
import {Box, Button, Grid, Stack, TextField, Typography, Link} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { apiRoutes } from "../routes";

const Register: FC<any> = (): ReactElement => {
    let navigate = useNavigate();
    function login() {
        console.log('start login');
        let path = apiRoutes.LOGIN; 
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
                        Hey visitor, would be great if you could register with us before the experience
                    </Typography>
                </Grid>
                </Grid>
                <Box width={'100%'} color={'black'} mt={4} mb={4}>
                <Stack spacing={2} direction="row" justifyContent={"center"} mt={4}>
                    <Typography component="div" sx={{width: '40%', display: 'flex', justifyContent: 'space-between', m: '2'}}>
                        My Phone 
                    </Typography>
                    <TextField id="outlined-basic" type="number" label="" variant="outlined" margin="none" sx={{padding: 0, width:'60%'}} />
                </Stack>
                <Stack spacing={2} direction="row" justifyContent={"center"} mt={4}>
                    <Typography component="div" sx={{width: '40%', display: 'flex', justifyContent: 'space-between', m: '2'}}>
                        My Name 
                    </Typography>
                    <TextField id="outlined-basic" type="text" label="" variant="outlined" margin="none" sx={{padding: 0, width:'60%'}} />
                </Stack>
                <Stack spacing={2} direction="row" justifyContent={"center"} mt={4}>
                    <Typography component="div" sx={{width: '40%', display: 'flex', textAlign:'left', justifyContent: 'space-between', m: '2'}}>
                        Name of my Organisation
                    </Typography>
                    <TextField id="outlined-basic" label="" variant="outlined" margin="none" sx={{padding: 0, width:'60%'}} />
                </Stack>
                </Box>

                <Stack spacing={2} direction="column" justifyContent={"center"} mt={4}>
                    <div>
                        <Button variant="contained" onClick={login} sx={{backgroundColor:"#6558F4", color:"white"}}>Go to Login</Button>
                    </div>
                    <Link href="#">Already registered</Link>
                </Stack>
            </Box>
        </Box>
    );
};

export default Register;