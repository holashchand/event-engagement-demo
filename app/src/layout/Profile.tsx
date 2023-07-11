import { FC, ReactElement } from "react";
import {
  Box,
  Typography,
  Avatar,
  Grid,
} from "@mui/material";

const Profile: FC = (): ReactElement => {
  return (
    <Box sx={{justifyContent: 'center'}}>
        <Grid container spacing={2}>
            <Grid item xs={10}>
                <Typography variant="body1" component="div" color={"black"} textAlign="left">Anurag Singh</Typography>
            </Grid>
            <Grid item xs={2} sx={{display: "flex", justifyContent: "space-around"}}>
                <Avatar src="/broken-image.jpg"/>
                <Typography variant="body1" component="div" color={"red"} textAlign="left">Log Out</Typography>
            </Grid>
        </Grid>
    </Box>
  )
};

export default Profile;