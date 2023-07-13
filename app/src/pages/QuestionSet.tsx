
import {ReactElement, FC} from "react";
import {Alert, Box, Button, Card, CardContent, Divider, FormControl, FormControlLabel, List, ListItem, ListItemText, Radio, RadioGroup, Typography} from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";
import Profile from "../layout/Profile";
import { apiRoutes } from "../routes";

const QuestionSet: FC<any> = (): ReactElement => {
    let navigate = useNavigate();
    let question = [{question: 'question 1: ', options: [{option1: 'option1', option2: 'option2', option3: 'option3', option4: 'option4'}], answer: 'options1', selectedOpt:'', checked: false},
    {question: 'question 2: ', options: [{option1: 'option1', option2: 'option2', option3: 'option3', option4: 'option4'}], answer: 'options2', selectedOpt:'', checked: false},
    {question: 'question 3: ', options: [{option1: 'option1', option2: 'option2', option3: 'option3', option4: 'option4'}], answer: 'options3', selectedOpt:'', checked: false},
    {question: 'question 4: ', options: [{option1: 'option1', option2: 'option2', option3: 'option3', option4: 'option4'}], answer: 'options1', selectedOpt:'', checked: false},
    {question: 'question 5: ', options: [{option1: 'option1', option2: 'option2', option3: 'option3', option4: 'option4'}], answer: 'options4', selectedOpt:'', checked: false},]
    function finishGame() {
        console.log('start login');
        let path = apiRoutes.EXHIBIT_RESULT; 
        navigate(path, {state: question});
    }

    function handleSubmit() {
        console.log('handle submit ')
        let cnt = 0 
        question.forEach(q => {
            if(q.selectedOpt) {
                cnt++;
            }
        })
            finishGame();
            <Alert severity="error">Unfortunately you did not win the Badge.you can re-attempt the quiz to win!</Alert>
    }
    const [val, setValue] = React.useState({question: '', selectedOpt: ''});

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, val: any) => {
        console.log('event val ', (event.target as HTMLInputElement).value);
        val.selectedOpt = (event.target as HTMLInputElement).value;
        setValue({question: val.question, selectedOpt: (event.target as HTMLInputElement).value});
        console.log('event ', val);
    };

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
                <Box border={'1px solid black'} sx={{height: '40%', position: 'relative'}}>
                    <List sx={{ width: '100%', m: '4', height:'100%', overflowY: 'scroll'}}>
                        {question.map((q) => {
                            return (
                            <ListItem key="">
                                <Card variant="outlined" sx={{width: '100%'}}>
                                    <CardContent>
                                        <ListItemText primary={`${q.question}`} />
                                        <form onSubmit={handleSubmit}>
                                            <FormControl>
                                            <RadioGroup
                                                row
                                                value={val.selectedOpt}
                                                onChange={e => handleChange(e, question)}
                                                name="radio-buttons-group">
                                                {(q.options).map((opt) => {
                                                    return (
                                                    <><FormControlLabel value={opt.option1} control={<Radio/>} label={opt.option1} sx={{width: '50%'}}/>
                                                    <FormControlLabel value={opt.option2} control={<Radio/>} label={opt.option2} sx={{width: '50%'}}/>
                                                    <FormControlLabel value={opt.option3} control={<Radio/>} label={opt.option3} sx={{width: '50%'}}/>
                                                    <FormControlLabel value={opt.option4} control={<Radio/>} label={opt.option4} sx={{width: '50%'}}/></>
                                                    )
                                                })}
                                            </RadioGroup>
                                            </FormControl>
                                        </form>
                                    </CardContent>
                                </Card>
                            </ListItem>
                            );
                        })}
                    </List>
                </Box>
                <Box mt={4}>
                    <Button sx={{color:'#6558F4', border:'1px solid #6558F4'}} variant="outlined" type="submit" size="large" onClick={handleSubmit}>Finish Game</Button>
                </Box>
            </Box>
        </Box>
    );
};

export default QuestionSet;