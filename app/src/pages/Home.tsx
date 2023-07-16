import { useExhibitsData } from "../api/exhibit";
import {Box, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography} from "@mui/material";
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import { useNavigate } from "react-router-dom";
import { ReactElement, FC } from "react";
import { apiRoutes } from "../routes";
import { getData } from "../api/axios";
import logo from '../assets/logo.svg';
import footer from '../assets/footer.svg';

const HomePage: FC<any> = (): ReactElement => {
  const { data, isLoading } = useExhibitsData();
  if (isLoading) {
    // return "Loading";
  }
  console.debug(data);
  let navigate = useNavigate(); 
    function startExperience() {
        getData((result: any) => {
            console.log('Home page res on api call ', result);
            const { data, error } = result;
            if (error) {
            // Handle error
            return;
            }

            if (data?.status == 200 && data.data) {
                console.log('start experience');
            }
            let path = apiRoutes.REGISTER; 
            navigate(path);
        })
    }
    return (
        <Box sx={{ backgroundColor: 'primary.main', flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
        }}>
            <img src={logo} style={{position:'absolute'}}/>
            <Box sx={{ my: 3, mx: 2, color:'white', marginTop:'10rem'}}>
                <Box mt={8} sx={{display: 'flex', justifyContent: 'center'}}>
                    <Box width={'60%'}>
                        <Typography gutterBottom variant="h5" component="h5" color={'white'} fontWeight={'bold'}>
                            WELCOME TO UP@AI ANUBHAV
                        </Typography>
                    </Box>
                </Box>
                <Typography variant="body1">where we will define the future together</Typography>
                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                    <Box width={'80%'}>
                        <Typography color="white" variant="body1" mt={6} mb={6}>
                        Up@ AI ANUBHAV App will help you immerse in the exhibition while Showcasing the Power of Credentialing.
                        </Typography>
                        <List sx={{ width: '100%', m: '4', alignItems: 'center'}}>
                            {["Know about the exhibits", "Play Quiz to win Badges", "Earn exciting Rewards through Credential Badges!"].map((value) => {
                                return (
                                <ListItem key="">
                                    <ListItemButton dense>
                                    <ListItemIcon>
                                    <TaskAltOutlinedIcon sx={{color:"white"}}></TaskAltOutlinedIcon>
                                    </ListItemIcon>
                                    <ListItemText primary={`${value}`} />
                                    </ListItemButton>
                                </ListItem>
                                );
                            })}
                        </List>
                    </Box>
                </Box>

                <img src={footer} style={{position:'relative'}}/>
                <Button variant="contained" onClick={startExperience} sx={{background:'white', position: 'absolute',left: '50%', bottom: '10%', transform: 'translate(-50%, -50%)', color:"primary.main"}}>Start the experiece</Button>
            </Box>
        </Box>
    );
}

export default HomePage;
