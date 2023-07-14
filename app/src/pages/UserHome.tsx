import { Box, Card, CardContent, Divider, IconButton, Link, TextField, Typography } from "@mui/material";
import { useExhibitsData } from "../api/exhibit";
import { useNavigate } from "react-router-dom";
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
import QrCode2RoundedIcon from '@mui/icons-material/QrCode2Rounded';
import { FC, ReactElement } from "react";
import { apiRoutes } from "../routes";
import ToolBar from "../layout/AppBar";

const UserHome: FC<any> = (): ReactElement => {
  const { data, isLoading } = useExhibitsData();
  if (isLoading) {
    // return "Loading";
  }
  console.debug(data);
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

            <ToolBar hideBtn={false} show={true} badgeOpt={false} toolbarHeight={false}/>
            <Box sx={{ my: 25, mx: 2, width: '100%'}}>
                <Divider/>
                <Box border={'2px dashed #217868'} sx={{justifyContent: 'center', backgroundColor: 'primary.main', mt:2}}>
                    <Typography>Badges won by me at the exhibits</Typography>
                    <WorkspacePremiumRoundedIcon color={"disabled"}></WorkspacePremiumRoundedIcon>
                    <WorkspacePremiumRoundedIcon></WorkspacePremiumRoundedIcon>
                    <WorkspacePremiumRoundedIcon color={"error"}></WorkspacePremiumRoundedIcon>
                </Box>
                <Typography variant="h6" component="div" fontWeight={'bold'} mt={2}>Exhibits</Typography>
                <Box mt={4} border={'1px dashed black'}>
                    <div style={{display:'flex'}}>
                        <Card sx={{width:'100%', margin: '1rem'}}>
                            <CardContent>
                                <div style={{justifyContent: 'space-between', display: 'flex', marginLeft: '50%'}}>
                                    <Typography>Exhibit 1</Typography>
                                    <WorkspacePremiumRoundedIcon color={"disabled"}></WorkspacePremiumRoundedIcon>
                                </div>
                                <div >

                                {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <Stack spacing={3}>
                                    <DesktopDatePicker
                                    label="Date desktop"
                                    inputFormat="MM/DD/YYYY"
                                    value={value}
                                    onChange={handleChange}
                                    renderInput={(params) => <TextField {...params} />}
                                    />
                                    <MobileDatePicker
                                    label="Date mobile"
                                    inputFormat="MM/DD/YYYY"
                                    value={value}
                                    onChange={handleChange}
                                    renderInput={(params) => <TextField {...params} />}
                                    />
                                    <TimePicker
                                    label="Time"
                                    value={value}
                                    onChange={handleChange}
                                    renderInput={(params) => <TextField {...params} />}
                                    />
                                    <DateTimePicker
                                    label="Date&Time picker"
                                    value={value}
                                    onChange={handleChange}
                                    renderInput={(params) => <TextField {...params} />}
                                    />
                                </Stack>
                                </LocalizationProvider> */}
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

                        <Card sx={{width:'100%', margin: '1rem'}}>
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
                    </div>
                    <div style={{display:'flex'}}>
                        <Card sx={{width:'100%', margin: '1rem'}}>
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

                        <Card sx={{width:'100%', margin: '1rem'}}>
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
                    </div>
                </Box>
            </Box>
        </Box>
    );
}

export default UserHome;
