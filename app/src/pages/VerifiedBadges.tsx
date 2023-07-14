
import {ReactElement, FC, useState} from "react";
import { Box, Button, Card, CardContent, InputLabel, Typography} from "@mui/material";
import ToolBar from "../layout/AppBar";
import verified from '../assets/verified.svg'
import TabContents from "../layout/ExhibitsTable";

const VerifiedBadges: FC<any> = (): ReactElement => {
    const [showMsg, setShow] = useState(true);
    function changeState() {
        setShow(!showMsg);
    }

    const list = [{date: '12/07/20203', time: '1pm', description: 'exhibit quiz'}, 
    {date: '12/07/20203', time: '1pm', description: 'exhibit quiz'}, 
    {date: '12/07/20203', time: '1pm', description: 'exhibit quiz'}, 
    {date: '12/07/20203', time: '1pm', description: 'exhibit quiz'}, 
    {date: '12/07/20203', time: '1pm', description: 'exhibit quiz'}, 
    {date: '12/07/20203', time: '1pm', description: 'exhibit quiz'},
    {date: '12/07/20203', time: '1pm', description: 'exhibit quiz'},
    {date: '12/07/20203', time: '1pm', description: 'exhibit quiz'},
    {date: '12/07/20203', time: '1pm', description: 'exhibit quiz'},
    {date: '12/07/20203', time: '1pm', description: 'exhibit quiz'}]
    return (
        <Box sx={{
            flexGrow: 1,
            backgroundColor: 'whitesmoke',
            display: 'flex',
            justifyContent: 'center',
            width: '100%'
        }}>
            <ToolBar hideBtn={true} show={false} badgeOpt={false} toolbarHeight={false}/>
            <Box sx={{ my: 20, mx:(showMsg ? 8 : 2), color:'primary.dark', width: '100%'}}>
                {showMsg ? (<>
                <Typography variant="h5" component="h5" fontWeight={'bold'} color={'#4DD8DD'}>Your Badge Credential is valid & Verified </Typography>
                <Box mt={8}>
                    <Card sx={{ borderRadius: '30px', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.50)'}}>
                        <CardContent sx={{paddingBottom: '10px !important'}}>
                            <img src={verified} style={{margin: '-30px 0 -10px 0'}}/>
                            <InputLabel>13</InputLabel>
                            <InputLabel>Total Badges Earned</InputLabel>
                        </CardContent>
                    </Card>
                </Box>
                <Button sx={{marginTop:'30%', color:'#67C8D1', border:'1px solid #67C8D1'}} variant="outlined" onClick={changeState}>See all badges</Button>
                </>) : <>
                <TabContents content={list}></TabContents>
                </>}
            </Box>
        </Box>
    );
};

export default VerifiedBadges;