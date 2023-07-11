
import React, {ReactElement, FC} from "react";
import { Box, Card, CardContent, Divider, List, Paper, Typography} from "@mui/material";
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import QrCode2RoundedIcon from '@mui/icons-material/QrCode2Rounded';
import QuizIcon from '@mui/icons-material/Quiz';
import { useLocation } from "react-router-dom";
import VerifiedIcon from '@mui/icons-material/Verified';
import Profile from "../layout/Profile";

const ViewCertificate: FC<any> = (): ReactElement => {
    const { state } = useLocation();
    console.log('navigate ', state);
    const ariaLabel = { 'aria-label': 'description' };
    let question = [{question: 'question 1: ', options: [{option1: 'option1', option2: 'option2', option3: 'option3', option4: 'option4'}], answer: 'options1', selectedOpt:'', checked: true},
    {question: 'question 2: ', options: [{option1: 'option1', option2: 'option2', option3: 'option3', option4: 'option4'}], answer: 'options2', selectedOpt:'', checked: false},
    {question: 'question 3: ', options: [{option1: 'option1', option2: 'option2', option3: 'option3', option4: 'option4'}], answer: 'options3', selectedOpt:'', checked: true},
    {question: 'question 4: ', options: [{option1: 'option1', option2: 'option2', option3: 'option3', option4: 'option4'}], answer: 'options1', selectedOpt:'', checked: false},
    {question: 'question 5: ', options: [{option1: 'option1', option2: 'option2', option3: 'option3', option4: 'option4'}], answer: 'options4', selectedOpt:'', checked: false},]
    
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
                <Typography variant="h6" component="div" fontWeight={'bold'}>Exhibit 1 - Experience</Typography>
                <Box mt={2}>
                    <Paper sx={{flexDirection: "column", alignItems: "center", display: "flex"}}>
                        <Typography mt={6} align="center" variant="h5" component="h5" fontStyle={'italic'}>Exhibition Badge</Typography>
                        <Typography fontStyle={'italic'}>It is here by declared that participant as won !</Typography>

                        <EmojiEventsRoundedIcon sx={{color:"#DE9202", width:'6rem', height:'6rem'}} fontSize="large"></EmojiEventsRoundedIcon>
                        <div style={{width: '80%', display: "flex", justifyContent:'space-between', margin:'5%'}}>
                            <div style={{display: 'flex', flexDirection: 'column', width: '60%', justifyContent:'center'}}>
                                <Typography variant="body2" component="div" borderBottom={'1px solid black'} display={'flex'} justifyContent={'space-between'}>
                                    <span>Student Name</span> <span>Anurag</span>
                                </Typography> 
                                <Typography variant="body2" component="div" borderBottom={'1px solid black'} display={'flex'} justifyContent={'space-between'}>
                                    <span>Organisation</span> <span>Samagra</span>
                                </Typography>
                            </div>
                            <QrCode2RoundedIcon fontSize="large" sx={{border: "5px solid black", width: '4rem', height: '4rem'}}></QrCode2RoundedIcon>
                        </div>
                        <Card sx={{boxShadow: "2px 2px 2px 2px gray", width: '50%', margin: '20px' }}>
                            <CardContent>
                                <div style={{display: "flex", justifyContent:"center"}}>
                                    <QuizIcon></QuizIcon>
                                    <Typography>Quiz</Typography>
                                </div>
                                <List key="" sx={{ width: '100%', m: '4', height:'100%', overflowY: 'scroll'}}>
                                    {question.map((value, i) => {
                                        return (
                                            <div style={{display: "flex", justifyContent:"space-between", margin:'0.6rem'}}>
                                            <Typography variant="body2" component={'div'}>Question {i+1}</Typography>
                                            {value.checked ?
                                                (<VerifiedIcon color="success"></VerifiedIcon>):
                                                (<VerifiedIcon color="error"></VerifiedIcon>)}
                                            </div>
                                        )
                                    })}
                                </List>
                            </CardContent>
                        </Card>
                    </Paper>
                </Box>
            </Box>
        </Box>
    );
};

export default ViewCertificate;