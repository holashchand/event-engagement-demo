import { Box, Card, CardContent, Divider, IconButton, Link, Stack, TextField, Typography } from "@mui/material";
import { useExhibitsData } from "../api/exhibit";
import banner from "../assets/banner.svg";
import { useNavigate } from "react-router-dom";
import Profile from "../layout/Profile";
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
import QrCode2RoundedIcon from '@mui/icons-material/QrCode2Rounded';
import { FC, ReactElement } from "react";
import { apiRoutes } from "../routes";

const UserHome: FC<any> = (): ReactElement => {
//   const { data, isLoading } = useExhibitsData();
//   if (isLoading) {
//     // return "Loading";
//   }
//   console.debug(data);
  let navigate = useNavigate();
    function handleScan() {
        console.log('start login');
        let path = apiRoutes.EXHIBIT_DETAILS; 
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
            <Box sx={{ my: 3, mx: 2, color:'primary.dark', width: '100%'}}>
                <Profile></Profile>
                <Divider/>
                <Box border={'2px dashed #217868'} sx={{justifyContent: 'center', backgroundColor: 'primary.main', mt:2}}>
                    <Typography>Badges won by me at the exhibits</Typography>
                    <WorkspacePremiumRoundedIcon color={"disabled"}></WorkspacePremiumRoundedIcon>
                    <WorkspacePremiumRoundedIcon></WorkspacePremiumRoundedIcon>
                    <WorkspacePremiumRoundedIcon color={"error"}></WorkspacePremiumRoundedIcon>
                </Box>
                <Typography variant="h6" component="div" fontWeight={'bold'} mt={2}>Exhibits</Typography>
                <Box border={'1px dashed bblack'}>
                    <Stack spacing={3} direction="row">
                        <Card sx={{width:'50%'}}>
                            <CardContent>
                                <div style={{width: '100%', display:'flex'}}>
                                    <Typography>Exhibit 1</Typography>
                                    <WorkspacePremiumRoundedIcon color={"disabled"}></WorkspacePremiumRoundedIcon>
                                </div>
                                <div >
                                    <Typography>Date:<TextField></TextField></Typography>
                                    <Typography>Time: <TextField></TextField></Typography>
                                    <Typography>Description:<TextField></TextField></Typography>
                                </div>
                                <div>
                                    <IconButton aria-label="" onClick={handleScan}>
                                        <QrCode2RoundedIcon></QrCode2RoundedIcon>
                                    </IconButton>
                                    <Link href="#">Scan at the booth</Link>
                                </div>
                            </CardContent>
                        </Card>

                        <Card sx={{width:'50%'}}>
                            <CardContent>
                                <div style={{width: '100%', display:'flex'}}>
                                    <Typography>Exhibit 1</Typography>
                                    <WorkspacePremiumRoundedIcon color={"disabled"}></WorkspacePremiumRoundedIcon>
                                </div>
                                <div>
                                    <Typography>Date:<TextField></TextField></Typography>
                                    <Typography>Time: <TextField></TextField></Typography>
                                    <Typography>Description:<TextField></TextField></Typography>
                                </div>
                                <div>
                                    <QrCode2RoundedIcon></QrCode2RoundedIcon>
                                    <Link href="#">Scan at the booth</Link>
                                </div>
                            </CardContent>
                        </Card>
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
}

export default UserHome;
