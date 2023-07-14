import { List, ListItem, Card, CardContent, Typography, InputLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { apiRoutes } from "../routes";
import MuseumOutlinedIcon from '@mui/icons-material/MuseumOutlined';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';

interface Props {
    content: Array<any>
}
function TabContents(props: Props) {
    const {content} = props
    let navigate = useNavigate();
    
    function navigateToDetails(data?: any) {
        console.log('start login');
        let path = apiRoutes.EXHIBIT_DETAILS; 
        navigate(path, data);
    }
    return (
        <List>
            {content.map((value, index) => {
                return (
                <ListItem key={index+1} disablePadding sx={{marginBottom:'0.5rem'}}>
                    <Card onClick={() => navigateToDetails(value)} sx={{width:'100%', border: `1px solid #67C8D1`, borderRadius: '10px', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'}}>
                        <CardContent sx={{padding:'0 10px 0 10px !important'}}>
                            <div style={{display: 'flex', alignItems:'center', justifyContent:'center'}}>
                                <MuseumOutlinedIcon color={"disabled"}></MuseumOutlinedIcon>
                                <Typography ml={2} variant="h6" fontWeight={'bold'} color={'#212C62'}>Exhibit {index+1} </Typography>
                            </div>
                            <div>
                                <InputLabel>Date: {value.date}</InputLabel>
                                <InputLabel>Time: {value.time} </InputLabel>
                                <InputLabel>Description: {value.description}</InputLabel>
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

export default TabContents;