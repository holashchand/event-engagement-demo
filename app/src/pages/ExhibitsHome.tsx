import { Box, Card, CardContent, InputLabel, List, ListItem, Tab, Tabs, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FC, ReactElement, useState } from "react";
import { apiRoutes } from "../routes";
import ToolBar from "../layout/AppBar";
import MuseumOutlinedIcon from '@mui/icons-material/MuseumOutlined';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const ExhibitsHome: FC<any> = (): ReactElement => {
    const [value, setValue] = useState(0);

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    function CustomTabPanel(props: TabPanelProps) {
        const { children, value, index, ...other } = props;
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
    }
      
    function a11yProps(index: number) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }
    
    return (
        <Box sx={{
            flexGrow: 1,
            backgroundColor: 'whitesmoke',
            display: 'flex',
            justifyContent: 'center',
            width: '100%'
        }}>
            <ToolBar show={true} badgeOpt={true} toolbarHeight={true}/>
            <Box sx={{ my: 20, mx: 2, width: '100%'}}>
                <Typography variant="h6" sx={{color:'primary.main', textAlign:'start'}}>Exhibits:</Typography>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} centered>
                        <Tab label="Visited" {...a11yProps(0)} />
                        <Tab label="Not visited" {...a11yProps(1)} />  
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <TabContents></TabContents>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <TabContents></TabContents>
                </CustomTabPanel>
            </Box>
        </Box>
    );
}

function TabContents() {
    let navigate = useNavigate();
    function navigateToDetails() {
        console.log('start login');
        let path = apiRoutes.EXHIBIT_DETAILS; 
        navigate(path);
    }
    return (
        <List>
            {[1,2,3,4].map((value) => {
                return (
                <ListItem key="" disablePadding sx={{marginBottom:'0.5rem'}}>
                    <Card onClick={navigateToDetails} sx={{width:'100%', border: `1px solid #67C8D1`, borderRadius: '10px', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'}}>
                        <CardContent sx={{padding:'0 10px 0 10px !important'}}>
                            <div style={{display: 'flex', alignItems:'center', justifyContent:'center'}}>
                                <MuseumOutlinedIcon color={"disabled"}></MuseumOutlinedIcon>
                                <Typography ml={2} variant="h6" fontWeight={'bold'} color={'#212C62'}>Exhibit {value} </Typography>
                            </div>
                            <div>
                                <InputLabel>Date:</InputLabel>
                                <InputLabel>Time: </InputLabel>
                                <InputLabel>Description:</InputLabel>
                            </div>
                            <div>
                                <InputLabel sx={{textAlign:'end', color:'primary.main', fontSize:'10px'}}>More...</InputLabel>
                            </div>
                        </CardContent>
                    </Card>
                    <BookmarkRoundedIcon fontSize="large" sx={{position: 'absolute', right: '-9px', top: '-5px', color:'primary.main', fontSize:'3rem'}}></BookmarkRoundedIcon>
                </ListItem>
                );
            })} 
            </List>
    )
}
export default ExhibitsHome;
