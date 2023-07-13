
import {ReactElement, FC, useState} from "react";
import { Box, Button, InputLabel, SwipeableDrawer, Tab, Tabs, Typography, styled} from "@mui/material";
import ToolBar from "../layout/AppBar";
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import { grey } from "@mui/material/colors";
import { Global } from "@emotion/react";
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import qBank from "../layout/Questions";

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
  }));
  
  const Puller = styled(Box)(({ theme }) => ({
    width: 30,
    height: 6,
    color: 'primary.main',
    backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
    borderRadius: 3,
    position: 'absolute',
    top: 8,
    left: 'calc(50% - 15px)',
  }));

const ExhibitCardDetails: FC<any> = (): ReactElement => {
    const [open, setOpen] = useState(false);
    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };
    const [value, setValue] = useState(0);
    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{
            flexGrow: 1,
            backgroundColor: 'whitesmoke',
            display: 'flex',
            justifyContent: 'center',
            width: '100%'
        }}>
            <ToolBar show={true} badgeOpt={false} toolbarHeight={false}/>
            <Box sx={{ my: 17, mx: 2, color:'primary.dark', width: '100%'}}>
                <Typography variant="h6" mb={2} sx={{color:'primary.main'}}>Exhibits:</Typography>
                <Box border={'1px dotted #67C8D1'} sx={{position: 'relative', borderRadius: '10px', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'}}>
                    <Box sx={{width:'100%', height:'80%'}}>
                        <div style={{marginTop:'2%'}}>
                            <video src="rain.mp4" width="95%" controls></video>
                        </div>
                        <Box>
                            <Typography variant="body2">Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu</Typography>
                        </Box>
                        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin:'1rem', border: '1px solid #348681', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', width: '60%', transform: 'translate(25%, 0%)'}}>
                            <img src="" width={80} height={80}></img>
                            <div style={{margin:'1rem'}}>
                                    <Typography variant="body2" color={'#48DDE4'} fontSize={'16px !important'}>Quiz Name</Typography>
                                <div style={{display:'flex', color:'#999999'}}>
                                    <ArticleRoundedIcon fontSize="small"/><InputLabel sx={{fontSize:'14px !important'}}>10 Question</InputLabel>
                                </div>
                                <div style={{display:'flex', color:'#999999'}}>
                                    <AccessTimeRoundedIcon fontSize="small"/><InputLabel sx={{fontSize:'14px !important'}}>15 mins</InputLabel>
                                </div>
                            </div>
                        </Box>
                    </Box>
                    <Box mt={4} mb={2} display={"flex"} justifyContent={"space-around"}>
                        <Button sx={{color:'#67C8D1', border:'1px solid #67C8D1'}} variant="outlined">Back</Button>
                        <Button sx={{color:'#67C8D1', border:'1px solid #67C8D1'}} variant="outlined" onClick={toggleDrawer(true)}>play</Button>
                    </Box>
                </Box>
            </Box>
            <Global
                styles={{
                '.MuiDrawer-root > .MuiPaper-root': {
                    height: `calc(70% - 56px)`,
                    overflow: 'visible',
                },
                }}
            />
            {open ? 
            <SwipeableDrawer onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)} open={open}  anchor="bottom"
            swipeAreaWidth={56} disableSwipeToOpen={false} ModalProps={{keepMounted: true,}} sx={{height:'80%'}}>
                <StyledBox sx={{ position: 'absolute', top: -50, borderTopLeftRadius: 8, borderTopRightRadius: 8,visibility: 'visible',right: 0,left: 0,}}>
                <Puller />
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} centered variant="scrollable" scrollButtons={false}>
                    {qBank.map(value => (
                        <Tab label={value.id} value={value} {...{id: `simple-tab-${value.id}`, 'aria-controls': `simple-tabpanel-${value.id}`}}/>
                    ))}
                    </Tabs>
                </Box>
                <StyledBox sx={{ height: '100%', overflow: 'auto'}}>
                    <div
                        role="tabpanel"
                        hidden={value !== 0}
                        id={`simple-tabpanel-1`}
                        aria-labelledby={`simple-tab-1`}>
                        {value === 0 && (
                        <Box mt={4}>
                            <div className="" style={{textAlign:'center'}}>
                            <Typography variant="h6" className="mt-2">{qBank[0].question}</Typography>
                            <form onSubmit={onSubmit} className="mt-2 mb-2">
                                <div className='options'>
                                    {qBank[0].options.map((option, index) => (
                                        <div key={index} className="form-check" style={{display:'flex', alignItems:'center', justifyContent:'center', margin:'2%'}}>
                                        {/* <Radio
                                                checked={selectedOption === option}
                                                onChange={handleOptionChange}
                                                value={option}
                                                name="radio-buttons"
                                                inputProps={{ 'aria-label': `${option}` }}
                                                /> */}    
                                            {/* <Avatar>{String.fromCharCode('A'.charCodeAt() + index)}</Avatar> */}
                                            <label className="form-check-label">{option}</label>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <ExpandCircleDownIcon/>
                                    <Button sx={{marginTop:'10px', color:'#67C8D1', border:'1px solid #67C8D1'}} variant="outlined" onClick={toggleDrawer(true)}>Submit Quiz</Button>
                                    <ExpandCircleDownIcon/>
                                </div>
                            </form>
                            
                        </div>
                        </Box>
                        )}
                    </div>
                </StyledBox>
                </StyledBox>
            </SwipeableDrawer> : <></>}
        </Box>
    );
    function onSubmit() {
        
    }
      
};
export default ExhibitCardDetails;
