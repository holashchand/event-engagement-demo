import { useExhibitsData } from "../api/exhibit";
import banner from "../assets/banner.svg";
import {Box, Button, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography} from "@mui/material";
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import { useNavigate } from "react-router-dom";
import { ReactElement, FC } from "react";
import { apiRoutes } from "../routes";

const HomePage: FC<any> = (): ReactElement => {
// function HomePage() {
  const { data, isLoading } = useExhibitsData();
  if (isLoading) {
    // return "Loading";
  }
  console.debug(data);
  // return (
  //   <Box display={"flex"} height={"100vh"} justifyContent={"center"}>
  //     <img src={banner} className="banner" />
  //   </Box>
  // );
  let navigate = useNavigate(); 
    function startExperience() {
      
        console.log('start experience');
        let path = apiRoutes.REGISTER; 
        navigate(path);
    }
    return (
        <Box sx={{ backgroundColor: 'primary.main', flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center'
        }}>
            <Box sx={{ my: 3, mx: 2, color:'primary.dark'}}>
                <Grid container alignItems="center" mt={4}>
                    <Grid item xs>
                        <Typography gutterBottom variant="h6" component="div" color={'primary.dark'} fontWeight={'bold'}>
                            Welcome to UP@AI, where we will define the future together
                        </Typography>
                    </Grid>
                </Grid>
                <Typography color="primary.dark" variant="body1" mt={6} mb={6}>
                    This app will help you immerse yourself in the exhibition
                </Typography>

                <List sx={{ width: '100%', m: '4', alignItems: 'center'}}>
                    {["Know about the exhibits", "Play games to win prizes", "Play games to win prizes"].map((value) => {
                        return (
                        <ListItem key="">
                            <ListItemButton dense>
                            <ListItemIcon>
                            <CheckCircleOutlinedIcon></CheckCircleOutlinedIcon>
                            </ListItemIcon>
                            <ListItemText primary={`${value}`} />
                            </ListItemButton>
                        </ListItem>
                        );
                    })}
                </List>
            <Stack spacing={2} direction="row" justifyContent={"center"} mt={4}>
                <Button variant="contained" onClick={startExperience} sx={{backgroundColor:"#6558F4", color:"white"}}>Start the experiece</Button>
            </Stack>
            </Box>
        </Box>
    );
}

export default HomePage;
