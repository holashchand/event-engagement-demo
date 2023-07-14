
import {ReactElement, FC, useState} from "react";
import { Box, Card, CardContent, IconButton, InputLabel, SwipeableDrawer, Typography, styled} from "@mui/material";
import QrCode2RoundedIcon from '@mui/icons-material/QrCode2Rounded';
import { useLocation, useNavigate } from "react-router-dom";
import ToolBar from "../layout/AppBar";
import CircleIcon from '@mui/icons-material/Circle';
import playAgain from '../assets/playAgain.svg';
import eye from '../assets/eye.svg';
import home from '../assets/home.svg';
import leaderboard from '../assets/leaderboard.svg';
import pdf from '../assets/pdf.svg';
import share from '../assets/share.svg';
import { apiRoutes } from "../routes";
import { EmailIcon, EmailShareButton, FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share';
import { grey } from "@mui/material/colors";
import { Global } from "@emotion/react";
import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';


const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
  }));
  
  const Puller = styled(Box)(({ theme }) => ({
    width: 30,
    height: 4,
    color: 'primary.main',
    backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
    borderRadius: 3,
    position: 'absolute',
    top: 8,
    left: 'calc(50% - 15px)',
  }));

  
const ExhibitResult: FC<any> = (): ReactElement => {
    let navigate = useNavigate();
    const { state } = useLocation();
    const showMsg = true;
    console.log('navigate ', state);
    const handleEvents = (row: any) => {
        console.log(row)
        let path = ""
        let label = row.label
        switch (label) {
            case 'Play Again':
                break;
            case 'Review Answer':
                break;
            case 'Share Score':
                handleShare()
                break;
            case 'Generate PDF':
                generatePdf()
                break;
            case 'Home':
                path = apiRoutes.EXHIBITS_HOME
                navigate(path)
                break;
            case 'Leader Board':
                path = apiRoutes.LEADER_BOARD
                navigate(path)
                break;
        }
    }

    const styles = StyleSheet.create({
        page: {
            flexDirection: 'row',
        },
        section: {
            flexGrow: 1,
        },
    });
    
    const MyDocument = (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text>Hello World!</Text>
                </View>
                <View style={styles.section}>
                    <Text>We're inside a PDF!</Text>
                </View>
            </Page>
        </Document>
    );
    
    const generatePdf = () => {
        <PDFViewer height={'100%'} children={MyDocument}></PDFViewer>
    }

    const [showModal, setShowModal] = useState(false);
    const handleShare = () => {
        setShowModal(!showModal); 
        console.log('share')
    }


    const listRow1 = [{imgpath: playAgain, label:'Play Again'}, {imgpath: eye, label:'Review Answer'}, {imgpath: share, label:'Share Score'}]
    const listRow2 = [{imgpath: pdf, label:'Generate PDF'}, {imgpath: home, label:'Home'}, {imgpath: leaderboard, label:'Leader Board'}]

    return (
        <Box sx={{
            flexGrow: 1,
            backgroundColor: 'whitesmoke',
            display: 'flex',
            justifyContent: 'center',
            width: '100%'
        }}>
            <ToolBar hideBtn={false} show={false} badgeOpt={false} toolbarHeight={true}/>
            <Card sx={{position: 'absolute', width: '80%', height: '15%', top:'18%', left: '10%', transform: 'translate(-0%, -50%)', borderRadius:'10px'}}>
                <CardContent sx={{display: 'flex', justifyContent: 'space-around', paddingTop:'8% !important', paddingBottom: '0 !important', alignItems: 'center', height: '100%'}}>
                    {showMsg ? (<>
                        <div>
                            <CircleIcon sx={{color: "green"}}/>13
                            <InputLabel>Correct</InputLabel>
                        </div>
                        <div>
                            <CircleIcon sx={{color: "red"}}/>07
                            <InputLabel>Wrong</InputLabel>
                        </div>
                        </>) : (
                        <div>
                            <CircleIcon sx={{color: "red"}}/>13
                            <InputLabel>Total Badges Earned</InputLabel>
                        </div>
                    )}
                </CardContent>
            </Card>
            <Box sx={{ my: 30, mx: 2, color:'primary.dark', width: '100%'}}>
                {showMsg ? (<><Typography variant="h5" component="h5" fontWeight={'bold'} color={'#4DD8DD'}>Congratulation ! </Typography>
                <Typography variant="h5" component="h5" fontWeight={'bold'} color={'#4DD8DD'}>You earned a new badge!!</Typography>
                </>) : <></>}
                <Box mt={2}>
                    <QrCode2RoundedIcon fontSize="large" sx={{border: "5px solid black", width: '7rem', height: '7rem', color:'black'}}></QrCode2RoundedIcon>
                </Box>
                <Box mt={6} display={'flex'} justifyContent={'space-around'}>
                    {listRow1.map((row) => (
                        <IconButton sx={{flexDirection:"column"}} onClick={() => handleEvents(row)}>
                            <img src={row.imgpath}/>
                            <InputLabel>{row.label}</InputLabel>
                        </IconButton>
                    ))}
                </Box>
                <Box mt={6} display={'flex'} justifyContent={'space-around'}>
                    {listRow2.map((row) => (
                        <IconButton sx={{flexDirection:"column"}} onClick={() => handleEvents(row)}>
                            <img src={row.imgpath}/>
                            <InputLabel>{row.label}</InputLabel>
                        </IconButton>
                    ))}
                </Box>
            </Box>
            <Global
                styles={{
                '.MuiDrawer-root > .MuiPaper-root': {
                    height: `calc(25% - 56px)`,
                    overflow: 'visible',
                },
                }}
            />
            {showModal ?
            (<SwipeableDrawer onClose={() => setShowModal(!showModal)} onOpen={() => setShowModal(!showModal)} open={showModal}  anchor="bottom"
                swipeAreaWidth={56} disableSwipeToOpen={false} ModalProps={{keepMounted: true,}} sx={{height:'50%'}}>
                <StyledBox sx={{ position: 'absolute', top: 0, borderTopLeftRadius: 8, borderTopRightRadius: 8,visibility: 'visible',right: 0,left: 0,}}>
                    <Puller />
                    <Box my={2} mx={2} sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Typography variant="h5">Share</Typography>
                    </Box>
                    <StyledBox mx={2} my={2} sx={{ height: '100%', overflow: 'auto'}}>
                        <Box display={'flex'} justifyContent={'space-around'}>
                        <FacebookShareButton
                                url={'https://www.facebook.com'}
                                quote={'Dummy text!'}
                                hashtag="#muo">
                                <FacebookIcon size={40} round />
                            </FacebookShareButton>
                            <EmailShareButton url={'https://www.email.com'}>
                                <EmailIcon size={40} round ></EmailIcon>
                            </EmailShareButton>
                            <WhatsappShareButton
                                    url={'https://www.whatsapp.com'}>
                                    <WhatsappIcon size={40} round={true} />
                                    </WhatsappShareButton>
                            <TwitterShareButton
                                url={'https://www.twitter.com'}>
                                <TwitterIcon size={40} round />
                                </TwitterShareButton>
                        </Box>
                    </StyledBox>
                    </StyledBox>
                </SwipeableDrawer>) : <></>}
        </Box>
    );
};

export default ExhibitResult;